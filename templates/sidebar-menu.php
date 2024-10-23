<?php
$BASE_URL = "https://admin.maionimoveis.com.br";
?>
        <header class="header" id="header">
            <div class="header_toggle"> 
                <i class='bx bx-menu' id="header-toggle"></i> 
            </div>
            <div class="header_img">
                <img id="header-profile-img" src="" alt="">
            </div>
        </header>

        <div class="l-navbar" id="nav-bar">
            <nav class="nav">
                <div> 

                    <div class="nav_list"> 
                        <a href="#" id="nav-logo" class="d-none d-flex justify-content-center"> 
                            <img src="<?php echo $BASE_URL ?>/assets/images/logos/maion-logo-white.png" alt="" style="width: 100px;">
                            <br>
                        </a>

                        <hr class="text-white">

                        <a class="nav_link link" id="link-sidebar-dashboard" onclick="changePage('dashboard')"> 
                            <i class='bx bx-grid-alt nav_icon'></i> 
                            <span class="nav_name">Dashboard</span> 
                        </a>

                        <a class="nav_link link" id="link-sidebar-localization" onclick="changePage('localizacao')">
                            <i class="bx bx-map nav_icon"></i>
                            <span class="nav_name">Localização</span>
                        </a>

                        <a class="nav_link link" id="link-sidebar-features" onclick="changePage('caracteristicas')">
                            <i class="bx bx-tv nav_icon"></i>
                            <span class="nav_name">Características</span>
                        </a>

                        <a class="nav_link link" id="link-sidebar-users" onclick="changePage('usuarios')"> 
                            <i class='bx bx-user nav_icon'></i> 
                            <span class="nav_name">Usuários</span> 
                        </a>

                        <a class="nav_link link" id="link-sidebar-api" onclick="changePage('apis')">
                            <i class="bx bx-cog nav_icon"></i>
                            <span class="nav_name">APIs</span>
                        </a>

                        <hr class="text-white">

                    </div>

                </div> 
                <a class="nav_link link" id="link-sidebar-logout" onclick="logout()"> 
                    <i class='bx bx-log-out nav_icon'></i> 
                    <span class="nav_name">Sair</span> 
                </a>
            </nav>

        </div>

        <script>
            $(document).ready(() => {
                const username = JSON.parse(storageGet("miadm_userInfo"))?.name
                $("#header-profile-img").attr("src", `${DICEBEAR_API_URL}&seed=${username}`)
            })
        </script>