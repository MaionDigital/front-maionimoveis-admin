<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <?php 
        include("../templates/variables.php");
        include($BASE_URL . "/templates/styles.php");
        include($BASE_URL . "/templates/scripts.php");
    ?>

    <script src="<?php echo $BASE_URL ?>/js/helpers/redirectUser/redirectUser.js"></script>
    <script src="<?php echo $BASE_URL ?>/js/pages/dashboard/dashboard.js"></script>

    <script>
        $(document).ready(() => {
            $("#link-sidebar-dashboard").addClass("active")
        })
    </script>

    <title>Admin | Dashboard</title>
    
</head>
<body>
    <div id="body-pd">
        <?php include($BASE_URL . "/templates/sidebar-menu.php"); ?>

        <div class="body-content mt-4">

            <div class="container w-100 text-center pb-3">
                <h3 class="text-primary fw-bold">Métricas dos Usuários</h3>
            </div>

            <hr class="text-black">

            <div class="row m-5 d-flex justify-content-evenly align-items-center">
                <div class="col-lg-5 border-start border-end">
                    <h5 class="text-center">Cadastros</h5>
                    <canvas id="chart-users-by-month"></canvas>
                </div>
                <div class="col-lg-5 border-start border-end">
                    <h5 class="text-center">Tipo</h5>
                    <canvas id="chart-users-by-type"></canvas>
                </div>
            </div>

            <div class="row m-5 d-flex justify-content-evenly align-items-center">
                <div class="col-lg-4 border-start border-end">
                    <h5 class="text-center">Estado</h5>
                    <canvas id="chart-users-by-state"></canvas>
                </div>
                <div class="col-lg-4 border-end">
                    <h5 class="text-center">Gênero</h5>
                    <canvas id="chart-users-by-genre"></canvas>
                </div>
                <div class="col-lg-4 border-end">
                    <h5 class="text-center">Faixa Etária</h5>
                    <canvas id="chart-users-by-birth"></canvas>
                </div>
            </div>

            <hr class="text-black">

            <div class="container w-100 text-center pt-3 pb-3">
                <h3 class="text-primary fw-bold">Métricas dos Anúncios</h3>
            </div>

            <hr class="text-black">

            <div class="row m-5">
                <div class="col-lg-4 border-start border-end">
                    <h5 class="text-center">Anúncios</h5>
                    <canvas id="chart-properties-by-month"></canvas>
                </div>
                <div class="col-lg-4 border-end">
                    <h5 class="text-center">Tipo</h5>
                    <canvas id="chart-properties-by-type"></canvas>
                </div>
                <div class="col-lg-4 border-end">
                    <h5 class="text-center">Cidade</h5>
                    <canvas id="chart-properties-by-city"></canvas>
                </div>
            </div>

            <div class="row m-5">
                <div class="col-lg-4 border-start border-end">
                    <h5 class="text-center">Condição</h5>
                    <canvas id="chart-properties-by-condition"></canvas>
                </div>
                <div class="col-lg-4 border-end">
                    <h5 class="text-center">Tamanho Médio</h5>
                    <canvas id="chart-properties-by-area"></canvas>
                </div>
                <div class="col-lg-4 border-end">
                    <h5 class="text-center">Situação</h5>
                    <canvas id="chart-properties-by-situation"></canvas>
                </div>
            </div>

            <div class="row m-5">
                <div class="col-lg-4 border-start border-end">
                    <h5 class="text-center">Média de Preço (venda)</h5>
                    <canvas id="chart-properties-price-sell"></canvas>
                </div>
                <div class="col-lg-4 border-end">
                    <h5 class="text-center">Média de Preço (aluguel)</h5>
                    <canvas id="chart-properties-price-rent"></canvas>
                </div>
                <div class="col-lg-4 border-end">
                    <h5 class="text-center">Média de Preço (temporada)</h5>
                    <canvas id="chart-properties-price-seasonal"></canvas>
                </div>
            </div>

        </div>
    </div>

    <?php include($BASE_URL . "/templates/footer-scripts.php"); ?>
</body>
</html>
