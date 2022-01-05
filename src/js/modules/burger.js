import $ from 'jquery';

const burger = () => {
  const $body = $('body');
  const $btn = $body.find('.nav__menu-btn');

  if (!$btn.length) {
    return;
  }
  
  const OPENED_MENU_CLASSNAME = 'nav-open';

  const burgerHandler = () => {
    $body.toggleClass(OPENED_MENU_CLASSNAME);
  };

  $btn.click(burgerHandler);
};

export default burger;
