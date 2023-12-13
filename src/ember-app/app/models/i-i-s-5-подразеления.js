import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПодразеленияMixin
} from '../mixins/regenerated/models/i-i-s-5-подразеления';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПодразеленияMixin, Validations, {
});

defineProjections(Model);

export default Model;
