<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <?php 
        include("../templates/variables.php");
        include($BASE_URL . "/templates/styles.php");
        include($BASE_URL . "/templates/scripts.php");
    ?>

    <link rel="stylesheet" type="text/css" href="<?php echo $BASE_URL ?>/css/pages/dashboard/dashboard.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">

    <!-- Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

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

        <div class="body-content">
            <h2>Dashboard de Estatísticas</h2>
            <hr>

            <div class="row">
                <!-- Gráfico de Crescimento de Usuários -->
                <div class="col-lg-5">
                    <h4>Crescimento de Usuários (Mês Atual)</h4>
                    <canvas id="usuariosChart"></canvas>
                </div>

                <!-- Gráfico de Imóveis Cadastrados -->
                <div class="col-lg-5">
                    <h4>Imóveis Cadastrados (Mês Atual)</h4>
                    <canvas id="imoveisChart"></canvas>
                </div>
            </div>

            <div class="row mt-4">
                <!-- Gráfico de Tokens da IA -->
                <div class="col-lg-5">
                    <h4>Uso de Tokens pela IA Generativa</h4>
                    <canvas id="tokensChart"></canvas>
                </div>

                <!-- Gráfico de Emails Enviados -->
                <div class="col-lg-5">
                    <h4>Emails Enviados (Até o Momento)</h4>
                    <canvas id="emailsChart"></canvas>
                </div>
            </div>
        </div>
    </div>

    <script>
        $(document).ready(function() {
            // Crescimento de Usuários (Mês Atual)
            var usuariosCtx = $("#usuariosChart");
            var usuariosChart = new Chart(usuariosCtx, {
                type: 'line',
                data: {
                    labels: ['01', '05', '10', '15', '20', '25', '30'], // Mock de dias do mês
                    datasets: [{
                        label: 'Usuários Cadastrados',
                        data: [10, 20, 40, 60, 80, 120, 150], // Dados mockados
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
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

            // Imóveis Cadastrados (Mês Atual)
            var imoveisCtx = $("#imoveisChart");
            var imoveisChart = new Chart(imoveisCtx, {
                type: 'bar',
                data: {
                    labels: ['01', '05', '10', '15', '20', '25', '30'], // Mock de dias do mês
                    datasets: [{
                        label: 'Imóveis Cadastrados',
                        data: [5, 10, 15, 25, 40, 60, 70], // Dados mockados
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        borderColor: 'rgba(153, 102, 255, 1)',
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

            // Uso de Tokens pela IA (0 até 1 milhão)
            var tokensCtx = $("#tokensChart");
            var tokensChart = new Chart(tokensCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Tokens Usados', 'Tokens Restantes'],
                    datasets: [{
                        label: 'Tokens Utilizados',
                        data: [65000, 935000], // Mock: 65 mil usados, restante até 1 milhão
                        backgroundColor: [
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(54, 162, 235, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 159, 64, 1)',
                            'rgba(54, 162, 235, 1)'
                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true
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
