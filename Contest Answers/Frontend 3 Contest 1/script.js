// const url = "http://www.omdbapi.com/?i=tt3896198&apikey=3b8777fd"
const container = document.getElementById("movieContainer");
let arr = ["Fast and Furious", "Iron Man", "Thor", "Captain America", "Hulk", "Transformers", "Avengers" ]
const apiKey = "3b8777fd";

// Onload Data will be load
window.addEventListener("load", () => {
    
    arr.forEach(function (movie) {
        fetchData(movie);
    })
})


async function fetchData(moive) {
    try {
        let url = `https://www.omdbapi.com/?t=${moive}&apikey=${apiKey}`;
        const response = await fetch(url);
        const result = await response.json();

        // console.log(result);
        // console.log(result.Genre);
        addMoviesData(result);
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
            <span>Release: ${data.Relesed}</span>
            <span>${data.Type}</span>
        </div>
        <div class="rating">
            <span>ImdbId: ${data.imdbID}</span>
            <span><img src="./assets/star.png"> ${data.imdbRating}/10</span>
        </div>

    </div>`

    container.appendChild(card);
}

fetchData();