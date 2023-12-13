import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-5-ед-измер-l');
  this.route('i-i-s-5-ед-измер-e',
  { path: 'i-i-s-5-ед-измер-e/:id' });
  this.route('i-i-s-5-ед-измер-e.new',
  { path: 'i-i-s-5-ед-измер-e/new' });
  this.route('i-i-s-5-заказ-покуп-l');
  this.route('i-i-s-5-заказ-покуп-e',
  { path: 'i-i-s-5-заказ-покуп-e/:id' });
  this.route('i-i-s-5-заказ-покуп-e.new',
  { path: 'i-i-s-5-заказ-покуп-e/new' });
  this.route('i-i-s-5-контрагенты-l');
  this.route('i-i-s-5-контрагенты-e',
  { path: 'i-i-s-5-контрагенты-e/:id' });
  this.route('i-i-s-5-контрагенты-e.new',
  { path: 'i-i-s-5-контрагенты-e/new' });
  this.route('i-i-s-5-номенклатуры-l');
  this.route('i-i-s-5-номенклатуры-e',
  { path: 'i-i-s-5-номенклатуры-e/:id' });
  this.route('i-i-s-5-номенклатуры-e.new',
  { path: 'i-i-s-5-номенклатуры-e/new' });
  this.route('i-i-s-5-организации-l');
  this.route('i-i-s-5-организации-e',
  { path: 'i-i-s-5-организации-e/:id' });
  this.route('i-i-s-5-организации-e.new',
  { path: 'i-i-s-5-организации-e/new' });
  this.route('i-i-s-5-остат-на-склад-l');
  this.route('i-i-s-5-остат-на-склад-e',
  { path: 'i-i-s-5-остат-на-склад-e/:id' });
  this.route('i-i-s-5-остат-на-склад-e.new',
  { path: 'i-i-s-5-остат-на-склад-e/new' });
  this.route('i-i-s-5-отчет-о-продажах-l');
  this.route('i-i-s-5-отчет-о-продажах-e',
  { path: 'i-i-s-5-отчет-о-продажах-e/:id' });
  this.route('i-i-s-5-отчет-о-продажах-e.new',
  { path: 'i-i-s-5-отчет-о-продажах-e/new' });
  this.route('i-i-s-5-подразеления-l');
  this.route('i-i-s-5-подразеления-e',
  { path: 'i-i-s-5-подразеления-e/:id' });
  this.route('i-i-s-5-подразеления-e.new',
  { path: 'i-i-s-5-подразеления-e/new' });
  this.route('i-i-s-5-склады-l');
  this.route('i-i-s-5-склады-e',
  { path: 'i-i-s-5-склады-e/:id' });
  this.route('i-i-s-5-склады-e.new',
  { path: 'i-i-s-5-склады-e/new' });
});

export default Router;
