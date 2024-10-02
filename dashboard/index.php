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

    <script src="<?php echo $BASE_URL ?>/js/pages/dashboard/dashboard.js"></script>

    <title>Admin | Dashboard</title>
    
</head>
<body>
    <div id="body-pd">
        <?php include($BASE_URL . "/templates/sidebar-menu.php"); ?>

        <div class="body-content mt-4">

            <div class="row m-4">
                <div class="col-lg-4">
                    <h4>Usuários Cadastrados</h4>
                    <canvas id="chart-users-by-month"></canvas>
                </div>
                <div class="col-lg-4">
                    <h4>Tipos de Usuários</h4>
                    <canvas id="chart-users-by-type"></canvas>
                </div>
                <div class="col-lg-4">
                    <h4>Usuários por Estado</h4>
                    <canvas id="chart-users-by-state"></canvas>
                </div>
            </div>

            <hr>

            <div class="row m-4">
                <div class="col-lg-4">
                    <h4>Imóveis Cadastrados</h4>
                    <canvas id="chart-properties-by-month"></canvas>
                </div>
                <div class="col-lg-4">
                    <h4>Tipos de Imóveis</h4>
                    <canvas id="chart-properties-by-type"></canvas>
                </div>
                <div class="col-lg-4">
                    <h4>Imóveis por Cidade</h4>
                    <canvas id="chart-properties-by-city"></canvas>
                </div>
            </div>

            <hr>

            <div class="row m-4">
                <div class="col-lg-4">
                    <h4>Situação dos Imóveis</h4>
                    <canvas id="chart-properties-by-situation"></canvas>
                </div>
                <div class="col-lg-4">
                    <h4>Faixa de Preço dos Imóveis</h4>
                    <canvas id="chart-properties-by-price"></canvas>
                </div>
                <div class="col-lg-4">
                    <h4>Tamanho Médio dos Imóveis</h4>
                    <canvas id="chart-properties-by-area"></canvas>
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
                backgroundColor: '#13194C',  // Cor para tokens usados
                borderWidth: 1
            },
            {
                label: 'Tokens Restantes',
                data: [935000, 906000],  // Tokens restantes para Input e Output
                backgroundColor: '#005555',  // Cor para tokens restantes
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


// Emails Enviados e Abertos (0 até 100)
var emailsCtx = $("#emailsChart");
var emailsChart = new Chart(emailsCtx, {
    type: 'bar',
    data: {
        labels: ['Emails Enviados', 'Abertos'], 
        datasets: [{
            label: "Quantidade de emails",
            data: [54, 52], // Mock: 35 emails enviados, 34 abertos
            backgroundColor: ["#13194C", "#FFDBAF"],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        const totalEmails = 35; // Total enviado
                        const value = tooltipItem.raw;
                        const percentage = ((value / totalEmails) * 100).toFixed(2);
                        return `${tooltipItem.label}: ${value} (${percentage}%)`; // Exibe valor e percentual
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

var situationCtx = $("#chart-properties-by-situation");
        var situationChart = new Chart(situationCtx, {
            type: 'bar',
            data: {
                labels: ['À venda', 'À alugar', 'Temporada'],
                datasets: [{
                    label: 'Situação dos Imóveis',
                    data: [50, 30, 20], // Mock: 50 à venda, 30 à alugar, 20 para temporada
                    backgroundColor: ["#005555", "#13194C", "#FFDBAF"],
                    borderColor: ["#005555", "#13194C", "#FFDBAF"],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true
            }
        });

        var priceCtx = $("#chart-properties-by-price");
        var priceChart = new Chart(priceCtx, {
            type: 'bar',
            data: {
                labels: ['Até 100k', '100k - 300k', '300k - 500k', '500k - 1M', 'Acima de 1M'],
                datasets: [{
                    label: 'Quantidade de Imóveis',
                    data: [10, 25, 15, 8, 5], // Mock: Quantidade de imóveis por faixa de preço
                    backgroundColor: "#13194C",
                    borderColor: "#13194C",
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
        });

        var areaCtx = $("#chart-properties-by-area");
        var areaChart = new Chart(areaCtx, {
            type: 'bar',
            data: {
                labels: ['Até 50m²', '50m² - 100m²', '100m² - 200m²', '200m² - 300m²', 'Acima de 300m²'],
                datasets: [{
                    label: 'Quantidade de Imóveis',
                    data: [12, 18, 22, 10, 6], // Mock: Quantidade de imóveis por faixa de tamanho
                    backgroundColor: '#FFDBAF',
                    borderColor: '#FFDBAF',
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
        });



        });
    </script>

    <?php include($BASE_URL . "/templates/footer-scripts.php"); ?>
</body>
</html>
