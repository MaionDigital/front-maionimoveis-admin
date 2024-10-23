function logout() {
    storageRemove(
        [
            "miadm_token",
            "miadm_userInfo",
            "miadm_dashInfo",
            "miadm_propertyTypes",
            "miadm_propertyTypeFeatures"
        ]
    )
    changePage("index.php")
}