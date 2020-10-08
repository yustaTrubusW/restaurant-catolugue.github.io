import 'jquery';

const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.click(() => {
      this._toggleDrawer(drawer);
    });

    content.click(() => {
      this._closeDrawer(drawer);
    });
  },

  _toggleDrawer(drawer) {
    drawer.toggleClass('open');
  },

  _closeDrawer(drawer) {
    drawer.removeClass('open');
  },
};

export default DrawerInitiator;
