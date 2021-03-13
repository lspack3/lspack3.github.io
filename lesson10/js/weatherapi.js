const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a74c7e35f6bf8eabf46deae3c9db19c3&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.table(jsObject);
    console.log(jsObject);  // for testing

    document.getElementById('current').textContent = jsObject.weather[0].description;
    document.getElementById('temp').textContent = jsObject.main.temp + " *F";
    document.getElementById('chill').textContent = jsObject.wind.deg;
    document.getElementById('humidity').textContent = jsObject.main.humidity + "%";
    document.getElementById('wind-speed').textContent = jsObject.wind.speed + " mph";

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description;
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });


fetch("http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=a74c7e35f6bf8eabf46deae3c9db19c3&units=imperial")
  .then((response) => response.json())
  .then((jsObject) => {
    console.table(jsObject);
    console.log(jsObject);  // for testing
  
  for (var i = 0; jsObject.length; i++) {           //for every object array 
      if (jsObject.dt_txt.includes("18:00:00")) {   //if dt_txt contains 18:00:00 
                                        // then input the data in that array into .fiveDay
      }

  }  

  });