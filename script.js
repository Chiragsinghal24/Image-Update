var image1 = document.getElementById("input-file");
var image2 = document.getElementById("official-image");
var text = document.getElementById("value");

function clicked() {
    if(image1){
        text.innerHTML = image1;
    }
}

image1.addEventListener('click', () => {
    clicked();
});
