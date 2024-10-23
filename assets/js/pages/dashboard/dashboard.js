$(document).ready(async () => {
    const chartUsersByMonth = $("#chart-users-by-month")
    const chartUsersByType = $("#chart-users-by-type")
    const chartUsersByState = $("#chart-users-by-state")
    const chartUsersByGenre = $("#chart-users-by-genre")
    const chartUsersByBirth = $("#chart-users-by-birth")

    const chartPropertiesByMonth = $("#chart-properties-by-month")
    const chartPropertiesByType = $("#chart-properties-by-type")
    const chartPropertiesByCity = $("#chart-properties-by-city")

    const chartPropertiesByArea = $("#chart-properties-by-area")

    const chartPropertiesPriceSell = $("#chart-properties-price-sell")
    const chartPropertiesPriceRent = $("#chart-properties-price-rent")
    const chartPropertiesPriceSeasonal = $("#chart-properties-price-seasonal")

    const chartPropertiesByCondition = $("#chart-properties-by-condition")
    const chartPropertiesBySituation = $("#chart-properties-by-situation")

    let cachedDashInfo = JSON.parse(storageGet("miadm_dashInfo")) || {}

    // USER CHARTS
    try {
        let usersByMonth = cachedDashInfo?.usersByMonth

        if (!usersByMonth) {
            usersByMonth = (await router(
                "GET",
                `${ENDPOINTS.dashboard}/users-by-month/2024`,
                null,
                true,
                true
            ))?.data

            if (usersByMonth) {
                storageInsert("miadm_dashInfo", JSON.stringify({ ...cachedDashInfo, usersByMonth }))
                cachedDashInfo = JSON.parse(storageGet("miadm_dashInfo"))
            }
        }

        if (usersByMonth) {

            const usersCountByMonth = Array(12).fill(0)

            usersByMonth?.forEach((row) => {
                const monthIndex = row.month - 1
                usersCountByMonth[monthIndex] = parseInt(row.amountUsers)
            })

            new Chart(chartUsersByMonth, {
                type: "line",
                data: {
                    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                    datasets: [{
                        label: "Quantidade de Usuários",
                        data: usersCountByMonth,
                        backgroundColor: "rgba(255, 219, 175, 0.9)",
                        borderWidth: 2,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            })
        }
    } catch(error) {
        return
    }

    try {
        let usersByType = cachedDashInfo?.usersByType

        if (!usersByType) {
            usersByType = (await router(
                "GET",
                `${ENDPOINTS.dashboard}/users-by-type`,
                null,
                true,
                true
            ))?.data

            if (usersByType) {
                storageInsert("miadm_dashInfo", JSON.stringify({ ...cachedDashInfo, usersByType }))
                cachedDashInfo = JSON.parse(storageGet("miadm_dashInfo"))
            }
        }

        if (usersByType) {
            new Chart(chartUsersByType, {
                type: "bar",
                data: {
                    labels: ["Proprietário", "Agente Imobiliário", "Imobiliária"],
                    datasets: [{
                        label: "Quantidade de Usuários",
                        data: [
                            usersByType?.amountUsers,
                            usersByType?.amountAgents,
                            usersByType?.amountRealestates
                        ],
                        backgroundColor: [
                            "rgba(255, 219, 175, 0.9)",
                            "rgba(19, 25, 76, 0.9)",
                            "rgba(0, 85, 85, 0.9)"
                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            })
        }

    } catch(error) {
        return
    }

    try {
        let usersByState = cachedDashInfo?.usersByState

        if (!usersByState) {
            usersByState = (await router(
                "GET",
                `${ENDPOINTS.dashboard}/users-by-state`,
                null,
                true,
                true
            ))?.data

            if (usersByState){
                storageInsert("miadm_dashInfo", JSON.stringify({ ...cachedDashInfo, usersByState }))
                cachedDashInfo = JSON.parse(storageGet("miadm_dashInfo"))
            }
        }

        if (usersByState) {
            new Chart(chartUsersByState, {
                type: "bar",
                data: {
                    labels: usersByState.map((element) => element.state),
                    datasets: [{
                        label: "Quantidade de Usuários",
                        data: usersByState.map((element) => parseInt(element.amountUsers)),
                        backgroundColor: "rgba(0, 85, 85, 0.9)",
                        borderColor: "rgba(0, 85, 85, 0.9)",
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            })
        }
    } catch(error) {
        return
    }

    try {
        let usersByGenre = cachedDashInfo?.usersByGenre

        if (!usersByGenre) {
            usersByGenre = (await router(
                "GET",
                `${ENDPOINTS.dashboard}/users-by-genre`,
                null,
                true,
                true
            ))?.data

            if (usersByGenre) {
                storageInsert("miadm_dashInfo", JSON.stringify({ ...cachedDashInfo, usersByGenre }))
                cachedDashInfo = JSON.parse(storageGet("miadm_dashInfo"))
            }
        }

        if (usersByGenre) {
            new Chart(chartUsersByGenre, {
                type: "bar",
                data: {
                    labels: ["Masculino", "Feminino", "Prefere não dizer"],
                    datasets: [{
                        label: "Quantidade de Usuários",
                        data: [
                        usersByGenre.amountMale,
                        usersByGenre.amountFemale,
                        usersByGenre.amountPreferNotToTell
                        ],
                        backgroundColor: ["rgba(19, 25, 76, 0.9)", "rgba(255, 219, 175, 0.9)", "rgba(0, 85, 85, 0.9)"],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            })
        }
    } catch(error) {
        return
    }

    try {
        let usersByBirth = cachedDashInfo?.usersByBirth

        if (!usersByBirth) {
            usersByBirth = (await router(
                "GET",
                `${ENDPOINTS.dashboard}/users-by-birth`,
                null,
                true,
                true
            ))?.data

            if (usersByBirth) {
                storageInsert("miadm_dashInfo", JSON.stringify({ ...cachedDashInfo, usersByBirth }))
                cachedDashInfo = JSON.parse(storageGet("miadm_dashInfo"))
            }
        }

        if (usersByBirth) {
            new Chart(chartUsersByBirth, {
                type: "bar",
                data: {
                    labels: ["Até 25", "25 - 35", "35 - 45", "45 - 55", "Acima de 55"],
                    datasets: [{
                        label: "Quantidade de Usuários",
                        data: [
                            usersByBirth.twentyFiveMax,
                            usersByBirth.thirtyFiveMax,
                            usersByBirth.fortyFiveMax,
                            usersByBirth.fifityFiveMax,
                            usersByBirth.aboveFifityFive
                        ],
                        backgroundColor: ["rgba(0, 85, 85, 0.9)"],
                        borderColor: "rgba(0, 85, 85, 0.9)",
                        borderWidth: 2,
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            })
        }
    } catch(error) {
        return
    }

    // PROPERTY CHARTS

    try {
        let propertiesBySituation = cachedDashInfo?.propertiesBySituation

        if (!propertiesBySituation) {
            propertiesBySituation = (await router(
                "GET",
                `${ENDPOINTS.dashboard}/properties-by-situation`,
                null,
                true,
                true
            ))?.data

            if (propertiesBySituation) {
                storageInsert("miadm_dashInfo", JSON.stringify({ ...cachedDashInfo, propertiesBySituation }))
                cachedDashInfo = JSON.parse(storageGet("miadm_dashInfo"))
            }
        }

        if (propertiesBySituation) {
            new Chart(chartPropertiesBySituation, {
                type: "bar",
                data: {
                    labels: ["Vendido", "Alugado", "Disponível"],
                    datasets: [{
                        label: "Quantidade de Anúncios",
                        data: [
                            propertiesBySituation?.soldProperties || 0,
                            propertiesBySituation?.rentedProperties || 0,
                            propertiesBySituation?.availableProperties || 0
                        ],
                        backgroundColor: [
                            "rgba(19, 25, 76, 0.9)",
                            "rgba(255, 219, 175, 0.9)",
                            "rgba(0, 85, 85, 0.9)"
                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            })
        }
    } catch(error) {
        return
    }

    try {
        let propertiesByCondition = cachedDashInfo?.propertiesByCondition

        if (!propertiesByCondition) {
            propertiesByCondition = (await router(
                "GET",
                `${ENDPOINTS.dashboard}/properties-by-condition/2024`,
                null,
                true,
                true
            ))?.data

            if (propertiesByCondition) {
                storageInsert("miadm_dashInfo", JSON.stringify({ ...cachedDashInfo, propertiesByCondition }))
                cachedDashInfo = JSON.parse(storageGet("miadm_dashInfo"))
            }
        }

        if (propertiesByCondition) {
            const dataForSale = Array(12).fill(0)
            const dataForRent = Array(12).fill(0)
            const dataForSeasonal = Array(12).fill(0)

            propertiesByCondition.forEach((element) => {
                const monthIndex = element.month - 1
                dataForSale[monthIndex] = element.amountForSale
                dataForRent[monthIndex] = element.amountForRent
                dataForSeasonal[monthIndex] = element.amountForSeasonal
            })

            new Chart(chartPropertiesByCondition, {
                type: "line",
                data: {
                    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                    datasets: [
                        {
                            label: "À Venda",
                            data: dataForSale,
                            backgroundColor: "rgba(19, 25, 76, 0.9)",
                            borderColor: "rgba(19, 25, 76, 0.9)",
                            borderWidth: 2
                        },
                        {
                            label: "À Alugar",
                            data: dataForRent,
                            backgroundColor: "rgba(255, 219, 175, 0.9)",
                            borderColor: "rgba(255, 219, 175, 0.9)",
                            borderWidth: 2     
                        },
                        {
                            label: "Temporada",
                            data: dataForSeasonal,
                            backgroundColor: "rgba(0, 85, 85, 0.9)",
                            borderColor: "rgba(0, 85, 85, 0.9)",
                            borderWidth: 2
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            })
        }
    } catch(error) {
        return
    }

    try {
        let propertiesPriceSeasonal = cachedDashInfo?.propertiesPriceSeasonal

        if (!propertiesPriceSeasonal) {
            propertiesPriceSeasonal = (await router(
                "GET",
                `${ENDPOINTS.dashboard}/properties-price-seasonal`,
                null,
                true,
                true
            ))?.data

            if (propertiesPriceSeasonal) {
                storageInsert("miadm_dashInfo", JSON.stringify({ ...cachedDashInfo, propertiesPriceSeasonal }))
                cachedDashInfo = JSON.parse(storageGet("miadm_dashInfo"))
            }
        }

        if (propertiesPriceSeasonal) {
            new Chart(chartPropertiesPriceSeasonal, {
                type: "bar",
                data: {
                    labels: ['Até 750', 'Até 1.25k', 'Até 2k', 'Até 3k', 'Acima 3k'],
                    datasets: [{
                        label: 'Quantidade de Anúncios',
                        data: [
                            propertiesPriceSeasonal.sevenHundredAndFifityMax,
                            propertiesPriceSeasonal.oneThousandAndTwoHundredAndFifityMax,
                            propertiesPriceSeasonal.twoThousandMax,
                            propertiesPriceSeasonal.threeThousandMax,
                            propertiesPriceSeasonal.aboveThreeThousand,
                        ],
                        backgroundColor: "rgba(0, 85, 85)",
                        borderColor: "rgba(0, 85, 85, 0.9)",
                        borderWidth: 2,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            })
        }
    } catch(error) {
        return
    }

    try {
        let propertiesPriceRent = cachedDashInfo?.propertiesPriceRent

        if (!propertiesPriceRent) {
            propertiesPriceRent = (await router(
                "GET",
                `${ENDPOINTS.dashboard}/properties-price-rent`,
                null,
                true,
                true
            ))?.data

            if (propertiesPriceRent) {
                storageInsert("miadm_dashInfo", JSON.stringify({ ...cachedDashInfo, propertiesPriceRent }))
                cachedDashInfo = JSON.parse(storageGet("miadm_dashInfo"))
            }
        }

        if (propertiesPriceRent) {
            new Chart(chartPropertiesPriceRent, {
                type: "bar",
                data: {
                    labels: ['Até 1.5k', '1.5k - 2.5k', '2.5k - 5k', '5k - 10k', 'Acima 10k'],
                    datasets: [{
                        label: "Quantidade de Anúncios",
                        data: [
                            propertiesPriceRent.oneThousandAndFiveHundredMax,
                            propertiesPriceRent.twoThousandAndFiveHundredMax,
                            propertiesPriceRent.fiveThousandMax,
                            propertiesPriceRent.tenThousandMax,
                            propertiesPriceRent.aboveTenThousand
                        ],
                        backgroundColor: "rgba(255, 219, 175)",
                        borderColor: "rgba(255, 219, 175, 0.9)",
                        borderWidth: 2,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            })
        }
    } catch(error) {
        return
    }

    try {
        let propertiesPriceSell = cachedDashInfo?.propertiesPriceSell

        if (!propertiesPriceSell) {
            propertiesPriceSell = (await router(
                "GET",
                `${ENDPOINTS.dashboard}/properties-price-sell`,
                null,
                true,
                true
            ))?.data

            if (propertiesPriceSell) {
                storageInsert("miadm_dashInfo", JSON.stringify({ ...cachedDashInfo, propertiesPriceSell }))
                cachedDashInfo = JSON.parse(storageGet("miadm_dashInfo"))
            }
        }

        if (propertiesPriceSell) {
            new Chart(chartPropertiesPriceSell, {
                type: "bar",
                data: {
                    labels: ["Até 100k", "100k - 300k", "300k - 500k", "500k - 1M", "Acima de 1M"],
                    datasets: [{
                        label: "Quantidade de Anúncios",
                        data: [
                            propertiesPriceSell.oneHundredMax,
                            propertiesPriceSell.threeHundredMax,
                            propertiesPriceSell.fiveHundredMax,
                            propertiesPriceSell.oneMillionMax,
                            propertiesPriceSell.aboveOneMillion
                        ],
                        backgroundColor: "rgba(19, 25, 76)",
                        borderColor: "rgba(19, 25, 76)",
                        borderWidth: 2,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            })
        }
    } catch(error) {
        return
    }

    try {
        let propertiesByArea = cachedDashInfo?.propertiesByArea

        if (!propertiesByArea) {
            propertiesByArea = (await router(
                "GET",
                `${ENDPOINTS.dashboard}/properties-by-area`,
                null,
                true,
                true
            ))?.data

            if (propertiesByArea) {
                storageInsert("miadm_dashInfo", JSON.stringify({ ...cachedDashInfo, propertiesByArea }))
                cachedDashInfo = JSON.parse(storageGet("miadm_dashInfo"))
            }
        }

        if (propertiesByArea) {
            new Chart(chartPropertiesByArea, {
                type: "bar",
                data: {
                    labels: ['Até 50m²', '50m² - 100m²', '100m² - 200m²', '200m² - 300m²', 'Acima de 300m²'],
                    datasets: [{
                        label: "Quantidade de Anúncios",
                        data: [
                            propertiesByArea.fifityMax,
                            propertiesByArea.oneHundredMax,
                            propertiesByArea.twoHundredMax,
                            propertiesByArea.threeHundredMax,
                            propertiesByArea.aboveThreeHundred
                        ],
                        backgroundColor: "rgba(255, 219, 175, 0.9)",
                        borderColor: "rgba(255, 219, 175, 0.9)",
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            })
        }
    } catch(error) {
        return
    }

    try {
        let propertiesByCity = cachedDashInfo?.propertiesByCity

        if (!propertiesByCity) {
            propertiesByCity = (await router(
                "GET",
                `${ENDPOINTS.dashboard}/properties-by-city`,
                null,
                true,
                true
            ))?.data

            if (propertiesByCity) {
                storageInsert("miadm_dashInfo", JSON.stringify({ ...cachedDashInfo, propertiesByCity }))
                cachedDashInfo = JSON.parse(storageGet("miadm_dashInfo"))
            }
        }

        if (propertiesByCity) {
            new Chart(chartPropertiesByCity, {
                type: "bar",
                data: {
                    labels: propertiesByCity.map((element) => element.name),
                    datasets: [{
                        label: "Quantidade de Anúncios",
                        data: propertiesByCity.map((element) => parseInt(element.amountProperties)),
                        backgroundColor: "rgba(0, 85, 85, 0.9)",
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            })
        }
    } catch(error) {
        return
    }

    try {
        let propertiesByType = cachedDashInfo?.propertiesByType

        if (!propertiesByType) {
            propertiesByType = (await router(
                "GET",
                `${ENDPOINTS.dashboard}/properties-by-type`,
                null,
                true,
                true
            ))?.data

            if (propertiesByType) {
                storageInsert("miadm_dashInfo", JSON.stringify({ ...cachedDashInfo, propertiesByType }))
                cachedDashInfo = JSON.parse(storageGet("miadm_dashInfo"))
            }
        }

        if (propertiesByType) {
            new Chart(chartPropertiesByType, {
                type: "bar",
                data: {
                    labels: propertiesByType?.map((element) => element.type),
                    datasets: [{
                        label: "Quantidade de Anúncios",
                        data: propertiesByType.map((element) => parseInt(element.amountProperties)),
                        backgroundColor: "rgba(19, 25, 76, 0.9)",
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            })
        }
    } catch(error) {
        return
    }

    try {
        let propertiesByMonth = cachedDashInfo?.propertiesByMonth

        if (!propertiesByMonth) {
            propertiesByMonth = (await router(
                "GET",
                `${ENDPOINTS.dashboard}/properties-by-month/2024`,
                null,
                true,
                true
            ))?.data

            if (propertiesByMonth) {
                storageInsert("miadm_dashInfo", JSON.stringify({ ...cachedDashInfo, propertiesByMonth }))
                cachedDashInfo = JSON.parse(storageGet("miadm_dashInfo"))
            }
        }

        if (propertiesByMonth) {
            const propertiesCountByMonth = Array(12).fill(0)

            propertiesByMonth?.forEach((row) => {
                const monthIndex = row.month - 1
                propertiesCountByMonth[monthIndex] = parseInt(row.amountProperties)
            })

            new Chart(chartPropertiesByMonth, {
                type: "line",
                data: {
                    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                    datasets: [{
                        label: "Quantidade de Anúncios",
                        data: propertiesCountByMonth,
                        backgroundColor: "rgba(255, 219, 175, 0.9)",
                        borderWidth: 2,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            })
        }
    } catch(error) {
        return
    }

})