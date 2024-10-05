$(document).ready(async () => {
    try {
        const types = (await router(
            "GET",
            `${ENDPOINTS.propertyFeature}/type`,
            null,
            true,
            true
        ))?.data

        if (types) {
            const inputPropertyType = $("#input-father-type")

            types?.forEach((type) => {
                const option = $("<option>").val(type?.id).text(type?.name)
                inputPropertyType.append(option)
            })
        }

        const features = (await router(
            "GET",
            `${ENDPOINTS.propertyFeature}/feature`,
            null,
            true,
            true
        ))?.data

        if (features) {
            const inputPropertyFeature = $("#input-son-feature")

            features?.forEach((feature) => {
                const option = $("<option>").val(feature?.id).text(feature?.name)
                inputPropertyFeature.append(option)
            })
        }
    } catch(error) {

    }
})

async function registerTypeFeature(event) {
    event.preventDefault()

    const type = $("#input-father-type")
    const feature = $("#input-son-feature")

    const typeName = $("#input-father-type option:selected").text()
    const featureName = $("#input-son-feature option:selected").text()

    const registerTypeFeatureBtn = $("#register-type-feature-btn")

    loaderBtn(registerTypeFeatureBtn)

    if (!type.val() || !feature.val()) {
        createOpsToast("Por favor, selecione um tipo e uma característica válida.")
        unloaderBtn(registerTypeFeatureBtn, "Adicionar Característica-Tipo")
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

        createSuccessToast("Característica-Tipo Cadastrado", `A característica <strong>${featureName}</strong> foi adicionada ao tipo <strong>${typeName}</strong> com sucesso!`)
        unloaderBtn(registerTypeFeatureBtn, "Adicionar Característica-Tipo")
    } catch(error) {
        unloaderBtn(registerTypeFeatureBtn, "Adicionar Característica-Tipo")
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