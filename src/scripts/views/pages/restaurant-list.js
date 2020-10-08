import $ from 'jquery';
import { hero, restaurantItem } from '../../templates/template-creator';
import RestaurantSource from '../../data/restaurant-source';
import menuActive from '../../utils/menu-indikator';
import Search from '../../utils/search';

const RestaurantList = {
  async render() {
    return `
      <div id="hero"></div>
      <h2 id="title-content">Explore</h2>
      <div class="restaurant-list"></div>
      `;
  },

  async afterRender() {
    menuActive.home();
    $('#hero').html(hero);
    const restaurant = await RestaurantSource.list();
    const search = new Search($('#input-search'), restaurant);

    this._renderElement(restaurant.restaurants);

    $('#button-search').click(async () => {
      const searchResult = await search.searchResult();
      this._renderElement(searchResult);
    });
  },

  _renderElement(data) {
    $('.restaurant-list').html(' ');
    $.each(data, (index, item) => {
      const picture = RestaurantSource.picture(item.pictureId);
      $('.restaurant-list').append(restaurantItem(item, picture));
    });
  },
};

export default RestaurantList;
