import Swiper, { Navigation, Pagination } from 'swiper';
import $ from 'jquery';

Swiper.use([Navigation, Pagination]);

const servicesSlider = () => {
  const init = () => {
    const $win = $(window);
    let slider;

    const sliderInit = () => {
      slider = new Swiper('.services-section__slider', {
        slidesPerView: 4,
        direction: 'horizontal',
        speed: 300,
        loop: false,
        autoHeight: true,
        navigation: {
          nextEl: '.services-section__btn-next',
          prevEl: '.services-section__btn-prev',
        },
      });
    };
    
    if ($win.width() > 768) {
      sliderInit();
    }
    $win.on('resize', () => {
      if ($win.width() <= 768 && !slider.destroyed) {
        slider.destroy();
      } else if ($win.width() > 768 && slider.destroyed) {
        sliderInit();
      }

    });
  };
  return {
    init,
  };
};

export default servicesSlider();
