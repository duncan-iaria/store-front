//get jquery the webpack way
import $ from 'jquery';
import { controller } from './controller';
import '../css/reset.css';
import '../scss/style.scss';

//initial product load
controller.getAllProducts();

//attatch low product listener
controller.lowProductsButton();
controller.addProductButton();
controller.addProductToOrderButton();
controller.removeProductFromOrderButton();
controller.addPurchaseButton();
