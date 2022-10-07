const console = document.querySelector("#console")
const sensor = document.querySelector("#sensor")

function consoleRun() {
    var beep = new Audio('./sounds/beep.mp3');
    var screenSound = new Audio('./sounds/screen.mp3')
    beep.pause();
    beep.currentTime = 0;
    screenSound.pause();
    screenSound.currentTime = 0;
    if (console.classList.contains("console-open")) {
        console.classList.remove('console-open')
        beep.play();
        screenSound.play();
    }
    else {
        console.classList.add("console-open"); 
        beep.play();
        screenSound.play();
    }
   
}