"use strict";

// const users = [
//   { id: 1, name: "Test", isMale: false, birthday: null },
//   { id: 2, name: "John" },
// ];

// const usersInJson = JSON.stringify(users);

// console.log(usersInJson);

// const usersFromJson = JSON.parse(usersInJson);

// console.log(usersFromJson);

const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=49.8383&longitude=24.0232&current=temperature_2m,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m&hourly=temperature_2m";

let isCelsius = true;
const temptUnitBtn = document.querySelector(".temptUnitBtn");
temptUnitBtn.textContent = `Swith to ${isCelsius ? "F" : "C"}`;

temptUnitBtn.addEventListener("click", changeTempUnit);

function changeTempUnit() {
  isCelsius = !isCelsius;
  temptUnitBtn.textContent = `Swith to ${isCelsius ? "F" : "C"}`;
}

fetch(`${WEATHER_URL} ${isCelsius ? "" : "&temperature_unit=fahrenheit"}`)
  .then((response) => response.json())
  .then((data) => updateeather(data))
  .catch((error) => console.log(error));

function updateeather(weatherData) {
  let {
    current: { temperature_2m, precipitation, wind_speed_10m },
    current_units: {
      temperature_2m: temperature_2m_units,
      precipitation: precipitation_units,
      wind_speed_10m: wind_speed_10m_units,
    },
  } = weatherData;

  console.log(weatherData);

  const weatherArticle = document.querySelector(".weather");

  weatherArticle.innerHTML = `
  <p style="color: ${calcTemperatureColor(temperature_2m)}">
    ${temperature_2m}  ${temperature_2m_units}
  </p>
  <p> Wind speed: ${wind_speed_10m} ${wind_speed_10m_units}, 
  Precipitation: ${precipitation} ${precipitation_units}</p>
  `;
}

function calcTemperatureColor(t) {
  if (t < 0) {
    return "blue";
  } else if (t > 0 && t <= 25) {
    return "green";
  } else if (t > 25) {
    return "red";
  }
}
