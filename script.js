var APIKey = "116a78577045c3e0956be6d6f9b49f2a";
var searchButton = document.getElementById('search-button');
var listHisory = document.getElementById('history');

searchButton.addEventListener('click', getCity);
searchButton.addEventListener('click', searchCity);

var userSearches = [];

function searchCity(){
    var searchButton = document.getElementById('userInput').value;
    userSearches.push(searchButton);
    localStorage.setItem('searchHistory', JSON.stringify(userSearches));
    console.log(userSearches)

}

function searchHistory(){
    var savedCities = JSON.parse(localStorage.getItem('searchHistory'));
    if(savedCities !== null){
        userSearches = savedCities;

        for (i = 0; i < savedCities.length; i++){
            var cityPlacement = savedCities[i];
            var li = document.createElement('button');
            li.textContent = cityPlacement;
            li.setAttribute('data-index', i);
            listHisory.appendChild(li);
        }
    }
}
searchHistory()




function getCity() {
  var inputCity = document.getElementById('exampleDataList').value;
  //console.log(userInput);
  //console.log(searchButton.textContent);
  var cityAPI = "https://api.openweathermap.org/data/2.5/forecast?q=%22"+inputCity+"%22&appid=116a78577045c3e0956be6d6f9b49f2a";


  fetch(cityAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log('Fetch Response \n-------------');
      var lat = (data.city.coord.lat);
      var lon =(data.city.coord.lon);
      console.log(lat,lon);
      getCoor(lat,lon);
  })
};


function getCoor(lat, lon) {
  var coordinateAPI = "https://api.openweathermap.org/data/2.5/forecast?lat=%22"+lat+"%22&lon=%22"+lon+"%22&appid=116a78577045c3e0956be6d6f9b49f2a";

  fetch(coordinateAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var temp = (data.list[0].main.temp);
      var humidity = (data.list[0].main.humidity);
      var humidity = (data.list[0].weather[0].description);
      var wind = (data.list[0].wind.speed);
      var date = (data.list[0].dt_txt);
      var place = (data.city.name);
      console.log(temp,humidity,wind,date,place);
      // var temp =(data.);
    })
};