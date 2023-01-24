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
               .then((response) => {
                    if (!response.ok) {
                         alert("Weather not found at this location!");
                         throw new Error("Weather not found!");
                    }
                    return response.json();
               })
               .then((data) => this.displayWeather(data));
     },

     displayWeather: function (data) {
          const { name } = data;
          const { text, icon } = data.condition[0];
          const { temp_f, humidity } = data.current;
          const { feels } = data.feelslike_f;

          document.querySelector(".city").innerText = name;
          document.querySelector(".icon").src = "//cdn.weatherapi.com/weather/64x64/" + icon + ".png";
          document.querySelector(".description").innerText = text;
          document.querySelector(".temp").innerText = temp_f + "°F";
          document.querySelectorAll(".feels-like").innerText = feels;
          document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
          document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
     },

     citySearch: function () {
          this.fetchWeather(document.querySelector(".search_bar").value);
     }
};

document.querySelector(".search button").addEventListener("click", function () {
     weather.citySearch();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
     if (event.key == "Enter") {
          weather.citySearch();
     }
});
