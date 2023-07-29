let listBtn = document.getElementById("list");

let table = document.getElementById("table");

const button = document.getElementById("list")
button.addEventListener("click", () => {
    clearListData();
    fetchCryptoRows();
})

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

fetchCryptoRows();