function logout() {
    storageRemove(
        [
            "token",
            "userInfo"
        ]
    )
    changePage("index.php")
}