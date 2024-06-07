gallery = document.getElementById("gallery")

for (let i = 1; i <= 6; i++) {
    let img = document.createElement("img")
    img.src = "images/gallery-images/" + i + ".JPG"
    img.alt = "Redwood Sailors Sailing and at Practice"
    gallery.appendChild(img);
}