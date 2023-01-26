console.log('javaScript is running!');
// step1
let dj = document.querySelector("#dj");
let drum = document.querySelector("#drum");
let guitar = document.querySelector("#guitar");
let disk = document.querySelector("#disk");
let piano = document.querySelector("#piano");
let headphone = document.querySelector("#headphone");
let jingle = document.querySelector("#jingle");
let microphone = document.querySelector("#microphone");
let phonograph = document.querySelector("#phonograph");
let speaker = document.querySelector("#speaker");

// step2 
function logID() {
    console.log('click on this elelment', this.id);
    // step3
}
dj.addEventListener('click', logID);
drum.addEventListener('click', logID);
guitar.addEventListener('click', logID);
disk.addEventListener('click', logID);
piano.addEventListener('click', logID);
headphone.addEventListener('click', logID);
jingle.addEventListener('click', logID);
microphone.addEventListener('click', logID);
phonograph.addEventListener('click', logID);
speaker.addEventListener('click', logID);

