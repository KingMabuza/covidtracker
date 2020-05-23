window.onload = function() {
	RSA();
}
	
	function RSA(){
	fetch('https://covid-za-api.herokuapp.com/cases/timeline/provincial/cumulative')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {
			
		console.log(data);
		let tot = data[data.length -1].total;
		let tot2 = data[data.length -2].total;
		document.getElementById('confirmed_cases').innerHTML = data[data.length - 1].total;
			
		let chart = document.getElementById('provincialChart').getContext('2d');
		new Chart(chart,{
			type:'bar',
			data:{
				labels:['Gauteng', 'Western_Cape', 'KwaZulu Natal', 'Eastern Cape', 'Free state', 'Mpumalanga', 'North West', 'Northern Cape', 'Limpopo'],
				datasets:[{
					label:'Cases',
					data:[
						data[data.length -1].provinces.gauteng,
						data[data.length -1].provinces.western_cape,
						data[data.length -1].provinces.kwazulu_natal,
						data[data.length -1].provinces.eastern_cape,
						data[data.length -1].provinces.free_state,
						data[data.length -1].provinces.mpumlanga,
						data[data.length -1].provinces.north_west,
						data[data.length -1].provinces.northern_cape,
						data[data.length -1].provinces.limpopo
					],
					backgroundColor:'red'
				}]
			},

			options:{
				responsive:true,
				maintainAspectRatio:false,
				title:{
					display:true,
					text:'Provincial Cases',
					fontSize:25
				},
				legend:{
					display:false,
				},
			}
		})
			
		})

		.catch(function () {
			
            console.log('error');
		})
	
		fetch('http:coronavirus-19-api.herokuapp.com/countries/south africa')
	.then(function (resp) {
		return resp.json()
	})
	.then(function (data) {
	   
		document.getElementById('confirmed_cases').innerHTML = data.cases;
		document.getElementById('active_cases').innerHTML = data.active;
		document.getElementById('today_cases').innerHTML = data.todayCases;
		document.getElementById('cases_ratio').innerHTML = data.casesPerOneMillion;
		document.getElementById('recovered').innerHTML = data.recovered;
		document.getElementById('deaths').innerHTML = data.deaths;
		document.getElementById('today_deaths').innerHTML = data.todayDeaths;
		document.getElementById('deaths_ratio').innerHTML = data.deathsPerOneMillion;
		document.getElementById('critical').innerHTML = data.critical;
		document.getElementById('tests').innerHTML = data.totalTests;
		document.getElementById('tests_ratio').innerHTML = data.testsPerOneMillion;
		console.log(data);

	})
	.catch(function () {
		
		console.log('error');
	})

	}
