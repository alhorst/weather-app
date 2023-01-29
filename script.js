//put functions in 'weather' variable so we don't pollute global scope
let weather = {
     apiGeo: "https://api.openweathermap.org/geo/1.0/direct?q=",
     apiWeather: "http://api.weatherapi.com/v1/",
     apikeyWeather: "4da8751e106c470c80b231859232301",

     getWeather: function (city) {
          fetch(
               this.apiWeather
               + "current.json?key="
               + this.apikeyWeather
               + "&q="
               + city
          )
               .then((response) => response.json())
               .then((data) => this.displayWeather(data));
     },

     displayWeather: function (data) {
          const { name } = data.location;
          const { icon, text } = data.current.condition; //nested objects
          const { temp_f, humidity, feelslike_f } = data.current;
          console.log(name, icon, text, temp_f, humidity, feelslike_f) //for testing
          document.querySelector(".city").innerText = name;
          document.querySelector(".icon").src = icon;
          document.querySelector(".description").innerText = text;
          document.querySelector(".temp").innerText = temp_f + "°F";
          document.querySelector(".feels-like").innerText = "Feels like " + feelslike_f + "°";
          document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";

     },
     searchCity: function () {
          this.getWeather(document.querySelector(".search-bar").value)
     }
};

document.querySelector(".search button").addEventListener("click", function () {
     weather.searchCity();
});
