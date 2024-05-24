gallery = document.getElementById("gallery")

for (let i = 1; i <= 5; i++) {
    let img = document.createElement("img")
    img.src = "images/gallery-images/" + i + ".JPG"
    gallery.appendChild(img)
}