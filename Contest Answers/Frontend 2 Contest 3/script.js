let gridBtn = document.getElementById("grid");
let listBtn = document.getElementById("list");

let gridContainer = document.getElementById("grid-container");
let table = document.getElementById("table");

window.addEventListener("load", function() {
    gridBtn.style.color = "rgb(75, 129, 226)";
    gridBtn.style.borderBottom = "2px solid rgb(75, 129, 226)";
    fetchCryptoCards();
})

gridBtn.addEventListener("click", () => {
    gridBtn.style.color = "rgb(75, 129, 226)";
    gridBtn.style.borderBottom = "2px solid rgb(75, 129, 226)";
    listBtn.style.color = "white";
    listBtn.style.borderBottom = "none";

    clearListData()
    clearGridData()
    fetchCryptoCards()
});

listBtn.addEventListener("click", () => {
    listBtn.style.color = "rgb(75, 129, 226)";
    listBtn.style.borderBottom = "2px solid rgb(75, 129, 226)";
    gridBtn.style.color = "white";
    gridBtn.style.borderBottom = "none";

    clearGridData()
    clearListData()
    fetchCryptoRows()
});

async function fetchCryptoCards() {
    const url ="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";
    const response = await fetch(url);
    const cryptoData = await response.json();

    appendGridData(cryptoData);
}

function appendGridData(cryptoData) {
    console.log(cryptoData);
    cryptoData.forEach((card) => {
        /* <div class="card" >
                        <div class="top">
                            <div class="logo">
                                <img src="https://cdn-icons-png.flaticon.com/128/9729/9729141.png" alt="">
                            </div>
                            <div class="info">
                                <b class="shortName">BTN</b> <br>
                                <span class="name">Bitcoin</span>
                            </div>
                        </div>
    
                        <div class="bottom">
                            <span class="percent">0.07%</span>
                            <b>$29,478</b>
                            <span class="marketCap">Total Volume: 634768</span>
                            <span class="total_volume">Market Cap: 651646</span>
                        </div>
                    </div> */
        let div = document.createElement("card");
        div.className = "card";

        div.innerHTML = `<div class="top">
            <div class="logo">
                <img src="${card.image}" alt="">
            </div>
            <div class="info">
                <b class="shortName">${card.symbol.toUpperCase()}</b> <br>
                <span class="name">${card.name}</span>
            </div>
        </div>

        <div class="bottom">
            <span class="percent">${card.price_change_percentage_24h.toFixed(
            2
        )}%</span>
            <b>$${card.current_price}</b>
            <span class="marketCap">Total Volume: ${card.total_volume}</span>
            <span class="total_volume">Market Cap: ${card.market_cap}</span>
        </div>`;

        gridContainer.appendChild(div);
    });
}

function clearGridData() {
    let container = document.getElementById("grid-container")

    if (!container || container.childElementCount === 0) {
        return;
    }

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// const button = document.getElementById("list")
// button.addEventListener("click", () => {
//     clearListData();
//     fetchCryptoRows();
// })

async function fetchCryptoRows() {
    const url ="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";
    const response = await fetch(url);
    const cryptoListData = await response.json();

    appendListData(cryptoListData);
}

function appendListData(cryptoListData) {

    console.log(cryptoListData)
    let tBody = document.createElement("tbody");

    for(let i=0; i<cryptoListData.length; i++){
        let tr = document.createElement("tr")

        tr.innerHTML =
            `<th>
                <div class="list-logo">
                    <img src="${cryptoListData[i].image}">
                </div>
            </th>
            <td><b class="shortName"></b>${cryptoListData[i].symbol.toUpperCase()}<br>
                <span class="name">${cryptoListData[i].name}</span></td>
            <td><span class="percent">${cryptoListData[i].price_change_percentage_24h.toFixed(
                2
            )}%</span></td>
            <td><b>$${cryptoListData[i].current_price}</b></td>
            <td><span>${cryptoListData[i].total_volume}</span></td>
            <td><span>${cryptoListData[i].market_cap}</span></td>`

        tBody.appendChild(tr)
    }

    table.appendChild(tBody)
}

function clearListData() {
    let tBody = document.getElementsByTagName("tbody")[0];
    if (tBody === undefined) {
        // if there's no tbody tag inside the table
        return;
    }
    tBody.remove();
}