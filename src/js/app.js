// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js
// Feel free with using ES6 here.
import $ from 'jquery';
import swiper from './modules/swiper';
import burger from './modules/burger';

// When DOM is ready
$(() => {
  swiper.init();
  burger();

  //
  // var videoEl = targetYourVideoElementSomehow;
  //
  // videoEl.addEventListener("timeupdate", function () {
  //   console.log('checking time...');
  //   if (videoEl.currentTime > videoEl.duration - 0.5) {
  //     // 0.5 is seconds before end.
  //     videoEl.pause();
  //   }
  // });
});
