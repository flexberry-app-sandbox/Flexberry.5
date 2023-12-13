import {
  defineNamespace,
  defineProjections,
  Model as ТЧТоварИУслугMixin
} from '../mixins/regenerated/models/i-i-s-5-т-ч-товар-и-услуг';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧТоварИУслугMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
