function storageInsert(key, value, storage="localstorage") {
    if (Array.isArray(key)) {
        if (storage === "session") {
            key.forEach((k, i) => {
                sessionStorage.setItem(k, CryptoJS.AES.encrypt(value[i], CRYPTO_KEY).toString())
            })
        } else {
            key.forEach((k, i) => {
                localStorage.setItem(k, CryptoJS.AES.encrypt(value[i], CRYPTO_KEY).toString())
            })
        }
    } else {
        if (storage === "session") {
            sessionStorage.setItem(key, CryptoJS.AES.encrypt(value, CRYPTO_KEY).toString())
        } else {
            localStorage.setItem(key, CryptoJS.AES.encrypt(value, CRYPTO_KEY).toString())
        }
    }

}

function storageRemove(key, storage="localstorage") {
    if (Array.isArray(key)) {
        if (storage === "session") {
            key.forEach((k) => {
                sessionStorage.removeItem(k)
            })
        } else {
            key.forEach((k) => {
                localStorage.removeItem(k)
            })
        }
    } else {
        if (storage === "session") {
            sessionStorage.removeItem(key)
        } else {
            localStorage.removeItem(key)
        }
    }

}

function storageGet(key, storage="localstorage") {
    if (Array.isArray(key)) {
        if (storage === "session") {
            const data = []
            key.forEach((k) => {
                if (sessionStorage.getItem(k)) {
                    data.push(CryptoJS.AES.decrypt(sessionStorage.getItem(k), CRYPTO_KEY).toString(CryptoJS.enc.Utf8))
                }
                data.push(null)
            })
            return data
        } else {
            const data = []
            key.forEach((k) => {
                if (localStorage.getItem(k)) {
                    data.push(CryptoJS.AES.decrypt(localStorage.getItem(k), CRYPTO_KEY).toString(CryptoJS.enc.Utf8))
                }
                data.push(null)
            })
            return data
        }
    } else {
        if (storage === "session") {
            if (sessionStorage.getItem(key)) {
                return CryptoJS.AES.decrypt(sessionStorage.getItem(key), CRYPTO_KEY).toString(CryptoJS.enc.Utf8)
            }
            return null
        } else {
            if (localStorage.getItem(key)) {
                return CryptoJS.AES.decrypt(localStorage.getItem(key), CRYPTO_KEY).toString(CryptoJS.enc.Utf8)
            }
            return null
        }
    }

}

function storageClear(storage="localstorage") {
    if (storage === "session") {
        sessionStorage.clear()
    } else {
        localStorage.clear()
    }
}