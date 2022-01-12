const btn = document.querySelector('.hero-section__pause-btn');
const video = document.querySelector('.hero-section__bg-video');
const pauseBtn = '<svg class="svg-icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"> <path d="M280.2 514.7c0-97.2-0.2-194.4 0.1-291.6 0.1-31.5 16-53.5 43.3-62.4 24.2-7.8 50 0.3 66.2 20.9 9.3 11.8 13.3 25.4 13.2 40.4-0.1 196.1 0.1 392.2-0.2 588.3-0.1 37.4-27.3 64.4-62 64-34.5-0.4-60.4-27.7-60.6-65.5-0.3-98 0-196.1 0-294.1zM623.2 516.1V232.2c0-46.1 24.1-74.9 62-74.4 37.3 0.5 60.8 28.5 60.8 73 0.1 191.8 0.1 383.7 0 575.5 0 33.7-15.2 55.9-43.2 65-24.3 7.9-49.7 0-66.3-20.7-10.7-13.3-13.5-28.8-13.4-45.5 0.2-96.3 0.1-192.6 0.1-289z"/></svg>';
const playBtn = '<svg class="svg-icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M322.6 520.9V224.2c0-13.5-2.5-28.8 11.8-36.8 15.3-8.6 27.8 1.7 39.6 9.9 139.7 97.5 279.5 195.1 419 292.9 35 24.5 34.8 35.3-0.1 59.7-138.2 96.8-276.5 193.4-414.8 290-5.6 3.9-11.3 7.8-17.4 10.6-22.9 10.4-37 2.4-37.8-22.6-0.9-29.8-0.3-59.7-0.3-89.5V520.9z" /></svg>';
const videoControl = () => {
  if (!video || !btn) {
    return;
  }
  let videoState = true;
   btn.innerHTML = `<span>Pause</span> ${pauseBtn} `;
  
  const videoHandler = () => {
    if (videoState) {
      video.pause();
      videoState = !videoState;
      btn.innerHTML = `<span>${btn.dataset.play}</span> ${playBtn}`;
    } else {
      video.play();
      videoState = !videoState;
      btn.innerHTML = `<span>${btn.dataset.pause}</span> ${pauseBtn}`;
    }
  };
  btn.addEventListener('click', videoHandler);
};

export default videoControl;
