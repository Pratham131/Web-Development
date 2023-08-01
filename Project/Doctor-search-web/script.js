let searchContainer = document.getElementById("serContainer");
let serBtn = document.getElementById("serButton")

window.addEventListener("load", () => {
    searchContainer.style.display = "none";
})
serBtn.addEventListener("click", () =>  {
    clearCard(); 
    let category = document.getElementById("category").value;
    let city = document.getElementById("city").value;
    searchContainer.style.display = "grid";
    fetchDoctor(category, city)
}) 

async function fetchDoctor(category, city) {
        const response = await fetch("doc.json");
        const result = await response.json();
        // console.log(result, category, city); 
        addDocCards(result, category, city)
}

function clearCard() {
    let container = document.getElementById("serContainer");
    
    if (!container || container.childElementCount === 0) {
        return;
    }

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function addDocCards(result, category, city) {
    console.log(result)

    let newArr = result.filter((element) => {
        if(category === "") return element.city.toLowerCase() === city.toLowerCase()
        else if(city === "") return element.specialist.toLowerCase() === category.toLowerCase()
        return element.specialist.toLowerCase() === category.toLowerCase()
            && element.city.toLowerCase() === city.toLowerCase()
    })

    newArr.forEach(card => {
        let div = document.createElement("serCard");
        div.className = "serCard"; 

        div.innerHTML = 
        `<h2>${card.specialist}</h2>
        <img src="${card.image}" alt="">
        <h3>${card.name}</h3>
        <span>${card.email}</span>
        <br><span>${card.city}</span> <br> `

        searchContainer.appendChild(div)
    });
}


