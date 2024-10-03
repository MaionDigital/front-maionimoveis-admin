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

            <div class="row m-4 d-flex align-items-center">
                <div class="col-lg-6">
                    <h4>Usuários Cadastrados</h4>
                    <canvas id="chart-users-by-month"></canvas>
                </div>
                <div class="col-lg-6">
                    <h4>Tipos de Usuários</h4>
                    <canvas id="chart-users-by-type"></canvas>
                </div>
            </div>
            <div class="row m-4 d-flex justify-content-evenly align-items-center">
                <div class="col-lg-4">
                    <h4>Usuários por Estado</h4>
                    <canvas id="chart-users-by-state"></canvas>
                </div>
                <div class="col-lg-4">
                    <h4>Usuários por Gênero</h4>
                    <canvas id="chart-users-by-genre"></canvas>
                </div>
                <div class="col-lg-4">
                    <h4>Usuários por Faixa Etária</h4>
                    <canvas id="chart-users-by-birth"></canvas>
                </div>
            </div>

            <hr>
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
                    <h4>Condição dos Imóveis</h4>
                    <canvas id="chart-properties-by-condition"></canvas>
                </div>
                <div class="col-lg-4">
                    <h4>Tamanho Médio dos Imóveis</h4>
                    <canvas id="chart-properties-by-area"></canvas>
                </div>
                <div class="col-lg-4">
                    <h4>Situação dos Imóveis</h4>
                    <canvas id="chart-properties-by-situation"></canvas>
                </div>
            </div>

            <div class="row m-4">
                <div class="col-lg-4">
                    <h4>Média de Preço (venda)</h4>
                    <canvas id="chart-properties-price-sell"></canvas>
                </div>
                <div class="col-lg-4">
                    <h4>Média de Preço (aluguel)</h4>
                    <canvas id="chart-properties-price-rent"></canvas>
                </div>
                <div class="col-lg-4">
                    <h4>Média de Preço (temporada)</h4>
                    <canvas id="chart-properties-price-seasonal"></canvas>
                </div>
            </div>

        </div>
    </div>

    <?php include($BASE_URL . "/templates/footer-scripts.php"); ?>
</body>
</html>
