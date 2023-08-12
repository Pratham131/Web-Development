// const url = "http://www.omdbapi.com/?i=tt3896198&apikey=3b8777fd"



async function fetchData() {
    try {
        let url = "";
        const response = await fetch(url);
        const result = await response.json();

        console.log(result);
        // addMoviesData(result);
    }
    catch (error) {
        console.error("Invalid API Key!")
    }
}

function addMoviesData(data){

}