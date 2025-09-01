document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const loadingVideo = document.getElementById("loading-video");
  const backgroundVideo = document.getElementById("background-video");
  const audio = document.getElementById("background-music");

  // Hide the background video initially
  backgroundVideo.style.display = "none";

  // Check if the page has been loaded before
  if (sessionStorage.getItem("pageLoaded")) {
    // Hide the loading screen if the page has been loaded before
    loadingScreen.style.display = "none";
    // Show and play the background video
    backgroundVideo.style.display = "block";
    backgroundVideo.play();
  } else {
    // Show the loading screen and play the video
    sessionStorage.setItem("pageLoaded", "true");
    loadingVideo.addEventListener("ended", () => {
      loadingScreen.style.display = "none";
      // Show and play the background video
      backgroundVideo.style.display = "block";
      backgroundVideo.play();
    });
  }

  // Audio playback after user gesture
  if (audio) {
    function playAudio() {
      audio.play().catch(() => {}); // Ignore play errors
      window.removeEventListener('click', playAudio);
      window.removeEventListener('keydown', playAudio);
    }
    window.addEventListener('click', playAudio);
    window.addEventListener('keydown', playAudio);
  }
});

