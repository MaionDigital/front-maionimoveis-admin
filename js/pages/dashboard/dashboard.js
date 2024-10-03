$(document).ready(async () => {
    const chartUsersByMonth = $("#chart-users-by-month")
    const chartUsersByType = $("#chart-users-by-type")
    const chartUsersByState = $("#chart-users-by-state")
    const chartUsersByGenre = $("#chart-users-by-genre")

    const chartPropertiesByMonth = $("#chart-properties-by-month")
    const chartPropertiesByType = $("#chart-properties-by-type")
    const chartPropertiesByCity = $("#chart-properties-by-city")

    const chartPropertiesByArea = $("#chart-properties-by-area")

    const chartPropertiesPriceSell = $("#chart-properties-price-sell")
    const chartPropertiesPriceRent = $("#chart-properties-price-rent")
    const chartPropertiesPriceSeasonal = $("#chart-properties-price-seasonal")

    try {
        const usersByGenre = (await router(
            "GET",
            `${ENDPOINTS.dashboard}/users-by-genre`,
            null,
            true,
            // true
        ))?.data

        if (usersByGenre) {
            new Chart(chartUsersByGenre, {
                type: "bar",
                data: {
                    labels: ["Masculino", "Feminino", "Prefere não dizer"],
                    datasets: [{
                        data: [
                        usersByGenre.amountMale,
                        usersByGenre.amountFemale,
                        usersByGenre.amountPreferNotToTell
                        ],
                        backgroundColor: ["#13194C", "#FFDBAF", "#005555"],
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
        const propertiesPriceSeasonal = (await router(
            "GET",
            `${ENDPOINTS.dashboard}/properties-price-seasonal`,
            null,
            true,
            // true
        ))?.data

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
                        backgroundColor: ["rgba(0, 85, 85)"],
                        borderColor: "#005555",
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
        const propertiesPriceRent = (await router(
            "GET",
            `${ENDPOINTS.dashboard}/properties-price-rent`,
            null,
            true,
            // true
        ))?.data

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
                        backgroundColor: ["rgba(255, 219, 175)"],
                        borderColor: "#FFDBAF",
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
        const propertiesPriceSell = (await router(
            "GET",
            `${ENDPOINTS.dashboard}/properties-price-sell`,
            null,
            true,
            // true
        ))?.data


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
                        backgroundColor: ["rgba(19, 25, 76)"],
                        borderColor: "#13194C",
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
        const propertiesByArea = (await router(
            "GET",
            `${ENDPOINTS.dashboard}/properties-by-area`,
            null,
            true,
            // true
        ))?.data

        if (propertiesByArea) {
            new Chart(chartPropertiesByArea, {
                type: "bar",
                data: {
                    labels: ['Até 50m²', '50m² - 100m²', '100m² - 200m²', '200m² - 300m²', 'Acima de 300m²'],
                    datasets: [{
                        label: "Quantidade de Imóveis",
                        data: [
                            propertiesByArea.fifityMax,
                            propertiesByArea.oneHundredMax,
                            propertiesByArea.twoHundredMax,
                            propertiesByArea.threeHundredMax,
                            propertiesByArea.aboveThreeHundred
                        ],
                        backgroundColor: ["rgba(0, 85, 85)"],
                        // borderColor: "#13194C",
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    scles: {
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
        const propertiesByCity = (await router(
            "GET",
            `${ENDPOINTS.dashboard}/properties-by-city`,
            null,
            true,
            // true
        ))?.data

        if (propertiesByCity) {
            new Chart(chartPropertiesByCity, {
                type: "bar",
                data: {
                    labels: propertiesByCity.map((element) => element.name),
                    datasets: [{
                        label: "Quantidade de Imóveis",
                        data: propertiesByCity.map((element) => parseInt(element.amountProperties)),
                        backgroundColor: ["rgba(255, 219, 175, 0.85)", "rgba(255, 219, 175, 0.65)"],
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
        const propertiesByType = (await router(
            "GET",
            `${ENDPOINTS.dashboard}/properties-by-type`,
            null,
            true,
            // true
        ))?.data

        if (propertiesByType) {
            new Chart(chartPropertiesByType, {
                type: "bar",
                data: {
                    labels: propertiesByType?.map((element) => element.type),
                    datasets: [{
                        label: "Quantidade",
                        data: propertiesByType.map((element) => parseInt(element.amountProperties)),
                        backgroundColor: [
                            "#13194C",
                            "#FFDBAF",
                            "#005555",
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
        const propertiesByMonth = (await router(
            "GET",
            `${ENDPOINTS.dashboard}/properties-by-month/2024`,
            null,
            true,
            // true
        ))?.data

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
                        label: "Imóveis Cadastrados",
                        data: propertiesCountByMonth,
                        backgroundColor: "#13194C",
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
        const usersByState = (await router(
            "GET",
            `${ENDPOINTS.dashboard}/users-by-state`,
            null,
            true,
            // true
        ))?.data

        if (usersByState) {
            new Chart(chartUsersByState, {
                type: "bar",
                data: {
                    labels: usersByState.map((element) => element.state),
                    datasets: [{
                        label: "Quantidade",
                        data: usersByState.map((element) => parseInt(element.amountUsers)),
                        backgroundColor: "#005555",
                        borderColor: "#005555",
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
        const usersByMonth = (await router(
            "GET",
            `${ENDPOINTS.dashboard}/users-by-month/2024`,
            null,
            true,
            // true
        ))?.data

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
                        label: "Usuários Cadastrados",
                        data: usersCountByMonth,
                        backgroundColor: "#FFDBAF",
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
        const usersByType = (await router(
            "GET",
            `${ENDPOINTS.dashboard}/users-by-type`,
            null,
            true,
            // true
        ))?.data

        if (usersByType) {
            new Chart(chartUsersByType, {
                type: "bar",
                data: {
                    labels: ["Proprietário", "Agente Imobiliário", "Imobiliária"],
                    datasets: [{
                        label: "Quantidade",
                        data: [
                            usersByType?.amountUsers,
                            usersByType?.amountAgents,
                            usersByType?.amountRealestates
                        ],
                        backgroundColor: [
                            "#13194C",
                            "#FFDBAF",
                            "#005555"
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
})