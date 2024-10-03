async function auth(event) {
    event.preventDefault()

    const loginBtn = $("#login-btn")

    loaderBtn(loginBtn, "Login")
    
    const name = $("#input-name").val()
    const password = $("#input-password").val()

    if (!name || !password) {
        createOpsToast("Por favor, insira as informações de login.")
        unloaderBtn(loginBtn, "Login")
        return
    }

    const dataJSON = {
        username: name,
        password: password
    }

    try {
        const auth = (await router(
            "POST",
            `${ENDPOINTS.auth}`,
            dataJSON,
            true,
            false
        ))?.data

        if (auth) {
            storageInsert(["token", "userInfo"], [auth?.token, JSON.stringify(auth?.user)])

            changePage("/dashboard")
        } else {
            createOpsToast("Usuário não encontrado.")
            unloaderBtn(loginBtn, "Login")
        }
    } catch(error) {
        unloaderBtn(loginBtn, "Login")
        return
    }
}