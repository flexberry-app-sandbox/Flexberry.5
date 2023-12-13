import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧТоварИУслугMixin
} from '../mixins/regenerated/models/i-i-s-5-т-ч-товар-и-услуг';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧТоварИУслугMixin, Validations, {
});

defineProjections(Model);

export default Model;
