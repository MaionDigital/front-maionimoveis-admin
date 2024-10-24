<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <?php 
        include("./templates/variables.php");
        include("./templates/styles.php");
        include("./templates/scripts.php");
    ?>
    
    <script src="<?php echo $BASE_URL ?>/assets/js/pages/login/auth.js"></script>

    <link rel="stylesheet" type="text/css" href="<?php echo $BASE_URL ?>/assets/css/pages/login/login.css">

    <title>Maion Imóveis | Admin Login</title>
    
</head>
<body>

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="container-card shadow-sm">

                    <div>
                        <div class="text-center mb-4">
                            <img src="<?php echo $BASE_URL ?>/assets/images/logos/maion-logo-blue.png" alt="" style="width: 100px;">
                            <h2 class="mt-2">Login</h2>
                            <hr>
                        </div>
                    </div>

                    <form onsubmit="auth(event)">

                        <div class="row mb-3">
                            <div class="col">
                                <input type="text" class="form-control" id="input-name" placeholder="Nome de usuário">
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col">
                                <input type="password" class="form-control" id="input-password" placeholder="Senha">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <button type="submit" id="login-btn" class="btn btn-sm bg-primary w-100">
                                    <span class="text-white">Login</span>
                                </button>
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    </div>

    <?php
        include("./templates/footer-scripts.php");
    ?>

</body>
</html>
