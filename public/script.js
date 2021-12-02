let dark = true
let i = 0

// Determine which page is being accessed
var page = window.location.pathname.split("/").pop().split(".html")[0];
let hover = document.querySelectorAll(".hover-underline-animation")

let mainArray = ["home", "guides", "media", "stores", "contact", "credits"] // Array of the elements that can be highlighted


for (let i = 0; i < hover.length; i++) {
    // Check if element is in array and its not a random link
    if (mainArray.includes(hover[i].textContent.toLowerCase())) {

        // Make element "Not active"
        hover[i].style.color = dark ? "#0d5ca5" : "#990099"

        // Make specific element active and not get changed by css
        if (hover[i].textContent.toLowerCase() == page.toLowerCase() || hover[i].textContent.toLowerCase() == "home" && page.toLowerCase() == "index") {
            hover[i].style.color = dark ? "#4a94fa" : "#990099"
            hover[i].id = "active"
            hover[i].className = ""
        }
    }
}

document.querySelectorAll(".hover-underline-animation").forEach(e => {
    // Check if element is in array and its not a random link
    if (mainArray.includes(e.textContent.toLowerCase())) {
        e.addEventListener('mouseover', function() {
            e.style.color = dark ? "#4a94fa" : "#990099";
        });
        e.addEventListener('mouseleave', function() {
            e.style.color = dark ? "#0d5ca5" : "#990099";
        });
    }
});


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