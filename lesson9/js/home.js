const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"

window.addEventListener('load', () => {
    fetch(requestURL)
        .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const townInfo = jsonObject['towns'];
        const towns = {"Preston": "preston", "Fish Haven": "fishHaven", "Soda Springs": "sodaSprings"};

        console.log(townInfo);
            for (let i = 0; i < townInfo.length; i++ ) {
                if (townInfo[i].name in towns) {
                let name = townInfo[i].name;
                let motto = townInfo[i].motto;
                let founded = 'Year Founded: ' + townInfo[i].yearFounded;
                let population = 'Population: ' + townInfo[i].currentPopulation;
                let rainFall = 'Annual Rain Fall: ' + townInfo[i].averageRainfall;

            const x = towns[townInfo[i].name];
            document.querySelector('.' + x + " h2").innerHTML = name;
            document.querySelector('.' + x + " p").innerHTML = motto;
            document.querySelector('.' + x + " h5.founded").innerHTML = founded;
            document.querySelector('.' + x + " h5.population").innerHTML = population;
            document.querySelector('.' + x + " h5.rainfall").innerHTML = rainFall;      
            }
        }
    });
});