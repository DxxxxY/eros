let dark = true
let i = 0

//Development (offline)
if (["localhost", "127.0.0.1", ""].includes(window.location.hostname)) { window.baseurl = "" }
//Deployment (online)
else window.baseurl = "/eros/"

//Loop
setInterval(() => {
    //360deg reset
    if (i == 360) i = 0

    // Apply site wide color scheme
    document.querySelector(":root").style.setProperty("--color", dark ? "#4a94fa" : "#990099")
    document.querySelector(":root").style.setProperty("--bgColor", dark ? "#000000" : "#ffffff")

    //Rotate gradient
    document.querySelectorAll("h1").forEach(e => {
        e.style.background = dark ? `linear-gradient(${i}deg, rgba(2, 0, 36, 1) 25%, rgba(2, 0, 36, 1) 50%, #4a94fa 75%, #4a94fa 100%)` : `linear-gradient(${i}deg, rgb(117, 22, 117) 25%, rgb(82, 41, 82) 50%, rgb(75, 23, 75) 75%, rgb(82, 41, 82) 100%)`
        e.style.webkitBackgroundClip = "text"
    })
    i++
}, 10)