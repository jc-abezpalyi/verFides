const btn = document.querySelector('.hero-section__pause-btn');
const video = document.querySelector('.hero-section__bg-video');

const videoControl = () => {
  if (!video) {
    return;
  }

  let videoState = true;

  const videoHandler = () => {
    if (videoState) {
      video.pause();
      videoState = !videoState;
    } else {
      video.play();
      videoState = !videoState;
    }
  };
  btn.addEventListener('click', videoHandler);
};

export default videoControl;
