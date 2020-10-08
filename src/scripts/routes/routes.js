import Detail from '../views/pages/details';
import RestaurantList from '../views/pages/restaurant-list';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': RestaurantList,
  '/list': RestaurantList,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
