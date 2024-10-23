function encrypt(data) {
    return CryptoJS.AES.encrypt(data?.toString() || "", CRYPTO_KEY).toString()
}