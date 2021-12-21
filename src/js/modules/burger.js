import $ from 'jquery';

const burger = () => {
  const $body = $('body');
  const $btn = $('.nav__menu');

  if (!$btn.length) {
    return;
  }

  const $navList = $('.nav__list');

  const OPENED_MENU_CLASSNAME = 'body__hidden';
  const BURGER_ACTIVE = 'nav__list-burger';

  const burgerHandler = () => {
    $body.toggleClass(OPENED_MENU_CLASSNAME);
    $navList.toggleClass(BURGER_ACTIVE);
  };

  $btn.click(() => burgerHandler());
};

export default burger;
