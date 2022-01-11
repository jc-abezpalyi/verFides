import Swiper, { Navigation, Pagination } from 'swiper';
import $ from 'jquery';

Swiper.use([Navigation, Pagination]);

const servicesSlider = () => {
  const init = () => {
    const $win = $(window);
    let slider;
    let destroy = true;

    const sliderInit = () => {
      slider = new Swiper('.services-section__slider', {
        slidesPerView: 4,
        direction: 'horizontal',
        init: false,
        speed: 300,
        loop: false,
        autoHeight: true,
        navigation: {
          nextEl: '.services-section__btn-next',
          prevEl: '.services-section__btn-prev',
        },
      });
      slider.init();
      destroy = false;
    };
    
    const sliderDestroy = () => {
      slider.destroy();
      destroy = true;
    };
    
    if ($win.width() > 768) {
      sliderInit();
    }
    console.log(slider)
    $win.on('resize', () => {
      console.log(slider)
      if ($win.width() <= 768 && !destroy) {
        sliderDestroy();
      } else if ($win.width() > 768 && destroy) {
        sliderInit();
      }

    });
  };
  return {
    init,
  };
};

export default servicesSlider();