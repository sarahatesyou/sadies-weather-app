function refreshData(response) {
  let currentTemperature = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let currentCity = document.querySelector(".current-city");
  let currentDescription = document.querySelector("#weather-description");
  let currentHumidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind");
  let currentTime = document.querySelector("#dayTime");
  let date = new Date(response.data.time * 1000);
  let emoji = document.querySelector("#emoji");

  currentTemperature.innerHTML = Math.round(temperature);
  currentCity.innerHTML = response.data.city;
  currentDescription.innerHTML = response.data.condition.description;
  currentHumidity.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeed.innerHTML = `${response.data.wind.speed}km/h`;
  currentTime.innerHTML = formatDate(date);
  emoji.innerHTML = `<img src="${response.data.condition.icon_url}" class="current-temperature-emoji" id="emoji">`;
}

function formatDate(date) {
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "o091fdfe309a88f508fe60bcaa4tc41a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshData);
}

function submitSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".input-search");
  searchCity(searchInput.value);
}

function weeklyForecast(city) {
  let apiKey = "o091fdfe309a88f508fe60bcaa4tc41a";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  let forecastHtml = "";
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", submitSearch);

searchCity("Porto");
