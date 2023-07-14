var APIKey = "116a78577045c3e0956be6d6f9b49f2a";
var searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', getCity);
searchButton.addEventListener('click', searchCity);
var listHistory = document.getElementById('history');

var allSearch = [];

function searchCity() {
  var inputCity = document.getElementById('search-bar').value;
  allSearch.push(inputCity);
  localStorage.setItem("Search-History", JSON.stringify(allSearch));
  
  document.getElementById('search-bar').value = '';
}

function cityHistory() {
  var storedCities = JSON.parse(localStorage.getItem('Search-History'));
  if (storedCities !== null) {
    allSearch = storedCities;

    for(i = 0; i < storedCities.length; i++) {
      var cityPlacement = storedCities[i];
      var li = document.createElement('button');
      li.textContent = cityPlacement;
      li.setAttribute('data-index', i);
      listHistory.appendChild(li);
    }
  }
}

cityHistory();

function getCity() {
  var inputCity = document.getElementById('search-bar').value;
  //console.log(userInput);
  //console.log(searchButton.textContent);
  var cityAPI = "https://api.openweathermap.org/data/2.5/weather?q="+inputCity+"&APPID=116a78577045c3e0956be6d6f9b49f2a";

  fetch(cityAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log('Fetch Response \n-------------');
      console.log(data);
      var lat = (data.coord.lat);
      var lon =(data.coord.lon);
      console.log(lat,lon);
      getCoor(lat, lon);
      getFuture(lat, lon);

  })
};

var currentDay = document.getElementById('currentDay');

function getCoor(lat, lon) {
  var coordinateAPI = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=116a78577045c3e0956be6d6f9b49f2a";

  fetch(coordinateAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      currentDay.innerHTML = '';

      var temp = (data.list[0].main.temp);
      var humidity = (data.list[0].main.humidity);
      var wind = (data.list[0].wind.speed);
      var date = (data.list[0].dt_txt);
      var formatDate = dayjs(date).format('M/D/YYYY');
      var place = (data.city.name);
      var weather = (data.list[0].weather[0].main);

      var tenCity = document.getElementById('tenCity');
      tenCity.innerText = place + ' ' + formatDate;

      var Temp = document.createElement('li');
      Temp.textContent = 'Temp: ' + Math.floor(temp) + 'F';

      var Humidity = document.createElement('li');
      Humidity.textContent = 'Humidity: ' + humidity;

      var Wind = document.createElement('li');
      Wind.textContent = 'Wind: ' + wind;


      currentDay.appendChild(Temp);
      currentDay.appendChild(Humidity);
      currentDay.appendChild(Wind);
    })
  };
    function getFuture(lat, lon) {
      var coordinateAPI = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=116a78577045c3e0956be6d6f9b49f2a";
    
      fetch(coordinateAPI)
      .then(function (response) {
          return response.json();
      })
      .then(function (data){
        console.log(data);
        var day1 = document.getElementById('day1-list');
    
        var date = (data.list[8].dt_txt);
        var formatDate = dayjs(date).format('M/D/YYYY');
        var temp = (data.list[8].main.temp);
        var faren = (temp-273.15)*(9/5)+32;
        var wind = (data.list[8].wind.speed);
        var humidity = (data.list[8].main.humidity);
    
        var date1 = document.getElementById('day1');
        date1.innerText = formatDate;
    
        var Temp = document.createElement('li');
        Temp.textContent = "Temp: " + Math.floor(faren) + " F";

        var Humidity = document.createElement('li');
        Humidity.textContent = 'Humidity: ' + humidity;

      var Wind = document.createElement('li');
      Wind.textContent = 'Wind: ' + wind;

    
        day1.appendChild(Temp);
        day1.appendChild(Humidity);
        day1.appendChild(Wind);

        
    })
    fetch(coordinateAPI)
      .then(function (response) {
          return response.json();
      })
      .then(function (data){
        console.log(data);
        var day2 = document.getElementById('day2-list');
    
        var date = (data.list[16].dt_txt);
        var formatDate = dayjs(date).format('M/D/YYYY');
        var temp = (data.list[16].main.temp);
        var faren = (temp-273.15)*(9/5)+32;
        var wind = (data.list[16].wind.speed);
        var humidity = (data.list[16].main.humidity);
    
        var date2 = document.getElementById('day2');
        date2.innerText = formatDate;
    
        var Temp = document.createElement('li');
        Temp.textContent = "Temp: " + Math.floor(faren) + " F";

        var Humidity = document.createElement('li');
        Humidity.textContent = 'Humidity: ' + humidity;

      var Wind = document.createElement('li');
      Wind.textContent = 'Wind: ' + wind;

    
        day2.appendChild(Temp);
        day2.appendChild(Humidity);
        day2.appendChild(Wind);

        
    })
    fetch(coordinateAPI)
      .then(function (response) {
          return response.json();
      })
      .then(function (data){
        console.log(data);
        var day3 = document.getElementById('day3-list');
    
        var date = (data.list[24].dt_txt);
        var formatDate = dayjs(date).format('M/D/YYYY');
        var temp = (data.list[24].main.temp);
        var faren = (temp-273.15)*(9/5)+32;
        var wind = (data.list[24].wind.speed);
        var humidity = (data.list[24].main.humidity);
    
        var date3 = document.getElementById('day3');
        date3.innerText = formatDate;
    
        var Temp = document.createElement('li');
        Temp.textContent = "Temp: " + Math.floor(faren) + " F";

        var Humidity = document.createElement('li');
        Humidity.textContent = 'Humidity: ' + humidity;

      var Wind = document.createElement('li');
      Wind.textContent = 'Wind: ' + wind;

    
        day3.appendChild(Temp);
        day3.appendChild(Humidity);
        day3.appendChild(Wind);

        
    })
    fetch(coordinateAPI)
      .then(function (response) {
          return response.json();
      })
      .then(function (data){
        console.log(data);
        var day4 = document.getElementById('day4-list');
    
        var date = (data.list[32].dt_txt);
        var formatDate = dayjs(date).format('M/D/YYYY');
        var temp = (data.list[32].main.temp);
        var faren = (temp-273.15)*(9/5)+32;
        var wind = (data.list[32].wind.speed);
        var humidity = (data.list[32].main.humidity);
    
        var date4 = document.getElementById('day4');
        date4.innerText = formatDate;
    
        var Temp = document.createElement('li');
        Temp.textContent = "Temp: " + Math.floor(faren) + " F";

        var Humidity = document.createElement('li');
        Humidity.textContent = 'Humidity: ' + humidity;

      var Wind = document.createElement('li');
      Wind.textContent = 'Wind: ' + wind;

    
        day4.appendChild(Temp);
        day4.appendChild(Humidity);
        day4.appendChild(Wind);

        
    })
    fetch(coordinateAPI)
      .then(function (response) {
          return response.json();
      })
      .then(function (data){
        console.log(data);
        var day5 = document.getElementById('day5-list');
    
        var date = (data.list[39].dt_txt);
        var formatDate = dayjs(date).format('M/D/YYYY');
        var temp = (data.list[39].main.temp);
        var faren = (temp-273.15)*(9/5)+32;
        var wind = (data.list[39].wind.speed);
        var humidity = (data.list[39].main.humidity);
    
        var date5 = document.getElementById('day5');
        date5.innerText = formatDate;
    
        var Temp = document.createElement('li');
        Temp.textContent = "Temp: " + Math.floor(faren) + " F";

        var Humidity = document.createElement('li');
        Humidity.textContent = 'Humidity: ' + humidity;

      var Wind = document.createElement('li');
      Wind.textContent = 'Wind: ' + wind;

    
        day5.appendChild(Temp);
        day5.appendChild(Humidity);
        day5.appendChild(Wind);

        
    })
    }  





