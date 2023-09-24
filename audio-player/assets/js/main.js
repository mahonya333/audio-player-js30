window.addEventListener('DOMContentLoaded', () => {
    initialization();
});

function initialization() {
    const audio = document.getElementById('audio');
    const playBtn = document.querySelector('.player__play-btn');
    const pauseBtn = document.querySelector('.player__pause-btn');
    let isPlay = false;
    const audioWrapper = document.querySelector(".main");
    
    playBtn.addEventListener('click', playAudio);
    pauseBtn.addEventListener('click', pauseAudio);

    function playAudio() {
        audio.currentTime = 0;
        audio.play();
    }
    function pauseAudio() {
        audio.pause();
    }
}



