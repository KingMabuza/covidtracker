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

<table>
   <tr>
   <th>Number</th>
   <th>Name</th>
   <th>Facility Type</th>
   <th>Province</th>
   <th>District</th>
   <th>Address</th>
   <th>Contact</th>
   </tr>
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
               echo "<td>" . $row['Number'] . "</td>";
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



<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
</html>