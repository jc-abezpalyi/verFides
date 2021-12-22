import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default {
  init() {
    // window.addEventListener('resize', ()=> {
    //   if (document.documentElement.clientWidth < 768){
    //     return true;
    //   }
    // })
    // eslint-disable-next-line no-new
    new Swiper('.mySwiper', {

      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  },
};
