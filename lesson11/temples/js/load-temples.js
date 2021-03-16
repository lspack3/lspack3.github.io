window.addEventListener('load', () => {
    const requestURL = "js/temples2.json"
    fetch(requestURL) 
        .then((response) => {
            return response.json();
        })
        .then((jsonObject) => {
            console.log(jsonObject); // test
         //   console.log(jsonObject[2].presidents[0] + "is the president of the " + jsonObject[2].name);
            Object.entries(jsonObject).forEach(([key,temple]) => {
            //    if(temple.state == "ID"){
                buildTempleCard(temple);
            //    }
            });   
        });
});

function buildTempleCard(temple) {
    console.log(temple); // test
    let card = document.createElement("section");
    card.classList.add("temple")
    card.innerHTML = `<h2>${temple.name}</h2>
                      <img src="${temple.imageurl}" alt="${temple.name}">
                      <p>Current President: <b>${temple.presidents[temple.presidents.length-1]}</b></p>
                      <p>Address: <b>${temple.address1} ${temple.city} ${temple.state} ${temple.zip}</b></p>
                      <p>Phone: <b>${temple.phone}</b></p>`;
    document.querySelector("#temples").appendChild(card);
}