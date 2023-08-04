const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));



let video = document.getElementsByTagName("video")[0];
let progress_filled = document.getElementById("progress__filled");

function updateProgress() {
  let currTime = video.currentTime;
  let duration = video.duration;
  let currProgress = (currTime / duration) * 100;
  progress_filled.style.width = `${currProgress}%`;
}

// progress_filled.addEventListener("timeupdate", updateProgress);
progress_filled.addEventListener("timeupdate", () => {
  let currTime = video.currentTime;
  let duration = video.duration;
  let currProgress = (currTime / duration) * 100;
  progress_filled.style.flexBasis = `${currProgress}%`;
});


//Play and Pause
let playPauseButton = document.querySelector(".player__buttton");
playPauseButton.addEventListener("click", () => {
  if(video.paused) {
    video.play();
  }else {
    video.pause();
  }
})

function updatePlayButton() {
  playPauseButton.textContent = video.paused ? "►" : "❚ ❚";
}

video.addEventListener("play", updatePlayButton);
video.addEventListener('pause', updatePlayButton);


//volume
let volume = document.getElementById("volume");
volume.addEventListener('input', updateVolume);
function updateVolume() {
  let value = volume.value;
  video.volume = value;
}


//playback Speed
let playback = document.getElementById("playbackSpeed");
playback.addEventListener('input', updateSpeed);
function updateSpeed() {
  let value = playback.value;
  video.playbackRate = value;
}

//skip buttons
// let skipButtons = document.querySelectorAll(".skipButton");

// skipButtons.forEach(button => button.addEventListener('click', skipTime));

// function skipTime() {
//   const skipTime = parseFloat(this.dataset.skip);
//   video.currentTime += skipTime;
// }

// console.log(tenSecBack)
// console.log(twentyFiveSecForward)



const skipButtons = document.querySelectorAll('[data-skip]');
skipButtons.forEach(button => button.addEventListener('click', skipTime));
function skipTime() {
  const skipTime = parseFloat(this.dataset.skip);
  video.currentTime += skipTime;
}