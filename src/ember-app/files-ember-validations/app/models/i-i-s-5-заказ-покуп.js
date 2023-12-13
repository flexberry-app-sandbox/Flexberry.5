import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as ЗаказПокупMixin
} from '../mixins/regenerated/models/i-i-s-5-заказ-покуп';

import ОстатНаСкладModel from './i-i-s-5-остат-на-склад';

let Model = ОстатНаСкладModel.extend(ЗаказПокупMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
