$(document).ready(async () => {
    const applicationAPI = $("#i-application-api")
    const dicebearAPI = $("#i-dicebear-api")
    const viacepAPI = $("#i-viacep-api")
    const geminiAPI = $("#i-gemini-api")

    try {
        const response = await $.get("http://localhost:9091/gemini/api-status")
        console.log(response)
        if (response === "OK") {
            geminiAPI.addClass("text-success")
        } else {
            geminiAPI.addClass("text-danger")
        }
    } catch(error) {
        geminiAPI.addClass("text-danger")
    }

    try {
        const response = await $.get("http://localhost:9091/")
        if (response) {
            applicationAPI.addClass("text-success")
        } else {
            applicationAPI.addClass("text-danger")
        }
    } catch(error) {
        applicationAPI.addClass("text-danger")
    }

    try {
        const response = await fetch("https://api.dicebear.com/9.x/initials/svg?radius=50&backgroundColor=13194C&textColor=ffffff")
        if (response.status == 200) {
            dicebearAPI.addClass("text-success")
        } else {
            dicebearAPI.addClass("text-danger")
        }
    } catch(error) {
        dicebearAPI.addClass("text-danger")
    }

    try {
        await $.getJSON("https://viacep.com.br/ws/45810-000/json/?callback=?", function(response) {
            if (response) {
                viacepAPI.addClass("text-success")
            } else {
                viacepAPI.addClass("text-danger")
            }
        })
    } catch(error) {
        viacepAPI.addClass("text-danger")
    }
})