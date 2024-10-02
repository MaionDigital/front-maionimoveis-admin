$(document).ready(async () => {
    const selectState = $("#input-father-state")
    const selectCity = $("#input-father-city")

    const storagedCities = JSON.parse(storageGet("localizationInfo"))?.cities

    async function fetchCities(stateId) {
        try {
            const fetchedCities = (await router(
                "GET",
                `${ENDPOINTS.localization}/city/${stateId}`,
                null,
                true,
                // true
            ))?.data


            fetchedCities?.forEach((city) => {
                const option = $("<option>").val(city.id).text(city.name)
                selectCity.append(option)
            })

            storageInsert("localizationInfo", JSON.stringify({ localizationInfo: { cities: fetchCities } }))
        } catch(error) {
            return
        }
    }

    selectState.on("change", async function() {
        const stateId = $(this).val()

        if (storagedCities[stateId]) {
            storagedCities[stateId].forEach((city) => {
                const option = $("<option>").val(city.id).text(city.name)
                selectNeighborhood.append(option)
            })
        } else {
            fetchCities(stateId)
        }

    })

    fetchCities(selectState.val())
})

async function registerCity(event) {
    event.preventDefault()

    const registerCityBtn = $("#register-city-btn")

    loaderBtn(registerCityBtn)

    const stateId = $("#input-father-state").val()
    const city = $("#input-city")

    if (!stateId || !city.val()) {
        createOpsToast("Por favor, informe o estado e o nome de uma cidade.")
        unloaderBtn(registerCityBtn, "Adicionar Cidade")
        return
    }

    dataJSON = {
        stateId: stateId,
        name: city.val()
    }

    try {
        await router(
            "POST",
            `${ENDPOINTS.localization}/city`,
            dataJSON,
            false,
            // true
        )
        createSuccessToast("Cidade cadastrada!", `A cidade '${city.val()}' foi cadastrada com sucesso!`)
        unloaderBtn(registerCityBtn, "Adicionar Cidade")
        city.val("")
        city.focus()
    } catch(error) {
        unloaderBtn(registerCityBtn, "Adicionar Cidade")
        return
    }
}

async function registerNeighborhood(event) {
    event.preventDefault()

    const registerNeighborhoodBtn = $("#register-neighborhood-btn")

    loaderBtn(registerNeighborhoodBtn)

    const cityId = $("#input-father-city").val()
    const neighborhood = $("#input-neighborhood")

    if (!cityId || !neighborhood.val()) {
        createOpsToast("Por favor, informe a cidade e o nome de um baiiro.")
        unloaderBtn(registerNeighborhoodBtn, "Adicionar Bairro")
        return
    }

    dataJSON = {
        cityId: cityId,
        name: neighborhood.val()
    }

    try {
        await router(
            "POST",
            `${ENDPOINTS.localization}/neighborhood`,
            dataJSON,
            false,
            // true
        )
        createSuccessToast("Bairro cadastrado!", `O bairro '${neighborhood.val()}' foi cadastrado com sucesso!`)
        unloaderBtn(registerNeighborhoodBtn, "Adicionar Bairro")
        neighborhood.val("")
        neighborhood.focus()
    } catch(error) {
        unloaderBtn(registerNeighborhoodBtn, "Adicionar Bairro")
        return
    }
}