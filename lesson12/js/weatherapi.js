window.addEventListener('load', () => {

const rexburg = "https://api.openweathermap.org/data/2.5/weather?id=5605242&appid=a74c7e35f6bf8eabf46deae3c9db19c3&units=imperial";
const anchorage = "https://api.openweathermap.org/data/2.5/weather?id=5879348&appid=a74c7e35f6bf8eabf46deae3c9db19c3&units=imperial";
const manhattan = "https://api.openweathermap.org/data/2.5/weather?id=5128581&appid=a74c7e35f6bf8eabf46deae3c9db19c3&units=imperial";
const provo = "https://api.openweathermap.org/data/2.5/weather?id=5780026&appid=a74c7e35f6bf8eabf46deae3c9db19c3&units=imperial";

fetch(rexburg)
  .then((response) => response.json())
  .then((jsObject) => {
    console.table(jsObject);
    console.log(jsObject);  // for testing
    document.getElementById('rexCurrent').textContent = jsObject.weather[0].description;
    document.getElementById('rexTemp').textContent = jsObject.main.temp + " *F";
  });
  fetch(anchorage)
  .then((response) => response.json())
  .then((jsObject) => {
    console.table(jsObject);
    console.log(jsObject);  // for testing
    document.getElementById('anchCurrent').textContent = jsObject.weather[0].description;
    document.getElementById('anchTemp').textContent = jsObject.main.temp + " *F";
  });
  fetch(manhattan)
  .then((response) => response.json())
  .then((jsObject) => {
    console.table(jsObject);
    console.log(jsObject);  // for testing
    document.getElementById('manCurrent').textContent = jsObject.weather[0].description;
    document.getElementById('manTemp').textContent = jsObject.main.temp + " *F";
  });
  fetch(provo)
  .then((response) => response.json())
  .then((jsObject) => {
    console.table(jsObject);
    console.log(jsObject);  // for testing
    document.getElementById('prCurrent').textContent = jsObject.weather[0].description;
    document.getElementById('prTemp').textContent = jsObject.main.temp + " *F";
  });


})