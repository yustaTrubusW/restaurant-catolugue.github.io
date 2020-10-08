import $ from 'jquery';

const menuActive = {
  home() {
    $('#home').addClass('open');
    $('#favorite').removeClass('open');
  },

  favorite() {
    $('#home').removeClass('open');
    $('#favorite').addClass('open');
  },
};

export default menuActive;
