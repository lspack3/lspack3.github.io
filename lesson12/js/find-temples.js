window.addEventListener('load', () => {
    const requestURL = "js/temples.json"
    fetch(requestURL) 
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            const temples = jsonObject['temples'];
            console.log(jsonObject); // test
                for (let i = 0; i < prophets.length; i++ ) {
                let card = document.createElement('section'); //container
                let h2 = document.createElement('h2'); //temple name
                let phone = document.createElement('p'); //phone
                let email = document.createElement('p'); //email
                let address = document.createElement('p'); //full address
                let history = document.createElement('p'); // history
                let sch = document.createElement('h4'); //(title) schedule
                let session = document.createElement('p'); // sessions
                let close = document.createElement('p'); // closures
                let service = document.createElement('p'); // services
                let pic = document.createElement('img'); // image

            h2.textContent = temples[i].name; // display temple name
            phone.textContent = "Phone: " + temples[i].phone; //display phone
            email.textContent = "Email: " + temples[i].email; //display email
            address.textContent = "Address: " + temples[i].address1 + ' ' + temples[i].city + ', ' + temples[i].state + ' ' + temples[i].zip; //display full address
            history.textContent = "History: " + temples[i].history; //display history
            sch.textContent = "Schedule";
            session.textContent = "Sessions: " + temples[i].sessions; //display sessions
            close.textContent = "Closures: " + temples[i].closure; //display closures
            service.textContent = "Services: " + temples[i].services; //display services
            pic.setAttribute('src', temples[i].imageurl);

            card.appendChild(h2);
            card.appendChild(phone);
            card.appendChild(email);
            card.appendChild(address);
            card.appendChild(history);
            card.appendChild(sch);
            card.appendChild(session);
            card.appendChild(close);
            card.appendChild(service);
            document.querySelector('div.cards').appendChild(card);

            }
    });
});