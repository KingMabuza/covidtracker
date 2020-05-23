<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About | Covid-19</title>
    <link rel="stylesheet" type="text/css" href="css/about.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
</head>
<body>
    <div class="container">
        <nav class="nav transparent z-depth-0 red-text">
            <h4>
                Covid-19 Monitor
            </h4>
        </nav>
        <?php
        echo "<a href='index.php'>
            <span class='material-icons left white-text'>
                navigate_before
                </span><span class='white-text'>Back</span>
        </a>";
        ?>
    <h5 class="white-text">What is COVID-19?</h5>
    <P class="white-text">COVID-19 is a new respiratory disease that has been rapidly spreading around the world, this disease is caused by a coronavirus. COVID-19 is short for 'coronavirus disease 2019.'</P>
    <ul class="white-text">
        <li>The virus is thought to spread mainly between people who are in close contact with one another and through respiratory droplets produced when an infected person coughs or sneezes.</li>
        <li>People are most contagious when they are the sickest. But those who don't have a lot of symptoms can still pass the virus to others.</li>
        <li>There is currently no vaccine or cure for COVID-19 but researchers are working hard to find one.</li>
    </ul>

    <h5 class="white-text">COVID-19 Symptoms</h5>
    <p class="white-text">COVID-19 is a new disease that affects individuals in different ways. Symptoms can range from mild to severe illness. Symptoms may take up to 2-14days after exposure to appear and this include:</p>
    <ul class="white-text">
        <li>Cough</li>
        <li>Shortness of breath</li>
        <li>Muscle Pain</li>
        <li>Sore Throat</li>
        <li>Headache</li>
        <li>Loss of taste or smell</li>
        <li>Fever</li>
        <li>Chills</li>
        <li>Repeated shaking with chills</li>
    </ul>

    <p class="white-text"> If you develop the following symptoms get medical attention immediately.</p>
    <ul class="white-text">
        <li>Trouble breathing</li>
        <li>Persistant pain or pressure in the chest</li>
        <li>Bluish lips or face</li>
        <li>Inability to arouse</li>
    </ul>

    <h5 class="white-text">Prevention</h5>
    <p class="white-text">To help prevent the spread of COVID-19, everyone should:</p>
    <ul class="white-text">
        <li>Clean your hands, with either soap and water for 20seconds or a hand sanitizer that contains at least 60% alcohol. </li>
        <li>Avoid close contact with anyone who is sick</li>
        <li>Stay at home as much as possible</li>
        <li>Put atleast 1meter between you and other people</li>
        <li>Cover your mouth and nose with a face mask when around others</li>
        <li>Cover your cough or sneeze with a tissue</li>
        <li>Clean and disinfect frequently touched objects and surfaces daily</li>
    </ul>

    <footer class="white-text center">
        <div class="container">
        <?php
          echo  "<a href='https://www.uj.ac.za/coronavirus/'><img src='img/university-of-johannesburg-vista-university-higher-education-student-student-40e2d6f67174734214aca4e82f4ab7b0.png' height='100px'></a>"
        ?> 
        <?php 
        echo "<a href='https://dsfsi.github.io'>
        <img src='img/dsfsi.png' height='100px'>
        </a>"
        ?>
        </div>
        Developed by students at the University of Johannesburg. Data collated from DSFSI
    </footer>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
</html>