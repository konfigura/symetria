import '../styles/styles.css';
import Modal from './modules/Modal.js';
import Menu from './modules/Menu.js';
import Header from './modules/Header.js';

if (module.hot) {
  module.hot.accept();
}

let modal = new Modal();
let menu = new Menu();
let header = new Header();