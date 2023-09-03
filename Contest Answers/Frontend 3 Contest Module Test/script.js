window.addEventListener('load', () => {

    const today = new Date().toISOString().split('T')[0];
    document.getElementById('search-date').setAttribute('max', today);

    fetchData();

})

async function fetchData() {

    try {
        const apiKey = "MZPEmzMf7AcAdSWd1B3ZUwhjCeHL2J2jW4ngp82C";
        let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
        let response = await fetch(url);
        let result = await response.json();
        // console.log(result)

        getCurrentImageOfTheDay(result);
    }
    catch(error){ 
        console.error();
    };
}

function getCurrentImageOfTheDay(picData){

    const currImgCont = document.getElementById("current-image-container");

    currImgCont.innerHTML =
    `<h2>Picture on ${picData.date}</h2>
    <img src="${picData.url}" alt="">
    <h3>${picData.title}</h3>
    <p>${picData.explanation}</p>`
    
}

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener('click', () => {
    const searchDate = document.getElementById("search-date").value;
    // console.log(searchDate);
    fetchSearchData(searchDate);

    saveSearch(searchDate);
    addSearchToHistory(searchDate);
})

async function fetchSearchData(searchDate){
    
    try {
        const apiKey = "MZPEmzMf7AcAdSWd1B3ZUwhjCeHL2J2jW4ngp82C";
        let url = `https://api.nasa.gov/planetary/apod?date=${searchDate}&api_key=${apiKey}`;
        let response = await fetch(url);
        let result = await response.json();
        // console.log(result)

        getImageOfTheDay(result);
    }
    catch(error){ 
        console.error();
    };
    
}

function getImageOfTheDay(picData){
    const currImgCont = document.getElementById("current-image-container");

    currImgCont.innerHTML =
    `<h2>Picture on ${picData.date}</h2>
    <img src="${picData.url}" alt="">
    <h3>${picData.title}</h3>
    <p>${picData.explanation}</p>`
} 

function saveSearch(date) {
    
    let obj = { "Date":date}

    const existingDates = JSON.parse(localStorage.getItem('searches')) || [];
    existingDates.push(obj);
    localStorage.setItem('searches', JSON.stringify(existingDates));

}

function addSearchToHistory(searchDate){

    const unordList = document.getElementById("search-history");

    let li = document.createElement("li");
    li.innerHTML = `<a href="#" >${searchDate}</a>`

    unordList.appendChild(li)
}

function data(data){
    console.log(data);s
    // fetchNewData(data)
}

