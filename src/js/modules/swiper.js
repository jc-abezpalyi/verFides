import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const swiper = (() => {
  function init() {
    // eslint-disable-next-line no-new
    new Swiper('.testimonials', {
      spaceBetween: 30,
      navigation: {
        nextEl: '.testimonials-slider-next',
        prevEl: '.testimonials-slider-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
  return {
    init,
  };
})();
export default swiper;
