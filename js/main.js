console.log('javaScript is running!');
// step1
let bitmapGraphic = document.querySelector("bitmapGraphic");

// step2 
function logID() {
    console.log('click on this elelment', this.id);
    // step3
}
bitmapGraphic.addEventListener('click', logID);