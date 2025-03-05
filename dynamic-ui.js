var recentCities = [];

window.onload = async function(){
    var location = await fetchLocationData();
    var data = await fetchCurrentInfo(location.city);
    var elClone2 = await fetchClone('col-city-card');
    showInfoCard(elClone2, data);
    document.getElementById('row-city-card').appendChild(elClone2);
    
    var cityCountries = getCities();
    var existCountries = []; 
    for (var i = 0; i < cityCountries.length; i++){
        // does this country already exist in existCountries?
        var index = existCountries.indexOf(cityCountries[i].country);     
        if (index == -1) {        
            // aggiungo il country all'array existCountries
            existCountries.push(cityCountries[i].country);
        }       
    }
    existCountries.sort((a, b) => b.localeCompare(a));
    for (var i = 0; i < existCountries.length; i++){
        //var elClone = await fetchClone('btn-country');
        //elClone.innerText = existCountries[i];
        //document.getElementById('col-country').appendChild(elClone);
        
        var elClone = await fetchClone('drd-item-country');
        elClone.innerText = existCountries[i];
        document.getElementById('mnu-country').appendChild(elClone);
        if (existCountries[i] == location.country_name){
            elClone.style.color = '#ff0000';
        }
    }  
    var favouriteCities = getFavCities();
    for (var i = 0; i < favouriteCities.length; i++){
        var elClone = await fetchClone('drd-favourite-city');
        elClone.innerText = favouriteCities[i].name;
        document.getElementById('mnu-city').appendChild(elClone);
    }
}


function getCities(){
    var cities = [];
    cities.push({name: "Milan", country: "Italy", isCapital: false, population: 1.5});
    cities.push({name: "Turin", country: "Italy", isCapital: false, population: 0.9});
    cities.push({name: "Genoa", country: "Italy", isCapital: false, population: 0.7});
    cities.push({name: "Florence", country: "Italy", isCapital: false, population: 0.4});
    cities.push({name: "Palermo", country: "Italy", isCapital: false, population: 0.5});    
    cities.push({name: "Venice", country: "Italy", isCapital: false, population: 0.5});
    cities.push({name: "Naples", country: "Italy", isCapital: false, population: 1.0});
    cities.push({name: "Rome", country: "Italy", isCapital: true, population: 2.0});
    cities.push({name: "Paris", country: "France", isCapital: true, population: 3.5});
    cities.push({name: "Madrid", country: "Spain", isCapital: true, population: 2.5});
    cities.push({name: "melbourne", country: "Australia", isCapital: false, population: 2.5});
    cities.push({name: "Cairo", country: "Egypt", isCapital: true, population: 8.5});
    cities.push({name: "Delhi", country: "India", isCapital: true, population: 11.0});
    cities.push({name: "toKYo", country: "Japan", isCapital: true, population: 7.5});
    cities.push({name: "Sofia", country: "Bulgary", isCapital: true, population: 1.0});
    cities.push({name: "DubliN", country: "Ireland", isCapital: true, population: 1.0});
    cities.push({name: "MontReal", country: "Canada", isCapital: false, population: 3.5});
    return cities;
}

// ESERCIZI 05.03.2025
/*
1.  Scrivere una funzione che restituisce il numero di città con popolazione superiore
    all valore ricevuto in un parametro; nome funzione: getBigCityCount

2.  Scrivere una funzione che riceve due parametri (country e popolazione) e 
    restituisce il numero di città di quel country con popolazione superiore
    al valore ricevuto nel parametro popolazione; nome funzione: getBigCityCount2
    
3.  Scrivere una funzione che restituisce l'elenco (quindi un array) delle città con popolazione superiore
    al valore ricevuto in un parametro; nome funzione: getBigCities

4.  Scrivere una funzione che restituisce true se esite (o false se non esiste) una città con una 
    popolazione superiore al valore ricevuto in un parametro; nome funzione: existBigCity

*/



function getFilteredCities(country){
    var cities = []; 
    // prendo l'elenco delle città
    var cityFullList = getCities();

    // scandisco l'elenco e se la città è nel country allora lo metto nell'array cities
    for (var i=0; i<cityFullList.length; i++){
        if (cityFullList[i].country == country){
            cities.push(cityFullList[i]);
        }
    }
    
    
    return cities;
}

function dummy(country) {
    var dummyCities = getCities();
    for (var i=0; i<dummyCities.length; i++){
        if (dummyCities[i].country == country){
            console.log('Città: ' + dummyCities[i].name + " (" + i + ")");
        }
    }
}
function dummy2(letter) {
    var dummyCities = getCities();
    for (var i=0; i<dummyCities.length; i++){
        if (dummyCities[i].name.toLowerCase().startsWith(letter.toLowerCase())){
            console.log(dummyCities[i].name + " (" + i + ")");
        }
    }
}

// passo il parametro, do il nome della città e mi dice se quella città esiste o meno. restituisce true se esiste, false se non esiste
function existCity(city){
    var cities = getCities();
    for (var i = 0; i<cities.length; i++){
        if (cities[i].name == city){
            return true;
        }
        //cities[i] è l'i-esimo elemento dell'arra    
    } 
    return false;
}

function dummy3(len) {
    var dummyCities = getCities();
    for (var i=0; i<dummyCities.length; i++){
        if (dummyCities[i].name.length > len){
            console.log(dummyCities[i].name + " (" + i + ")");
        }
    }
}

// riceve come parametro un country e restituisce il numero di città che appartengono a quel paese country
function getCityCount(country){
    var cityCount = 0;
    var cities = getCities();
    for (var i=0, i<cities.length; i++){
        if (cities[i].country == country){
            cityCount = cityCount + 1;
        }
    }    
    
    
    return cityCount;
}




// riceve una lunghezza e restituisce il numero delle città con la lunghezza ricevuta nel parametro

function getCityCount2(len){
    var cityNumber = 0;
    var cities = getCities();
    for (var i = 0; i<cities.length; i++){
        if (cities[i].name.length == len){
            cityNumber = cityNumber + 1;
        }
    }    
    return cityNumber;
}

































function dummy4(letter) {
    var dummyCities = getCities();
    for (var i=0; i<dummyCities.length; i++){
        if (dummyCities[i].name.toLowerCase().endsWith(letter)){
            console.log(dummyCities[i].name + " (" + i + ")");
        }
    }
}

function dummy5() {
    var dummyCities = getCities();
    for (var i=0; i<dummyCities.length; i++){
        if (dummyCities[i].name.toLowerCase().endsWith('e') && dummyCities[i].country == 'Italy'){
            console.log(dummyCities[i].name + " (" + i + ")");
        }
    }
}

function dummy6(even) {
    // even = true vuol dire scrivi in console quelli di indice pari
    // even = false vuol..... dispari
    
    var dummyCities = getCities();
    /*
    for (var i=0; i<dummyCities.length; i++){
        if (even == true){
            // se l'indice è pari allora scrivo in console
            if (i % 2 == 0) {
                console.log(dummyCities[i].name + ' (' + i + ')');                
            } 
        } else {
            if (i % 2 !== 0){
                console.log(dummyCities[i].name + ' (' + i + ')');                
            }
        }
    }
    
    
    for (var i=0; i<dummyCities.length; i++){
        if (i%2 == 0){
            if (even == true) {
                console.log(dummyCities[i].name + ' (' + i + ')');                
            } 
        } else {
            if (even == false){
                console.log(dummyCities[i].name + ' (' + i + ')');                
            }
        }
    }
    */
    
    for (var i=0; i<dummyCities.length; i++){
        if (i%2 == 0 && even) {
            console.log(dummyCities[i].name + ' (' + i + ')');                
        } 
        if (i%2 !== 0 && !even) {
            console.log(dummyCities[i].name + ' (' + i + ')');                
        } 

    }

}

function dummy7(){
    var dummyCities = getCities();
    for (var i=0; i<dummyCities.length; i++){
        if (dummyCities[i].name.length % 2 === 0){
            console.log(dummyCities[i].name + " (" + i + ")");
        }
    }
}

function dummy8(len){
    var dummyCities = getCities();
    for (var i=0; i<dummyCities.length; i++){
        if (dummyCities[i].name.length == len){
            console.log(dummyCities[i].name + " (" + i + ")");
            break;
        }
    }
}

function dummy9(){
    var dummyCities = getCities();
    for (var i=0; i<dummyCities.length; i++){
        if (dummyCities[i].name.length == 8){
            console.log(dummyCities[i].name + " (" + i + ")");
            return dummyCities[i].name;
        }
    }
    
    return 'Non trovata';
}

function dummy10(len) {
    var city8 = 'Non trovata';
    
    var dummyCities = getCities();
    for (var i=0; i<dummyCities.length; i++){
        if (dummyCities[i].name.length == len){
            console.log(dummyCities[i].name + " (" + i + ")");
            city8 = dummyCities[i].name;
            break;
        }
    }
    
    return city8;
}


function getCapital(country) {
    // restituisce il nome della capitale del country ricevuto
    var capitalCountry = getCities();
    for (var i=0; i<capitalCountry.length; i++){
        if (capitalCountry[i].country === country && capitalCountry[i].isCapital === true) {
            console.log(capitalCountry[i].name);
            return capitalCountry[i].name;
        }
    }
    console.log("No capital found:" + country);
    return 'non ho trovato nulla';
}

function showCapital() {
    var capital = getCapital('Burundi');
    alert(capital);
}

function scriviCitta8Chars() {
    var c = dummy9();
    
    console.log('La città con 8 chars è: ' + c);
}

    // esercizi
    // metti nel console log solo i nomi di città che iniziano con F
    // poi se hanno un nome più lungo di 7 caratteri
    // quelli che finiscono con la E
    // poi tutte quelle italiane con più di 7 caratteri
    // tutte le città di indice pari
    // scrivere città con una lunghezza di carattere è pari
    // scrivere solo una città con lunghezza caratteri uguale a 8

function getFavCities(){
    var favourites = [];
    favourites.push({name:"Hong Kong"});
    favourites.push({name:"New York"});
    favourites.push({name:"Naples"});
    favourites.push({name:"Hamburg"});
    favourites.push({name:"Rio De Janeiro"});
    return favourites;
}


async function showWeatherInfo(){
    var cityName = document.getElementById('inp-city').value;
    await showWeatherInfo2(cityName);
    addRecentList(cityName);
}


async function showWeatherInfo2(cityName){
    var data = await fetchCurrentInfo(cityName);
    showInfoCard(document.getElementById('col-city-card'), data);
    //document.getElementById('txt-temperature').innerText = data.current.temp_c;
    //document.getElementById('txt-city').innerText = data.location.name;
    
    // inserisco la città nell'elenco dropdown dei recent
    // 1. faccio clone del dropdown item dei recent
    // 2. metto il valore della città nel clone
    // 3. appendChild nel contenitore (dropdowm menu)
}

function showInfoCard(elClone, data){
    elClone.querySelector('#txt-temperature').innerText = data.current.temp_c + '°C';
    elClone.querySelector('#txt-city').innerText = data.location.name;
    elClone.querySelector('#img-city-day').src = data.current.condition.icon;
    elClone.querySelector('#txt-description').innerText = data.current.condition.text;
    // se la temperatura è inferiore a 0°C allora scrivila in blu
    if (data.current.temp_c <= 0){
        elClone.querySelector('#txt-temperature').style.color = '#0000ff';
    } else if (data.current.temp_c >= 30){
        elClone.querySelector('#txt-temperature').style.color = '#ff0000';
    }
    elClone.style.display = '';
}

async function showCityCards2(country){
    var cityNames = getCities();
    document.getElementById('row-city-card').innerHTML = '';
    for (var i = 0; i < cityNames.length; i++){
        if (cityNames[i].country.toLowerCase() == country.toLowerCase()){
            var elClone = await fetchClone('col-city-card');
            //var elClone = document.getElementById('col-city-card').cloneNode(true);
            var cityName = cityNames[i].name;
            var data = await fetchCurrentInfo(cityName);
            showInfoCard(elClone, data);
            document.getElementById('row-city-card').appendChild(elClone);
        }
    }
}

async function handleCountrySelection(country){
    // metti il country al posto del Pick
    document.getElementById('btn-select-country').innerText = country;
    
    // mostra le card delle città
    await showCityCards2(country); 
}

// commento

async function handleCitySelection(city){
    // prendiamo i dati meteo della città
    var data = await fetchCurrentInfo(city);
    
    // creiamo un clone 
    var elClone = await fetchClone('col-city-card');
    
    // chiamo la funzione che mostra la Card e faccio l'appendchild
    showInfoCard(elClone, data);
    var elContainer = document.getElementById('row-city-card');
    if (elContainer != null) {
        elContainer.innerHTML = '';
        elContainer.appendChild(elClone);        
    } else {
        console.log('Element not found');
    }
    document.getElementById('btn-select-city').innerText = city;   
}


function handleRecentSelection(){
    /*
    var recentCity = document.getElementById('inp-city').innerValue.trim;
     if (recentCity !== "") {
        // Create a new option element
        var elChronology = document.getElementById('btn-recent-country');
        elChronology.value = recentCity;
        elChronology.textContent = recentCity; 
        document.getElementById('btn-recent-country').appendChild(elChronology);
        */
}

    
    
async function addRecentList(cityName){
    // supponiamo di avere un array che contiene esattamente
    // le città già presenti in Recent list (recentCities)
    
    
    // aggiungo la città nella recent list solo se non esiste già 
    // nell'array recentCities
    var index = recentCities.indexOf(cityName);     
    if (index == -1) { 
        // decido se aggiungere cityName all'array o eliminare il primo elemento
        if (recentCities.length >= 5) {
            recentCities.splice(0,1);
        }
        
        // controllo se la città è anche nei favoriti
        var favs = getFavCities();
        var favorite = false;
        for (var i=0; i<favs.length; i++) {
            if (favs[i].name == cityName) {
                favorite = true;
                break;
            }
        }
        
        /*
        var index2 = favs.indexOf(cityName);
        var favorite;
        if (index2 == -1) {
            favorite = false;
        } else {
            favorite = true;
        }
        */
        
        // dichiaro e costruisco una variabile strutturata
        // che contiene il nome della città e il timestamp di creazione
        var cityInfo = {name: cityName, isFavorite: favorite};
        
        // aggiungo la variabile all'array
        recentCities.push(cityInfo);
        
        // a questo punto recentCities contiene tutte le città da viusalizzare nell'HTML
        // quindi svuoto il contenitore
        document.getElementById('mnu-recent').innerHTML = '';
        for (var i=0; i<recentCities.length; i++) {
            // aggiungo nella pagina HTML
            var elClone = await fetchClone('drd-recent-city');
            elClone.innerText = recentCities[i].name;
            
            if(recentCities[i].isFavorite){
                elClone.style.color = "#ff0000";
            }
            document.getElementById('mnu-recent').appendChild(elClone); 
        
        }
        
        //
        

        
        /***
        // se ci sono 5 o più elementi...
        if (recentCities.length >= 5){
            //  faccio spazio nell'array
            var cityToRemove = recentCities[0];
            recentCities.splice(0,1);
            
            // elimino l'elemento anche dall'HTML
            // document.RemoveElementBy(...) utilizzando cityToRemove
        }
        
        //controllo il numero massimo da aggiungere al dropdown
        if (recentCities.length < 5){
             // aggiungo il cityName all'array
            recentCities.push(cityName);
        
            // aggiungo nella pagina HTML
            var elClone = await fetchClone('drd-recent-city');
            elClone.innerText = cityName;
            document.getElementById('mnu-recent').appendChild(elClone);
        }
        ******/
    } 
}    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
