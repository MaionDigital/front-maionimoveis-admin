$(document).ready(async () => {
    const chartUsersByMonth = $("#chart-users-by-month")
    const chartUsersByType = $("#chart-users-by-type")
    const chartUsersByState = $("#chart-users-by-state")

    try {
        const usersByState = (await router(
            "GET",
            `${ENDPOINTS.dashboard}/users-by-state`,
            null,
            true,
            // true
        ))?.data

        console.log(usersByState)

        if (usersByState) {
            new Chart(chartUsersByState, {
                type: "bar",
                data: {
                    labels: usersByState.map((element) => element.state),
                    datasets: [{
                        label: "Quantidade",
                        data: usersByState.map((element) => element.amountUsers),
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