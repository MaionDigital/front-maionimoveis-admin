<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <?php 
        include("../templates/variables.php");
        include($BASE_URL . "/templates/styles.php");
        include($BASE_URL . "/templates/scripts.php");
    ?>

    <script>
        $(document).ready(() => {
            $("#link-sidebar-dashboard").addClass("active")
        })
    </script>

    <link rel="stylesheet" type="text/css" href="<?php echo $BASE_URL ?>/css/pages/dashboard/dashboard.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">

    <title>Admin | Dashboard</title>
    
    <style>
        .heading {
            color: #4CAF50;
            text-align: center;
            margin-top: 20px;
        }

        .chart-container {
            position: relative;
            height: 40vh;
            width: 80vw;
            margin: 20px auto;
        }
    </style>
    
</head>
<body>
    <div id="body-pd">
        <?php include($BASE_URL . "/templates/sidebar-menu.php"); ?>

        <div class="body-content mt-4">

            <div class="row">
                <!-- Gráfico de Crescimento de Usuários -->
                <div class="col-lg-4">
                    <h4>Crescimento de Usuários</h4>
                    <canvas id="usuariosChart"></canvas>
                </div>
                <div class="col-lg-4">
                    <h4>Tipos de Usuários</h4>
                    <canvas id="chart-users-by-type"></canvas>
                </div>
            </div>

            <hr>

            <div class="row">
                <div class="col-lg-4">
                    <h4>Imóveis Cadastrados</h4>
                    <canvas id="imoveisChart"></canvas>
                </div>
                <div class="col-lg-4">
                    <h4>Imóveis Cadastrados por Tipo<br>(Até o momento)</h4>
                    <canvas id="chart-properties-by-type"></canvas>
                </div>
            </div>

            <hr>

            <div class="row mt-4 mb-5">
                <!-- Gráfico de Emails Enviados -->
                <div class="col-lg-4">
                    <h4>Emails Enviados (Hoje)</h4>
                    <canvas id="emailsChart"></canvas>
                </div>
                <!-- Gráfico de Tokens da IA -->
                <div class="col-lg-4">
                    <h4>Uso de Tokens pela Gemini AI</h4>
                    <canvas id="tokensChart"></canvas>
                </div>
            </div>
        </div>
    </div>

    <script>
        $(document).ready(function() {
            // Crescimento de Usuários (Mês Atual)
// Crescimento de Usuários (Por Mês do Ano)
var usuariosCtx = $("#usuariosChart");
var usuariosChart = new Chart(usuariosCtx, {
    type: 'line',  // Mantendo o gráfico de linha
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],  // Meses do ano
        datasets: [{
            label: 'Usuários Cadastrados',
            data: [100, 124, 145, 298, 377, 413, 590, 680, 982, 1623, 2349, 3430], // Mock: Quantidade de usuários para cada mês
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: true  // Preenchendo a área sob a linha para dar um visual mais interessante
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,  // Começar o eixo Y em zero
                title: {
                    display: true,
                    text: 'Número de Usuários'
                }
            },
        }
    }
});

// Gráfico de Usuários por Tipo - Colunas
var usersByTypeBarCtx = $("#chart-users-by-type");
var usersByTypeBarChart = new Chart(usersByTypeBarCtx, {
    type: 'bar',  // Gráfico de colunas
    data: {
        labels: ['Proprietário', 'Agente Imobiliário', 'Imobiliária'],  // Tipos de usuários
        datasets: [{
            label: 'Quantidade de Usuários',
            data: [257, 43, 29],  // Mock: Quantidade de usuários para cada tipo
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',  // Cor para Imobiliária
                'rgba(255, 99, 132, 0.6)',  // Cor para Proprietário
                'rgba(54, 162, 235, 0.6)'  // Cor para Agente Imobiliário
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',  // Cor da borda para Imobiliária
                'rgba(255, 99, 132, 1)',   // Cor da borda para Proprietário
                'rgba(54, 162, 235, 1)'   // Cor da borda para Agente Imobiliário
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,  // Começar o eixo Y em zero
                title: {
                    display: true,
                    text: 'Número de Usuários'
                }
            }
        }
    }
});




const chartPropertiesByType = $("#chart-properties-by-type");

new Chart(chartPropertiesByType, {
    type: "bar",  // Mudando o tipo para gráfico de barras
    data: {
        labels: ["Casa", "Apartamento", "Sala Comercial", "Sítio", "Condomínio"],  // Tipos de imóveis
        datasets: [
            {
                label: "Imóveis Cadastrados",
                data: [142, 43, 54, 12, 19],  // Quantidade de imóveis cadastrados por tipo
                backgroundColor: 'rgba(75, 192, 192, 0.6)',  // Cor das barras
                borderColor: 'rgba(75, 192, 192, 1)',  // Cor da borda
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,  // Eixo Y começa do zero
                title: {
                    display: true,
                    text: 'Número de Imóveis'
                }
            }
        }
    }
});


            var imoveisCtx = $("#imoveisChart");
var imoveisChart = new Chart(imoveisCtx, {
    type: 'bar',  // Mantendo o gráfico de barras
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],  // Meses do ano
        datasets: [{
            label: 'Imóveis Cadastrados',
            data: [50, 75, 100, 120, 150, 180, 220, 260, 300, 340, 400, 450], // Mock: Quantidade de imóveis cadastrados por mês
            backgroundColor: 'rgba(153, 102, 255, 0.6)',  // Cor para as barras
            borderColor: 'rgba(153, 102, 255, 1)',  // Cor da borda
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,  // Eixo Y começa do zero
                title: {
                    display: true,
                    text: 'Número de Imóveis'
                }
            }
        }
    }
});


// Uso de Tokens pela IA (0 até 1 milhão)
var tokensCtx = $("#tokensChart");
var tokensChart = new Chart(tokensCtx, {
    type: 'bar',  // Mudei para 'bar' para fazer barras empilhadas
    data: {
        labels: ['Input Tokens', 'Output Tokens'],  // Agrupando por categorias de Input e Output
        datasets: [
            {
                label: 'Tokens Usados',
                data: [89000, 245000],  // Tokens usados para Input e Output
                backgroundColor: 'rgba(255, 99, 132, 0.7)',  // Cor para tokens usados
                borderWidth: 1
            },
            {
                label: 'Tokens Restantes',
                data: [935000, 906000],  // Tokens restantes para Input e Output
                backgroundColor: 'rgba(75, 192, 192, 0.7)',  // Cor para tokens restantes
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                max: 1000000,  // Máximo de 1 milhão de tokens
                stacked: true  // Habilitar empilhamento
            },
            x: {
                stacked: true  // Habilitar empilhamento
            }
        }
    }
});


            // Emails Enviados (0 até 100)
            var emailsCtx = $("#emailsChart");
            var emailsChart = new Chart(emailsCtx, {
                type: 'bar',
                data: {
                    labels: ['Emails Enviados'], 
                    datasets: [{
                        label: 'Emails Enviados',
                        data: [35], // Mock: 35 emails enviados
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100
                        }
                    }
                }
            });
        });
    </script>

    <?php include($BASE_URL . "/templates/footer-scripts.php"); ?>
</body>
</html>
