// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js
// Feel free with using ES6 here.
import $ from 'jquery';
import servicesSlider from './modules/services-slider';
import burger from './modules/burger';
import videoControl from './modules/video-control';

$(() => {
  servicesSlider.init();
  burger();
  videoControl();
});
