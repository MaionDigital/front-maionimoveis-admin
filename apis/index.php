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
            $("#link-sidebar-api").addClass("active")
        })
    </script>

    <script src="<?php echo $BASE_URL ?>/js/pages/apis/apis.js"></script>

    <title>Admin | APIs</title>
</head>

<div id="body-pd">
    <?php include($BASE_URL . "/templates/sidebar-menu.php"); ?>

    <div class="body-content mt-4">

            <div class="container w-100 text-center pb-3">
                <h3 class="text-primary fw-bold">APIs</h3>
            </div>

            <hr class="text-black">

        <div class="mt-4">
            <div class="row mb-3">
                <div class="col-lg-2 border-bottom border-start">
                    <h5 class="d-flex justify-content-between">Application API<i id="i-application-api" class="bx bxs-circle"></i></h5>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-lg-2 border-bottom border-start">
                    <h5 class="d-flex justify-content-between">Dicebear API<i id="i-dicebear-api" class="bx bxs-circle"></i></h5>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-lg-2 border-bottom border-start">
                    <h5 class="d-flex justify-content-between">ViaCEP API<i id="i-viacep-api" class="bx bxs-circle"></i></h5>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-lg-2 border-bottom border-start">
                    <h5 class="d-flex justify-content-between">SendGrid API<i id="i-sendgrid-api" class="bx bxs-circle"></i></h5>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-lg-2 border-bottom border-start">
                    <h5 class="d-flex justify-content-between">Gemini API<i id="i-gemini-api" class="bx bxs-circle"></i></h5>
                </div>
            </div>
        </div>
    </div>

    <hr>

</div>

<?php include($BASE_URL . "/templates/footer-scripts.php"); ?>

</body>
</html>
