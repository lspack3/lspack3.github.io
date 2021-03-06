const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"

window.addEventListener('load', () => {
    fetch(requestURL)
        .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const townInfo = jsonObject['townInfo'];
        console.table(jsonObject);
            for (let i = 0; i < prophets.length; i++ ) {
                let section = document.createElement('section');
                let h2 = document.createElement('h2');
                let p = document.createElement('p');
                let founded = document.createElement('h5');
                let population = document.createElement('h5');
                let rainFall = document.createElement('h5');
                let image = document.createElement('img');

        h2.textContent = townInfo[i].name;
        p.textContent = townInfo[i].motto;
        founded.textContent = 'Year Founded: ' + townInfo[i].yearFounded;
        population.textContent = 'Population: ' + townInfo[i].currentPopulation;
        rainFall.textContent = 'Annual Rain Fall: ' + townInfo[i].averageRainfall;
        image.setAttribute('src', townInfo[i].photo);

        section.appendChild(h2);
        section.appendChild(p);
        section.appendChild(founded);
        card.appendChild(population);
        card.appendChild(rainFall);
        section.appendChild(image);

        document.querySelector('div.townFacts').appendChild(section);
        }
    });
});