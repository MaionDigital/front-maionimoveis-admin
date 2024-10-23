<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <?php 
        include("../templates/variables.php");
        include("../templates/styles.php");
        include("../templates/scripts.php");
    ?>

    <script src="<?php echo $BASE_URL ?>/assets/js/helpers/redirectUser/redirectUser.js"></script>
    <script src="<?php echo $BASE_URL ?>/assets/js/pages/usuarios/users.js"></script>

    <script>
        $(document).ready(() => {
            $("#link-sidebar-users").addClass("active")
        })
    </script>

    <link rel="stylesheet" type="text/css" href="<?php echo $BASE_URL ?>/assets/css/pages/dashboard/dashboard.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">

    <title>Admin | Usuários</title>
</head>

<div id="body-pd">
    <?php include("../templates/sidebar-menu.php"); ?>

    <div class="body-content mt-4">

            <div class="container w-100 text-center pb-3">
                <h3 class="text-primary fw-bold">Usuários</h3>
            </div>

            <hr class="text-black">

        <div class="mt-4 me-4">

            <div class="d-flex justify-content-end mb-2">
                <button class="btn btn-sm bg-secondary" onclick="addUserModal()">
                    <span class="text-white">
                        Adicionar Usuário
                    </span>
                </button>
            </div>

            <table class="table table-bordered">
                <thead class="thead-light">
                    <tr>
                        <th>Nome</th>
                        <th>Função</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody id="users-tbody">

                </tbody>
            </table>
        </div>
    </div>
</div>

    <?php 
    include("../templates/footer-scripts.php");
    ?>

</body>
</html>
