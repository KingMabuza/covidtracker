window.onload = function(){
	countries();

}


		
function countries() {
	//Afghanistan
    fetch('https:coronavirus-19-api.herokuapp.com/countries/afghanistan')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('afg_confirmed').innerHTML = data.cases;
			document.getElementById('afg_today').innerHTML = data.todayCases;
			document.getElementById('afg_act').innerHTML = data.active;
            document.getElementById('afg_recovered').innerHTML = data.recovered;
			document.getElementById('afg_deaths').innerHTML = data.deaths;
			document.getElementById('afg_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('afg_critical').innerHTML = data.critical;
			document.getElementById('afg_tests').innerHTML = data.totalTests;
			document.getElementById('afg_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('afg_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('afg_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})

		.catch(function () {
			
            console.log('error');
		})

		//Albania
		fetch('https:coronavirus-19-api.herokuapp.com/countries/albania')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('albania_confirmed').innerHTML = data.cases;
			document.getElementById('albania_today').innerHTML = data.todayCases;
			document.getElementById('albania_act').innerHTML = data.active;
            document.getElementById('albania_recovered').innerHTML = data.recovered;
			document.getElementById('albania_deaths').innerHTML = data.deaths;
			document.getElementById('albania_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('albania_critical').innerHTML = data.critical;
			document.getElementById('albania_tests').innerHTML = data.totalTests;
			document.getElementById('albania_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('albania_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('albania_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})

		//
		//Algeria
		fetch('https:coronavirus-19-api.herokuapp.com/countries/algeria')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('algeria_confirmed').innerHTML = data.cases;
			document.getElementById('algeria_today').innerHTML = data.todayCases;
			document.getElementById('algeria_act').innerHTML = data.active;
            document.getElementById('algeria_recovered').innerHTML = data.recovered;
			document.getElementById('algeria_deaths').innerHTML = data.deaths;
			document.getElementById('algeria_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('algeria_critical').innerHTML = data.critical;
			document.getElementById('algeria_tests').innerHTML = data.totalTests;
			document.getElementById('algeria_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('algeria_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('algeria_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})

		//Andorra
		fetch('https:coronavirus-19-api.herokuapp.com/countries/andorra')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('andorra_confirmed').innerHTML = data.cases;
			document.getElementById('andorra_today').innerHTML = data.todayCases;
			document.getElementById('andorra_act').innerHTML = data.active;
            document.getElementById('andorra_recovered').innerHTML = data.recovered;
			document.getElementById('andorra_deaths').innerHTML = data.deaths;
			document.getElementById('andorra_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('andorra_critical').innerHTML = data.critical;
			document.getElementById('andorra_tests').innerHTML = data.totalTests;
			document.getElementById('andorra_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('andorra_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('andorra_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})

		//Angola
		fetch('https:coronavirus-19-api.herokuapp.com/countries/angola')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('angola_confirmed').innerHTML = data.cases;
			document.getElementById('angola_today').innerHTML = data.todayCases;
			document.getElementById('angola_act').innerHTML = data.active;
            document.getElementById('angola_recovered').innerHTML = data.recovered;
			document.getElementById('angola_deaths').innerHTML = data.deaths;
			document.getElementById('angola_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('angola_critical').innerHTML = data.critical;
			document.getElementById('angola_tests').innerHTML = data.totalTests;
			document.getElementById('angola_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('angola_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('angola_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})

		//
		//Anguilla
		fetch('https:coronavirus-19-api.herokuapp.com/countries/anguilla')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('anguilla_confirmed').innerHTML = data.cases;
			document.getElementById('anguilla_today').innerHTML = data.todayCases;
			document.getElementById('anguilla_act').innerHTML = data.active;
            document.getElementById('anguilla_recovered').innerHTML = data.recovered;
			document.getElementById('anguilla_deaths').innerHTML = data.deaths;
			document.getElementById('anguilla_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('anguilla_critical').innerHTML = data.critical;
			document.getElementById('anguilla_tests').innerHTML = data.totalTests;
			document.getElementById('anguilla_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('anguilla_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('anguilla_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		
		//Antigua and Barbuda
		//Albania
		fetch('https:coronavirus-19-api.herokuapp.com/countries/antigua and barbuda')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('antigua_confirmed').innerHTML = data.cases;
			document.getElementById('antigua_today').innerHTML = data.todayCases;
			document.getElementById('antigua_act').innerHTML = data.active;
            document.getElementById('antigua_recovered').innerHTML = data.recovered;
			document.getElementById('antigua_deaths').innerHTML = data.deaths;
			document.getElementById('antigua_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('antigua_critical').innerHTML = data.critical;
			document.getElementById('antigua_tests').innerHTML = data.totalTests;
			document.getElementById('antigua_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('antigua_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('antigua_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})

		//Argentina
		fetch('https:coronavirus-19-api.herokuapp.com/countries/argentina')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('argentina_confirmed').innerHTML = data.cases;
			document.getElementById('argentina_today').innerHTML = data.todayCases;
			document.getElementById('argentina_act').innerHTML = data.active;
            document.getElementById('argentina_recovered').innerHTML = data.recovered;
			document.getElementById('argentina_deaths').innerHTML = data.deaths;
			document.getElementById('argentina_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('argentina_critical').innerHTML = data.critical;
			document.getElementById('argentina_tests').innerHTML = data.totalTests;
			document.getElementById('argentina_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('argentina_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('argentina_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})

		//Armenia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/armenia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('armenia_confirmed').innerHTML = data.cases;
			document.getElementById('armenia_today').innerHTML = data.todayCases;
			document.getElementById('armenia_act').innerHTML = data.active;
            document.getElementById('armenia_recovered').innerHTML = data.recovered;
			document.getElementById('armenia_deaths').innerHTML = data.deaths;
			document.getElementById('armenia_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('armenia_critical').innerHTML = data.critical;
			document.getElementById('armenia_tests').innerHTML = data.totalTests;
			document.getElementById('armenia_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('armenia_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('armenia_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})

		//Aruba
		fetch('https:coronavirus-19-api.herokuapp.com/countries/aruba')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('aruba_confirmed').innerHTML = data.cases;
			document.getElementById('aruba_today').innerHTML = data.todayCases;
			document.getElementById('aruba_act').innerHTML = data.active;
            document.getElementById('aruba_recovered').innerHTML = data.recovered;
			document.getElementById('aruba_deaths').innerHTML = data.deaths;
			document.getElementById('aruba_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('aruba_critical').innerHTML = data.critical;
			document.getElementById('aruba_tests').innerHTML = data.totalTests;
			document.getElementById('aruba_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('aruba_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('aruba_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})

		//Australia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/australia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('australia_confirmed').innerHTML = data.cases;
			document.getElementById('australia_today').innerHTML = data.todayCases;
			document.getElementById('australia_act').innerHTML = data.active;
            document.getElementById('australia_recovered').innerHTML = data.recovered;
			document.getElementById('australia_deaths').innerHTML = data.deaths;
			document.getElementById('australia_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('australia_critical').innerHTML = data.critical;
			document.getElementById('australia_tests').innerHTML = data.totalTests;
			document.getElementById('australia_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('australia_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('australia_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})

		//Austria
		fetch('https:coronavirus-19-api.herokuapp.com/countries/austria')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('austria_confirmed').innerHTML = data.cases;
			document.getElementById('austria_today').innerHTML = data.todayCases;
			document.getElementById('austria_act').innerHTML = data.active;
            document.getElementById('austria_recovered').innerHTML = data.recovered;
			document.getElementById('austria_deaths').innerHTML = data.deaths;
			document.getElementById('austria_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('austria_critical').innerHTML = data.critical;
			document.getElementById('austria_tests').innerHTML = data.totalTests;
			document.getElementById('austria_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('austria_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('austria_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})

		//Azerbaijan
		fetch('https:coronavirus-19-api.herokuapp.com/countries/azerbaijan')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('azerbaijan_confirmed').innerHTML = data.cases;
			document.getElementById('azerbaijan_today').innerHTML = data.todayCases;
			document.getElementById('azerbaijan_act').innerHTML = data.active;
            document.getElementById('azerbaijan_recovered').innerHTML = data.recovered;
			document.getElementById('azerbaijan_deaths').innerHTML = data.deaths;
			document.getElementById('azerbaijan_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('azerbaijan_critical').innerHTML = data.critical;
			document.getElementById('azerbaijan_tests').innerHTML = data.totalTests;
			document.getElementById('azerbaijan_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('azerbaijan_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('azerbaijan_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})

		//Bahamas
		fetch('https:coronavirus-19-api.herokuapp.com/countries/bahamas')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('bahamas_confirmed').innerHTML = data.cases;
			document.getElementById('bahamas_today').innerHTML = data.todayCases;
			document.getElementById('bahamas_act').innerHTML = data.active;
            document.getElementById('bahamas_recovered').innerHTML = data.recovered;
			document.getElementById('bahamas_deaths').innerHTML = data.deaths;
			document.getElementById('bahamas_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('bahamas_critical').innerHTML = data.critical;
			document.getElementById('bahamas_tests').innerHTML = data.totalTests;
			document.getElementById('bahamas_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('bahamas_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('bahamas_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})

		//Bahrain
		fetch('https:coronavirus-19-api.herokuapp.com/countries/bahrain')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('bahrain_confirmed').innerHTML = data.cases;
			document.getElementById('bahrain_today').innerHTML = data.todayCases;
			document.getElementById('bahrain_act').innerHTML = data.active;
            document.getElementById('bahrain_recovered').innerHTML = data.recovered;
			document.getElementById('bahrain_deaths').innerHTML = data.deaths;
			document.getElementById('bahrain_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('bahrain_critical').innerHTML = data.critical;
			document.getElementById('bahrain_tests').innerHTML = data.totalTests;
			document.getElementById('bahrain_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('bahrain_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('bahrain_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Bangladesh
		fetch('https:coronavirus-19-api.herokuapp.com/countries/bangladesh')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('bangladesh_confirmed').innerHTML = data.cases;
			document.getElementById('bangladesh_today').innerHTML = data.todayCases;
			document.getElementById('bangladesh_act').innerHTML = data.active;
            document.getElementById('bangladesh_recovered').innerHTML = data.recovered;
			document.getElementById('bangladesh_deaths').innerHTML = data.deaths;
			document.getElementById('bangladesh_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('bangladesh_critical').innerHTML = data.critical;
			document.getElementById('bangladesh_tests').innerHTML = data.totalTests;
			document.getElementById('bangladesh_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('bangladesh_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('bangladesh_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Barbados
		fetch('https:coronavirus-19-api.herokuapp.com/countries/barbados')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('barbados_confirmed').innerHTML = data.cases;
			document.getElementById('barbados_today').innerHTML = data.todayCases;
			document.getElementById('barbados_act').innerHTML = data.active;
            document.getElementById('barbados_recovered').innerHTML = data.recovered;
			document.getElementById('barbados_deaths').innerHTML = data.deaths;
			document.getElementById('barbados_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('barbados_critical').innerHTML = data.critical;
			document.getElementById('barbados_tests').innerHTML = data.totalTests;
			document.getElementById('barbados_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('barbados_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('barbados_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Belarus
		fetch('https:coronavirus-19-api.herokuapp.com/countries/belarus')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('belarus_confirmed').innerHTML = data.cases;
			document.getElementById('belarus_today').innerHTML = data.todayCases;
			document.getElementById('belarus_act').innerHTML = data.active;
            document.getElementById('belarus_recovered').innerHTML = data.recovered;
			document.getElementById('belarus_deaths').innerHTML = data.deaths;
			document.getElementById('belarus_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('belarus_critical').innerHTML = data.critical;
			document.getElementById('belarus_tests').innerHTML = data.totalTests;
			document.getElementById('belarus_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('belarus_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('belarus_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Belgium
		fetch('https:coronavirus-19-api.herokuapp.com/countries/belgium')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('belgium_confirmed').innerHTML = data.cases;
			document.getElementById('belgium_today').innerHTML = data.todayCases;
			document.getElementById('belgium_act').innerHTML = data.active;
            document.getElementById('belgium_recovered').innerHTML = data.recovered;
			document.getElementById('belgium_deaths').innerHTML = data.deaths;
			document.getElementById('belgium_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('belgium_critical').innerHTML = data.critical;
			document.getElementById('belgium_tests').innerHTML = data.totalTests;
			document.getElementById('belgium_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('belgium_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('belgium_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Belize
		fetch('https:coronavirus-19-api.herokuapp.com/countries/belize')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('belize_confirmed').innerHTML = data.cases;
			document.getElementById('belize_today').innerHTML = data.todayCases;
			document.getElementById('belize_act').innerHTML = data.active;
            document.getElementById('belize_recovered').innerHTML = data.recovered;
			document.getElementById('belize_deaths').innerHTML = data.deaths;
			document.getElementById('belize_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('belize_critical').innerHTML = data.critical;
			document.getElementById('belize_tests').innerHTML = data.totalTests;
			document.getElementById('belize_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('belize_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('belize_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Benin
		fetch('https:coronavirus-19-api.herokuapp.com/countries/benin')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('benin_confirmed').innerHTML = data.cases;
			document.getElementById('benin_today').innerHTML = data.todayCases;
			document.getElementById('benin_act').innerHTML = data.active;
            document.getElementById('benin_recovered').innerHTML = data.recovered;
			document.getElementById('benin_deaths').innerHTML = data.deaths;
			document.getElementById('benin_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('benin_critical').innerHTML = data.critical;
			document.getElementById('benin_tests').innerHTML = data.totalTests;
			document.getElementById('benin_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('benin_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('benin_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Bermuda
		fetch('https:coronavirus-19-api.herokuapp.com/countries/bermuda')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('bermuda_confirmed').innerHTML = data.cases;
			document.getElementById('bermuda_today').innerHTML = data.todayCases;
			document.getElementById('bermuda_act').innerHTML = data.active;
            document.getElementById('bermuda_recovered').innerHTML = data.recovered;
			document.getElementById('bermuda_deaths').innerHTML = data.deaths;
			document.getElementById('bermuda_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('bermuda_critical').innerHTML = data.critical;
			document.getElementById('bermuda_tests').innerHTML = data.totalTests;
			document.getElementById('bermuda_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('bermuda_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('bermuda_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Bhutan
		fetch('https:coronavirus-19-api.herokuapp.com/countries/bhutan')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('bhutan_confirmed').innerHTML = data.cases;
			document.getElementById('bhutan_today').innerHTML = data.todayCases;
			document.getElementById('bhutan_act').innerHTML = data.active;
            document.getElementById('bhutan_recovered').innerHTML = data.recovered;
			document.getElementById('bhutan_deaths').innerHTML = data.deaths;
			document.getElementById('bhutan_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('bhutan_critical').innerHTML = data.critical;
			document.getElementById('bhutan_tests').innerHTML = data.totalTests;
			document.getElementById('bhutan_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('bhutan_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('bhutan_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Bolivia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/bolivia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('bolivia_confirmed').innerHTML = data.cases;
			document.getElementById('bolivia_today').innerHTML = data.todayCases;
			document.getElementById('bolivia_act').innerHTML = data.active;
            document.getElementById('bolivia_recovered').innerHTML = data.recovered;
			document.getElementById('bolivia_deaths').innerHTML = data.deaths;
			document.getElementById('bolivia_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('bolivia_critical').innerHTML = data.critical;
			document.getElementById('bolivia_tests').innerHTML = data.totalTests;
			document.getElementById('bolivia_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('bolivia_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('bolivia_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Bosnia and Herzegovina
		fetch('https:coronavirus-19-api.herokuapp.com/countries/bosnia and herzegovina')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('bosnia_confirmed').innerHTML = data.cases;
			document.getElementById('bosnia_today').innerHTML = data.todayCases;
			document.getElementById('bosnia_act').innerHTML = data.active;
            document.getElementById('bosnia_recovered').innerHTML = data.recovered;
			document.getElementById('bosnia_deaths').innerHTML = data.deaths;
			document.getElementById('bosnia_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('bosnia_critical').innerHTML = data.critical;
			document.getElementById('bosnia_tests').innerHTML = data.totalTests;
			document.getElementById('bosnia_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('bosnia_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('bosnia_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Botswana
		fetch('https:coronavirus-19-api.herokuapp.com/countries/botswana')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('botswana_confirmed').innerHTML = data.cases;
			document.getElementById('botswana_today').innerHTML = data.todayCases;
			document.getElementById('botswana_act').innerHTML = data.active;
            document.getElementById('botswana_recovered').innerHTML = data.recovered;
			document.getElementById('botswana_deaths').innerHTML = data.deaths;
			document.getElementById('botswana_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('botswana_critical').innerHTML = data.critical;
			document.getElementById('botswana_tests').innerHTML = data.totalTests;
			document.getElementById('botswana_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('botswana_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('botswana_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Brazil
		fetch('https:coronavirus-19-api.herokuapp.com/countries/brazil')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('brazil_confirmed').innerHTML = data.cases;
			document.getElementById('brazil_today').innerHTML = data.todayCases;
			document.getElementById('brazil_act').innerHTML = data.active;
            document.getElementById('brazil_recovered').innerHTML = data.recovered;
			document.getElementById('brazil_deaths').innerHTML = data.deaths;
			document.getElementById('brazil_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('brazil_critical').innerHTML = data.critical;
			document.getElementById('brazil_tests').innerHTML = data.totalTests;
			document.getElementById('brazil_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('brazil_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('brazil_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//British Virgin Islands
		fetch('https:coronavirus-19-api.herokuapp.com/countries/british virgin islands')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('british_confirmed').innerHTML = data.cases;
			document.getElementById('british_today').innerHTML = data.todayCases;
			document.getElementById('british_act').innerHTML = data.active;
            document.getElementById('british_recovered').innerHTML = data.recovered;
			document.getElementById('british_deaths').innerHTML = data.deaths;
			document.getElementById('british_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('british_critical').innerHTML = data.critical;
			document.getElementById('british_tests').innerHTML = data.totalTests;
			document.getElementById('british_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('british_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('british_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Brunei
		fetch('https:coronavirus-19-api.herokuapp.com/countries/brunei')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('brunei_confirmed').innerHTML = data.cases;
			document.getElementById('brunei_today').innerHTML = data.todayCases;
			document.getElementById('brunei_act').innerHTML = data.active;
            document.getElementById('brunei_recovered').innerHTML = data.recovered;
			document.getElementById('brunei_deaths').innerHTML = data.deaths;
			document.getElementById('brunei_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('brunei_critical').innerHTML = data.critical;
			document.getElementById('brunei_tests').innerHTML = data.totalTests;
			document.getElementById('brunei_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('brunei_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('brunei_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Bulgaria
		fetch('https:coronavirus-19-api.herokuapp.com/countries/bulgaria')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('bulgaria_confirmed').innerHTML = data.cases;
			document.getElementById('bulgaria_today').innerHTML = data.todayCases;
			document.getElementById('bulgaria_act').innerHTML = data.active;
            document.getElementById('bulgaria_recovered').innerHTML = data.recovered;
			document.getElementById('bulgaria_deaths').innerHTML = data.deaths;
			document.getElementById('bulgaria_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('bulgaria_critical').innerHTML = data.critical;
			document.getElementById('bulgaria_tests').innerHTML = data.totalTests;
			document.getElementById('bulgaria_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('bulgaria_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('bulgaria_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Burkina Faso
		fetch('https:coronavirus-19-api.herokuapp.com/countries/burkina faso')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('burkina_confirmed').innerHTML = data.cases;
			document.getElementById('burkina_today').innerHTML = data.todayCases;
			document.getElementById('burkina_act').innerHTML = data.active;
            document.getElementById('burkina_recovered').innerHTML = data.recovered;
			document.getElementById('burkina_deaths').innerHTML = data.deaths;
			document.getElementById('burkina_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('burkina_critical').innerHTML = data.critical;
			document.getElementById('burkina_tests').innerHTML = data.totalTests;
			document.getElementById('burkina_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('burkina_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('burkina_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Burundi

		fetch('https:coronavirus-19-api.herokuapp.com/countries/burundi')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('burundi_confirmed').innerHTML = data.cases;
			document.getElementById('burundi_today').innerHTML = data.todayCases;
			document.getElementById('burundi_act').innerHTML = data.active;
            document.getElementById('burundi_recovered').innerHTML = data.recovered;
			document.getElementById('burundi_deaths').innerHTML = data.deaths;
			document.getElementById('burundi_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('burundi_critical').innerHTML = data.critical;
			document.getElementById('burundi_tests').innerHTML = data.totalTests;
			document.getElementById('burundi_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('burundi_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('burundi_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})

		//CAR

		fetch('https:coronavirus-19-api.herokuapp.com/countries/car')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('car_confirmed').innerHTML = data.cases;
			document.getElementById('car_today').innerHTML = data.todayCases;
			document.getElementById('car_act').innerHTML = data.active;
            document.getElementById('car_recovered').innerHTML = data.recovered;
			document.getElementById('car_deaths').innerHTML = data.deaths;
			document.getElementById('car_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('car_critical').innerHTML = data.critical;
			document.getElementById('car_tests').innerHTML = data.totalTests;
			document.getElementById('car_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('car_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('car_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})

		//Cabo Verde

		fetch('https:coronavirus-19-api.herokuapp.com/countries/cabo verde')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('cabo_confirmed').innerHTML = data.cases;
			document.getElementById('cabo_today').innerHTML = data.todayCases;
			document.getElementById('cabo_act').innerHTML = data.active;
            document.getElementById('cabo_recovered').innerHTML = data.recovered;
			document.getElementById('cabo_deaths').innerHTML = data.deaths;
			document.getElementById('cabo_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('cabo_critical').innerHTML = data.critical;
			document.getElementById('cabo_tests').innerHTML = data.totalTests;
			document.getElementById('cabo_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('cabo_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('cabo_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})

		//Cambodia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/cambodia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('cambodia_confirmed').innerHTML = data.cases;
			document.getElementById('cambodia_today').innerHTML = data.todayCases;
			document.getElementById('cambodia_act').innerHTML = data.active;
            document.getElementById('cambodia_recovered').innerHTML = data.recovered;
			document.getElementById('cambodia_deaths').innerHTML = data.deaths;
			document.getElementById('cambodia_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('cambodia_critical').innerHTML = data.critical;
			document.getElementById('cambodia_tests').innerHTML = data.totalTests;
			document.getElementById('cambodia_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('cambodia_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('cambodia_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})

		//Cameroon
		fetch('https:coronavirus-19-api.herokuapp.com/countries/cameroon')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('cameroon_confirmed').innerHTML = data.cases;
			document.getElementById('cameroon_today').innerHTML = data.todayCases;
			document.getElementById('cameroon_act').innerHTML = data.active;
            document.getElementById('cameroon_recovered').innerHTML = data.recovered;
			document.getElementById('cameroon_deaths').innerHTML = data.deaths;
			document.getElementById('cameroon_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('cameroon_critical').innerHTML = data.critical;
			document.getElementById('cameroon_tests').innerHTML = data.totalTests;
			document.getElementById('cameroon_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('cameroon_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('cameroon_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})

		//Canada
		fetch('https:coronavirus-19-api.herokuapp.com/countries/canada')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('canada_confirmed').innerHTML = data.cases;
			document.getElementById('canada_today').innerHTML = data.todayCases;
			document.getElementById('canada_act').innerHTML = data.active;
            document.getElementById('canada_recovered').innerHTML = data.recovered;
			document.getElementById('canada_deaths').innerHTML = data.deaths;
			document.getElementById('canada_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('canada_critical').innerHTML = data.critical;
			document.getElementById('canada_tests').innerHTML = data.totalTests;
			document.getElementById('canada_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('canada_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('canada_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})

		//Caribbean Netherlands
		fetch('https:coronavirus-19-api.herokuapp.com/countries/caribbean netherlands')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('caribbean_confirmed').innerHTML = data.cases;
			document.getElementById('caribbean_today').innerHTML = data.todayCases;
			document.getElementById('caribbean_act').innerHTML = data.active;
            document.getElementById('caribbean_recovered').innerHTML = data.recovered;
			document.getElementById('caribbean_deaths').innerHTML = data.deaths;
			document.getElementById('caribbean_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('caribbean_critical').innerHTML = data.critical;
			document.getElementById('caribbean_tests').innerHTML = data.totalTests;
			document.getElementById('caribbean_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('caribbean_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('caribbean_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Cayman Islands
		fetch('https:coronavirus-19-api.herokuapp.com/countries/cayman islands')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('cayman_confirmed').innerHTML = data.cases;
			document.getElementById('cayman_today').innerHTML = data.todayCases;
			document.getElementById('cayman_act').innerHTML = data.active;
            document.getElementById('cayman_recovered').innerHTML = data.recovered;
			document.getElementById('cayman_deaths').innerHTML = data.deaths;
			document.getElementById('cayman_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('cayman_critical').innerHTML = data.critical;
			document.getElementById('cayman_tests').innerHTML = data.totalTests;
			document.getElementById('cayman_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('cayman_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('cayman_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Chad

		fetch('https:coronavirus-19-api.herokuapp.com/countries/chad')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('chad_confirmed').innerHTML = data.cases;
			document.getElementById('chad_today').innerHTML = data.todayCases;
			document.getElementById('chad_act').innerHTML = data.active;
            document.getElementById('chad_recovered').innerHTML = data.recovered;
			document.getElementById('chad_deaths').innerHTML = data.deaths;
			document.getElementById('chad_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('chad_critical').innerHTML = data.critical;
			document.getElementById('chad_tests').innerHTML = data.totalTests;
			document.getElementById('chad_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('chad_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('chad_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Channel Islands
		fetch('https:coronavirus-19-api.herokuapp.com/countries/channel islands')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('channel_confirmed').innerHTML = data.cases;
			document.getElementById('channel_today').innerHTML = data.todayCases;
			document.getElementById('channel_act').innerHTML = data.active;
            document.getElementById('channel_recovered').innerHTML = data.recovered;
			document.getElementById('channel_deaths').innerHTML = data.deaths;
			document.getElementById('channel_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('channel_critical').innerHTML = data.critical;
			document.getElementById('channel_tests').innerHTML = data.totalTests;
			document.getElementById('channel_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('channel_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('channel_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Chile
		fetch('https:coronavirus-19-api.herokuapp.com/countries/chile')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('chile_confirmed').innerHTML = data.cases;
			document.getElementById('chile_today').innerHTML = data.todayCases;
			document.getElementById('chile_act').innerHTML = data.active;
            document.getElementById('chile_recovered').innerHTML = data.recovered;
			document.getElementById('chile_deaths').innerHTML = data.deaths;
			document.getElementById('chile_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('chile_critical').innerHTML = data.critical;
			document.getElementById('chile_tests').innerHTML = data.totalTests;
			document.getElementById('chile_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('chile_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('chile_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//China
		fetch('https:coronavirus-19-api.herokuapp.com/countries/china')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('china_confirmed').innerHTML = data.cases;
			document.getElementById('china_today').innerHTML = data.todayCases;
			document.getElementById('china_act').innerHTML = data.active;
            document.getElementById('china_recovered').innerHTML = data.recovered;
			document.getElementById('china_deaths').innerHTML = data.deaths;
			document.getElementById('china_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('china_critical').innerHTML = data.critical;
			document.getElementById('china_tests').innerHTML = data.totalTests;
			document.getElementById('china_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('china_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('china_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Colombia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/colombia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('colombia_confirmed').innerHTML = data.cases;
			document.getElementById('colombia_today').innerHTML = data.todayCases;
			document.getElementById('colombia_act').innerHTML = data.active;
            document.getElementById('colombia_recovered').innerHTML = data.recovered;
			document.getElementById('colombia_deaths').innerHTML = data.deaths;
			document.getElementById('colombia_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('colombia_critical').innerHTML = data.critical;
			document.getElementById('colombia_tests').innerHTML = data.totalTests;
			document.getElementById('colombia_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('colombia_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('colombia_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Congo
		fetch('https:coronavirus-19-api.herokuapp.com/countries/congo')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('congo_confirmed').innerHTML = data.cases;
			document.getElementById('congo_today').innerHTML = data.todayCases;
			document.getElementById('congo_act').innerHTML = data.active;
            document.getElementById('congo_recovered').innerHTML = data.recovered;
			document.getElementById('congo_deaths').innerHTML = data.deaths;
			document.getElementById('congo_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('congo_critical').innerHTML = data.critical;
			document.getElementById('congo_tests').innerHTML = data.totalTests;
			document.getElementById('congo_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('congo_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('congo_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Costa Rica
		fetch('https:coronavirus-19-api.herokuapp.com/countries/costa rica')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('costa_confirmed').innerHTML = data.cases;
			document.getElementById('costa_today').innerHTML = data.todayCases;
			document.getElementById('costa_act').innerHTML = data.active;
            document.getElementById('costa_recovered').innerHTML = data.recovered;
			document.getElementById('costa_deaths').innerHTML = data.deaths;
			document.getElementById('costa_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('costa_critical').innerHTML = data.critical;
			document.getElementById('costa_tests').innerHTML = data.totalTests;
			document.getElementById('costa_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('costa_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('costa_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Croatia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/croatia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('croatia_confirmed').innerHTML = data.cases;
			document.getElementById('croatia_today').innerHTML = data.todayCases;
			document.getElementById('croatia_act').innerHTML = data.active;
            document.getElementById('croatia_recovered').innerHTML = data.recovered;
			document.getElementById('croatia_deaths').innerHTML = data.deaths;
			document.getElementById('croatia_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('croatia_critical').innerHTML = data.critical;
			document.getElementById('croatia_tests').innerHTML = data.totalTests;
			document.getElementById('croatia_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('croatia_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('croatia_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Cuba
		fetch('https:coronavirus-19-api.herokuapp.com/countries/cuba')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('cuba_confirmed').innerHTML = data.cases;
			document.getElementById('cuba_today').innerHTML = data.todayCases;
			document.getElementById('cuba_act').innerHTML = data.active;
            document.getElementById('cuba_recovered').innerHTML = data.recovered;
			document.getElementById('cuba_deaths').innerHTML = data.deaths;
			document.getElementById('cuba_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('cuba_critical').innerHTML = data.critical;
			document.getElementById('cuba_tests').innerHTML = data.totalTests;
			document.getElementById('cuba_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('cuba_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('cuba_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Curaçao
		fetch('https:coronavirus-19-api.herokuapp.com/countries/Curaçao')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('curacao_confirmed').innerHTML = data.cases;
			document.getElementById('curacao_today').innerHTML = data.todayCases;
			document.getElementById('curacao_act').innerHTML = data.active;
            document.getElementById('curacao_recovered').innerHTML = data.recovered;
			document.getElementById('curacao_deaths').innerHTML = data.deaths;
			document.getElementById('curacao_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('curacao_critical').innerHTML = data.critical;
			document.getElementById('curacao_tests').innerHTML = data.totalTests;
			document.getElementById('curacao_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('curacao_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('curacao_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})

		//Cyprus
		fetch('https:coronavirus-19-api.herokuapp.com/countries/cyprus')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('cyprus_confirmed').innerHTML = data.cases;
			document.getElementById('cyprus_today').innerHTML = data.todayCases;
			document.getElementById('cyprus_act').innerHTML = data.active;
            document.getElementById('cyprus_recovered').innerHTML = data.recovered;
			document.getElementById('cyprus_deaths').innerHTML = data.deaths;
			document.getElementById('cyprus_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('cyprus_critical').innerHTML = data.critical;
			document.getElementById('cyprus_tests').innerHTML = data.totalTests;
			document.getElementById('cyprus_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('cyprus_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('cyprus_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Czechia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/czechia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('czechia_confirmed').innerHTML = data.cases;
			document.getElementById('czechia_today').innerHTML = data.todayCases;
			document.getElementById('czechia_act').innerHTML = data.active;
            document.getElementById('czechia_recovered').innerHTML = data.recovered;
			document.getElementById('czechia_deaths').innerHTML = data.deaths;
			document.getElementById('czechia_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('czechia_critical').innerHTML = data.critical;
			document.getElementById('czechia_tests').innerHTML = data.totalTests;
			document.getElementById('czechia_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('czechia_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('czechia_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//DRC

		fetch('https:coronavirus-19-api.herokuapp.com/countries/drc')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('drc_confirmed').innerHTML = data.cases;
			document.getElementById('drc_today').innerHTML = data.todayCases;
			document.getElementById('drc_act').innerHTML = data.active;
            document.getElementById('drc_recovered').innerHTML = data.recovered;
			document.getElementById('drc_deaths').innerHTML = data.deaths;
			document.getElementById('drc_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('drc_critical').innerHTML = data.critical;
			document.getElementById('drc_tests').innerHTML = data.totalTests;
			document.getElementById('drc_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('drc_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('drc_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Denmark
		fetch('https:coronavirus-19-api.herokuapp.com/countries/denmark')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('denmark_confirmed').innerHTML = data.cases;
			document.getElementById('denmark_today').innerHTML = data.todayCases;
			document.getElementById('denmark_act').innerHTML = data.active;
            document.getElementById('denmark_recovered').innerHTML = data.recovered;
			document.getElementById('denmark_deaths').innerHTML = data.deaths;
			document.getElementById('denmark_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('denmark_critical').innerHTML = data.critical;
			document.getElementById('denmark_tests').innerHTML = data.totalTests;
			document.getElementById('denmark_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('denmark_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('denmark_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Djibouti
		fetch('https:coronavirus-19-api.herokuapp.com/countries/djibouti')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('djibouti_confirmed').innerHTML = data.cases;
			document.getElementById('djibouti_today').innerHTML = data.todayCases;
			document.getElementById('djibouti_act').innerHTML = data.active;
            document.getElementById('djibouti_recovered').innerHTML = data.recovered;
			document.getElementById('djibouti_deaths').innerHTML = data.deaths;
			document.getElementById('djibouti_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('djibouti_critical').innerHTML = data.critical;
			document.getElementById('djibouti_tests').innerHTML = data.totalTests;
			document.getElementById('djibouti_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('djibouti_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('djibouti_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})

		//Dominica
		fetch('https:coronavirus-19-api.herokuapp.com/countries/dominica')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('dominica_confirmed').innerHTML = data.cases;
			document.getElementById('dominica_today').innerHTML = data.todayCases;
			document.getElementById('dominica_act').innerHTML = data.active;
            document.getElementById('dominica_recovered').innerHTML = data.recovered;
			document.getElementById('dominica_deaths').innerHTML = data.deaths;
			document.getElementById('dominica_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('dominica_critical').innerHTML = data.critical;
			document.getElementById('dominica_tests').innerHTML = data.totalTests;
			document.getElementById('dominica_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('dominica_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('dominica_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Dominican Republic
		fetch('https:coronavirus-19-api.herokuapp.com/countries/dominican republic')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('dominican_confirmed').innerHTML = data.cases;
			document.getElementById('dominican_today').innerHTML = data.todayCases;
			document.getElementById('dominican_act').innerHTML = data.active;
            document.getElementById('dominican_recovered').innerHTML = data.recovered;
			document.getElementById('dominican_deaths').innerHTML = data.deaths;
			document.getElementById('dominican_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('dominican_critical').innerHTML = data.critical;
			document.getElementById('dominican_tests').innerHTML = data.totalTests;
			document.getElementById('dominican_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('dominican_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('dominican_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Ecuador
		fetch('https:coronavirus-19-api.herokuapp.com/countries/ecuador')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('ecuador_confirmed').innerHTML = data.cases;
			document.getElementById('ecuador_today').innerHTML = data.todayCases;
			document.getElementById('ecuador_act').innerHTML = data.active;
            document.getElementById('ecuador_recovered').innerHTML = data.recovered;
			document.getElementById('ecuador_deaths').innerHTML = data.deaths;
			document.getElementById('ecuador_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('ecuador_critical').innerHTML = data.critical;
			document.getElementById('ecuador_tests').innerHTML = data.totalTests;
			document.getElementById('ecuador_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('ecuador_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('ecuador_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Egypt
		fetch('https:coronavirus-19-api.herokuapp.com/countries/egypt')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('egypt_confirmed').innerHTML = data.cases;
			document.getElementById('egypt_today').innerHTML = data.todayCases;
			document.getElementById('egypt_act').innerHTML = data.active;
            document.getElementById('egypt_recovered').innerHTML = data.recovered;
			document.getElementById('egypt_deaths').innerHTML = data.deaths;
			document.getElementById('egypt_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('egypt_critical').innerHTML = data.critical;
			document.getElementById('egypt_tests').innerHTML = data.totalTests;
			document.getElementById('egypt_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('egypt_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('egypt_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//El Salvador
		fetch('https:coronavirus-19-api.herokuapp.com/countries/el salvador')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('el_confirmed').innerHTML = data.cases;
			document.getElementById('el_today').innerHTML = data.todayCases;
			document.getElementById('el_act').innerHTML = data.active;
            document.getElementById('el_recovered').innerHTML = data.recovered;
			document.getElementById('el_deaths').innerHTML = data.deaths;
			document.getElementById('el_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('el_critical').innerHTML = data.critical;
			document.getElementById('el_tests').innerHTML = data.totalTests;
			document.getElementById('el_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('el_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('el_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Equatorial Guinea
		fetch('https:coronavirus-19-api.herokuapp.com/countries/equatorial guinea')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('equatorial_confirmed').innerHTML = data.cases;
			document.getElementById('equatorial_today').innerHTML = data.todayCases;
			document.getElementById('equatorial_act').innerHTML = data.active;
            document.getElementById('equatorial_recovered').innerHTML = data.recovered;
			document.getElementById('equatorial_deaths').innerHTML = data.deaths;
			document.getElementById('equatorial_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('equatorial_critical').innerHTML = data.critical;
			document.getElementById('equatorial_tests').innerHTML = data.totalTests;
			document.getElementById('equatorial_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('equatorial_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('equatorial_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Eritrea
		fetch('https:coronavirus-19-api.herokuapp.com/countries/eritrea')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('eritrea_confirmed').innerHTML = data.cases;
			document.getElementById('eritrea_today').innerHTML = data.todayCases;
			document.getElementById('eritrea_act').innerHTML = data.active;
            document.getElementById('eritrea_recovered').innerHTML = data.recovered;
			document.getElementById('eritrea_deaths').innerHTML = data.deaths;
			document.getElementById('eritrea_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('eritrea_critical').innerHTML = data.critical;
			document.getElementById('eritrea_tests').innerHTML = data.totalTests;
			document.getElementById('eritrea_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('eritrea_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('eritrea_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Estonia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/estonia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('estonia_confirmed').innerHTML = data.cases;
			document.getElementById('estonia_today').innerHTML = data.todayCases;
			document.getElementById('estonia_act').innerHTML = data.active;
            document.getElementById('estonia_recovered').innerHTML = data.recovered;
			document.getElementById('estonia_deaths').innerHTML = data.deaths;
			document.getElementById('estonia_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('estonia_critical').innerHTML = data.critical;
			document.getElementById('estonia_tests').innerHTML = data.totalTests;
			document.getElementById('estonia_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('estonia_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('estonia_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Eswatini
		fetch('https:coronavirus-19-api.herokuapp.com/countries/eswatini')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('eswatini_confirmed').innerHTML = data.cases;
			document.getElementById('eswatini_today').innerHTML = data.todayCases;
			document.getElementById('eswatini_act').innerHTML = data.active;
            document.getElementById('eswatini_recovered').innerHTML = data.recovered;
			document.getElementById('eswatini_deaths').innerHTML = data.deaths;
			document.getElementById('eswatini_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('eswatini_critical').innerHTML = data.critical;
			document.getElementById('eswatini_tests').innerHTML = data.totalTests;
			document.getElementById('eswatini_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('eswatini_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('eswatini_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Ethiopia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/ethiopia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('ethiopia_confirmed').innerHTML = data.cases;
			document.getElementById('ethiopia_today').innerHTML = data.todayCases;
			document.getElementById('ethiopia_act').innerHTML = data.active;
            document.getElementById('ethiopia_recovered').innerHTML = data.recovered;
			document.getElementById('ethiopia_deaths').innerHTML = data.deaths;
			document.getElementById('ethiopia_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('ethiopia_critical').innerHTML = data.critical;
			document.getElementById('ethiopia_tests').innerHTML = data.totalTests;
			document.getElementById('ethiopia_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('ethiopia_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('ethiopia_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Faeroe Islands
		fetch('https:coronavirus-19-api.herokuapp.com/countries/faeroe islands')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('faeroe_confirmed').innerHTML = data.cases;
			document.getElementById('faeroe_today').innerHTML = data.todayCases;
			document.getElementById('faeroe_act').innerHTML = data.active;
            document.getElementById('faeroe_recovered').innerHTML = data.recovered;
			document.getElementById('faeroe_deaths').innerHTML = data.deaths;
			document.getElementById('faeroe_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('faeroe_critical').innerHTML = data.critical;
			document.getElementById('faeroe_tests').innerHTML = data.totalTests;
			document.getElementById('faeroe_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('faeroe_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('faeroe_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Falkland Islands
		fetch('https:coronavirus-19-api.herokuapp.com/countries/falkland islands')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('falkland_confirmed').innerHTML = data.cases;
			document.getElementById('falkland_today').innerHTML = data.todayCases;
			document.getElementById('falkland_act').innerHTML = data.active;
            document.getElementById('falkland_recovered').innerHTML = data.recovered;
			document.getElementById('falkland_deaths').innerHTML = data.deaths;
			document.getElementById('falkland_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('falkland_critical').innerHTML = data.critical;
			document.getElementById('falkland_tests').innerHTML = data.totalTests;
			document.getElementById('falkland_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('falkland_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('falkland_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Fiji
		fetch('https:coronavirus-19-api.herokuapp.com/countries/fiji')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('fiji_confirmed').innerHTML = data.cases;
			document.getElementById('fiji_today').innerHTML = data.todayCases;
			document.getElementById('fiji_act').innerHTML = data.active;
            document.getElementById('fiji_recovered').innerHTML = data.recovered;
			document.getElementById('fiji_deaths').innerHTML = data.deaths;
			document.getElementById('fiji_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('fiji_critical').innerHTML = data.critical;
			document.getElementById('fiji_tests').innerHTML = data.totalTests;
			document.getElementById('fiji_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('fiji_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('fiji_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Finland
		fetch('https:coronavirus-19-api.herokuapp.com/countries/finland')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('finland_confirmed').innerHTML = data.cases;
			document.getElementById('finland_today').innerHTML = data.todayCases;
			document.getElementById('finland_act').innerHTML = data.active;
            document.getElementById('finland_recovered').innerHTML = data.recovered;
			document.getElementById('finland_deaths').innerHTML = data.deaths;
			document.getElementById('finland_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('finland_critical').innerHTML = data.critical;
			document.getElementById('finland_tests').innerHTML = data.totalTests;
			document.getElementById('finland_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('finland_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('finland_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//France
		fetch('https:coronavirus-19-api.herokuapp.com/countries/france')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('france_confirmed').innerHTML = data.cases;
			document.getElementById('france_today').innerHTML = data.todayCases;
			document.getElementById('france_act').innerHTML = data.active;
            document.getElementById('france_recovered').innerHTML = data.recovered;
			document.getElementById('france_deaths').innerHTML = data.deaths;
			document.getElementById('france_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('france_critical').innerHTML = data.critical;
			document.getElementById('france_tests').innerHTML = data.totalTests;
			document.getElementById('france_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('france_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('france_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//French Guiana
		fetch('https:coronavirus-19-api.herokuapp.com/countries/french guiana')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('frenchG_confirmed').innerHTML = data.cases;
			document.getElementById('frenchG_today').innerHTML = data.todayCases;
			document.getElementById('frenchG_act').innerHTML = data.active;
            document.getElementById('frenchG_recovered').innerHTML = data.recovered;
			document.getElementById('frenchG_deaths').innerHTML = data.deaths;
			document.getElementById('frenchG_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('frenchG_critical').innerHTML = data.critical;
			document.getElementById('frenchG_tests').innerHTML = data.totalTests;
			document.getElementById('frenchG_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('frenchG_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('frenchG_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//French Polynesia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/french polynesia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('frenchP_confirmed').innerHTML = data.cases;
			document.getElementById('frenchP_today').innerHTML = data.todayCases;
			document.getElementById('frenchP_act').innerHTML = data.active;
            document.getElementById('frenchP_recovered').innerHTML = data.recovered;
			document.getElementById('frenchP_deaths').innerHTML = data.deaths;
			document.getElementById('frenchP_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('frenchP_critical').innerHTML = data.critical;
			document.getElementById('frenchP_tests').innerHTML = data.totalTests;
			document.getElementById('frenchP_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('frenchP_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('frenchP_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})


		//Gabon
		fetch('https:coronavirus-19-api.herokuapp.com/countries/gabon')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('gabon_confirmed').innerHTML = data.cases;
			document.getElementById('gabon_today').innerHTML = data.todayCases;
			document.getElementById('gabon_act').innerHTML = data.active;
            document.getElementById('gabon_recovered').innerHTML = data.recovered;
			document.getElementById('gabon_deaths').innerHTML = data.deaths;
			document.getElementById('gabon_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('gabon_critical').innerHTML = data.critical;
			document.getElementById('gabon_tests').innerHTML = data.totalTests;
			document.getElementById('gabon_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('gabon_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('gabon_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Gambia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/gambia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('gambia_confirmed').innerHTML = data.cases;
			document.getElementById('gambia_today').innerHTML = data.todayCases;
			document.getElementById('gambia_act').innerHTML = data.active;
            document.getElementById('gambia_recovered').innerHTML = data.recovered;
			document.getElementById('gambia_deaths').innerHTML = data.deaths;
			document.getElementById('gambia_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('gambia_critical').innerHTML = data.critical;
			document.getElementById('gambia_tests').innerHTML = data.totalTests;
			document.getElementById('gambia_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('gambia_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('gambia_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Georgia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/georgia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('georgia_confirmed').innerHTML = data.cases;
			document.getElementById('georgia_today').innerHTML = data.todayCases;
			document.getElementById('georgia_act').innerHTML = data.active;
            document.getElementById('georgia_recovered').innerHTML = data.recovered;
			document.getElementById('georgia_deaths').innerHTML = data.deaths;
			document.getElementById('georgia_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('georgia_critical').innerHTML = data.critical;
			document.getElementById('georgia_tests').innerHTML = data.totalTests;
			document.getElementById('georgia_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('georgia_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('georgia_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Germany
		fetch('https:coronavirus-19-api.herokuapp.com/countries/germany')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('germany_confirmed').innerHTML = data.cases;
			document.getElementById('germany_today').innerHTML = data.todayCases;
			document.getElementById('germany_act').innerHTML = data.active;
            document.getElementById('germany_recovered').innerHTML = data.recovered;
			document.getElementById('germany_deaths').innerHTML = data.deaths;
			document.getElementById('germany_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('germany_critical').innerHTML = data.critical;
			document.getElementById('germany_tests').innerHTML = data.totalTests;
			document.getElementById('germany_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('germany_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('germany_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Ghana
		fetch('https:coronavirus-19-api.herokuapp.com/countries/ghana')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('ghana_confirmed').innerHTML = data.cases;
			document.getElementById('ghana_today').innerHTML = data.todayCases;
			document.getElementById('ghana_act').innerHTML = data.active;
            document.getElementById('ghana_recovered').innerHTML = data.recovered;
			document.getElementById('ghana_deaths').innerHTML = data.deaths;
			document.getElementById('ghana_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('ghana_critical').innerHTML = data.critical;
			document.getElementById('ghana_tests').innerHTML = data.totalTests;
			document.getElementById('ghana_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('ghana_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('ghana_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Gibraltar
		fetch('https:coronavirus-19-api.herokuapp.com/countries/gibraltar')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('gibraltar_confirmed').innerHTML = data.cases;
			document.getElementById('gibraltar_today').innerHTML = data.todayCases;
			document.getElementById('gibraltar_act').innerHTML = data.active;
            document.getElementById('gibraltar_recovered').innerHTML = data.recovered;
			document.getElementById('gibraltar_deaths').innerHTML = data.deaths;
			document.getElementById('gibraltar_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('gibraltar_critical').innerHTML = data.critical;
			document.getElementById('gibraltar_tests').innerHTML = data.totalTests;
			document.getElementById('gibraltar_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('gibraltar_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('gibraltar_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Greece
		fetch('https:coronavirus-19-api.herokuapp.com/countries/greece')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('greece_confirmed').innerHTML = data.cases;
			document.getElementById('greece_today').innerHTML = data.todayCases;
			document.getElementById('greece_act').innerHTML = data.active;
            document.getElementById('greece_recovered').innerHTML = data.recovered;
			document.getElementById('greece_deaths').innerHTML = data.deaths;
			document.getElementById('greece_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('greece_critical').innerHTML = data.critical;
			document.getElementById('greece_tests').innerHTML = data.totalTests;
			document.getElementById('greece_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('greece_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('greece_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Greenland
		fetch('https:coronavirus-19-api.herokuapp.com/countries/greenland')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('greenland_confirmed').innerHTML = data.cases;
			document.getElementById('greenland_today').innerHTML = data.todayCases;
			document.getElementById('greenland_act').innerHTML = data.active;
            document.getElementById('greenland_recovered').innerHTML = data.recovered;
			document.getElementById('greenland_deaths').innerHTML = data.deaths;
			document.getElementById('greenland_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('greenland_critical').innerHTML = data.critical;
			document.getElementById('greenland_tests').innerHTML = data.totalTests;
			document.getElementById('greenland_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('greenland_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('greenland_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Grenada
		fetch('https:coronavirus-19-api.herokuapp.com/countries/grenada')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('grenada_confirmed').innerHTML = data.cases;
			document.getElementById('grenada_today').innerHTML = data.todayCases;
			document.getElementById('grenada_act').innerHTML = data.active;
            document.getElementById('grenada_recovered').innerHTML = data.recovered;
			document.getElementById('grenada_deaths').innerHTML = data.deaths;
			document.getElementById('grenada_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('grenada_critical').innerHTML = data.critical;
			document.getElementById('grenada_tests').innerHTML = data.totalTests;
			document.getElementById('grenada_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('grenada_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('grenada_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Guadeloupe
		fetch('https:coronavirus-19-api.herokuapp.com/countries/guadeloupe')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('guadeloupe_confirmed').innerHTML = data.cases;
			document.getElementById('guadeloupe_today').innerHTML = data.todayCases;
			document.getElementById('guadeloupe_act').innerHTML = data.active;
            document.getElementById('guadeloupe_recovered').innerHTML = data.recovered;
			document.getElementById('guadeloupe_deaths').innerHTML = data.deaths;
			document.getElementById('guadeloupe_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('guadeloupe_critical').innerHTML = data.critical;
			document.getElementById('guadeloupe_tests').innerHTML = data.totalTests;
			document.getElementById('guadeloupe_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('guadeloupe_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('guadeloupe_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Guatemala
		fetch('https:coronavirus-19-api.herokuapp.com/countries/guatemala')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('guatemala_confirmed').innerHTML = data.cases;
			document.getElementById('guatemala_today').innerHTML = data.todayCases;
			document.getElementById('guatemala_act').innerHTML = data.active;
            document.getElementById('guatemala_recovered').innerHTML = data.recovered;
			document.getElementById('guatemala_deaths').innerHTML = data.deaths;
			document.getElementById('guatemala_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('guatemala_critical').innerHTML = data.critical;
			document.getElementById('guatemala_tests').innerHTML = data.totalTests;
			document.getElementById('guatemala_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('guatemala_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('guatemala_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Guinea
		fetch('https:coronavirus-19-api.herokuapp.com/countries/guinea')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('guinea_confirmed').innerHTML = data.cases;
			document.getElementById('guinea_today').innerHTML = data.todayCases;
			document.getElementById('guinea_act').innerHTML = data.active;
            document.getElementById('guinea_recovered').innerHTML = data.recovered;
			document.getElementById('guinea_deaths').innerHTML = data.deaths;
			document.getElementById('guinea_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('guinea_critical').innerHTML = data.critical;
			document.getElementById('guinea_tests').innerHTML = data.totalTests;
			document.getElementById('guinea_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('guinea_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('guinea_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Guinea-Bissau
		fetch('https:coronavirus-19-api.herokuapp.com/countries/guinea-bissau')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('guineaB_confirmed').innerHTML = data.cases;
			document.getElementById('guineaB_today').innerHTML = data.todayCases;
			document.getElementById('guineaB_act').innerHTML = data.active;
            document.getElementById('guineaB_recovered').innerHTML = data.recovered;
			document.getElementById('guineaB_deaths').innerHTML = data.deaths;
			document.getElementById('guineaB_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('guineaB_critical').innerHTML = data.critical;
			document.getElementById('guineaB_tests').innerHTML = data.totalTests;
			document.getElementById('guineaB_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('guineaB_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('guineaB_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Guyana
		fetch('https:coronavirus-19-api.herokuapp.com/countries/guyana')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('guyana_confirmed').innerHTML = data.cases;
			document.getElementById('guyana_today').innerHTML = data.todayCases;
			document.getElementById('guyana_act').innerHTML = data.active;
            document.getElementById('guyana_recovered').innerHTML = data.recovered;
			document.getElementById('guyana_deaths').innerHTML = data.deaths;
			document.getElementById('guyana_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('guyana_critical').innerHTML = data.critical;
			document.getElementById('guyana_tests').innerHTML = data.totalTests;
			document.getElementById('guyana_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('guyana_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('guyana_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Haiti
		fetch('https:coronavirus-19-api.herokuapp.com/countries/haiti')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('haiti_confirmed').innerHTML = data.cases;
			document.getElementById('haiti_today').innerHTML = data.todayCases;
			document.getElementById('haiti_act').innerHTML = data.active;
            document.getElementById('haiti_recovered').innerHTML = data.recovered;
			document.getElementById('haiti_deaths').innerHTML = data.deaths;
			document.getElementById('haiti_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('haiti_critical').innerHTML = data.critical;
			document.getElementById('haiti_tests').innerHTML = data.totalTests;
			document.getElementById('haiti_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('haiti_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('haiti_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Honduras
		fetch('https:coronavirus-19-api.herokuapp.com/countries/honduras')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('honduras_confirmed').innerHTML = data.cases;
			document.getElementById('honduras_today').innerHTML = data.todayCases;
			document.getElementById('honduras_act').innerHTML = data.active;
            document.getElementById('honduras_recovered').innerHTML = data.recovered;
			document.getElementById('honduras_deaths').innerHTML = data.deaths;
			document.getElementById('honduras_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('honduras_critical').innerHTML = data.critical;
			document.getElementById('honduras_tests').innerHTML = data.totalTests;
			document.getElementById('honduras_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('honduras_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('honduras_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Hong Kong
		fetch('https:coronavirus-19-api.herokuapp.com/countries/hong kong')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('hong_confirmed').innerHTML = data.cases;
			document.getElementById('hong_today').innerHTML = data.todayCases;
			document.getElementById('hong_act').innerHTML = data.active;
            document.getElementById('hong_recovered').innerHTML = data.recovered;
			document.getElementById('hong_deaths').innerHTML = data.deaths;
			document.getElementById('hong_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('hong_critical').innerHTML = data.critical;
			document.getElementById('hong_tests').innerHTML = data.totalTests;
			document.getElementById('hong_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('hong_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('hong_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Hungary
		fetch('https:coronavirus-19-api.herokuapp.com/countries/hungary')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('hungary_confirmed').innerHTML = data.cases;
			document.getElementById('hungary_today').innerHTML = data.todayCases;
			document.getElementById('hungary_act').innerHTML = data.active;
            document.getElementById('hungary_recovered').innerHTML = data.recovered;
			document.getElementById('hungary_deaths').innerHTML = data.deaths;
			document.getElementById('hungary_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('hungary_critical').innerHTML = data.critical;
			document.getElementById('hungary_tests').innerHTML = data.totalTests;
			document.getElementById('hungary_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('hungary_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('hungary_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Iceland
		fetch('https:coronavirus-19-api.herokuapp.com/countries/iceland')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('iceland_confirmed').innerHTML = data.cases;
			document.getElementById('iceland_today').innerHTML = data.todayCases;
			document.getElementById('iceland_act').innerHTML = data.active;
            document.getElementById('iceland_recovered').innerHTML = data.recovered;
			document.getElementById('iceland_deaths').innerHTML = data.deaths;
			document.getElementById('iceland_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('iceland_critical').innerHTML = data.critical;
			document.getElementById('iceland_tests').innerHTML = data.totalTests;
			document.getElementById('iceland_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('iceland_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('iceland_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//India
		fetch('https:coronavirus-19-api.herokuapp.com/countries/india')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('india_confirmed').innerHTML = data.cases;
			document.getElementById('india_today').innerHTML = data.todayCases;
			document.getElementById('india_act').innerHTML = data.active;
            document.getElementById('india_recovered').innerHTML = data.recovered;
			document.getElementById('india_deaths').innerHTML = data.deaths;
			document.getElementById('india_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('india_critical').innerHTML = data.critical;
			document.getElementById('india_tests').innerHTML = data.totalTests;
			document.getElementById('india_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('india_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('india_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Indonesia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/indonesia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('indonesia_confirmed').innerHTML = data.cases;
			document.getElementById('indonesia_today').innerHTML = data.todayCases;
			document.getElementById('indonesia_act').innerHTML = data.active;
            document.getElementById('indonesia_recovered').innerHTML = data.recovered;
			document.getElementById('indonesia_deaths').innerHTML = data.deaths;
			document.getElementById('indonesia_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('indonesia_critical').innerHTML = data.critical;
			document.getElementById('indonesia_tests').innerHTML = data.totalTests;
			document.getElementById('indonesia_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('indonesia_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('indonesia_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})

		//Iran
		fetch('https:coronavirus-19-api.herokuapp.com/countries/iran')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('iran_confirmed').innerHTML = data.cases;
			document.getElementById('iran_today').innerHTML = data.todayCases;
			document.getElementById('iran_act').innerHTML = data.active;
            document.getElementById('iran_recovered').innerHTML = data.recovered;
			document.getElementById('iran_deaths').innerHTML = data.deaths;
			document.getElementById('iran_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('iran_critical').innerHTML = data.critical;
			document.getElementById('iran_tests').innerHTML = data.totalTests;
			document.getElementById('iran_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('iran_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('iran_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Iraq
		fetch('https:coronavirus-19-api.herokuapp.com/countries/iraq')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('iraq_confirmed').innerHTML = data.cases;
			document.getElementById('iraq_today').innerHTML = data.todayCases;
			document.getElementById('iraq_act').innerHTML = data.active;
            document.getElementById('iraq_recovered').innerHTML = data.recovered;
			document.getElementById('iraq_deaths').innerHTML = data.deaths;
			document.getElementById('iraq_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('iraq_critical').innerHTML = data.critical;
			document.getElementById('iraq_tests').innerHTML = data.totalTests;
			document.getElementById('iraq_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('iraq_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('iraq_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Ireland
		fetch('https:coronavirus-19-api.herokuapp.com/countries/ireland')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('ireland_confirmed').innerHTML = data.cases;
			document.getElementById('ireland_today').innerHTML = data.todayCases;
			document.getElementById('ireland_act').innerHTML = data.active;
            document.getElementById('ireland_recovered').innerHTML = data.recovered;
			document.getElementById('ireland_deaths').innerHTML = data.deaths;
			document.getElementById('ireland_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('ireland_critical').innerHTML = data.critical;
			document.getElementById('ireland_tests').innerHTML = data.totalTests;
			document.getElementById('ireland_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('ireland_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('ireland_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Isle of Man
		fetch('https:coronavirus-19-api.herokuapp.com/countries/isle of man')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('isle_confirmed').innerHTML = data.cases;
			document.getElementById('isle_today').innerHTML = data.todayCases;
			document.getElementById('isle_act').innerHTML = data.active;
            document.getElementById('isle_recovered').innerHTML = data.recovered;
			document.getElementById('isle_deaths').innerHTML = data.deaths;
			document.getElementById('isle_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('isle_critical').innerHTML = data.critical;
			document.getElementById('isle_tests').innerHTML = data.totalTests;
			document.getElementById('isle_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('isle_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('isle_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Israel
		fetch('https:coronavirus-19-api.herokuapp.com/countries/israel')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('israel_confirmed').innerHTML = data.cases;
			document.getElementById('israel_today').innerHTML = data.todayCases;
			document.getElementById('israel_act').innerHTML = data.active;
            document.getElementById('israel_recovered').innerHTML = data.recovered;
			document.getElementById('israel_deaths').innerHTML = data.deaths;
			document.getElementById('israel_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('israel_critical').innerHTML = data.critical;
			document.getElementById('israel_tests').innerHTML = data.totalTests;
			document.getElementById('israel_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('israel_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('israel_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Italy
		fetch('https:coronavirus-19-api.herokuapp.com/countries/italy')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('italy_confirmed').innerHTML = data.cases;
			document.getElementById('italy_today').innerHTML = data.todayCases;
			document.getElementById('italy_act').innerHTML = data.active;
            document.getElementById('italy_recovered').innerHTML = data.recovered;
			document.getElementById('italy_deaths').innerHTML = data.deaths;
			document.getElementById('italy_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('italy_critical').innerHTML = data.critical;
			document.getElementById('italy_tests').innerHTML = data.totalTests;
			document.getElementById('italy_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('italy_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('italy_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Ivory Coast
		fetch('https:coronavirus-19-api.herokuapp.com/countries/ivory coast')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('ivory_confirmed').innerHTML = data.cases;
			document.getElementById('ivory_today').innerHTML = data.todayCases;
			document.getElementById('ivory_act').innerHTML = data.active;
            document.getElementById('ivory_recovered').innerHTML = data.recovered;
			document.getElementById('ivory_deaths').innerHTML = data.deaths;
			document.getElementById('ivory_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('ivory_critical').innerHTML = data.critical;
			document.getElementById('ivory_tests').innerHTML = data.totalTests;
			document.getElementById('ivory_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('ivory_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('ivory_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Jamaica
		fetch('https:coronavirus-19-api.herokuapp.com/countries/jamaica')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('jamaica_confirmed').innerHTML = data.cases;
			document.getElementById('jamaica_today').innerHTML = data.todayCases;
			document.getElementById('jamaica_act').innerHTML = data.active;
            document.getElementById('jamaica_recovered').innerHTML = data.recovered;
			document.getElementById('jamaica_deaths').innerHTML = data.deaths;
			document.getElementById('jamaica_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('jamaica_critical').innerHTML = data.critical;
			document.getElementById('jamaica_tests').innerHTML = data.totalTests;
			document.getElementById('jamaica_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('jamaica_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('jamaica_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Japan
		fetch('https:coronavirus-19-api.herokuapp.com/countries/japan')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('japan_confirmed').innerHTML = data.cases;
			document.getElementById('japan_today').innerHTML = data.todayCases;
			document.getElementById('japan_act').innerHTML = data.active;
            document.getElementById('japan_recovered').innerHTML = data.recovered;
			document.getElementById('japan_deaths').innerHTML = data.deaths;
			document.getElementById('japan_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('japan_critical').innerHTML = data.critical;
			document.getElementById('japan_tests').innerHTML = data.totalTests;
			document.getElementById('japan_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('japan_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('japan_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Jordan
		fetch('https:coronavirus-19-api.herokuapp.com/countries/jordan')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('jordan_confirmed').innerHTML = data.cases;
			document.getElementById('jordan_today').innerHTML = data.todayCases;
			document.getElementById('jordan_act').innerHTML = data.active;
            document.getElementById('jordan_recovered').innerHTML = data.recovered;
			document.getElementById('jordan_deaths').innerHTML = data.deaths;
			document.getElementById('jordan_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('jordan_critical').innerHTML = data.critical;
			document.getElementById('jordan_tests').innerHTML = data.totalTests;
			document.getElementById('jordan_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('jordan_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('jordan_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Kazakhstan
		fetch('https:coronavirus-19-api.herokuapp.com/countries/kazakhstan')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('kazakhstan_confirmed').innerHTML = data.cases;
			document.getElementById('kazakhstan_today').innerHTML = data.todayCases;
			document.getElementById('kazakhstan_act').innerHTML = data.active;
            document.getElementById('kazakhstan_recovered').innerHTML = data.recovered;
			document.getElementById('kazakhstan_deaths').innerHTML = data.deaths;
			document.getElementById('kazakhstan_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('kazakhstan_critical').innerHTML = data.critical;
			document.getElementById('kazakhstan_tests').innerHTML = data.totalTests;
			document.getElementById('kazakhstan_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('kazakhstan_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('kazakhstan_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Kenya
		fetch('https:coronavirus-19-api.herokuapp.com/countries/kenya')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('kenya_confirmed').innerHTML = data.cases;
			document.getElementById('kenya_today').innerHTML = data.todayCases;
			document.getElementById('kenya_act').innerHTML = data.active;
            document.getElementById('kenya_recovered').innerHTML = data.recovered;
			document.getElementById('kenya_deaths').innerHTML = data.deaths;
			document.getElementById('kenya_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('kenya_critical').innerHTML = data.critical;
			document.getElementById('kenya_tests').innerHTML = data.totalTests;
			document.getElementById('kenya_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('kenya_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('kenya_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Kuwait
		fetch('https:coronavirus-19-api.herokuapp.com/countries/kuwait')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('kuwait_confirmed').innerHTML = data.cases;
			document.getElementById('kuwait_today').innerHTML = data.todayCases;
			document.getElementById('kuwait_act').innerHTML = data.active;
            document.getElementById('kuwait_recovered').innerHTML = data.recovered;
			document.getElementById('kuwait_deaths').innerHTML = data.deaths;
			document.getElementById('kuwait_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('kuwait_critical').innerHTML = data.critical;
			document.getElementById('kuwait_tests').innerHTML = data.totalTests;
			document.getElementById('kuwait_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('kuwait_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('kuwait_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Kyrgyzstan
		fetch('https:coronavirus-19-api.herokuapp.com/countries/kyrgyzstan')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('Kyrgyzstan_confirmed').innerHTML = data.cases;
			document.getElementById('Kyrgyzstan_today').innerHTML = data.todayCases;
			document.getElementById('Kyrgyzstan_act').innerHTML = data.active;
            document.getElementById('Kyrgyzstan_recovered').innerHTML = data.recovered;
			document.getElementById('Kyrgyzstan_deaths').innerHTML = data.deaths;
			document.getElementById('Kyrgyzstan_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('Kyrgyzstan_critical').innerHTML = data.critical;
			document.getElementById('Kyrgyzstan_tests').innerHTML = data.totalTests;
			document.getElementById('Kyrgyzstan_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('Kyrgyzstan_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('Kyrgyzstan_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Laos
		fetch('https:coronavirus-19-api.herokuapp.com/countries/laos')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('laos_confirmed').innerHTML = data.cases;
			document.getElementById('laos_today').innerHTML = data.todayCases;
			document.getElementById('laos_act').innerHTML = data.active;
            document.getElementById('laos_recovered').innerHTML = data.recovered;
			document.getElementById('laos_deaths').innerHTML = data.deaths;
			document.getElementById('laos_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('laos_critical').innerHTML = data.critical;
			document.getElementById('laos_tests').innerHTML = data.totalTests;
			document.getElementById('laos_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('laos_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('laos_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Latvia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/latvia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('latvia_confirmed').innerHTML = data.cases;
			document.getElementById('latvia_today').innerHTML = data.todayCases;
			document.getElementById('latvia_act').innerHTML = data.active;
            document.getElementById('latvia_recovered').innerHTML = data.recovered;
			document.getElementById('latvia_deaths').innerHTML = data.deaths;
			document.getElementById('latvia_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('latvia_critical').innerHTML = data.critical;
			document.getElementById('latvia_tests').innerHTML = data.totalTests;
			document.getElementById('latvia_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('latvia_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('latvia_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Lebanon
		fetch('https:coronavirus-19-api.herokuapp.com/countries/lebanon')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('lebanon_confirmed').innerHTML = data.cases;
			document.getElementById('lebanon_today').innerHTML = data.todayCases;
			document.getElementById('lebanon_act').innerHTML = data.active;
            document.getElementById('lebanon_recovered').innerHTML = data.recovered;
			document.getElementById('lebanon_deaths').innerHTML = data.deaths;
			document.getElementById('lebanon_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('lebanon_critical').innerHTML = data.critical;
			document.getElementById('lebanon_tests').innerHTML = data.totalTests;
			document.getElementById('lebanon_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('lebanon_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('lebanon_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Liberia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/liberia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('liberia_confirmed').innerHTML = data.cases;
			document.getElementById('liberia_today').innerHTML = data.todayCases;
			document.getElementById('liberia_act').innerHTML = data.active;
            document.getElementById('liberia_recovered').innerHTML = data.recovered;
			document.getElementById('liberia_deaths').innerHTML = data.deaths;
			document.getElementById('liberia_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('liberia_critical').innerHTML = data.critical;
			document.getElementById('liberia_tests').innerHTML = data.totalTests;
			document.getElementById('liberia_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('liberia_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('liberia_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Libya
		fetch('https:coronavirus-19-api.herokuapp.com/countries/libya')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('libya_confirmed').innerHTML = data.cases;
			document.getElementById('libya_today').innerHTML = data.todayCases;
			document.getElementById('libya_act').innerHTML = data.active;
            document.getElementById('libya_recovered').innerHTML = data.recovered;
			document.getElementById('libya_deaths').innerHTML = data.deaths;
			document.getElementById('libya_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('libya_critical').innerHTML = data.critical;
			document.getElementById('libya_tests').innerHTML = data.totalTests;
			document.getElementById('libya_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('libya_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('libya_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Liechtenstein
		fetch('https:coronavirus-19-api.herokuapp.com/countries/liechtenstein')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('liechtenstein_confirmed').innerHTML = data.cases;
			document.getElementById('liechtenstein_today').innerHTML = data.todayCases;
			document.getElementById('liechtenstein_act').innerHTML = data.active;
            document.getElementById('liechtenstein_recovered').innerHTML = data.recovered;
			document.getElementById('liechtenstein_deaths').innerHTML = data.deaths;
			document.getElementById('liechtenstein_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('liechtenstein_critical').innerHTML = data.critical;
			document.getElementById('liechtenstein_tests').innerHTML = data.totalTests;
			document.getElementById('liechtenstein_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('liechtenstein_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('liechtenstein_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Lithuania
		fetch('https:coronavirus-19-api.herokuapp.com/countries/lithuania')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('lithuania_confirmed').innerHTML = data.cases;
			document.getElementById('lithuania_today').innerHTML = data.todayCases;
			document.getElementById('lithuania_act').innerHTML = data.active;
            document.getElementById('lithuania_recovered').innerHTML = data.recovered;
			document.getElementById('lithuania_deaths').innerHTML = data.deaths;
			document.getElementById('lithuania_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('lithuania_critical').innerHTML = data.critical;
			document.getElementById('lithuania_tests').innerHTML = data.totalTests;
			document.getElementById('lithuania_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('lithuania_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('lithuania_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Luxembourg
		fetch('https:coronavirus-19-api.herokuapp.com/countries/luxembourg')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('luxembourg_confirmed').innerHTML = data.cases;
			document.getElementById('luxembourg_today').innerHTML = data.todayCases;
			document.getElementById('luxembourg_act').innerHTML = data.active;
            document.getElementById('luxembourg_recovered').innerHTML = data.recovered;
			document.getElementById('luxembourg_deaths').innerHTML = data.deaths;
			document.getElementById('luxembourg_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('luxembourg_critical').innerHTML = data.critical;
			document.getElementById('luxembourg_tests').innerHTML = data.totalTests;
			document.getElementById('luxembourg_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('luxembourg_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('luxembourg_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		
		//Macao
		fetch('https:coronavirus-19-api.herokuapp.com/countries/macao')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('macao_confirmed').innerHTML = data.cases;
			document.getElementById('macao_today').innerHTML = data.todayCases;
			document.getElementById('macao_act').innerHTML = data.active;
            document.getElementById('macao_recovered').innerHTML = data.recovered;
			document.getElementById('macao_deaths').innerHTML = data.deaths;
			document.getElementById('macao_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('macao_critical').innerHTML = data.critical;
			document.getElementById('macao_tests').innerHTML = data.totalTests;
			document.getElementById('macao_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('macao_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('macao_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Madagascar
		fetch('https:coronavirus-19-api.herokuapp.com/countries/madagascar')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('madagascar_confirmed').innerHTML = data.cases;
			document.getElementById('madagascar_today').innerHTML = data.todayCases;
			document.getElementById('madagascar_act').innerHTML = data.active;
            document.getElementById('madagascar_recovered').innerHTML = data.recovered;
			document.getElementById('madagascar_deaths').innerHTML = data.deaths;
			document.getElementById('madagascar_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('madagascar_critical').innerHTML = data.critical;
			document.getElementById('madagascar_tests').innerHTML = data.totalTests;
			document.getElementById('madagascar_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('madagascar_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('madagascar_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Malawi	
		fetch('https:coronavirus-19-api.herokuapp.com/countries/malawi')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('malawi_confirmed').innerHTML = data.cases;
			document.getElementById('malawi_today').innerHTML = data.todayCases;
			document.getElementById('malawi_act').innerHTML = data.active;
            document.getElementById('malawi_recovered').innerHTML = data.recovered;
			document.getElementById('malawi_deaths').innerHTML = data.deaths;
			document.getElementById('malawi_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('malawi_critical').innerHTML = data.critical;
			document.getElementById('malawi_tests').innerHTML = data.totalTests;
			document.getElementById('malawi_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('malawi_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('malawi_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Malaysia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/malaysia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('malaysia_confirmed').innerHTML = data.cases;
			document.getElementById('malaysia_today').innerHTML = data.todayCases;
			document.getElementById('malaysia_act').innerHTML = data.active;
            document.getElementById('malaysia_recovered').innerHTML = data.recovered;
			document.getElementById('malaysia_deaths').innerHTML = data.deaths;
			document.getElementById('malaysia_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('malaysia_critical').innerHTML = data.critical;
			document.getElementById('malaysia_tests').innerHTML = data.totalTests;
			document.getElementById('malaysia_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('malaysia_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('malaysia_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Maldives
		fetch('https:coronavirus-19-api.herokuapp.com/countries/maldives')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('maldives_confirmed').innerHTML = data.cases;
			document.getElementById('maldives_today').innerHTML = data.todayCases;
			document.getElementById('maldives_act').innerHTML = data.active;
            document.getElementById('maldives_recovered').innerHTML = data.recovered;
			document.getElementById('maldives_deaths').innerHTML = data.deaths;
			document.getElementById('maldives_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('maldives_critical').innerHTML = data.critical;
			document.getElementById('maldives_tests').innerHTML = data.totalTests;
			document.getElementById('maldives_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('maldives_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('maldives_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Mali
		fetch('https:coronavirus-19-api.herokuapp.com/countries/mali')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('mali_confirmed').innerHTML = data.cases;
			document.getElementById('mali_today').innerHTML = data.todayCases;
			document.getElementById('mali_act').innerHTML = data.active;
            document.getElementById('mali_recovered').innerHTML = data.recovered;
			document.getElementById('mali_deaths').innerHTML = data.deaths;
			document.getElementById('mali_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('mali_critical').innerHTML = data.critical;
			document.getElementById('mali_tests').innerHTML = data.totalTests;
			document.getElementById('mali_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('mali_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('mali_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Malta
		fetch('https:coronavirus-19-api.herokuapp.com/countries/malta')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('malta_confirmed').innerHTML = data.cases;
			document.getElementById('malta_today').innerHTML = data.todayCases;
			document.getElementById('malta_act').innerHTML = data.active;
            document.getElementById('malta_recovered').innerHTML = data.recovered;
			document.getElementById('malta_deaths').innerHTML = data.deaths;
			document.getElementById('malta_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('malta_critical').innerHTML = data.critical;
			document.getElementById('malta_tests').innerHTML = data.totalTests;
			document.getElementById('malta_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('malta_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('malta_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Martinique
		fetch('https:coronavirus-19-api.herokuapp.com/countries/martinique')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('martinique_confirmed').innerHTML = data.cases;
			document.getElementById('martinique_today').innerHTML = data.todayCases;
			document.getElementById('martinique_act').innerHTML = data.active;
            document.getElementById('martinique_recovered').innerHTML = data.recovered;
			document.getElementById('martinique_deaths').innerHTML = data.deaths;
			document.getElementById('martinique_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('martinique_critical').innerHTML = data.critical;
			document.getElementById('martinique_tests').innerHTML = data.totalTests;
			document.getElementById('martinique_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('martinique_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('martinique_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Mauritania
		fetch('https:coronavirus-19-api.herokuapp.com/countries/mauritania')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('mauritania_confirmed').innerHTML = data.cases;
			document.getElementById('mauritania_today').innerHTML = data.todayCases;
			document.getElementById('mauritania_act').innerHTML = data.active;
            document.getElementById('mauritania_recovered').innerHTML = data.recovered;
			document.getElementById('mauritania_deaths').innerHTML = data.deaths;
			document.getElementById('mauritania_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('mauritania_critical').innerHTML = data.critical;
			document.getElementById('mauritania_tests').innerHTML = data.totalTests;
			document.getElementById('mauritania_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('mauritania_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('mauritania_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Mauritius
		fetch('https:coronavirus-19-api.herokuapp.com/countries/mauritius')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('mauritius_confirmed').innerHTML = data.cases;
			document.getElementById('mauritius_today').innerHTML = data.todayCases;
			document.getElementById('mauritius_act').innerHTML = data.active;
            document.getElementById('mauritius_recovered').innerHTML = data.recovered;
			document.getElementById('mauritius_deaths').innerHTML = data.deaths;
			document.getElementById('mauritius_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('mauritius_critical').innerHTML = data.critical;
			document.getElementById('mauritius_tests').innerHTML = data.totalTests;
			document.getElementById('mauritius_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('mauritius_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('mauritius_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Mayotte
		fetch('https:coronavirus-19-api.herokuapp.com/countries/mayotte')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('mayotte_confirmed').innerHTML = data.cases;
			document.getElementById('mayotte_today').innerHTML = data.todayCases;
			document.getElementById('mayotte_act').innerHTML = data.active;
            document.getElementById('mayotte_recovered').innerHTML = data.recovered;
			document.getElementById('mayotte_deaths').innerHTML = data.deaths;
			document.getElementById('mayotte_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('mayotte_critical').innerHTML = data.critical;
			document.getElementById('mayotte_tests').innerHTML = data.totalTests;
			document.getElementById('mayotte_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('mayotte_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('mayotte_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Mexico
		fetch('https:coronavirus-19-api.herokuapp.com/countries/mexico')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('mexico_confirmed').innerHTML = data.cases;
			document.getElementById('mexico_today').innerHTML = data.todayCases;
			document.getElementById('mexico_act').innerHTML = data.active;
            document.getElementById('mexico_recovered').innerHTML = data.recovered;
			document.getElementById('mexico_deaths').innerHTML = data.deaths;
			document.getElementById('mexico_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('mexico_critical').innerHTML = data.critical;
			document.getElementById('mexico_tests').innerHTML = data.totalTests;
			document.getElementById('mexico_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('mexico_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('mexico_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Moldova
		fetch('https:coronavirus-19-api.herokuapp.com/countries/moldova')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('moldova_confirmed').innerHTML = data.cases;
			document.getElementById('moldova_today').innerHTML = data.todayCases;
			document.getElementById('moldova_act').innerHTML = data.active;
            document.getElementById('moldova_recovered').innerHTML = data.recovered;
			document.getElementById('moldova_deaths').innerHTML = data.deaths;
			document.getElementById('moldova_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('moldova_critical').innerHTML = data.critical;
			document.getElementById('moldova_tests').innerHTML = data.totalTests;
			document.getElementById('moldova_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('moldova_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('moldova_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Monaco
		fetch('https:coronavirus-19-api.herokuapp.com/countries/monaco')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('monaco_confirmed').innerHTML = data.cases;
			document.getElementById('monaco_today').innerHTML = data.todayCases;
			document.getElementById('monaco_act').innerHTML = data.active;
            document.getElementById('monaco_recovered').innerHTML = data.recovered;
			document.getElementById('monaco_deaths').innerHTML = data.deaths;
			document.getElementById('monaco_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('monaco_critical').innerHTML = data.critical;
			document.getElementById('monaco_tests').innerHTML = data.totalTests;
			document.getElementById('monaco_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('monaco_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('monaco_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Mongolia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/mongolia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('mongolia_confirmed').innerHTML = data.cases;
			document.getElementById('mongolia_today').innerHTML = data.todayCases;
			document.getElementById('mongolia_act').innerHTML = data.active;
            document.getElementById('mongolia_recovered').innerHTML = data.recovered;
			document.getElementById('mongolia_deaths').innerHTML = data.deaths;
			document.getElementById('mongolia_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('mongolia_critical').innerHTML = data.critical;
			document.getElementById('mongolia_tests').innerHTML = data.totalTests;
			document.getElementById('mongolia_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('mongolia_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('mongolia_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Montenegro
		fetch('https:coronavirus-19-api.herokuapp.com/countries/montenegro')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('montenegro_confirmed').innerHTML = data.cases;
			document.getElementById('montenegro_today').innerHTML = data.todayCases;
			document.getElementById('montenegro_act').innerHTML = data.active;
            document.getElementById('montenegro_recovered').innerHTML = data.recovered;
			document.getElementById('montenegro_deaths').innerHTML = data.deaths;
			document.getElementById('montenegro_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('montenegro_critical').innerHTML = data.critical;
			document.getElementById('montenegro_tests').innerHTML = data.totalTests;
			document.getElementById('montenegro_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('montenegro_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('montenegro_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Montserrat
		fetch('https:coronavirus-19-api.herokuapp.com/countries/montserrat')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('montserrat_confirmed').innerHTML = data.cases;
			document.getElementById('montserrat_today').innerHTML = data.todayCases;
			document.getElementById('montserrat_act').innerHTML = data.active;
            document.getElementById('montserrat_recovered').innerHTML = data.recovered;
			document.getElementById('montserrat_deaths').innerHTML = data.deaths;
			document.getElementById('montserrat_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('montserrat_critical').innerHTML = data.critical;
			document.getElementById('montserrat_tests').innerHTML = data.totalTests;
			document.getElementById('montserrat_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('montserrat_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('montserrat_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Morocco
		fetch('https:coronavirus-19-api.herokuapp.com/countries/morocco')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('morocco_confirmed').innerHTML = data.cases;
			document.getElementById('morocco_today').innerHTML = data.todayCases;
			document.getElementById('morocco_act').innerHTML = data.active;
            document.getElementById('morocco_recovered').innerHTML = data.recovered;
			document.getElementById('morocco_deaths').innerHTML = data.deaths;
			document.getElementById('morocco_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('morocco_critical').innerHTML = data.critical;
			document.getElementById('morocco_tests').innerHTML = data.totalTests;
			document.getElementById('morocco_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('morocco_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('morocco_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Mozambique
		fetch('https:coronavirus-19-api.herokuapp.com/countries/mozambique')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('mozambique_confirmed').innerHTML = data.cases;
			document.getElementById('mozambique_today').innerHTML = data.todayCases;
			document.getElementById('mozambique_act').innerHTML = data.active;
            document.getElementById('mozambique_recovered').innerHTML = data.recovered;
			document.getElementById('mozambique_deaths').innerHTML = data.deaths;
			document.getElementById('mozambique_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('mozambique_critical').innerHTML = data.critical;
			document.getElementById('mozambique_tests').innerHTML = data.totalTests;
			document.getElementById('mozambique_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('mozambique_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('mozambique_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Myanmar
		fetch('https:coronavirus-19-api.herokuapp.com/countries/myanmar')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('myanmar_confirmed').innerHTML = data.cases;
			document.getElementById('myanmar_today').innerHTML = data.todayCases;
			document.getElementById('myanmar_act').innerHTML = data.active;
            document.getElementById('myanmar_recovered').innerHTML = data.recovered;
			document.getElementById('myanmar_deaths').innerHTML = data.deaths;
			document.getElementById('myanmar_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('myanmar_critical').innerHTML = data.critical;
			document.getElementById('myanmar_tests').innerHTML = data.totalTests;
			document.getElementById('myanmar_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('myanmar_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('myanmar_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Namibia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/namibia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('namibia_confirmed').innerHTML = data.cases;
			document.getElementById('namibia_today').innerHTML = data.todayCases;
			document.getElementById('namibia_act').innerHTML = data.active;
            document.getElementById('namibia_recovered').innerHTML = data.recovered;
			document.getElementById('namibia_deaths').innerHTML = data.deaths;
			document.getElementById('namibia_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('namibia_critical').innerHTML = data.critical;
			document.getElementById('namibia_tests').innerHTML = data.totalTests;
			document.getElementById('namibia_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('namibia_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('namibia_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Nepal
		fetch('https:coronavirus-19-api.herokuapp.com/countries/nepal')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('nepal_confirmed').innerHTML = data.cases;
			document.getElementById('nepal_today').innerHTML = data.todayCases;
			document.getElementById('nepal_act').innerHTML = data.active;
            document.getElementById('nepal_recovered').innerHTML = data.recovered;
			document.getElementById('nepal_deaths').innerHTML = data.deaths;
			document.getElementById('nepal_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('nepal_critical').innerHTML = data.critical;
			document.getElementById('nepal_tests').innerHTML = data.totalTests;
			document.getElementById('nepal_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('nepal_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('nepal_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Netherlands
		fetch('https:coronavirus-19-api.herokuapp.com/countries/netherlands')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('netherlands_confirmed').innerHTML = data.cases;
			document.getElementById('netherlands_today').innerHTML = data.todayCases;
			document.getElementById('netherlands_act').innerHTML = data.active;
            document.getElementById('netherlands_recovered').innerHTML = data.recovered;
			document.getElementById('netherlands_deaths').innerHTML = data.deaths;
			document.getElementById('netherlands_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('netherlands_critical').innerHTML = data.critical;
			document.getElementById('netherlands_tests').innerHTML = data.totalTests;
			document.getElementById('netherlands_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('netherlands_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('netherlands_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//New Caledonia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/new caledonia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('newC_confirmed').innerHTML = data.cases;
			document.getElementById('newC_today').innerHTML = data.todayCases;
			document.getElementById('newC_act').innerHTML = data.active;
            document.getElementById('newC_recovered').innerHTML = data.recovered;
			document.getElementById('newC_deaths').innerHTML = data.deaths;
			document.getElementById('newC_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('newC_critical').innerHTML = data.critical;
			document.getElementById('newC_tests').innerHTML = data.totalTests;
			document.getElementById('newC_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('newC_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('newC_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//New Zealand
		fetch('https:coronavirus-19-api.herokuapp.com/countries/new zealand')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('newZ_confirmed').innerHTML = data.cases;
			document.getElementById('newZ_today').innerHTML = data.todayCases;
			document.getElementById('newZ_act').innerHTML = data.active;
            document.getElementById('newZ_recovered').innerHTML = data.recovered;
			document.getElementById('newZ_deaths').innerHTML = data.deaths;
			document.getElementById('newZ_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('newZ_critical').innerHTML = data.critical;
			document.getElementById('newZ_tests').innerHTML = data.totalTests;
			document.getElementById('newZ_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('newZ_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('newZ_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Nicaragua
		fetch('https:coronavirus-19-api.herokuapp.com/countries/nicaragua')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('nicaragua_confirmed').innerHTML = data.cases;
			document.getElementById('nicaragua_today').innerHTML = data.todayCases;
			document.getElementById('nicaragua_act').innerHTML = data.active;
            document.getElementById('nicaragua_recovered').innerHTML = data.recovered;
			document.getElementById('nicaragua_deaths').innerHTML = data.deaths;
			document.getElementById('nicaragua_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('nicaragua_critical').innerHTML = data.critical;
			document.getElementById('nicaragua_tests').innerHTML = data.totalTests;
			document.getElementById('nicaragua_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('nicaragua_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('nicaragua_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Niger
		fetch('https:coronavirus-19-api.herokuapp.com/countries/niger')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('niger_confirmed').innerHTML = data.cases;
			document.getElementById('niger_today').innerHTML = data.todayCases;
			document.getElementById('niger_act').innerHTML = data.active;
            document.getElementById('niger_recovered').innerHTML = data.recovered;
			document.getElementById('niger_deaths').innerHTML = data.deaths;
			document.getElementById('niger_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('niger_critical').innerHTML = data.critical;
			document.getElementById('niger_tests').innerHTML = data.totalTests;
			document.getElementById('niger_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('niger_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('niger_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Nigeria
		fetch('https:coronavirus-19-api.herokuapp.com/countries/nigeria')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('nigeria_confirmed').innerHTML = data.cases;
			document.getElementById('nigeria_today').innerHTML = data.todayCases;
			document.getElementById('nigeria_act').innerHTML = data.active;
            document.getElementById('nigeria_recovered').innerHTML = data.recovered;
			document.getElementById('nigeria_deaths').innerHTML = data.deaths;
			document.getElementById('nigeria_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('nigeria_critical').innerHTML = data.critical;
			document.getElementById('nigeria_tests').innerHTML = data.totalTests;
			document.getElementById('nigeria_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('nigeria_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('nigeria_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//North Macedonia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/north macedonia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('north_confirmed').innerHTML = data.cases;
			document.getElementById('north_today').innerHTML = data.todayCases;
			document.getElementById('north_act').innerHTML = data.active;
            document.getElementById('north_recovered').innerHTML = data.recovered;
			document.getElementById('north_deaths').innerHTML = data.deaths;
			document.getElementById('north_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('north_critical').innerHTML = data.critical;
			document.getElementById('north_tests').innerHTML = data.totalTests;
			document.getElementById('north_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('north_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('north_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Norway
		fetch('https:coronavirus-19-api.herokuapp.com/countries/norway')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('norway_confirmed').innerHTML = data.cases;
			document.getElementById('norway_today').innerHTML = data.todayCases;
			document.getElementById('norway_act').innerHTML = data.active;
            document.getElementById('norway_recovered').innerHTML = data.recovered;
			document.getElementById('norway_deaths').innerHTML = data.deaths;
			document.getElementById('norway_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('norway_critical').innerHTML = data.critical;
			document.getElementById('norway_tests').innerHTML = data.totalTests;
			document.getElementById('norway_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('norway_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('norway_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Oman
		fetch('https:coronavirus-19-api.herokuapp.com/countries/oman')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('oman_confirmed').innerHTML = data.cases;
			document.getElementById('oman_today').innerHTML = data.todayCases;
			document.getElementById('oman_act').innerHTML = data.active;
            document.getElementById('oman_recovered').innerHTML = data.recovered;
			document.getElementById('oman_deaths').innerHTML = data.deaths;
			document.getElementById('oman_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('oman_critical').innerHTML = data.critical;
			document.getElementById('oman_tests').innerHTML = data.totalTests;
			document.getElementById('oman_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('oman_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('oman_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Pakistan
		fetch('https:coronavirus-19-api.herokuapp.com/countries/pakistan')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('pakistan_confirmed').innerHTML = data.cases;
			document.getElementById('pakistan_today').innerHTML = data.todayCases;
			document.getElementById('pakistan_act').innerHTML = data.active;
            document.getElementById('pakistan_recovered').innerHTML = data.recovered;
			document.getElementById('pakistan_deaths').innerHTML = data.deaths;
			document.getElementById('pakistan_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('pakistan_critical').innerHTML = data.critical;
			document.getElementById('pakistan_tests').innerHTML = data.totalTests;
			document.getElementById('pakistan_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('pakistan_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('pakistan_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Palestine
		fetch('https:coronavirus-19-api.herokuapp.com/countries/palestine')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('palestine_confirmed').innerHTML = data.cases;
			document.getElementById('palestine_today').innerHTML = data.todayCases;
			document.getElementById('palestine_act').innerHTML = data.active;
            document.getElementById('palestine_recovered').innerHTML = data.recovered;
			document.getElementById('palestine_deaths').innerHTML = data.deaths;
			document.getElementById('palestine_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('palestine_critical').innerHTML = data.critical;
			document.getElementById('palestine_tests').innerHTML = data.totalTests;
			document.getElementById('palestine_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('palestine_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('palestine_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Panama
		fetch('https:coronavirus-19-api.herokuapp.com/countries/panama')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('panama_confirmed').innerHTML = data.cases;
			document.getElementById('panama_today').innerHTML = data.todayCases;
			document.getElementById('panama_act').innerHTML = data.active;
            document.getElementById('panama_recovered').innerHTML = data.recovered;
			document.getElementById('panama_deaths').innerHTML = data.deaths;
			document.getElementById('panama_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('panama_critical').innerHTML = data.critical;
			document.getElementById('panama_tests').innerHTML = data.totalTests;
			document.getElementById('panama_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('panama_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('panama_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Papua New Guinea
		fetch('https:coronavirus-19-api.herokuapp.com/countries/Papua New Guinea')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('papua_confirmed').innerHTML = data.cases;
			document.getElementById('papua_today').innerHTML = data.todayCases;
			document.getElementById('papua_act').innerHTML = data.active;
            document.getElementById('papua_recovered').innerHTML = data.recovered;
			document.getElementById('papua_deaths').innerHTML = data.deaths;
			document.getElementById('papua_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('papua_critical').innerHTML = data.critical;
			document.getElementById('papua_tests').innerHTML = data.totalTests;
			document.getElementById('papua_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('papua_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('papua_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Paraguay
		fetch('https:coronavirus-19-api.herokuapp.com/countries/paraguay')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('paraguay_confirmed').innerHTML = data.cases;
			document.getElementById('paraguay_today').innerHTML = data.todayCases;
			document.getElementById('paraguay_act').innerHTML = data.active;
            document.getElementById('paraguay_recovered').innerHTML = data.recovered;
			document.getElementById('paraguay_deaths').innerHTML = data.deaths;
			document.getElementById('paraguay_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('paraguay_critical').innerHTML = data.critical;
			document.getElementById('paraguay_tests').innerHTML = data.totalTests;
			document.getElementById('paraguay_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('paraguay_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('paraguay_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Peru
		fetch('https:coronavirus-19-api.herokuapp.com/countries/peru')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('peru_confirmed').innerHTML = data.cases;
			document.getElementById('peru_today').innerHTML = data.todayCases;
			document.getElementById('peru_act').innerHTML = data.active;
            document.getElementById('peru_recovered').innerHTML = data.recovered;
			document.getElementById('peru_deaths').innerHTML = data.deaths;
			document.getElementById('peru_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('peru_critical').innerHTML = data.critical;
			document.getElementById('peru_tests').innerHTML = data.totalTests;
			document.getElementById('peru_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('peru_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('peru_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Philippines
		fetch('https:coronavirus-19-api.herokuapp.com/countries/philippines')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('philippines_confirmed').innerHTML = data.cases;
			document.getElementById('philippines_today').innerHTML = data.todayCases;
			document.getElementById('philippines_act').innerHTML = data.active;
            document.getElementById('philippines_recovered').innerHTML = data.recovered;
			document.getElementById('philippines_deaths').innerHTML = data.deaths;
			document.getElementById('philippines_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('philippines_critical').innerHTML = data.critical;
			document.getElementById('philippines_tests').innerHTML = data.totalTests;
			document.getElementById('philippines_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('philippines_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('philippines_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Poland
		fetch('https:coronavirus-19-api.herokuapp.com/countries/poland')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('poland_confirmed').innerHTML = data.cases;
			document.getElementById('poland_today').innerHTML = data.todayCases;
			document.getElementById('poland_act').innerHTML = data.active;
            document.getElementById('poland_recovered').innerHTML = data.recovered;
			document.getElementById('poland_deaths').innerHTML = data.deaths;
			document.getElementById('poland_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('poland_critical').innerHTML = data.critical;
			document.getElementById('poland_tests').innerHTML = data.totalTests;
			document.getElementById('poland_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('poland_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('poland_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Portugal
		fetch('https:coronavirus-19-api.herokuapp.com/countries/portugal')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('portugal_confirmed').innerHTML = data.cases;
			document.getElementById('portugal_today').innerHTML = data.todayCases;
			document.getElementById('portugal_act').innerHTML = data.active;
            document.getElementById('portugal_recovered').innerHTML = data.recovered;
			document.getElementById('portugal_deaths').innerHTML = data.deaths;
			document.getElementById('portugal_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('portugal_critical').innerHTML = data.critical;
			document.getElementById('portugal_tests').innerHTML = data.totalTests;
			document.getElementById('portugal_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('portugal_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('portugal_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Qatar
		fetch('https:coronavirus-19-api.herokuapp.com/countries/qatar')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('qatar_confirmed').innerHTML = data.cases;
			document.getElementById('qatar_today').innerHTML = data.todayCases;
			document.getElementById('qatar_act').innerHTML = data.active;
            document.getElementById('qatar_recovered').innerHTML = data.recovered;
			document.getElementById('qatar_deaths').innerHTML = data.deaths;
			document.getElementById('qatar_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('qatar_critical').innerHTML = data.critical;
			document.getElementById('qatar_tests').innerHTML = data.totalTests;
			document.getElementById('qatar_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('qatar_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('qatar_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Romania
		fetch('https:coronavirus-19-api.herokuapp.com/countries/romania')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('romania_confirmed').innerHTML = data.cases;
			document.getElementById('romania_today').innerHTML = data.todayCases;
			document.getElementById('romania_act').innerHTML = data.active;
            document.getElementById('romania_recovered').innerHTML = data.recovered;
			document.getElementById('romania_deaths').innerHTML = data.deaths;
			document.getElementById('romania_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('romania_critical').innerHTML = data.critical;
			document.getElementById('romania_tests').innerHTML = data.totalTests;
			document.getElementById('romania_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('romania_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('romania_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Russia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/russia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('russia_confirmed').innerHTML = data.cases;
			document.getElementById('russia_today').innerHTML = data.todayCases;
			document.getElementById('russia_act').innerHTML = data.active;
            document.getElementById('russia_recovered').innerHTML = data.recovered;
			document.getElementById('russia_deaths').innerHTML = data.deaths;
			document.getElementById('russia_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('russia_critical').innerHTML = data.critical;
			document.getElementById('russia_tests').innerHTML = data.totalTests;
			document.getElementById('russia_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('russia_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('russia_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Rwanda
		fetch('https:coronavirus-19-api.herokuapp.com/countries/rwanda')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('rwanda_confirmed').innerHTML = data.cases;
			document.getElementById('rwanda_today').innerHTML = data.todayCases;
			document.getElementById('rwanda_act').innerHTML = data.active;
            document.getElementById('rwanda_recovered').innerHTML = data.recovered;
			document.getElementById('rwanda_deaths').innerHTML = data.deaths;
			document.getElementById('rwanda_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('rwanda_critical').innerHTML = data.critical;
			document.getElementById('rwanda_tests').innerHTML = data.totalTests;
			document.getElementById('rwanda_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('rwanda_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('rwanda_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Réunion
		fetch('https:coronavirus-19-api.herokuapp.com/countries/réunion')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('reunion_confirmed').innerHTML = data.cases;
			document.getElementById('reunion_today').innerHTML = data.todayCases;
			document.getElementById('reunion_act').innerHTML = data.active;
            document.getElementById('reunion_recovered').innerHTML = data.recovered;
			document.getElementById('reunion_deaths').innerHTML = data.deaths;
			document.getElementById('reunion_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('reunion_critical').innerHTML = data.critical;
			document.getElementById('reunion_tests').innerHTML = data.totalTests;
			document.getElementById('reunion_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('reunion_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('reunion_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//S. Korea
		fetch('https:coronavirus-19-api.herokuapp.com/countries/S. Korea')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('southK_confirmed').innerHTML = data.cases;
			document.getElementById('southK_today').innerHTML = data.todayCases;
			document.getElementById('southK_act').innerHTML = data.active;
            document.getElementById('southK_recovered').innerHTML = data.recovered;
			document.getElementById('southK_deaths').innerHTML = data.deaths;
			document.getElementById('southK_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('southK_critical').innerHTML = data.critical;
			document.getElementById('southK_tests').innerHTML = data.totalTests;
			document.getElementById('southK_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('southK_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('southK_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Saint Kitts and Nevis
		fetch('https:coronavirus-19-api.herokuapp.com/countries/saint kitts and nevis')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('saintK_confirmed').innerHTML = data.cases;
			document.getElementById('saintK_today').innerHTML = data.todayCases;
			document.getElementById('saintK_act').innerHTML = data.active;
            document.getElementById('saintK_recovered').innerHTML = data.recovered;
			document.getElementById('saintK_deaths').innerHTML = data.deaths;
			document.getElementById('saintK_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('saintK_critical').innerHTML = data.critical;
			document.getElementById('saintK_tests').innerHTML = data.totalTests;
			document.getElementById('saintK_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('saintK_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('saintK_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Saint Lucia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/saint lucia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('saintL_confirmed').innerHTML = data.cases;
			document.getElementById('saintL_today').innerHTML = data.todayCases;
			document.getElementById('saintL_act').innerHTML = data.active;
            document.getElementById('saintL_recovered').innerHTML = data.recovered;
			document.getElementById('saintL_deaths').innerHTML = data.deaths;
			document.getElementById('saintL_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('saintL_critical').innerHTML = data.critical;
			document.getElementById('saintL_tests').innerHTML = data.totalTests;
			document.getElementById('saintL_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('saintL_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('saintL_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Saint Martin
		fetch('https:coronavirus-19-api.herokuapp.com/countries/saint martin')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('saintM_confirmed').innerHTML = data.cases;
			document.getElementById('saintM_today').innerHTML = data.todayCases;
			document.getElementById('saintM_act').innerHTML = data.active;
            document.getElementById('saintM_recovered').innerHTML = data.recovered;
			document.getElementById('saintM_deaths').innerHTML = data.deaths;
			document.getElementById('saintM_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('saintM_critical').innerHTML = data.critical;
			document.getElementById('saintM_tests').innerHTML = data.totalTests;
			document.getElementById('saintM_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('saintM_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('saintM_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Saint Pierre Miquelon
		fetch('https:coronavirus-19-api.herokuapp.com/countries/saint pierre miquelon')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('saintP_confirmed').innerHTML = data.cases;
			document.getElementById('saintP_today').innerHTML = data.todayCases;
			document.getElementById('saintP_act').innerHTML = data.active;
            document.getElementById('saintP_recovered').innerHTML = data.recovered;
			document.getElementById('saintP_deaths').innerHTML = data.deaths;
			document.getElementById('saintP_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('saintP_critical').innerHTML = data.critical;
			document.getElementById('saintP_tests').innerHTML = data.totalTests;
			document.getElementById('saintP_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('saintP_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('saintP_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//San Marino
		fetch('https:coronavirus-19-api.herokuapp.com/countries/san marino')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('san_confirmed').innerHTML = data.cases;
			document.getElementById('san_today').innerHTML = data.todayCases;
			document.getElementById('san_act').innerHTML = data.active;
            document.getElementById('san_recovered').innerHTML = data.recovered;
			document.getElementById('san_deaths').innerHTML = data.deaths;
			document.getElementById('san_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('san_critical').innerHTML = data.critical;
			document.getElementById('san_tests').innerHTML = data.totalTests;
			document.getElementById('san_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('san_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('san_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Sao Tome and Principe
		fetch('https:coronavirus-19-api.herokuapp.com/countries/sao tome and principe')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('sao_confirmed').innerHTML = data.cases;
			document.getElementById('sao_today').innerHTML = data.todayCases;
			document.getElementById('sao_act').innerHTML = data.active;
            document.getElementById('sao_recovered').innerHTML = data.recovered;
			document.getElementById('sao_deaths').innerHTML = data.deaths;
			document.getElementById('sao_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('sao_critical').innerHTML = data.critical;
			document.getElementById('sao_tests').innerHTML = data.totalTests;
			document.getElementById('sao_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('sao_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('sao_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Saudi Arabia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/saudi arabia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('saudi_confirmed').innerHTML = data.cases;
			document.getElementById('saudi_today').innerHTML = data.todayCases;
			document.getElementById('saudi_act').innerHTML = data.active;
            document.getElementById('saudi_recovered').innerHTML = data.recovered;
			document.getElementById('saudi_deaths').innerHTML = data.deaths;
			document.getElementById('saudi_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('saudi_critical').innerHTML = data.critical;
			document.getElementById('saudi_tests').innerHTML = data.totalTests;
			document.getElementById('saudi_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('saudi_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('saudi_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Senegal
		fetch('https:coronavirus-19-api.herokuapp.com/countries/Senegal')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('Senegal_confirmed').innerHTML = data.cases;
			document.getElementById('Senegal_today').innerHTML = data.todayCases;
			document.getElementById('Senegal_act').innerHTML = data.active;
            document.getElementById('Senegal_recovered').innerHTML = data.recovered;
			document.getElementById('Senegal_deaths').innerHTML = data.deaths;
			document.getElementById('Senegal_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('Senegal_critical').innerHTML = data.critical;
			document.getElementById('Senegal_tests').innerHTML = data.totalTests;
			document.getElementById('Senegal_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('Senegal_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('senegal_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Serbia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/serbia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('serbia_confirmed').innerHTML = data.cases;
			document.getElementById('serbia_today').innerHTML = data.todayCases;
			document.getElementById('serbia_act').innerHTML = data.active;
            document.getElementById('serbia_recovered').innerHTML = data.recovered;
			document.getElementById('serbia_deaths').innerHTML = data.deaths;
			document.getElementById('serbia_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('serbia_critical').innerHTML = data.critical;
			document.getElementById('serbia_tests').innerHTML = data.totalTests;
			document.getElementById('serbia_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('serbia_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('serbia_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Seychelles
		fetch('https:coronavirus-19-api.herokuapp.com/countries/seychelles')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('seychelles_confirmed').innerHTML = data.cases;
			document.getElementById('seychelles_today').innerHTML = data.todayCases;
			document.getElementById('seychelles_act').innerHTML = data.active;
            document.getElementById('seychelles_recovered').innerHTML = data.recovered;
			document.getElementById('seychelles_deaths').innerHTML = data.deaths;
			document.getElementById('seychelles_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('seychelles_critical').innerHTML = data.critical;
			document.getElementById('seychelles_tests').innerHTML = data.totalTests;
			document.getElementById('seychelles_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('seychelles_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('seychelles_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})

		//Sierra Leone
		fetch('https:coronavirus-19-api.herokuapp.com/countries/sierra leone')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('sierra_confirmed').innerHTML = data.cases;
			document.getElementById('sierra_today').innerHTML = data.todayCases;
			document.getElementById('sierra_act').innerHTML = data.active;
            document.getElementById('sierra_recovered').innerHTML = data.recovered;
			document.getElementById('sierra_deaths').innerHTML = data.deaths;
			document.getElementById('sierra_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('sierra_critical').innerHTML = data.critical;
			document.getElementById('sierra_tests').innerHTML = data.totalTests;
			document.getElementById('sierra_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('sierra_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('sierra_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Singapore
		fetch('https:coronavirus-19-api.herokuapp.com/countries/singapore')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('singapore_confirmed').innerHTML = data.cases;
			document.getElementById('singapore_today').innerHTML = data.todayCases;
			document.getElementById('singapore_act').innerHTML = data.active;
            document.getElementById('singapore_recovered').innerHTML = data.recovered;
			document.getElementById('singapore_deaths').innerHTML = data.deaths;
			document.getElementById('singapore_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('singapore_critical').innerHTML = data.critical;
			document.getElementById('singapore_tests').innerHTML = data.totalTests;
			document.getElementById('singapore_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('singapore_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('singapore_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Sint Maarten
		fetch('https:coronavirus-19-api.herokuapp.com/countries/sint maarten')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('sint_confirmed').innerHTML = data.cases;
			document.getElementById('sint_today').innerHTML = data.todayCases;
			document.getElementById('sint_act').innerHTML = data.active;
            document.getElementById('sint_recovered').innerHTML = data.recovered;
			document.getElementById('sint_deaths').innerHTML = data.deaths;
			document.getElementById('sint_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('sint_critical').innerHTML = data.critical;
			document.getElementById('sint_tests').innerHTML = data.totalTests;
			document.getElementById('sint_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('sint_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('sint_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Slovakia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/slovakia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('slovakia_confirmed').innerHTML = data.cases;
			document.getElementById('slovakia_today').innerHTML = data.todayCases;
			document.getElementById('slovakia_act').innerHTML = data.active;
            document.getElementById('slovakia_recovered').innerHTML = data.recovered;
			document.getElementById('slovakia_deaths').innerHTML = data.deaths;
			document.getElementById('slovakia_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('slovakia_critical').innerHTML = data.critical;
			document.getElementById('slovakia_tests').innerHTML = data.totalTests;
			document.getElementById('slovakia_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('slovakia_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('slovakia_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Slovenia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/slovenia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('slovenia_confirmed').innerHTML = data.cases;
			document.getElementById('slovenia_today').innerHTML = data.todayCases;
			document.getElementById('slovenia_act').innerHTML = data.active;
            document.getElementById('slovenia_recovered').innerHTML = data.recovered;
			document.getElementById('slovenia_deaths').innerHTML = data.deaths;
			document.getElementById('slovenia_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('slovenia_critical').innerHTML = data.critical;
			document.getElementById('slovenia_tests').innerHTML = data.totalTests;
			document.getElementById('slovenia_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('slovenia_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('slovenia_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Somalia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/somalia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('somalia_confirmed').innerHTML = data.cases;
			document.getElementById('somalia_today').innerHTML = data.todayCases;
			document.getElementById('somalia_act').innerHTML = data.active;
            document.getElementById('somalia_recovered').innerHTML = data.recovered;
			document.getElementById('somalia_deaths').innerHTML = data.deaths;
			document.getElementById('somalia_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('somalia_critical').innerHTML = data.critical;
			document.getElementById('somalia_tests').innerHTML = data.totalTests;
			document.getElementById('somalia_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('somalia_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('somalia_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//South Africa
		//South Sudan
		fetch('https:coronavirus-19-api.herokuapp.com/countries/south sudan')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('southS_confirmed').innerHTML = data.cases;
			document.getElementById('southS_today').innerHTML = data.todayCases;
			document.getElementById('southS_act').innerHTML = data.active;
            document.getElementById('southS_recovered').innerHTML = data.recovered;
			document.getElementById('southS_deaths').innerHTML = data.deaths;
			document.getElementById('southS_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('southS_critical').innerHTML = data.critical;
			document.getElementById('southS_tests').innerHTML = data.totalTests;
			document.getElementById('southS_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('southS_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('southS_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Spain
		fetch('https:coronavirus-19-api.herokuapp.com/countries/spain')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('spain_confirmed').innerHTML = data.cases;
			document.getElementById('spain_today').innerHTML = data.todayCases;
			document.getElementById('spain_act').innerHTML = data.active;
            document.getElementById('spain_recovered').innerHTML = data.recovered;
			document.getElementById('spain_deaths').innerHTML = data.deaths;
			document.getElementById('spain_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('spain_critical').innerHTML = data.critical;
			document.getElementById('spain_tests').innerHTML = data.totalTests;
			document.getElementById('spain_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('spain_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('spain_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Sri Lanka
		fetch('https:coronavirus-19-api.herokuapp.com/countries/sri lanka')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('sri_confirmed').innerHTML = data.cases;
			document.getElementById('sri_today').innerHTML = data.todayCases;
			document.getElementById('sri_act').innerHTML = data.active;
            document.getElementById('sri_recovered').innerHTML = data.recovered;
			document.getElementById('sri_deaths').innerHTML = data.deaths;
			document.getElementById('sri_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('sri_critical').innerHTML = data.critical;
			document.getElementById('sri_tests').innerHTML = data.totalTests;
			document.getElementById('sri_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('sri_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('sri_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//St. Barth
		fetch('https:coronavirus-19-api.herokuapp.com/countries/st. barth')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('stB_confirmed').innerHTML = data.cases;
			document.getElementById('stB_today').innerHTML = data.todayCases;
			document.getElementById('stB_act').innerHTML = data.active;
            document.getElementById('stB_recovered').innerHTML = data.recovered;
			document.getElementById('stB_deaths').innerHTML = data.deaths;
			document.getElementById('stB_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('stB_critical').innerHTML = data.critical;
			document.getElementById('stB_tests').innerHTML = data.totalTests;
			document.getElementById('stB_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('stB_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('stB_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//St. Vincent Grenadines
		fetch('https:coronavirus-19-api.herokuapp.com/countries/st. vincent grenadines')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('stV_confirmed').innerHTML = data.cases;
			document.getElementById('stV_today').innerHTML = data.todayCases;
			document.getElementById('stV_act').innerHTML = data.active;
            document.getElementById('stV_recovered').innerHTML = data.recovered;
			document.getElementById('stV_deaths').innerHTML = data.deaths;
			document.getElementById('stV_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('stV_critical').innerHTML = data.critical;
			document.getElementById('stV_tests').innerHTML = data.totalTests;
			document.getElementById('stV_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('stV_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('stV_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Sudan
		fetch('https:coronavirus-19-api.herokuapp.com/countries/sudan')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('sudan_confirmed').innerHTML = data.cases;
			document.getElementById('sudan_today').innerHTML = data.todayCases;
			document.getElementById('sudan_act').innerHTML = data.active;
            document.getElementById('sudan_recovered').innerHTML = data.recovered;
			document.getElementById('sudan_deaths').innerHTML = data.deaths;
			document.getElementById('sudan_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('sudan_critical').innerHTML = data.critical;
			document.getElementById('sudan_tests').innerHTML = data.totalTests;
			document.getElementById('sudan_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('sudan_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('sudan_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Suriname
		fetch('https:coronavirus-19-api.herokuapp.com/countries/suriname')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('suriname_confirmed').innerHTML = data.cases;
			document.getElementById('suriname_today').innerHTML = data.todayCases;
			document.getElementById('suriname_act').innerHTML = data.active;
            document.getElementById('suriname_recovered').innerHTML = data.recovered;
			document.getElementById('suriname_deaths').innerHTML = data.deaths;
			document.getElementById('suriname_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('suriname_critical').innerHTML = data.critical;
			document.getElementById('suriname_tests').innerHTML = data.totalTests;
			document.getElementById('suriname_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('suriname_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('suriname_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Sweden
		fetch('https:coronavirus-19-api.herokuapp.com/countries/sweden')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('sweden_confirmed').innerHTML = data.cases;
			document.getElementById('sweden_today').innerHTML = data.todayCases;
			document.getElementById('sweden_act').innerHTML = data.active;
            document.getElementById('sweden_recovered').innerHTML = data.recovered;
			document.getElementById('sweden_deaths').innerHTML = data.deaths;
			document.getElementById('sweden_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('sweden_critical').innerHTML = data.critical;
			document.getElementById('sweden_tests').innerHTML = data.totalTests;
			document.getElementById('sweden_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('sweden_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('sweden_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Switzerland
		fetch('https:coronavirus-19-api.herokuapp.com/countries/switzerland')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('switzerland_confirmed').innerHTML = data.cases;
			document.getElementById('switzerland_today').innerHTML = data.todayCases;
			document.getElementById('switzerland_act').innerHTML = data.active;
            document.getElementById('switzerland_recovered').innerHTML = data.recovered;
			document.getElementById('switzerland_deaths').innerHTML = data.deaths;
			document.getElementById('switzerland_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('switzerland_critical').innerHTML = data.critical;
			document.getElementById('switzerland_tests').innerHTML = data.totalTests;
			document.getElementById('switzerland_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('switzerland_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('switzerland_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Syria
		fetch('https:coronavirus-19-api.herokuapp.com/countries/syria')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('syria_confirmed').innerHTML = data.cases;
			document.getElementById('syria_today').innerHTML = data.todayCases;
			document.getElementById('syria_act').innerHTML = data.active;
            document.getElementById('syria_recovered').innerHTML = data.recovered;
			document.getElementById('syria_deaths').innerHTML = data.deaths;
			document.getElementById('syria_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('syria_critical').innerHTML = data.critical;
			document.getElementById('syria_tests').innerHTML = data.totalTests;
			document.getElementById('syria_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('syria_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('syria_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Taiwan
		fetch('https:coronavirus-19-api.herokuapp.com/countries/taiwan')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('taiwan_confirmed').innerHTML = data.cases;
			document.getElementById('taiwan_today').innerHTML = data.todayCases;
			document.getElementById('taiwan_act').innerHTML = data.active;
            document.getElementById('taiwan_recovered').innerHTML = data.recovered;
			document.getElementById('taiwan_deaths').innerHTML = data.deaths;
			document.getElementById('taiwan_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('taiwan_critical').innerHTML = data.critical;
			document.getElementById('taiwan_tests').innerHTML = data.totalTests;
			document.getElementById('taiwan_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('taiwan_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('taiwan_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Tanzania
		fetch('https:coronavirus-19-api.herokuapp.com/countries/tanzania')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('tanzania_confirmed').innerHTML = data.cases;
			document.getElementById('tanzania_today').innerHTML = data.todayCases;
			document.getElementById('tanzania_act').innerHTML = data.active;
            document.getElementById('tanzania_recovered').innerHTML = data.recovered;
			document.getElementById('tanzania_deaths').innerHTML = data.deaths;
			document.getElementById('tanzania_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('tanzania_critical').innerHTML = data.critical;
			document.getElementById('tanzania_tests').innerHTML = data.totalTests;
			document.getElementById('tanzania_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('tanzania_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('tanzania_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Thailand
		fetch('https:coronavirus-19-api.herokuapp.com/countries/thailand')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('thailand_confirmed').innerHTML = data.cases;
			document.getElementById('thailand_today').innerHTML = data.todayCases;
			document.getElementById('thailand_act').innerHTML = data.active;
            document.getElementById('thailand_recovered').innerHTML = data.recovered;
			document.getElementById('thailand_deaths').innerHTML = data.deaths;
			document.getElementById('thailand_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('thailand_critical').innerHTML = data.critical;
			document.getElementById('thailand_tests').innerHTML = data.totalTests;
			document.getElementById('thailand_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('thailand_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('thailand_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Timor-Leste
		fetch('https:coronavirus-19-api.herokuapp.com/countries/timor-leste')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('timor_confirmed').innerHTML = data.cases;
			document.getElementById('timor_today').innerHTML = data.todayCases;
			document.getElementById('timor_act').innerHTML = data.active;
            document.getElementById('timor_recovered').innerHTML = data.recovered;
			document.getElementById('timor_deaths').innerHTML = data.deaths;
			document.getElementById('timor_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('timor_critical').innerHTML = data.critical;
			document.getElementById('timor_tests').innerHTML = data.totalTests;
			document.getElementById('timor_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('timor_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('timor_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Togo
		fetch('https:coronavirus-19-api.herokuapp.com/countries/togo')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('togo_confirmed').innerHTML = data.cases;
			document.getElementById('togo_today').innerHTML = data.todayCases;
			document.getElementById('togo_act').innerHTML = data.active;
            document.getElementById('togo_recovered').innerHTML = data.recovered;
			document.getElementById('togo_deaths').innerHTML = data.deaths;
			document.getElementById('togo_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('togo_critical').innerHTML = data.critical;
			document.getElementById('togo_tests').innerHTML = data.totalTests;
			document.getElementById('togo_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('togo_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('togo_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Trinidad and Tobago
		fetch('https:coronavirus-19-api.herokuapp.com/countries/trinidad and tobago')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('trinidad_confirmed').innerHTML = data.cases;
			document.getElementById('trinidad_today').innerHTML = data.todayCases;
			document.getElementById('trinidad_act').innerHTML = data.active;
            document.getElementById('trinidad_recovered').innerHTML = data.recovered;
			document.getElementById('trinidad_deaths').innerHTML = data.deaths;
			document.getElementById('trinidad_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('trinidad_critical').innerHTML = data.critical;
			document.getElementById('trinidad_tests').innerHTML = data.totalTests;
			document.getElementById('trinidad_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('trinidad_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('trinidad_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Tunisia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/tunisia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('tunisia_confirmed').innerHTML = data.cases;
			document.getElementById('tunisia_today').innerHTML = data.todayCases;
			document.getElementById('tunisia_act').innerHTML = data.active;
            document.getElementById('tunisia_recovered').innerHTML = data.recovered;
			document.getElementById('tunisia_deaths').innerHTML = data.deaths;
			document.getElementById('tunisia_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('tunisia_critical').innerHTML = data.critical;
			document.getElementById('tunisia_tests').innerHTML = data.totalTests;
			document.getElementById('tunisia_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('tunisia_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('tunisia_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Turkey
		fetch('https:coronavirus-19-api.herokuapp.com/countries/turkey')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('turkey_confirmed').innerHTML = data.cases;
			document.getElementById('turkey_today').innerHTML = data.todayCases;
			document.getElementById('turkey_act').innerHTML = data.active;
            document.getElementById('turkey_recovered').innerHTML = data.recovered;
			document.getElementById('turkey_deaths').innerHTML = data.deaths;
			document.getElementById('turkey_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('turkey_critical').innerHTML = data.critical;
			document.getElementById('turkey_tests').innerHTML = data.totalTests;
			document.getElementById('turkey_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('turkey_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('turkey_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Turks and Caicos
		fetch('https:coronavirus-19-api.herokuapp.com/countries/turks and caicos')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('turks_confirmed').innerHTML = data.cases;
			document.getElementById('turks_today').innerHTML = data.todayCases;
			document.getElementById('turks_act').innerHTML = data.active;
            document.getElementById('turks_recovered').innerHTML = data.recovered;
			document.getElementById('turks_deaths').innerHTML = data.deaths;
			document.getElementById('turks_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('turks_critical').innerHTML = data.critical;
			document.getElementById('turks_tests').innerHTML = data.totalTests;
			document.getElementById('turks_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('turks_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('turks_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//UAE
		fetch('https:coronavirus-19-api.herokuapp.com/countries/uae')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('uae_confirmed').innerHTML = data.cases;
			document.getElementById('uae_today').innerHTML = data.todayCases;
			document.getElementById('uae_act').innerHTML = data.active;
            document.getElementById('uae_recovered').innerHTML = data.recovered;
			document.getElementById('uae_deaths').innerHTML = data.deaths;
			document.getElementById('uae_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('uae_critical').innerHTML = data.critical;
			document.getElementById('uae_tests').innerHTML = data.totalTests;
			document.getElementById('uae_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('uae_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('uae_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//UK
		fetch('https:coronavirus-19-api.herokuapp.com/countries/uk')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('uk_confirmed').innerHTML = data.cases;
			document.getElementById('uk_today').innerHTML = data.todayCases;
			document.getElementById('uk_act').innerHTML = data.active;
			document.getElementById('uk_recovered').innerHTML = 'N/A';
			document.getElementById('uk_deaths').innerHTML = data.deaths;
			document.getElementById('uk_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('uk_critical').innerHTML = data.critical;
			document.getElementById('uk_tests').innerHTML = data.totalTests;
			document.getElementById('uk_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('uk_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('uk_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//USA
		fetch('https:coronavirus-19-api.herokuapp.com/countries/usa')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('usa_confirmed').innerHTML = data.cases;
			document.getElementById('usa_today').innerHTML = data.todayCases;
			document.getElementById('usa_act').innerHTML = data.active;
            document.getElementById('usa_recovered').innerHTML = data.recovered;
			document.getElementById('usa_deaths').innerHTML = data.deaths;
			document.getElementById('usa_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('usa_critical').innerHTML = data.critical;
			document.getElementById('usa_tests').innerHTML = data.totalTests;
			document.getElementById('usa_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('usa_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('usa_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Uganda
		fetch('https:coronavirus-19-api.herokuapp.com/countries/uganda')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('uganda_confirmed').innerHTML = data.cases;
			document.getElementById('uganda_today').innerHTML = data.todayCases;
			document.getElementById('uganda_act').innerHTML = data.active;
            document.getElementById('uganda_recovered').innerHTML = data.recovered;
			document.getElementById('uganda_deaths').innerHTML = data.deaths;
			document.getElementById('uganda_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('uganda_critical').innerHTML = data.critical;
			document.getElementById('uganda_tests').innerHTML = data.totalTests;
			document.getElementById('uganda_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('uganda_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('uganda_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Ukraine
		fetch('https:coronavirus-19-api.herokuapp.com/countries/ukraine')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('ukraine_confirmed').innerHTML = data.cases;
			document.getElementById('ukraine_today').innerHTML = data.todayCases;
			document.getElementById('ukraine_act').innerHTML = data.active;
            document.getElementById('ukraine_recovered').innerHTML = data.recovered;
			document.getElementById('ukraine_deaths').innerHTML = data.deaths;
			document.getElementById('ukraine_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('ukraine_critical').innerHTML = data.critical;
			document.getElementById('ukraine_tests').innerHTML = data.totalTests;
			document.getElementById('ukraine_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('ukraine_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('ukraine_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Uruguay
		fetch('https:coronavirus-19-api.herokuapp.com/countries/uruguay')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('uruguay_confirmed').innerHTML = data.cases;
			document.getElementById('uruguay_today').innerHTML = data.todayCases;
			document.getElementById('uruguay_act').innerHTML = data.active;
            document.getElementById('uruguay_recovered').innerHTML = data.recovered;
			document.getElementById('uruguay_deaths').innerHTML = data.deaths;
			document.getElementById('uruguay_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('uruguay_critical').innerHTML = data.critical;
			document.getElementById('uruguay_tests').innerHTML = data.totalTests;
			document.getElementById('uruguay_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('uruguay_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('uruguay_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Uzbekistan
		fetch('https:coronavirus-19-api.herokuapp.com/countries/uzbekistan')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('uzbekistan_confirmed').innerHTML = data.cases;
			document.getElementById('uzbekistan_today').innerHTML = data.todayCases;
			document.getElementById('uzbekistan_act').innerHTML = data.active;
            document.getElementById('uzbekistan_recovered').innerHTML = data.recovered;
			document.getElementById('uzbekistan_deaths').innerHTML = data.deaths;
			document.getElementById('uzbekistan_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('uzbekistan_critical').innerHTML = data.critical;
			document.getElementById('uzbekistan_tests').innerHTML = data.totalTests;
			document.getElementById('uzbekistan_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('uzbekistan_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('uzbekistan_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Vatican City
		fetch('https:coronavirus-19-api.herokuapp.com/countries/vatican city')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('vatican_confirmed').innerHTML = data.cases;
			document.getElementById('vatican_today').innerHTML = data.todayCases;
			document.getElementById('vatican_act').innerHTML = data.active;
            document.getElementById('vatican_recovered').innerHTML = data.recovered;
			document.getElementById('vatican_deaths').innerHTML = data.deaths;
			document.getElementById('vatican_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('vatican_critical').innerHTML = data.critical;
			document.getElementById('vatican_tests').innerHTML = data.totalTests;
			document.getElementById('vatican_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('vatican_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('vatican_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Venezuela
		fetch('https:coronavirus-19-api.herokuapp.com/countries/venezuela')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('venezuela_confirmed').innerHTML = data.cases;
			document.getElementById('venezuela_today').innerHTML = data.todayCases;
			document.getElementById('venezuela_act').innerHTML = data.active;
            document.getElementById('venezuela_recovered').innerHTML = data.recovered;
			document.getElementById('venezuela_deaths').innerHTML = data.deaths;
			document.getElementById('venezuela_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('venezuela_critical').innerHTML = data.critical;
			document.getElementById('venezuela_tests').innerHTML = data.totalTests;
			document.getElementById('venezuela_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('venezuela_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('venezuela_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Vietnam
		fetch('https:coronavirus-19-api.herokuapp.com/countries/vietnam')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('vietnam_confirmed').innerHTML = data.cases;
			document.getElementById('vietnam_today').innerHTML = data.todayCases;
			document.getElementById('vietnam_act').innerHTML = data.active;
            document.getElementById('vietnam_recovered').innerHTML = data.recovered;
			document.getElementById('vietnam_deaths').innerHTML = data.deaths;
			document.getElementById('vietnam_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('vietnam_critical').innerHTML = data.critical;
			document.getElementById('vietnam_tests').innerHTML = data.totalTests;
			document.getElementById('vietnam_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('vietnam_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('vietnam_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Western Sahara
		fetch('https:coronavirus-19-api.herokuapp.com/countries/western sahara')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('western_confirmed').innerHTML = data.cases;
			document.getElementById('western_today').innerHTML = data.todayCases;
			document.getElementById('western_act').innerHTML = data.active;
            document.getElementById('western_recovered').innerHTML = data.recovered;
			document.getElementById('western_deaths').innerHTML = data.deaths;
			document.getElementById('western_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('western_critical').innerHTML = data.critical;
			document.getElementById('western_tests').innerHTML = data.totalTests;
			document.getElementById('western_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('western_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('western_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Yemen
		fetch('https:coronavirus-19-api.herokuapp.com/countries/yemen')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('yemen_confirmed').innerHTML = data.cases;
			document.getElementById('yemen_today').innerHTML = data.todayCases;
			document.getElementById('yemen_act').innerHTML = data.active;
            document.getElementById('yemen_recovered').innerHTML = data.recovered;
			document.getElementById('yemen_deaths').innerHTML = data.deaths;
			document.getElementById('yemen_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('yemen_critical').innerHTML = data.critical;
			document.getElementById('yemen_tests').innerHTML = data.totalTests;
			document.getElementById('yemen_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('yemen_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('yemen_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Zambia
		fetch('https:coronavirus-19-api.herokuapp.com/countries/zambia')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('zambia_confirmed').innerHTML = data.cases;
			document.getElementById('zambia_today').innerHTML = data.todayCases;
			document.getElementById('zambia_act').innerHTML = data.active;
            document.getElementById('zambia_recovered').innerHTML = data.recovered;
			document.getElementById('zambia_deaths').innerHTML = data.deaths;
			document.getElementById('zambia_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('zambia_critical').innerHTML = data.critical;
			document.getElementById('zambia_tests').innerHTML = data.totalTests;
			document.getElementById('zambia_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('zambia_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('zambia_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})
		//Zimbabwe
		fetch('https:coronavirus-19-api.herokuapp.com/countries/zimbabwe')
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {

			document.getElementById('zimbabwe_confirmed').innerHTML = data.cases;
			document.getElementById('zimbabwe_today').innerHTML = data.todayCases;
			document.getElementById('zimbabwe_act').innerHTML = data.active;
            document.getElementById('zimbabwe_recovered').innerHTML = data.recovered;
			document.getElementById('zimbabwe_deaths').innerHTML = data.deaths;
			document.getElementById('zimbabwe_todayDeaths').innerHTML = data.todayDeaths;
			document.getElementById('zimbabwe_critical').innerHTML = data.critical;
			document.getElementById('zimbabwe_tests').innerHTML = data.totalTests;
			document.getElementById('zimbabwe_testsPerOneMillion').innerHTML = data.testsPerOneMillion;
			document.getElementById('zimbabwe_casesper').innerHTML = data.casesPerOneMillion;
			document.getElementById('zimbabwe_deathsper').innerHTML = data.deathsPerOneMillion;
			
			console.log(data);

		})
		.catch(function () {
			
            console.log('error');
		})

}