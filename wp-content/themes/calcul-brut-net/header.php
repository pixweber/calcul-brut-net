<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Calcul votre salaire brut en net</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css" />
    <link rel="stylesheet" href="<?php echo TEMPLATE_PATH; ?>/css/theme.min.css" />
    <link rel="stylesheet" href="<?php echo TEMPLATE_PATH; ?>/style.css" />
    <?php wp_head(); ?>
    <!--<script type="text/javascript" src="<?php /*echo TEMPLATE_PATH; */?>/node_modules/jquery/dist/jquery.min.js"></script>-->
    <script type="text/javascript" src="<?php echo TEMPLATE_PATH; ?>/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
</head>
<body>
<div id="site-header">
    <div id="site-header-inner" class="container pt-3 pb-3">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">CalculBrutEnNet</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav pl-md-5">
                    <a class="nav-item nav-link active" href="#">Calcul de salaire</a>
                    <a class="nav-item nav-link" href="#">Emploi</a>
                    <a class="nav-item nav-link" href="#">CV & Lettre de motivation</a>
                    <a class="nav-item nav-link disabled" href="#">SMIC</a>
                </div>
            </div>
        </nav>
    </div>
</div>
<div id="site-content">
    <div id="site-content-inner">