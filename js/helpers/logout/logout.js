function logout() {
    storageRemove(
        [
            "token",
            "userInfo",
            "dashInfo"
        ]
    )
    changePage("index.php")
}