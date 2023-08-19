window.addEventListener("load", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const ipAddress = urlParams.get("ip");
    const ipDisplay = document.getElementById("ip");
    ipDisplay.textContent = ipAddress;

    fetchData(ipDisplay.textContent);
});

let home = document.getElementById("home");

async function fetchData(ip) {
    try {
        const url = `https://ipinfo.io/${ip}?token=9fb465a2a7ec8c`;
        const response = await fetch(url);
        const result = await response.json();

        addDetails(result, ip);
    } catch (error) {
        console.log(error);
    }
}

function addDetails(data) {
    postDate(data.postal);

    const section1 = document.getElementById("section1");
    const parts = data.loc.split(",");

    section1.innerHTML = `<p>IP address is <span style="color: var(--white);" id="ip">${data.ip}</span></p>
    <table>
        <tbody>
            <tr>
                <td>Lat: ${parts[0]}</td>
                <td>City: ${data.city}</td>
                <td>Organisation: ${data.org}</td>
            </tr>
            <tr>
                <td>Long: ${parts[1]}</td>
                <td>Region: ${data.region}</td>
                <td>Hostname:</td>
            </tr>
        </tbody>
    </table>`;

    const section2 = document.getElementById("section2");

    section2.innerHTML = `<h1>Your Current Location</h1>
    <iframe src="https://maps.google.com/maps?q=${data.loc}&z=15&output=embed" frameborder="0" style="border:0"></iframe>`;

    const section3 = document.getElementById("section3");

    const current = new Date();

    section3.innerHTML = `<h1>More Information About You</h1>
    <p>Time Zone: ${data.timezone}</p>
    <p>Date and Time: ${current.toLocaleDateString() + " " + current.toLocaleTimeString()
        }</p>
    <p>Pincode: ${data.postal}</p>
    <p>Message: Numvber of pincode found</p>`;
}

async function postDate(pincode) {
    try {
        let url = `https://api.postalpincode.in/pincode/${pincode}`;
        const response = await fetch(url);
        const result = await response.json();
        console.log(result[0]);

        // const message = document.getElementById("mesa");
        // message.textContent = `${result[0].Message}`
        addPostData(result[0].PostOffice);
    } catch (error) {
        console.log(error);
    }
}

function addPostData(pData) {
    const container = document.getElementById("container");

    pData.forEach((ele) => {
        console.log(ele.Name)
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `<p>Name: ${ele.Name}</p>
        <p>Branch Type: ${ele.BranchType}</p>
        <p>Delivery Status: ${ele.DeliveryStatus}</p>
        <p>District: ${ele.District}</p>
        <p>Division: ${ele.Division}</p>`

        container.appendChild(card);
    });
}
