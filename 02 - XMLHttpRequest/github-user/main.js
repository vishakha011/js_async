let container = document.querySelector('.container');
let form = document.querySelector('.search');
let input = document.querySelector('#search');
let searchBtn = document.querySelector('button');
let cardWrapper = document.querySelector('.card-wrapper');


function handleSearch(event) {
    event.preventDefault();

    // console.log(input.value)
    let url = `https://api.github.com/users/${input.value}`;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onload = function() {
     let data = JSON.parse(xhr.response);
     
     if(data.message === "Not Found") {
         alert(`${input.value} not found`)
     }else {
         cardWrapper.innerText = "";
         console.log(data)

         let userAvatar = document.createElement('div')
         userAvatar.classList.add('user-avatar');
         let img = document.createElement('img')
         img.src = data.avatar_url;
         img.alt = data.name;
         userAvatar.append(img);

         let userInfo = document.createElement('div');
         userInfo.classList.add('user-info');
 

         let name = document.createElement('p');
         name.innerText = `Name: ${data.name}`;
         let id = document.createElement('p');
         id.innerText = `ID: ${data.id}`;
         let bio = document.createElement('p');
         bio.innerText = `Bio: ${data.bio}`;

         userInfo.append(name, id, bio)
         cardWrapper.append(userAvatar, userInfo);
         cardWrapper.style.display = "flex"
     }
        
    }

    xhr.onerror = function() {
        console.log('error')
    }

    xhr.send();
}



form.addEventListener('submit', handleSearch)