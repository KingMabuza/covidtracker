<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Statistics | CovidMonitor</title>
    <link rel="stylesheet" type="text/css" href="css/Chart.min.css">
    <link rel="stylesheet" type="text/css" href="css/rsa.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>

    <nav class="nav transparent z-depth-0 red-text">
        <h4>
            Covid-19 Monitor
        </h4>
    </nav>
    <div class="center"><img src="flags/flags/png/south-africa.png" height="80px"></div>
    <?php
    echo "<a href='index.php'>
    <span class='material-icons left white-text'>
        navigate_before
        </span><span class='white-text'>Back</span>
    </a>";
    ?>
    <div class="container">
        <div class="card z-depth-2" style="background-color: rgb(35, 33, 43);">
            <div class=" card-title center white-text">
               Confirmed Cases:
            </div>
            <div class=" card-content">
                <p class="center-align grey-text" id="confirmed_cases"></p>
            </div>
        </div>
    </div>
        <div class="container">
            <div class="card z-depth-2" style="background-color: rgb(35, 33, 43);">
                <div class=" card-title center white-text">
                    Active Cases:
                </div>
                <div class=" card-content">
                    <p class="center-align grey-text" id="active_cases"></p>
                </div>
            </div>
        </div>

            <div class="container">
                <div class="card z-depth-2" style="background-color: rgb(35, 33, 43);">
                    <div class=" card-title center white-text">
                        Today Cases:
                    </div>
                    <div class=" card-content">
                        <p class="center-align grey-text" id="today_cases"></p>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="card z-depth-2" style="background-color: rgb(35, 33, 43);">
                    <div class=" card-title center white-text">
                        Cases/1m:
                    </div>
                    <div class=" card-content">
                        <p class="center-align grey-text" id="cases_ratio"></p>
                    </div>
                </div>
            </div>

                <div class="container">
                    <div class="card z-depth-2" style="background-color: rgb(35, 33, 43);">
                        <div class=" card-title center white-text">
                            Recovered:
                        </div>
                        <div class=" card-content">
                            <p class="center-align grey-text" id="recovered"></p>
                        </div>
                    </div>
                </div>
        <div class="container">
            <div class="card z-depth-2" style="background-color: rgb(35, 33, 43);">
                <div class=" card-title center white-text">
                    Deaths:
                </div>
                <div class=" card-content">
                    <p class="center-align grey-text" id="deaths"></p>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="card z-depth-2" style="background-color: rgb(35, 33, 43);">
                <div class=" card-title center white-text">
                    Today Deaths:
                </div>
                <div class=" card-content">
                    <p class="center-align grey-text" id="today_deaths"></p>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="card z-depth-2" style="background-color: rgb(35, 33, 43);">
                <div class=" card-title center white-text">
                    Deaths/1m:
                </div>
                <div class=" card-content">
                    <p class="center-align grey-text" id="deaths_ratio"></p>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="card z-depth-2" style="background-color: rgb(35, 33, 43);">
                <div class=" card-title center white-text">
                    Critical:
                </div>
                <div class=" card-content">
                    <p class="center-align grey-text" id="critical"></p>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="card z-depth-2" style="background-color: rgb(35, 33, 43);">
                <div class=" card-title center white-text">
                    Tests:
                </div>
                <div class=" card-content">
                    <p class="center-align grey-text" id="tests"></p>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="card z-depth-2" style="background-color: rgb(35, 33, 43);">
                <div class=" card-title center white-text">
                    Tests/1m:
                </div>
                <div class=" card-content">
                    <p class="center-align grey-text" id="tests_ratio"></p>
                </div>
            </div>
        </div>
    
        <div id="container" style="height:70vh;">
        <canvas id="provincialChart"></canvas>
        </div>
        <br>
        <footer class="white-text center">
            <div class="container">
            <?php
              echo  "<a href='https://www.uj.ac.za/coronavirus/'><img src='img/university-of-johannesburg-vista-university-higher-education-student-student-40e2d6f67174734214aca4e82f4ab7b0.png' height='100px'></a>";
            ?>
            <?php  
            echo "<a href='https://dsfsi.github.io'>
            <img src='img/dsfsi.png' height='100px'>
            </a>";
            ?>
            </div>
            Developed by students at the University of Johannesburg. Data collated from DSFSI
        </footer>
    <script type="text/javascript" src="js/rsa.js"></script>
    <script type="text/javascript" src="js/Chart.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
</html>