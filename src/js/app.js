// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js
// Feel free with using ES6 here.
import $ from 'jquery';
// import { swiper } from './modules/swiper';
// import { Swiper } from 'swiper';
import servicesSlider from './modules/swiper';
import burger from './modules/burger';
import videoControl from './modules/video-control';

// When DOM is ready
$(() => {
  servicesSlider.init();
  burger();
  videoControl();
});
