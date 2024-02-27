const apiKey = "688adb09b90d875695e691751782cf71";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

async function checkWether(city) {
  const response = await fetch(
    apiUrl + city + `&appid=${apiKey}` + "&units=metric"
  );

  if (response.status == "404") {
    alert("Please Enter The Vaild City Name");
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temprature").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main === "Clear") {
      weatherIcon.src = "images/clear.png";
    }
    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "images/clouds.png";
    }
    if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    }
    if (data.weather[0].main === "Rain") {
      weatherIcon.src = "images/rain.png";
    }
    if (data.weather[0].main === "Snow") {
      weatherIcon.src = "images/snow.png";
    }
    if (data.weather[0].main === "Haze") {
      weatherIcon.src = "images/mist.png";
    }
  }
}

searchBtn.addEventListener("click", () => {
  checkWether(searchBox.value);
});
