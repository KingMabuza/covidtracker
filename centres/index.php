<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Monitor</title>
    <link rel="stylesheet" type="text/css" href="css/corona.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
    <div class="intro center">
        <img src="img/covidicon.png" height="100px">
        <h5 class="white-text">Coronavirus</h5>
        <h6 class="red-text">COVID-19 Monitor</h6>
        <nav class="transparent">
            <div class="nav-wrapper">
                <div class="col s5">
                    <?php
                   echo "<a href='about.php' class='breadcrumb'>About</a>";
                   echo "<a href='rsa.php' class='breadcrumb'>Statistics</a>";
                   echo "<a href='resources.php' class='breadcrumb'>Resources</a>";
                    ?>
                </div>
            </div>
        </nav>
    </div>
    <footer class="white-text center">
        <div class="container">
          <?php echo "<a href='https://www.uj.ac.za/coronavirus/'><img src='img/university-of-johannesburg-vista-university-higher-education-student-student-40e2d6f67174734214aca4e82f4ab7b0.png' height='100px'></a>";
          ?>
        <?php 
        echo "<a href='https://dsfsi.github.io'>
        <img src='img/dsfsi.png' height='100px'>
        </a>"
        ?>
        </div>
        Developed by students at the University of Johannesburg. Data collated from DSFSI
    </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
</html>