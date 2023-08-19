window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const ipAddress = urlParams.get("ip");
    const ipDisplay = document.getElementById("ip");
    ipDisplay.textContent = ipAddress;

    // const IP = document.getElementById("ip").textContent
    fetchData(ipDisplay.textContent)
    console.log(Date().toString())
})

async function fetchData(ip){
    
    try{

        const url = `http://ipinfo.io/${ip}?token=9fb465a2a7ec8c`
        const response = await fetch(url);
        const result = await response.json();

        console.log(result)
        addDetails(result, ip);

        // const request = await fetch("https://ipinfo.io/json?token=9fb465a2a7ec8c")
        // const jsonResponse = await request.json()

        // console.log(jsonResponse.ip, jsonResponse)
    } catch (error) {
        console.log(error)
    }

    
}

let home = document.getElementById("home");

function addDetails(data){

    const section1 = document.getElementById("section1");

    const parts = data.loc.split(",");

    section1.innerHTML = 
    `<p>IP address is <span style="color: var(--white);" id="ip">${data.ip}</span></p>
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
                <td>Hostname: </td>
            </tr>
        </tbody>
    </table>`
    
    // home.appendChild(section1)

    const section2 = document.getElementById("section2")

    section2.innerHTML= 
    `<h1>Your Current Location</h1>
    <iframe src="https://maps.google.com/maps?q=${data.loc}&z=15&output=embed" frameborder="0" style="border:0"></iframe>`

    // home.appendChild(section2)

    const section3 = document.getElementById("section3")
    // const section3 = document.createElement("div");
    // section3.id = "section3";
    const current = new Date();

    section3.innerHTML=
    `<h1>More Information About You</h1>
    <p>Time Zone: ${data.timezone}</p>
    <p>Date and Time: ${current.toLocaleDateString() +" " +current.toLocaleTimeString()}</p>
    <p>Pincode: ${data.postal}</p>
    <p>Message: Numvber of pincode found</p>`

    // home.appendChild
}