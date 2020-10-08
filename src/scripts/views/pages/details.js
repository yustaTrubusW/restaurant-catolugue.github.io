import $ from 'jquery';
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { detail } from '../../templates/template-creator';
import likeButton from '../../utils/like-initiator';
import postReview from '../../utils/post-review-initiator';

const Detail = {
  async render() {
    return `
        <div id="detail"></div>
        <div id="like-button"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailData = await RestaurantSource.detail(url.id);
    const picture = RestaurantSource.pictureL(detailData.restaurant.pictureId);
    $('#detail').html(detail(detailData, picture));

    likeButton.init({
      likeButtonContainer: $('#like-button'),
      data: detailData,
    });

    postReview.init({
      formElement: $('#comment-form'),
      reviewBox: $('#comment-box'),
      elementInput: {
        id: url.id,
        name: $('#name'),
        review: $('#review'),
      },
    });
  },
};

export default Detail;
