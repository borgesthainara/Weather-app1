let currentTime = new Date();
console.log(currentTime);

console.log(currentTime.getDay());
console.log(currentTime.getMilliseconds());
console.log(currentTime.getHours());

let now = new Date();
let div = document.getElementById("mydiv");
let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thusday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

div.innerHTML = `${day} ${hours}:${minutes}`;

// Second Challenge //
function changeCity(event) {
  event.preventDefault();

  let searchLocation = document.querySelector("#search-location");

  let h2 = document.querySelector("h2");
  h2.innerHTML = ` ${searchLocation.value}`;
}

let searchText = document.querySelector("#search-text");
searchText.addEventListener("submit", changeCity);

// third Challenge //

function displayweatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").el.textContent.value =
    Math.round(response);
}

function search(event) {
  event.preventDefault();
  let apiKey = "3b07c9ae8af0cb6a9dc40f5a21793408";
  let city = document.querySelector("#search-location").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayweatherCondition);
}
