import Swiper, { Navigation, Pagination } from 'swiper';
import $ from 'jquery';

Swiper.use([Navigation, Pagination]);

const servicesSlider = () => {
  const init = () => {
    const $win = $(window);
    let slider;
    let state = 'destroy';

    const _sliderInit = () => {
      slider = new Swiper('.services-section__slider', {
        init: false,
        direction: 'horizontal',
        speed: 300,
        loop: false,
        autoHeight: true,
        navigation: {
          nextEl: '.services-section__btn-next',
          prevEl: '.services-section__btn-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        },
      });

      slider.init();
      state = 'init';
    };

    const _sliderDestroy = () => {
      slider.destroy();
      state = 'destroy';
    };

    if ($win.width() > 768) _sliderInit();

    $win.on('resize', () => {
      if ($win.width() <= 768 && state !== 'destroy') {
        _sliderDestroy();
      } else if ($win.width() > 768 && state === 'destroy') {
        _sliderInit();
      }
    });
  };

  return {
    init,
  };
};

export default servicesSlider();
