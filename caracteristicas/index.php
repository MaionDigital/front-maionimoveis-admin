<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <?php 
        include("../templates/variables.php");
        include($BASE_URL . "/templates/styles.php");
        include($BASE_URL . "/templates/scripts.php");
    ?>

    <script src="<?php echo $BASE_URL ?>/js/helpers/redirectUser/redirectUser.js"></script>
    <script src="<?php echo $BASE_URL ?>/js/pages/caracteristicas/features.js"></script>

    <script>
        $(document).ready(() => {
            $("#link-sidebar-features").addClass("active")
        })
    </script>


    <title>Admin | Características</title>
</head>
<body>

<div id="body-pd">

    <?php include($BASE_URL . "/templates/sidebar-menu.php"); ?>

    <div class="body-content mt-4">

        <div class="container w-100 text-center pb-3">
            <h3 class="text-primary fw-bold">Características</h3>
        </div>

        <hr class="text-black">

        <div class="mt-4">

            <div class="row">
                <div class="col">
                    <h4>Tipo</h4>
                </div>
            </div>

            <form onsubmit="registerType(event)">
                <div class="row">
                    <div class="col-lg-2">
                        <input class="form-control" type="text" id="input-type" placeholder="Nome do tipo" required>
                    </div>
                    <div class="col-lg-3">
                        <button class="btn btn-sm bg-primary" id="register-type-btn" type="submit">
                            <span class="text-white">
                                Adicionar Tipo
                            </span>
                        </button>
                    </div>
                </div>
            </form>

            <hr>

            <div class="row">
                <div class="col">
                    <h4>Característica</h4>
                </div>
            </div>

            <form onsubmit="registerFeature(event)">
                <div class="row">
                    <div class="col-lg-2">
                        <input class="form-control" type="text" id="input-feature" placeholder="Nome da característica" required>
                    </div>
                    <div class="col-lg-2">
                        <button class="btn btn-sm bg-primary" id="register-feature-btn" type="submit">
                            <span class="text-white">
                                Adicionar Característica
                            </span>
                        </button>
                    </div>
                </div>
            </form>

            <hr>

            <div class="row">
                <div class="col">
                    <h4>Característica-Tipo</h4>
                </div>
            </div>

            <form onsubmit="registerTypeFeature(event)">
                <div class="row">
                    <div class="col-lg-2">
                        <select class="form-control form-select" id="input-father-type">

                        </select>
                    </div>
                    <div class="col-lg-2">
                        <select class="form-control form-select" id="input-son-feature">

                        </select>
                    </div>
                    <div class="col-lg-3">
                        <button class="btn btn-sm bg-primary" id="register-type-feature-btn" type="submit">
                            <span class="text-white">
                                Adicionar Característica-Tipo
                            </span>
                        </button>
                    </div>
                </div>
            </form>

            <hr>

        </div>

    </div>

    <?php include($BASE_URL . "/templates/footer-scripts.php"); ?>

</body>
</html>
