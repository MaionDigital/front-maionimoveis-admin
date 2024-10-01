<?php
$BASE_URL = "http://localhost/projects/realestate_front_admin";
?>
        <header class="header" id="header">
            <div class="header_toggle"> 
                <i class='bx bx-menu' id="header-toggle"></i> 
            </div>
        </header>
        <div class="l-navbar" id="nav-bar">
            <nav class="nav">
                <div> 

                    <div class="nav_list"> 
                        <a href="#" id="nav-logo" class="d-none d-flex justify-content-center"> 
                            <img src="<?php echo $BASE_URL ?>/images/logos/maion-logo-white.png" alt="" style="width: 100px;">
                        </a>

                        <hr class="text-white">

                        <a href="#" class="nav_link active"> 
                            <i class='bx bx-grid-alt nav_icon'></i> 
                            <span class="nav_name">Dashboard</span> 
                        </a>

                        <a href="#" class="nav_link">
                            <i class="bx bx-map nav_icon"></i>
                            <span class="nav_name">Localização</span>
                        </a>

                        <a href="#" class="nav_link"> 
                            <i class='bx bx-user nav_icon'></i> 
                            <span class="nav_name">Usuários</span> 
                        </a>

                        <hr class="text-white">

                    </div>

                </div> 
                <a href="#" class="nav_link"> 
                    <i class='bx bx-log-out nav_icon'></i> 
                    <span class="nav_name">Sair</span> 
                </a>
            </nav>

        </div>