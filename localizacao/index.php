<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <?php 
        include("../templates/variables.php");
        include("../templates/styles.php");
        include("../templates/scripts.php");
    ?>

    <script src="<?php echo $BASE_URL ?>/assets/js/helpers/redirectUser/redirectUser.js"></script>
    <script src="<?php echo $BASE_URL ?>/assets/js/pages/localizacao/localization.js"></script>

    <script>
        $(document).ready(() => {
            $("#link-sidebar-localization").addClass("active")
        })
    </script>


    <title>Admin | Localização</title>
</head>
<body>

<div id="body-pd">
    <?php include("../templates/sidebar-menu.php"); ?>

    <div class="body-content mt-4">

            <div class="container w-100 text-center pb-3">
                <h3 class="text-primary fw-bold">Localização</h3>
            </div>

            <hr class="text-black">

        <div class="mt-4">

            <div class="">

                <div class="row">
                    <div class="">
                        <h4>País</h4>
                    </div>
                </div>
    
                <form>
                    <div class="row">
                        <div class="col-lg-2">
                            <input class="form-control" type="text" id="input-country" placeholder="Nome do País" disabled>
                        </div>
                        <div class="col-lg-4">
                            <button class="btn btn-sm btn-primary" type="button">
                                <span>Adicionar País</span>
                            </button>
                        </div>
                    </div>
                </form>

            </div>

            <hr>

            <div class="">

                <div class="row">
                    <div class="">
                        <h4>Estado</h4>
                    </div>
                </div>
    
                <form>
                    <div class="row">
                        <div class="col-lg-2">
                            <select class="form-control form-select" id="input-father-country">
                                <option value="dea0f97d-354a-4bc9-8023-ee98c4d8adf5">Brasil</option>
                            </select>
                        </div>
                        <div class="col-lg-2">
                            <input class="form-control" type="text" id="input-state" placeholder="Nome do estado" disabled>
                        </div>
                        <div class="col-lg-4">
                            <button class="btn btn-sm btn-primary" type="button">
                                <span>Adicionar Estado</span>
                            </button>
                        </div>
                    </div>
                </form>

            </div>

            <hr>

            <div class="">

                <div class="row">
                    <div class="">
                        <h4>Cidade</h4>
                    </div>
                </div>
    
                <form onsubmit="registerCity(event)">
                    <div class="row">
                        <div class="col-lg-2">
                            <select class="form-control form-select" id="input-father-state">
                                <option value="60359552-c249-4087-b93e-78c4293638db">Bahia</option>
                            </select>
                        </div>
                        <div class="col-lg-2">
                            <input class="form-control" type="text" id="input-city" placeholder="Nome da cidade">
                        </div>
                        <div class="col-lg-4">
                            <button class="btn btn-sm btn-primary" type="submit" id="register-city-btn">
                                <span>Adicionar Cidade</span>
                            </button>
                        </div>
                    </div>
                </form>

            </div>

            <hr>

            <div class="">

                <div class="row">
                    <div class="">
                        <h4>Bairro</h4>
                    </div>
                </div>
    
                <form onsubmit="registerNeighborhood(event)">
                    <div class="row">
                        <div class="col-lg-2">
                            <select class="form-control form-select" id="input-father-city">
                                <option value="">Selecione uma cidade</option>
                            </select>
                        </div>
                        <div class="col-lg-2">
                            <input class="form-control" type="text" id="input-neighborhood" placeholder="Nome do bairro" required>
                        </div>
                        <div class="col-lg-4">
                            <button class="btn btn-sm btn-primary" id="register-neighborhood-btn" type="submit">
                                <span>Adicionar Bairro</span>
                            </button>
                        </div>
                    </div>
                </form>

            </div>

            <hr>

        </div>
    </div>
</div>

    <?php
    include("../templates/footer-scripts.php");
    ?>

</body>
</html>
