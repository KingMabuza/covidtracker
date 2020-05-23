<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resources | CovidMonitor</title>
    <link rel="stylesheet" type="text/css" href="css/resources.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
    <nav class="red-text transparent z-depth-0"><h4>Covid-19 Monitor</h4></nav>
    <?php
    echo "<a href='index.php'>
        <span class='material-icons left white-text'>
            navigate_before
            </span><span class='white-text'>Back</span>
        </a>";
    ?>
        <div class="card z-depth-1-half"  id="draft">
            <div class="center">
                <img src="img/coat.png" height="200px"><p class="white-text">Risk Adjusted Strategy Draft Framework For Consultation</p>
                    <a href="resources/2020-04-25-Permitted-goods-services-and-movement-Public-Comments-Version-1.pdf" download="draft_framework_for_consultation">
                    <span class="material-icons white-text">
                    get_app
                    </span>
                    </a>
            </div>
        </div>
        <br>
        <div class="container"><iframe width="100%" height="450" src="https://www.youtube.com/embed/94YacjMr4N8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <br>
        <div class="container"><iframe width="100%" height="450" src="https://www.youtube.com/embed/wYuRl1dfn_4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <br>
        <div class="container">
        <table>
        <tr>
        <th>
        Province
        </th>
        <th>
        Hospital
        </th>
        <th>
        Address
        </th>
        </tr>
   <?php
    $conn = mysqli_connect("kil9uzd3tgem3naa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com", "	cz7q34yktx3h32gt","yyh2xzc366iqhv22", "k8lgv4bgqdjlvbqn");
    $sql = "SELECT * FROM centres";
    $result = $conn-> query($sql);

    if($result ->num_rows > 0){
        while($row = $result-> fetch_assoc()){
            echo "<tr><td>" . $row["Province"] . "</td><td>" . $row["Hospital"] . "</td><td>" . $row["Address"] . "</td> </tr>" ;
        }
    }
    else{
        echo "No Results";
    }
    $conn-> close();
   ?>
   </table>
    </div>
    
    $sql = "CREATE TABLE centres(
    province TEXT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    hospital TEXT NOT NULL,
    address TEXT NOT NULL,
    phone INT NOT NULL UNIQUE
)";
    
    
        <div class="container">
        <a class="twitter-timeline" href="https://twitter.com/HealthZA?ref_src=twsrc%5Etfw">Tweets by HealthZA</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
        <footer class="white-text center">
            <div class="container">
            <?php
             echo "<a href='https://www.uj.ac.za/coronavirus/'><img src='img/university-of-johannesburg-vista-university-higher-education-student-student-40e2d6f67174734214aca4e82f4ab7b0.png' height='100px'></a>";
            ?> 
            <?php
            echo "<a href='https://dsfsi.github.io'>
            <img src='img/dsfsi.png' height='100px'>
            </a>";
            ?>
            </div>
            Developed by students at the University of Johannesburg. Data collated from DSFSI
        </footer>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
</html>
