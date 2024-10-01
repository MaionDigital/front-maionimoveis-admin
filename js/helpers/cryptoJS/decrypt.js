function decrypt(encryptedData) {
    const formattedData = encryptedData?.replace(/\s+/g, '+') || ""
    return CryptoJS.AES.decrypt(formattedData, CRYPTO_KEY).toString(CryptoJS.enc.Utf8)
}
