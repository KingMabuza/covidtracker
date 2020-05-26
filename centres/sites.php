<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resources | CovidMonitor</title>
    <link rel="stylesheet" type="text/css" href="css/resources.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
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
    <?php
   echo "<div class='container'><p class='white-text'>To avoid straining health facilities, please avoid going to a testing site without the recommendation of a health official, you may contact the below testing sites for appropriate action. <b>Always follow the advise of health professionals.</b></p></div>";?>
<table class='responsive-table grey-text'>
<thead>
   <tr>

   <th>Name</th>
   <th>Facility Type</th>
   <th>Province</th>
   <th>District</th>
   <th>Address</th>
   <th>Contact</th>
   </tr>
   <tbody>

   </tbody>
   <?php
   $search_value=$_POST["search"];
   $con=new mysqli('kil9uzd3tgem3naa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com','cz7q34yktx3h32gt','e470iq142yjb31dl','k8lgv4bgqdjlvbqn');
   if($con->connect_error){
       echo 'Connection Failed: '.$con->connect_error;
   }
   else{
       $sql="select * from testing_sites where Province like '%$search_value%' ";
       $res=$con->query($sql);
       if($res ->num_rows>0){
       while($row=$res->fetch_assoc()){
             echo "<tr>";
               echo "<td>" . $row['Name'] . "</td>";
               echo "<td>" . $row['Facility'] . "</td>";
               echo "<td>" . $row['Province'] . "</td>";
               echo "<td>" . $row['District'] . "</td>";
               echo "<td>" . $row['Address'] . "</td>";
               echo "<td>" . $row['Contact'] . "</td>";
               echo "</tr>";
       }
       }
}
   mysqli_close($con);
   ?>
   </table>
<div class='container red-text center'>
<p>Emergency Hotline: 0800 029 999</p>
<p>WhatsApp Support Line: 0600 123456</p>
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
