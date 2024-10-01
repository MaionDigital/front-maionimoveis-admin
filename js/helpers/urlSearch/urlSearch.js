function urlSearch(keys) {
    const urlParams = new URLSearchParams(window.location.search)
    
    if (Array.isArray(keys) && keys.length) {
        const response = []
        keys.forEach((key) => {
            response.push(
                urlParams.get(key)
            )
        })
        return response
    } else {
        return urlParams.get(keys)
    }
}