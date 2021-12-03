//Previous display values
let previous = new Map()

//Get all value and hide everything
document.querySelectorAll("nav, section, h2, h1, footer").forEach(e => {
    previous.set(e.tagName, window.getComputedStyle(e, null).getPropertyValue("display"))
    e.style.display = "none"
})

//Show the loader
document.querySelector("#loader").style.display = "block"

//Imports
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.135.0/build/three.module.js"
import { GLTFLoader } from "../utils/GLTFLoader.js"

// Conversion
const radian = (angle) => angle * (Math.PI / 180)

//Setup
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(0, 0, 0.3)
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("canvas") })
renderer.setPixelRatio(window.devicePixelRatio)
const loader = new GLTFLoader()
let sneaker
loader.load(["localhost", "127.0.0.1", ""].includes(window.location.hostname) ? "../utils/model/sneaker/scene.gltf" : "https://dxxxxy.github.io/eros/utils/model/sneaker/scene.gltf", e => {    scene.add(e.scene)
    sneaker = e.scene
    sneaker.rotation.set(0, radian(-90), radian(-45))
        //After loading model, restore displays and hide loader
    document.querySelectorAll("nav, section, h2, h1, footer").forEach(e => { e.style.display = previous.get(e.tagName) })
    document.querySelector("#loader").style.display = "none"
        // Scroll Animation
    document.body.onscroll = () => {
        const t = document.body.getBoundingClientRect().top
        sneaker.rotation.y = radian(-90) + t * 0.01
    }
}, null, e => { console.log(e) })

// Torus
// const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
// const material = new THREE.MeshStandardMaterial({ color: 0xff6347 })
// const torus = new THREE.Mesh(geometry, material)
// scene.add(torus)

// Lights
const pointLight = new THREE.PointLight(0xffffff) //0x is #
pointLight.position.set(5, 5, 5)
const ambientLight = new THREE.AmbientLight(0xffffff) //0x is #
scene.add(pointLight, ambientLight)



//Canvas animation loop
const animate = () => {
    requestAnimationFrame(animate)
        // torus.rotation.x += 0.01
        // torus.rotation.y += 0.005
        // torus.rotation.z += 0.01
    renderer.render(scene, camera)
}

animate()

//Dynamic size
setInterval(() => {
    renderer.setClearColor(dark ? 0x000000 : 0xffffff, 1)
    renderer.setSize((25 * window.innerWidth) / 100, (25 * window.innerWidth) / 100)
}, 10)