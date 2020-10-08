import $ from 'jquery';
import CONFIG from '../globals/config';

const { BASE_URL } = CONFIG;

const Review = {
  async post({ id, name, review }) {
    this._ajaxSetup();

    return $.ajax({
      data: JSON.stringify({
        id: `${id}`,
        name: `${name}`,
        review: `${review}`,
      }),
    });
  },

  async _ajaxSetup() {
    $.ajaxSetup({
      url: `${BASE_URL}/review`,
      type: 'POST',
      headers: {
        'X-Auth-Token': '12345',
        'Content-Type': 'application/json',
      },
    });
  },
};

export default Review;
