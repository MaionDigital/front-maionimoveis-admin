function ensureAuth() {
    const token = storageGet("token")
    const userInfo = storageGet("userInfo")
    
    if ((!token || !userInfo)) {
        storageRemove(["token", "userInfo"])
        return false
    }
    
    if (isTokenExpired(token)) {
        storageRemove(["token", "userInfo"])
        return false
    }
    
    return true
}
