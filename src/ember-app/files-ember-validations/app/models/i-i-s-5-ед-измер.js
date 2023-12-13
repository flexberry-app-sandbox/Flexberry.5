import {
  defineNamespace,
  defineProjections,
  Model as ЕдИзмерMixin
} from '../mixins/regenerated/models/i-i-s-5-ед-измер';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЕдИзмерMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
