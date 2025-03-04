// Exercise 5: Image Animation
// File: exercise5.js
// Description: Cycles through 5 images in sequence to create an animation.

let images = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png"];
let index = 0;

function animateImages() {
    let imgElement = document.getElementById("animation");
    imgElement.src = images[index];
    index = (index + 1) % images.length;
    setTimeout(animateImages, 800);
}

// Wait for the document to load before starting animation
window.onload = animateImages;
