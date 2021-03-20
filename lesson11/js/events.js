const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

window.addEventListener('load', () => {
    fetch(requestURL)
        .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        console.table(jsonObject);  // temporary checking for valid response and data parsing
            for (let i = 0; i < towns.length; i++ ) {
            let ul = document.createElement('ul');
            let elist = document.createElement('li');
            let p2 = document.createElement('p');
    
        elist.textContent = towns[i].events[i];

        ul.appendChild(elist);
    
        document.querySelector('div.townEvents').appendChild(ul);
        }
    });
});