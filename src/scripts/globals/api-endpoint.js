import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  NEW_REVIEW: `${CONFIG.BASE_URL}/review`,
  PICTURE: (id) => `${CONFIG.BASE_URL}/images/small/${id}`,
  PICTUREL: (id) => `${CONFIG.BASE_URL}/images/large/${id}`,
};

export default API_ENDPOINT;
