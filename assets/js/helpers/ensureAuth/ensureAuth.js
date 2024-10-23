function ensureAuth() {
    const token = storageGet("miadm_token")
    const userInfo = storageGet("miadm_userInfo")
    
    if ((!token || !userInfo)) {
        storageRemove(["miadm_token", "miadm_userInfo"])
        return false
    }
    
    if (isTokenExpired(token)) {
        storageRemove(["miadm_token", "miadm_userInfo"])
        return false
    }
    
    return true
}
