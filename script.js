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
          //const { icon, text } = data.condition; this is giving us undefined
          const { temp_f, humidity, feelslike_f } = data.current;
          console.log(name, temp_f, humidity, feelslike_f) //these are working
     }
};

