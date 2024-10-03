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
            $("#link-sidebar-users").addClass("active")
        })
    </script>
    <script src="<?php echo $BASE_URL ?>/js/pages/localizacao/localization.js"></script>

    <link rel="stylesheet" type="text/css" href="<?php echo $BASE_URL ?>/css/pages/dashboard/dashboard.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">

    <title>Admin | APIs</title>
</head>

<div id="body-pd">
    <?php include($BASE_URL . "/templates/sidebar-menu.php"); ?>

    <div class="body-content mt-4">

            <div class="container w-100 text-center pb-3">
                <h3 class="text-primary fw-bold">Usuários</h3>
            </div>

            <hr class="text-black">

        <div class="mt-4 me-4">
            <table class="table table-bordered">
                <thead class="thead-light">
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Função</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Oliver</td>
                        <td>oliver@example.com</td>
                        <td>Gerente</td>
                        <td>
                            <button class="btn btn-sm bg-primary">
                                <span class="text-white">Desativar</span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Sophia</td>
                        <td>sophia@example.com</td>
                        <td>Gerente</td>
                        <td>
                            <button class="btn btn-sm bg-primary">
                                <span class="text-white">Desativar</span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>


<?php include($BASE_URL . "/templates/footer-scripts.php"); ?>

</body>
</html>
