// Определение контекста рисования
// canvas = document.getElementById("canvas");
// context = canvas.getContext("2d");
// var img = document.getElementById("photo");

// context.drawImage(img, 0, 0, 200, 200);

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var image = new Image(60, 45); // Using optional size for image
image.onload = drawImageActualSize; // Draw when image has loaded

image.src = '../img/amber.jpg';

function drawImageActualSize() {
    
    canvas.width = this.naturalWidth;
    canvas.height = this.naturalHeight;
    ctx.drawImage(this, 0, 0);

}

function reOffset(){
    var BB = canvas.getBoundingClientRect();
    offsetX = BB.left;
    offsetY = BB.top;

    console.log(BB);
    console.log(offsetX);
    console.log(offsetY);

}

reOffset();