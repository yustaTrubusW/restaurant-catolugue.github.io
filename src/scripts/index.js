import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/main-responsive.css';
import $ from 'jquery';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: $('#hamburger'),
  drawer: $('#navcontent'),
  content: $('#main-content'),
});

window.addEventListener('hashchange', () => {
  if (window.location.hash.slice(1) !== 'main-content') {
    app.renderPage();
  }
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
