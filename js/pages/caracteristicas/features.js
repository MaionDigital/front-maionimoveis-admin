let types = JSON.parse(storageGet("miadm_propertyTypes"))
let cachedTypeFeatures = JSON.parse(storageGet("miadm_propertyTypeFeatures"))

$(document).ready(async () => {
    try {

        const inputPropertyType = $("#input-father-type")
        const inputPropertyFeature = $("#input-son-feature")

        if (!types) {
            types = (await router(
                "GET",
                `${ENDPOINTS.propertyFeature}/type`,
                null,
                true,
                true
            ))?.data

            if (types) {
                storageInsert("miadm_propertyTypes", JSON.stringify(types))
            }
        }

        if (types) {

            types?.forEach((type) => {
                const option = $("<option>").val(type?.id).text(type?.name)
                inputPropertyType.append(option)
            })

            async function fetchPropertyFeaturesByType(propertyType) {
                let typeFeatures = cachedTypeFeatures?.[propertyType] || null

                if (!typeFeatures) {
                    typeFeatures = (await router(
                        "GET",
                        `${ENDPOINTS.propertyFeature}/feature/${propertyType}`,
                        null,
                        true,
                        true
                    ))?.data

                    if (typeFeatures) {
                        storageInsert("miadm_propertyTypeFeatures", JSON.stringify({ ...cachedTypeFeatures, [propertyType]: typeFeatures }))
                        cachedTypeFeatures = JSON.parse(storageGet("miadm_propertyTypeFeatures"))
                    }
                }

                if (typeFeatures) {               
                    inputPropertyFeature.empty()

                    typeFeatures?.forEach((feature) => {
                        const option = $("<option>").val(feature?.id_propertyfeature).text(feature?.name_propertyfeature)
                        inputPropertyFeature.append(option)
                    })
                }
            }

            inputPropertyType.on("change", function() { fetchPropertyFeaturesByType($(this).val()) })

            await fetchPropertyFeaturesByType(inputPropertyType.val())
        }
    } catch(error) {

    }
})

async function registerTypeFeature(event) {
    event.preventDefault()

    const type = $("#input-father-type")
    const feature = $("#input-son-feature")

    const selectedFeature = feature.find(`option[value="${feature.val()}"]`)

    const typeName = $("#input-father-type option:selected").text()
    const featureName = $("#input-son-feature option:selected").text()

    const registerTypeFeatureBtn = $("#register-type-feature-btn")

    loaderBtn(registerTypeFeatureBtn)

    if (!type.val() || !feature.val()) {
        createOpsToast("Por favor, selecione um tipo e uma característica válida.")
        unloaderBtn(registerTypeFeatureBtn, "Adicionar Tipo-Característica")
        return
    }

    const dataJSON = {
        propertyTypeId: type.val(),
        propertyFeatureId: feature.val()
    }

    try {
        await router(
            "POST",
            `${ENDPOINTS.propertyFeature}/type-feature`,
            dataJSON,
            false,
            true
        )

        createSuccessToast("Tipo-Característica Cadastrado", `A característica <strong>${featureName}</strong> foi adicionada ao tipo <strong>${typeName}</strong> com sucesso!`)

        cachedTypeFeatures = JSON.parse(storageGet("miadm_propertyTypeFeatures"))
        const updatedFeatures = cachedTypeFeatures[type.val()]?.filter((element) => element.id_propertyfeature !== feature.val()) || []

        storageInsert("miadm_propertyTypeFeatures", JSON.stringify({ ...cachedTypeFeatures, [type.val()]: updatedFeatures }))
        cachedTypeFeatures = JSON.parse(storageGet("miadm_propertyTypeFeatures"))

        selectedFeature.remove()
        unloaderBtn(registerTypeFeatureBtn, "Adicionar Tipo-Característica")
    } catch(error) {
        unloaderBtn(registerTypeFeatureBtn, "Adicionar Tipo-Característica")
    }
}

async function registerFeature(event) {
    event.preventDefault()

    const feature = $("#input-feature")

    const registerFeatureBtn = $("#register-feature-btn")

    loaderBtn(registerFeatureBtn)

    if (!feature.val()) {
        createOpsToast("Por favor, insira o nome da característica.")
        unloaderBtn(registerFeatureBtn, "Adicionar Característica")
        return
    }

    const dataJSON = {
        name: feature.val()
    }

    try {
        await router(
            "POST",
            `${ENDPOINTS.propertyFeature}/feature`,
            dataJSON,
            false,
            true
        )

        createSuccessToast("Característica cadastrada", `A característica <strong>${feature.val()}</strong> foi cadastrada com sucesso!`)
        feature.val("")
        feature.focus()
        unloaderBtn(registerFeatureBtn, "Adicionar Característica")
    } catch(error) {
        unloaderBtn(registerFeatureBtn, "Adicionar Característica")
    }
}

async function registerType(event) {
    event.preventDefault()

    const type = $("#input-type")

    const registerTypeBtn = $("#register-type-btn")

    loaderBtn(registerTypeBtn)

    if (!type.val()) {
        createOpsToast("Por favor, insira o nome de um tipo de imóvel.")
        unloaderBtn(registerTypeBtn, "Adicionar Tipo")
        return
    }

    const dataJSON = {
        name: type.val()
    }

    try {
        await router(
            "POST",
            `${ENDPOINTS.propertyFeature}/type`,
            dataJSON,
            false,
            true
        )
        createSuccessToast("Tipo cadastrado", `O tipo <strong>${type.val()}</strong> foi cadastrado com sucesso!`)
        unloaderBtn(registerTypeBtn, "Adicionar Tipo")
        type.val("")
        type.focus()
    } catch(error) {
        unloaderBtn(registerTypeBtn, "Adicionar Tipo")
    }
}