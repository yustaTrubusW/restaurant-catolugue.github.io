import 'jquery';
import Review from '../data/post-review';
import RestaurantSource from '../data/restaurant-source';
import { commentElement } from '../templates/template-creator';

const postReview = {
  init({ formElement, reviewBox, elementInput }) {
    this._formElement = formElement;
    this._reviewBox = reviewBox;
    this._elementInput = elementInput;

    this._submitButtonOnClick();
  },

  async _submitButtonOnClick() {
    const { id, name, review } = this._elementInput;
    this._formElement.submit(async (event) => {
      event.preventDefault();
      await Review.post({
        id,
        name: name.val(),
        review: review.val(),
      });
      name.val('');
      review.val('');
      this._refresReviewList();
    });
  },

  async _refresReviewList() {
    const detail = await RestaurantSource.detail(this._elementInput.id);
    this._reviewBox.html(' ');
    this._reviewBox.html(commentElement(detail));
  },
};

export default postReview;
