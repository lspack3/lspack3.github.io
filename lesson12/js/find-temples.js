window.addEventListener('load', () => {
    const sourceFile = "js/temples.json";
    fetch(sourceFile) 
        .then((response) => {
            return response.json();
        })
        .then((jsonObject) => {
            console.log(jsonObject);
            Object.entries(jsonObject.temples).forEach(([key,temples]) => {
                buildTempleCard(temples);
            });
        });
});

function buildTempleCard(temples) {
    console.log(temples);
    let card = document.createElement("section");
    card.classList.add("temple")
    card.innerHTML = 
        `<h2>${temples.name}</h2>
        <img src="${temples.imageurl}" alt="${temples.name}">
        <p><strong>Phone: </strong>${temples.phone}</p>
        <p><strong>Email: </strong>${temples.email}</p>
        <p><strong>Address: </strong>${temples.address1} ${temples.city}, ${temples.state} ${temples.zip}</p>
        <p><strong>History: </strong>${temples.history}</p>
        <h4>Schedule</h4>
        <p><strong>Sessions: </strong>${temples.sessions[0]}  ${temples.sessions[1]}  ${temples.sessions[2]}  ${temples.sessions[3]}  ${temples.sessions[4]}</p>
        <p><strong>Closures: </strong>${temples.closure[0]}  ${temples.closure[1]}  ${temples.closure[2]}</p>
        <p><strong>Services: </strong><br>${temples.services[0]}<br>${temples.services[1]}</p>`;
    document.querySelector(".cards").appendChild(card);
};