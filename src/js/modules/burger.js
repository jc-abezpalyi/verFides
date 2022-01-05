import $ from 'jquery';

const burger = () => {
  const $body = $('body');
  const $btn = $body.find('.nav__menu-btn');

  if (!$btn.length) {
    return;
  }

  const $navList = $('.nav__list');

  const OPENED_MENU_CLASSNAME = 'nav-open';
  const BURGER_OPEN_LIST = 'nav__list-burger';

  const burgerHandler = () => {
    $body.toggleClass(OPENED_MENU_CLASSNAME);
    $navList.toggleClass(BURGER_OPEN_LIST);
    $btn.toggleClass('opened');
  };

  $btn.click(() => burgerHandler());
};

export default burger;
