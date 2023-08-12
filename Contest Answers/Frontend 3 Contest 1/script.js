// const url = "http://www.omdbapi.com/?i=tt3896198&apikey=3b8777fd"
const container = document.getElementById("movieContainer");
let arr = ["Fast and Furious", "Iron Man", "Thor", "Captain America", "Hulk", "Transformers", "Avengers", "Up" ]
const apiKey = "3b8777fd";
const loader = document.getElementById("loader");

// Onload Data will be load
window.addEventListener("load", () => {
    // loader.style.display = "block";
    arr.forEach(function (movie) {
        fetchData(movie, apiKey);
    })
})

const apiBtn = document.getElementById("apiBtn");
apiBtn.addEventListener("click", () => {
    let newApiKey = document.getElementById("newApiKey").value;
    console.log(newApiKey);
    arr.forEach(function (movie) {
        fetchData(movie, newApiKey);
    })
})

const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", () => {
    let newMovie = document.getElementById("searchInput").value;
    console.log(newMovie);
    fetchData(newMovie, apiKey);
})

async function fetchData(moive, apiKey) {
    try {
        let url = `https://www.omdbapi.com/?t=${moive}&apikey=${apiKey}`;
        const response = await fetch(url);
        const result = await response.json();

        
        if(result.Response === 'False'){
            console.log(response)

        }
        else{
            console.log(result);
            // console.log(result.Type);
            
            loader.style.display = "none";
            addMoviesData(result);
        }
        
    }
    catch (error) {
        console.error("Invalid API Key!", error)
    }
}



function addMoviesData(data){

    

    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = 
    `<div class="poster">
        <img src="${data.Poster}">
    </div>
    <div class="info">
        <p>${data.Title}</p>
        <h4>Genre: ${data.Genre}</h4>
        <div class="type">
            <span>Release: ${data.Released}</span>
            <span>${capitalizeFirstLetter(data.Type)}</span>
        </div>
        <div class="rating">
            <span>ImdbId: ${data.imdbID}</span>
            <span><img src="./assets/star.png"> ${data.imdbRating}/10</span>
        </div>

    </div>`

    container.appendChild(card);
}

function capitalizeFirstLetter(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return str;
    }

    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}