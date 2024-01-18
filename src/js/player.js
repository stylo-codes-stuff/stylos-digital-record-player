var slider = document.getElementById("slider");
var output = document.getElementById("sliderVal");
var audio = document.getElementById('audio')
var play_button = document.getElementById('play_button')
var pause_button = document.getElementById('pause_button')
var record = document.getElementById('vinyl')
var thriller_play = document.getElementById('')
var pause = false;
record.style.animation = `rotation 2s infinite linear`
audio.preservesPitch = false;
slider.oninput = function() {
    output.innerHTML = this.value;
    audio.playbackRate = this.value/100
    record.style.animation = `rotation ${200/this.value}s infinite linear`
}
play_button.addEventListener('click',()=>{
    audio.play()
})
pause_button.addEventListener('click',()=>{
    
})
while (pause == true){
    while (audio.playbackRate > 0){
    audio.playbackRate = audio.playbackRate - 2

    }

}