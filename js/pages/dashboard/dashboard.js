$(document).ready(async () => {
    const chartUsersByMonth = $("#chart-users-by-month")
    const chartUsersByType = $("#chart-users-by-type")
    const chartUsersByState = $("#chart-users-by-state")

    const chartPropertiesByMonth = $("#chart-properties-by-month")
    const chartPropertiesByType = $("#chart-properties-by-type")
    const chartPropertiesByCity = $("#chart-properties-by-city")

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
                        backgroundColor: "#FFDBAF",
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
                        backgroundColor: "#FFDBAF",
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