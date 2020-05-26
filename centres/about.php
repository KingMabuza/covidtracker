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
    <P class="grey-text">Short for Corona-virus disease 2019, COVID-19 or SARS_CoV-2 and informally the Wuhan/Chinese Virus is a new respiratory disease, which is part of the coronavirus' family, first discovered in the city of Wuhan, China and has been rapidly spreading around the world, to become a pandemic.</P>
    <ul class="grey-text">
        <li>As a coronavirus, COVID-19 is zoonotic, meaning it is transmitted across to people from animals, it is believed COVID-19 was transmitted from bats, between people the disease is thought to spread mainly between those who are in close contact with one another and through respiratory droplets produced when an infected person coughs or sneezes.</li>
        <li>It is highly important that one is aware of their health as those who are asymptomatic can unknowingly transmit the disease.</li>
        <li>Currently no vaccine or cure for COVID-19 has been found but researchers are working hard to find one.</li>
    </ul>

    <h5 class="white-text">COVID-19 Symptoms</h5>
    <p class="grey-text">The has been no established symptom pattern as the disease affects individuals in different ways. Symptoms can range from mild to severe illness. Symptoms may take up to 2-14days after exposure to appear and this include:</p>
    <ul class="white-text">
        <h6><b>Systemic:</b></h6>
        <li class="grey-text">Fever</li>
        <li class="grey-text">Fatigue</li>
        <li class="grey-text">Muscle Pain</li>
        <li class="grey-text">Chills</li>
        <li class="grey-text">Repeated shaking with chills</li>
        <li class="grey-text">Headache</li>
        <li class="grey-text">Loss of taste or smell</li>

        <h6><b>Respiratory:</b></h6>
        <li class="grey-text">Sneezing</li>
        <li class="grey-text">Dry Cough</li>
        <li class="grey-text">Shortness of breath</li>
        <li class="grey-text">Sore Throat</li>
        <li class="grey-text">Runny Nose</li>

        <h6><b>Kidneys:</b></h6>
        <li class="grey-text">Decreased function</li>

        <h6><b>Circulatory System</b></h6>
        <li class="grey-text">Decreased white cells</li>

        <h6><b>Intestines</b></h6>
        <li class="grey-text">Diarrhea</li>

    </ul>

    <p class="white-text">Immediate medical attention may be required if you have the following symptoms:</p>
    <ul class="grey-text">
        <li>Trouble breathing</li>
        <li>New Confusion</li>
        <li>Inability to wake or stay awake</li>
        <li>Bluish lips or face</li>
        <li>Persistent pain or pressure in the chest</li>
    </ul>

    <h5 class="white-text">Prevention</h5>
    <p class="white-text">To help prevent the spread of COVID-19, everyone should:</p>
    <ul class="grey-text">
        <li>Clean their hands, with either soap and water for 20seconds or a hand sanitizer that contains at least 60% alcohol. </li>
        <li>Avoid close contact with anyone who is sick.</li>
        <li>Stay at home as much as possible.</li>
        <li>Put at least 1meter between you and other people.</li>
        <li>Cover your mouth and nose with a face mask when around others.</li>
        <li>Cover your cough or sneeze with a tissue.</li>
        <li>Clean and disinfect frequently touched objects and surfaces daily.</li>
    </ul>


       <p class='white-text'>If you believe you or someone you know may have Covid-19 based on the above symptoms,enter your province to find testing sites near you </p>
       <form action='sites.php' method='post'>
       <input type='text' name='search' placeholder='province'class='grey-text' required>
       <input type='submit' name='submit' value='search' class='btn'>
       </form>

       <div class='container red-text center'>
       <p>Emergency Hotline: 0800 029 999</p>
       <p>WhatsApp Support Line: 0600 123456</p>
       </div>

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
