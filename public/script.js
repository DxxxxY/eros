let dark = true
let i = 0
setInterval(() => {
    if (i == 360) i = 0
    document.body.style.backgroundColor = dark ? "#000000" : "#ffffff"
    document.querySelectorAll("p, a, li, h2, table, label, input, textarea, button").forEach(e => e.style.color = dark ? "#4a94fa" : "#990099")
    document.querySelectorAll("h1").forEach(e => {
        e.style.background = dark ? `linear-gradient(${i}deg, rgba(2, 0, 36, 1) 25%, rgba(2, 0, 36, 1) 50%, #4a94fa 75%, #4a94fa 100%)` : `linear-gradient(${i}deg, rgb(117, 22, 117) 25%, rgb(82, 41, 82) 50%, rgb(75, 23, 75) 75%, rgb(82, 41, 82) 100%)`
        e.style.webkitBackgroundClip = "text"
    })
    i++
}, 10)