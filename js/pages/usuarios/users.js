$(document).ready(async () => {
    try {
        const users = (await router(
            "GET",
            `${ENDPOINTS.admin}`,
            null,
            true,
            // true
        ))?.data

        if (users) {
            const usersTbody = $("#users-tbody")

            users?.forEach((user) => {
                usersTbody.append(
                    $("<tr>").append(
                        $("<td>").append(
                            $("<span>")
                            .addClass("fs-4")
                            .text(user?.name)
                        ),
                        $("<td>").append(
                            $("<span>")
                            .addClass("fs-4")
                            .text(
                                user?.role === "manager" ? "Gerente" : ""
                            )
                        ),
                        $("<td>").append(
                            $("<button>")
                            .addClass("btn btn-sm bg-primary")
                            .attr("id", user?.id)
                            .attr("onclick", "updateUserSituation(this)")
                            .append(
                                $("<span>")
                                .addClass("text-white")
                                .text(
                                    user?.situation ? "Desativar" : "Ativar"
                                )
                            )
                        )
                    )
                )
            })
        }
    } catch(error) {
        return
    }
})

async function registerUser(btn) {
    const name = $("#input-name").val()
    const role = $("#input-role").val()
    const password = $("#input-password").val()

    const registerUserBtn = $(btn)

    loaderBtn(registerUserBtn)

    if (!name || !role || !password) {
        createOpsToast("Por favor, preencha todas as informações obrigatórias.")
        unloaderBtn(registerUserBtn, "Cadastrar")
        return
    }

    const dataJSON = {
        name,
        role,
        password
    }

    try {
        await router(
            "POST",
            `${ENDPOINTS.admin}`,
            dataJSON,
            false,
            // true
        )
        location.reload()
    } catch(error) {
        return
    }
}

async function updateUserSituation(btn) {
    const userId = $(btn).attr("id")
    let situation = $(btn).children().text()

    if (situation === "Desativar") {
        situation = false
    } else {
        situation = true
    }

    try {
        await router(
            "PATCH",
            `${ENDPOINTS.admin}/${userId}`,
            {
                situation
            },
            false,
            // true
        )
        location.reload()
    } catch(error) {
        return
    }
}