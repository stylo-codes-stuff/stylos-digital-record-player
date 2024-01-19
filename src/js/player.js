var slider = document.getElementById("slider");
var output = document.getElementById("sliderVal");
var audio = document.getElementById('audio')
var play_button = document.getElementById('play_button')
var pause_button = document.getElementById('pause_button')
var record = document.getElementById('vinyl')
var thriller_play = document.getElementById('thriller_play')
var saw_button = document.getElementById('saw_play')
var pause = false;
record.style.animation = `rotation 4s infinite linear`
audio.preservesPitch = false;
slider.oninput = function() {
    output.innerHTML = this.value;
    audio.playbackRate = this.value/100
    record.style.animation = `rotation ${400/this.value}s infinite linear`
    if (this.value == 0){
        record.style.animation = ''
    }
}
saw_button.addEventListener('click',()=>{
    vinyl.src = require('../img/saw_vinyl.png')
    audio.src = require("../songs/inception.mp3")
})
thriller_play.addEventListener('click',()=>{
    vinyl.src = require("../img/thriller.jpg");
})
pause_button.addEventListener('click',()=>{
    pause = true;
})
while (pause == true){
    while (audio.playbackRate > 0){
    audio.playbackRate = audio.playbackRate - 2

    }

}