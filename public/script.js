// Dark mode
let dark = true
if (localStorage.getItem("current_theme") == "dark") {
    dark = true
} else if (localStorage.getItem("current_theme") == "light") {
    dark = false
} else {
    localStorage.setItem("current_theme", dark ? "dark" : "light")
}



let i = 0

// Determine which page is being accessed
var page = window.location.pathname.split("/").pop().split(".html")[0];

// Array of the elements that can be highlighted
let mainArray = ["home", "guides", "media", "stores", "contact", "credits", ""] 
let ignoreArrray = [];
// Set button text

document.querySelectorAll(".hover-underline-animation").forEach(e => {
    // Check if element is in array and its not a random link
    if (mainArray.includes(e.textContent.toLowerCase())) {
        e.addEventListener('mouseover', function() {
            if (e.id != "active") {
                e.style.color = dark ? "#4a94fa" : "#990099";
                ignoreArrray.push(e.innerText)
            }
        });
        e.addEventListener('mouseleave', function() {
            if (e.id != "active") {
                e.style.color = dark ? "#0d5ca5" : "#990099";
                ignoreArrray.splice(0, 2)
            }
        });
    }
});

//Loop
setInterval(() => {
    //360deg reset
    if (i == 360) i = 0

    document.querySelectorAll(".hover-underline-animation, #active").forEach( e => {
        // Check if element is in array and its not a random link
        if (mainArray.includes(e.textContent.toLowerCase()) && (!ignoreArrray.includes(e.innerText))) {
    
            // Make element "Not active"
            e.style.color = dark ? "#0d5ca5" : "#600360"
    
            // Make specific element active and not get changed by css
            if (e.textContent.toLowerCase() == page.toLowerCase() || e.textContent.toLowerCase() == "home" && page.toLowerCase() == "index" || e.textContent.toLowerCase() == "home" && page.toLowerCase() == "") {
                e.style.color = dark ? "#4a94fa" : "#990099"
                e.id = "active"
                e.className = ""
            }
        }
    })
    
    document.getElementById("modeSwitch").innerText = dark ? "Light Mode" : "Dark Mode"

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


// idk how to comment this, uhhhh
let first_run = true
let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const canvas = entry.target.querySelector('canvas');

        if (!entry.isIntersecting) {

          if (!first_run) {
            canvas.classList.add('canvashover');
          } else {
               first_run = false
           }
        } else {
            canvas.classList.remove('canvashover');
        }
      });
});

observer.observe(document.querySelectorAll('.model')[0]);

function darkSwitch() {
    if (localStorage.getItem("current_theme") == "dark") {
        localStorage.setItem("current_theme", "light")
        dark = false
    } else if (localStorage.getItem("current_theme") == "light") {
        localStorage.setItem("current_theme", "dark")
        dark = true
    } else {
        localStorage.setItem("current_theme", "dark")
        dark = true
    }
}