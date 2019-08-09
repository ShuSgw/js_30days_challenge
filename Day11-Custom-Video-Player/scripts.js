// get elements

const player = document.querySelector(".player");
// div
console.log(player);
const video = player.querySelector(".viewer");
// video
const progress = player.querySelector(".progress");
// div
const progressBar = player.querySelector(".progress__filled");
// div
const toggle = player.querySelector(".toggle");
// button
const skipButtons = player.querySelectorAll("[data-skip]");
// button
const ranges = player.querySelectorAll(".player__slider");
// button

// functions
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  // another code
  //   const method = video.paused ? "play" : "pause";
  //   video[method]();
}
function updateButton() {
  const icon = this.paused ? "▶︎" : "■";
  toggle.textContent = icon;
}

function slip() {
  console.log(this.dataset);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  let name = this.name;
  video[name];
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  console.log(scrubTime);
  video.currentTime = scrubTime;
}
// hook up events
video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

skipButtons.forEach(button => button.addEventListener("click", slip));
ranges.forEach(button => button.addEventListener("click", handleRangeUpdate));
ranges.forEach(button =>
  button.addEventListener("mousemove", handleRangeUpdate)
);
let mousedown = false;
progress.addEventListener("mousemove", e => mousedown && scrub(e));
// if mousedown is true toggle scrub(e)
// if mousedown is false return false

progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
