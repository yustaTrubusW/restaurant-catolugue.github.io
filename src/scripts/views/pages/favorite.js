import $ from 'jquery';
import menuActive from '../../utils/menu-indikator';
import favoriteRestaurant from '../../data/favoriteRestaurant-idb';
import RestaurantSource from '../../data/restaurant-source'; import { restaurantItem } from '../../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <h2 id="title-content">Favorite</h2>
      <div class="restaurant-list"></div>
      `;
  },

  async afterRender() {
    menuActive.favorite();
    const data = await favoriteRestaurant.getAll();
    this._renderElement(data);
  },

  _renderElement(data) {
    $('.restaurant-list').html(' ');
    $.each(data, (index, item) => {
      const picture = RestaurantSource.picture(item.pictureId);
      $('.restaurant-list').append(restaurantItem(item, picture));
    });
  },
};

export default Favorite;
