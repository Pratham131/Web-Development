// let array of given cities
let arr = ["Tokyo", "Moscow", "Toronto", "Tennessee"].sort();
let container = document.getElementById("container")
let apiKey = "6f62a1aad190598e8e5599a5d9d5fac3";


// Onload Data will bel oad
window.addEventListener("load", () => {
    arr.forEach((city) => {
        fetchWheatherData(city)
    })
})

// Add new city on click of button
let addBtn = document.getElementById("addBtn")

addBtn.addEventListener("click", () => {
    let getCity = document.getElementById("newCity").value;
    let newCity = capitalizeFirstLetter(getCity);

    if(!arr.includes(newCity)) {
        clearData();
        arr.push(newCity)
        arr.sort();
        arr.forEach((city) => {
            fetchWheatherData(city)
        })
    }
    
})

function capitalizeFirstLetter(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return str;
    }

    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

async function fetchWheatherData(city) {
    // ${city}
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    let response = await fetch(url);
    let result = await response.json()

    console.log(result)
    console.log(result.list[0].weather[0].main)
    addWhetherData(result, city);
}

function addWhetherData(data, city) {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML =
        `<div class="left">
        <p>${Math.round(data.list[0].main.temp)}&deg;</p> 
        <span class="hAndL">High: ${Math.round(data.list[0].main.temp_max)}&deg; Low: ${Math.round(data.list[0].main.temp_min)}&deg; </span> <br>
        <span class="hAndL">Wind Speed: ${Math.round(data.list[0].wind.speed)}</span> <br>
        <span class="hAndL">Humidity: ${Math.round(data.list[0].main.humidity)}</span> <br>
        <span class="hAndL">Pressure: ${Math.round(data.list[0].main.pressure)}</span> <br>
        <span>${city}, ${data.city.country}</span>
    </div>

    <div class="right">
        <img src="./asset/Sun cloud angled rain.png" alt=""> 
        <span>${data.list[0].weather[0].main}</span>
    </div>`

    container.appendChild(card)
}

function clearData() {
    let container = document.getElementById("container")

    if (!container || container.childElementCount === 0) {
        return;
    }

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
