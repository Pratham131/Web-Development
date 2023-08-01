/*
    1. Date
    2. Auction Status Ap
    3. Youtube Clone 
*/

// let date = new Date();
// console.log(date)
// console.log(typeof date)
// console.log(date.getDate())
// console.log(date.getDay()) // follows zero base indexing:: sun - 0, mon - 1
// console.log(date.getMonth()) // follows zero base indexing:: jan - 0, feb - 1
// console.log(date.getFullYear())
// console.log(date.getHours()) // 24 clock 
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())
// console.log(date.getTime())

// /*
//     UNIX  Reference Time 
//     1970 Jan 1st mid night 12:00 AM = time 1
    
//     1970 Jan 1st mid night 12:02 AM = time 2 // 120 s

//     Jun 27 2023 8.32 PM =>
// */

// // UNIX time / EPOCH tiem is the number seconds form 1970 Jan 1st 12:00 AM
// // getTiem() => returns the number of milliseconds from the 1970 jan 1st 12:00 AM

// console.log(parseInt(date.getTime() / 1000))

// // UNIX TIME OF 12 JUNE 2023 7:30:00 AM


const contianer = document.getElementById("container")

async function fetchCards() {
    let url = "https://gauravgitacc.github.io/postAppData/auctionData.json"
    const response = await fetch(url)
    const data = await response.json()

    appendData(data)
}

function appendData(cardList){
    cardList.forEach((card) => {
        
        let div = document.createElement("card")
        div.className = "card"

        div.innerHTML= 
                `<div class="top">
                    <div class="left">
                        <span class="badge ${card.status.toLowerCase()}">${card.status}</span>
                        <span class="case-number">${card.caseNumber}</span>
                    </div>

                    <div class="right">${card.date}</div>
                </div>

                <div class="bottom">
                    <b>${card.fromLocation}</b>
                    <span>${card.toLocation}</span>
                    <span class="price">${card.fare}</span>
                </div>`
        // div.classList = "red"

        contianer.appendChild(div)
    
    });
}

fetchCards()



