function isTokenExpired(token) {
    const decodedToken = tokenParser(token)
    const currentTime = Math.floor(Date.now() / 1000)
    return decodedToken.exp < currentTime
}