async function router(method, url, data=null, getResponse=false, token=false) {
    try {
        let response
        const headers = {}

        if (token) { headers["Authorization"] = `Bearer ${storageGet("miadm_token")}` }

        if (method === "GET") {
            response = await axios.get(`${API_URL}${url}`, { headers })
        } else if (method === "POST") {
            response = await axios.post(`${API_URL}${url}`, data, { headers })
        } else if (method === "PUT") {
            response = await axios.put(`${API_URL}${url}`, data, { headers })
        } else if (method === "DELETE") {
            response = await axios.delete(`${API_URL}${url}`, { headers })
        } else if (method === "PATCH") {
            response = await axios.patch(`${API_URL}${url}`, data, { headers })
        }

        return getResponse ? response : ""
    } catch(error) {
        const appError = error?.response?.data?.validateError[0]?.constraints?.message
        createOpsToast(appError || "Algo deu errado, tente novamente mais tarde.")
        throw Error()
    }
}