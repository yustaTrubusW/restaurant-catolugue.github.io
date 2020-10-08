import $ from 'jquery';
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async list() {
    return $.get(API_ENDPOINT.LIST, (data) => data);
  }

  static picture(id) {
    return API_ENDPOINT.PICTURE(id);
  }

  static pictureL(id) {
    return API_ENDPOINT.PICTUREL(id);
  }

  static async detail(id) {
    return $.get(API_ENDPOINT.DETAIL(id), (data) => data);
  }
}

export default RestaurantSource;
