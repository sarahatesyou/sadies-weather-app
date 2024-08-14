let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes().toString().padStart(2, "0");
let weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let week = weekDay[now.getDay()];

let dayTime = document.querySelector(".dayTime");
dayTime.innerHTML = `${week} ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-search");
  let cityName = document.querySelector("h1");
  cityName.innerHTML = `${searchInput.value}`;

  let apiKey = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=o091fdfe309a88f508fe60bcaa4tc41a&unit=metric`;

  axios.get(apiKey).then(currentTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function currentTemperature(response) {
  let currentTemp = Math.round(response.data.temperature.current);
  let cityTemperature = document.querySelector(".current-temperature-value");
  cityTemperature.innerHTML = `${currentTemp}`;
}
