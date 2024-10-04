function logout() {
    storageRemove(
        [
            "miadm_token",
            "miadm_userInfo",
            "miadm_dashInfo"
        ]
    )
    changePage("index.php")
}