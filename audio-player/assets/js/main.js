window.addEventListener('DOMContentLoaded', () => {
    const audio = new Audio();
    const playToggleBtn = document.getElementById('playToggleBtn');
    const nextMusicBtn = document.getElementById('nextMusicBtn');
    const prevMusicBtn = document.getElementById('prevMusicBtn');

    let isPlay = false;
    let musicVolume = 0.5;
    const audioWrapper = document.querySelector(".main");
    const musicImg = document.getElementById("playerMusicImg");
    let musicCounter = 0;

    const musicArray = [
        {
            name: 'Gealdyr - Gimle',
            img: './assets/img/Gealdyr - Gimle.jpg',
            executor: 'Gealdyr',
            src: './assets/audio/Gealdyr - Gimle.mp3',
        },
        {
            name: 'Roosevelt - Alive',
            img: './assets/img/Roosevelt - Embrance.jpg',
            executor: 'Roosevelt',
            src: './assets/audio/Roosevelt - Alive.mp3',
        },
        {
            name: 'Einar Selvik - Snake pit poetry',
            img: './assets/img/Einar Selvik - Snake pit poetry.webp',
            executor: 'Einar Selvik',
            src: './assets/audio/Einar Selvik - Snake pit poetry.mp3',
        }
    ];

    musicArray.forEach((element, index) => {
        element.id = index;
    });

    prevMusicBtn.addEventListener('click', playPrev);
    nextMusicBtn.addEventListener('click', playNext);

    playToggleBtn.addEventListener("click", () => {
        if (isPlay) { 
            pauseAudio();
        } else {
            playAudio();
        }
    }, false);

    function initialization() {

    }

    function playAudio() {
        playToggleBtn.querySelector('.player__play-img').innerHTML = `<path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />`;
        audio.play();
        isPlay = true;
    }

    function pauseAudio() {
        playToggleBtn.querySelector('.player__play-img').innerHTML = `<path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />`;
        audio.pause();
        isPlay = false;
    }

    function playNext() {
        musicCounter++;

        if (musicCounter > musicArray.length - 1) {
            musicCounter = 0;
        }

        initializtionContent();
        playAudio();
    }

    function playPrev() {
        musicCounter--;

        if (musicCounter < 0) {
            musicCounter = musicArray.length - 1
        }

        initializtionContent();
        playAudio();
    }

    function initializtionContent() {
        musicImg.src = musicArray[musicCounter].img;
        audioWrapper.style.backgroundImage = `url('${musicArray[musicCounter].img}')`;

        audio.src = musicArray[musicCounter].src;
        audio.currentTime = 0;
    }
    
    initializtionContent();
});

/* audio.addEventListener("loadeddata", () => {
    audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(audio.duration);
    audio.volume = musicVolume;
}, false); */




// Possible improvements:
// - Change timeline and volume slider into input sliders, reskinned
// - Change into Vue or React component
// - Be able to grab a custom title instead of "Music Song"
// - Hover over sliders to see preview of timestamp/volume change

/* const audioPlayer = document.querySelector(".audio-player");

audio.addEventListener(
    "loadeddata",
    () => {
        audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
            audio.duration
        );
        audio.volume = .75;
    },
    false
);

//click on timeline to skip around
const timeline = audioPlayer.querySelector(".timeline");
timeline.addEventListener("click", e => {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
    audio.currentTime = timeToSeek;
}, false);

//click volume slider to change volume
const volumeSlider = audioPlayer.querySelector(".controls .volume-slider");
volumeSlider.addEventListener('click', e => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    audio.volume = newVolume;
    audioPlayer.querySelector(".controls .volume-percentage").style.width = newVolume * 100 + '%';
}, false)

//check audio percentage and update time accordingly
setInterval(() => {
    const progressBar = audioPlayer.querySelector(".progress");
    progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
    audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
        audio.currentTime
    );
}, 500);

//toggle between playing and pausing on button click
const playBtn = audioPlayer.querySelector(".controls .toggle-play");
playBtn.addEventListener(
    "click",
    () => {
        if (audio.paused) {
            playBtn.classList.remove("play");
            playBtn.classList.add("pause");
            audio.play();
        } else {
            playBtn.classList.remove("pause");
            playBtn.classList.add("play");
            audio.pause();
        }
    },
    false
);

audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
    const volumeEl = audioPlayer.querySelector(".volume-container .volume");
    audio.muted = !audio.muted;
    if (audio.muted) {
        volumeEl.classList.remove("icono-volumeMedium");
        volumeEl.classList.add("icono-volumeMute");
    } else {
        volumeEl.classList.add("icono-volumeMedium");
        volumeEl.classList.remove("icono-volumeMute");
    }
});

//turn 128 seconds into 2:08
function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
        seconds % 60
    ).padStart(2, 0)}`;
} */
