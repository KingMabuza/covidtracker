window.onload = function() {
	RSA();
}
	
	function RSA() {
		fetch('https://covid-za-api.herokuapp.com/cases/timeline/provincial/cumulative')
			.then(function (resp) {
				return resp.json()
			})
			.then(function (data) {

				console.log(data);
				//total cases, today cases, provincial cases
				let tot3 = data[data.length -1].total - data[data.length -2].total;
				document.getElementById('confirmed_cases').innerHTML = data[data.length - 1].total;
				document.getElementById('today_cases').innerHTML =  tot3;

				let chart = document.getElementById('provincialChart').getContext('2d');
				new Chart(chart, {
					type: 'bar',
					data: {
						labels: ['Gauteng', 'Western_Cape', 'KwaZulu Natal', 'Eastern Cape', 'Free state', 'Mpumalanga', 'North West', 'Northern Cape', 'Limpopo'],
						datasets: [{
							label: 'Cases',
							data: [
								data[data.length - 1].provinces.gauteng,
								data[data.length - 1].provinces.western_cape,
								data[data.length - 1].provinces.kwazulu_natal,
								data[data.length - 1].provinces.eastern_cape,
								data[data.length - 1].provinces.free_state,
								data[data.length - 1].provinces.mpumlanga,
								data[data.length - 1].provinces.north_west,
								data[data.length - 1].provinces.northern_cape,
								data[data.length - 1].provinces.limpopo
							],
							backgroundColor: 'red'
						}]
					},

					options: {
						responsive: true,
						maintainAspectRatio: false,
						title: {
							display: true,
							text: 'Provincial Cases',
							fontSize: 25
						},
						legend: {
							display: false,
						},
					}
				})

			})

			.catch(function () {

				console.log('error');
			})
		

		//total tests,icu,deaths,today deaths,timestamp

		fetch("https://covid-za-api.herokuapp.com/cases/timeline/tests")
			.then(function (resp) {
				return resp.json()
			})
			.then(function (data) {
				let death3 = data[data.length -1].deaths - data[data.length -2].deaths;
				document.getElementById('tests').innerHTML = data[data.length - 1].cumulative_tests,
				document.getElementById('critical').innerHTML = data[data.length - 1].critical_icu,
				document.getElementById('deaths').innerHTML = data[data.length - 1].deaths,
				document.getElementById('today_deaths').innerHTML = death3,
				document.getElementById('timestamp').innerHTML = 'last update: ' + data[data.length - 1].date;
				if(death3 <0){
					document.getElementById('today_deaths').innerHTML = 0;
				}
                                if(data[data.length - 1].critical_icu == ""){
                                        critical.innerHTML = "N/A";
				console.log(data);
	}
			//recovered,active cases
		fetch("https://covid19.mathdro.id/api/countries/south africa/recovered")
			.then(function (resp) {
				return resp.json()
			})
			.then(function (data) {
				document.getElementById('recovered').innerHTML = data[0].recovered,
				document.getElementById('active_cases').innerHTML = data[0].active,
				console.log(data);
			})
})
