const getStartBtn = document.getElementById("getStartBtn")
window.addEventListener('load', () => {
    $.getJSON("https://api.ipify.org?format=json", function(data) {
         
        // Setting text of element P with id gfg
        $("#ip").html(data.ip);
    })
})


getStartBtn.addEventListener('click', () => {
    const IP = document.getElementById("ip").textContent
    // console.log("test", IP)
    window.location.href = `home.html?ip=${IP}`;
    // fetcshData(IP);
})

