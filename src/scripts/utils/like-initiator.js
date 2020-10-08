import $ from 'jquery';
import favoriteRestaurant from '../data/favoriteRestaurant-idb';
import { like, liked } from '../templates/template-creator';

const likeButton = {
  async init({ likeButtonContainer, data }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = data.restaurant;

    this._renderButton();
  },

  async _renderButton() {
    if (await this._isRestaurantExist(this._restaurant.id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await favoriteRestaurant.get(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.html(like);
    const Button = $('#save-favorite');
    Button.click(async () => {
      await favoriteRestaurant.add(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.html(liked);
    const Button = $('#save-favorite');
    Button.click(async () => {
      await favoriteRestaurant.delete(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default likeButton;
