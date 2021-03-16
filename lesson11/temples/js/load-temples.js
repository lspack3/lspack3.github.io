window.addEventListener('load', () => {
    const requestURL = "js/temples2.json"
    fetch(requestURL) 
        .then((response) => {
            return response.json();
        })
        .then((jsonObject) => {
            console.log(jsonObject);
            console.log(jsonObject[0]);
        });
});