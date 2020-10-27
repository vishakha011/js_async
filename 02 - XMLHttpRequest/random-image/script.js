let container = document.querySelector('.container');
let button = document.querySelector('button');


function fetchData() {
    let url = "https://api.unsplash.com/photos/random/?client_id=yyJP75ZE_ut-zRfcSzuXzTwp1cR2rlcjczky9Sl3hJQ";

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onload = function() {
        let dataJSON = JSON.parse(xhr.response);
        // console.log(dataJSON);
        container.innerHTML = "";
        let img = document.createElement("img");
        img.src = dataJSON.urls.small;
        img.alt = dataJSON.alt_description;

        container.append(img)

    };

    xhr.onerror = function() {
        console.log('error');
    };
    
    xhr.send();
}

fetchData();

button.addEventListener('click', fetchData);