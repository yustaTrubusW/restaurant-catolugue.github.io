import $ from 'jquery';
import '../../styles/detail.css';
import '../../styles/detail-responsive.css';
import '../../styles/comment.css';

const hero = () => `
<div id="hero-content">
  <p id="herotext-1" tabindex="0">Eat Good Feel Good</p>
  <p id="herotext-2" tabindex="0">Enjoy Life Delicious</p>
  <div id="search-container">
    <input type="text" placeholder="Search restaurant" name="search" class="search" id="input-search">
    <button class="search" id="button-search">
      <span class="material-icons" id="search-icon">search</span>
    </button>
  </div>
</div>
`;

const restaurantItem = (restaurant, picture) => `
<div class="card">
  <div class="title-box">
    <div class="image-box">
      <img src="${picture}" alt="${restaurant.name}">
      <h3><a href="#/detail/${restaurant.id}" tabindex="0" class="name">${restaurant.name}</a></h3>
    </div>
  </div>
  <div class="info-card">
    <p tabindex="0">
      <span class="city">${restaurant.city}<span></br>
      <span class="material-icons rating star">star</span> <span class="rating">${restaurant.rating}<span>
    <p>
  </div>
  <div class="info-card description-card">
    <p tabindex="0">${restaurant.description.substring(0, 200)}...</p>
  </div>
</div>
`;

const commentElement = (comment) => {
  let review = '';
  $.each(comment.restaurant.consumerReviews, (index, data) => {
    review += `
    <div class="comment-box">
      <div class="avatar">
        <span class="material-icons">person</span>
      </div>
      <div class= "text">
        <p> 
          <span class="name" tabindex="0"><b>${data.name}</b></span> <span class="date" tabindex="0">${data.date}</span><br>
          <span class="comment" tabindex="0">${data.review}</span>
        </p>
      </div>
    </div>
    `;
  });
  return review;
};

const addComment = () => `
<form id="comment-form">
  <h4 tabindex="0">Add Review</h4>
  <input name="name" id="name" class="input-form" type="text" placeholder="Name" tabindex="0" required="required"><br>
  <textarea name="comment" id="review" class="input-form" placeholder="Input your review here..." tabindex="0" required="required"></textarea><br>
  <button id="submit" tabindex="0">Submit</button>
</form> 
`;

const detail = (data, picture) => {
  let categories = '';
  $.each(data.restaurant.categories, (index, categorie) => {
    categories += `<li class="categorie" tabindex="0">${categorie.name}</li>`;
  });

  let drinks = '';
  let foods = '';
  $.each(data.restaurant.menus.drinks, (index, drink) => {
    drinks += `<li class="categorie" tabindex="0">${drink.name}</li>`;
  });
  $.each(data.restaurant.menus.foods, (index, food) => {
    foods += `<li class="categorie" tabindex="0">${food.name}</li>`;
  });

  return `
    <div class="detail-container">
      <div class="detail-box">
        <div class="detail-image">
          <img src="${picture}" alt="${data.restaurant.name}" tabindex="0">
          <h3 class="name" tabindex="0">${data.restaurant.name}</h3>
        </div>
        <div class="restaurant-detail">
          <ul class="detail-list">
            <li class="restaurant-info" tabindex="0"><b>City:</b> <br> ${data.restaurant.city}</li>
            <li class="restaurant-info" tabindex="0"><b>Address:</b> <br> ${data.restaurant.address}</li>
            <li class="restaurant-info" tabindex="0"><b>Categories:</b> <br> <ul>${categories}</ul></li>
            <li class="restaurant-info" tabindex="0"><b>Rating:</b> <br> ${data.restaurant.rating}</li>
          </ul>
        </div>
        
        <p id="description" tabindex="0">${data.restaurant.description}</p>
        <h3 class="menu" tabindex="0">List Menu</h3>
        <div class="foods restaurant-menu">
          <h4 tabindex="0">Foods</h4>
          <ul>
            ${foods}
          </ul>
        </div>
        <div class="drinks restaurant-menu">
          <h4 tabindex="0">Drinks</h4>
          <ul>
          ${drinks} 
          </ul>
        </div>
      </div>
      <div id="comment-container">
        <h3 class="title-comment" tabindex="0">Review</h3>
        <div id="comment-box">
        ${commentElement(data)}
        </div>
        ${addComment()}
      </div>
    </div>
    `;
};

const liked = () => `
<button id="save-favorite">
  <span class="material-icons">
  favorite
  </span>
</button>
`;

const like = () => `
<button id="save-favorite">
  <span class="material-icons">
  favorite_border
  </span>
</button>
`;

export {
  hero,
  restaurantItem,
  detail,
  like,
  liked,
  commentElement,
};
