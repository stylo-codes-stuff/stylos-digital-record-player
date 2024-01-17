var sound = new Howl({
    src: ['../songs/inception.mp3'],
    autoplay: true,
    loop: true,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });
export function playSound(){
    sound.play();
}