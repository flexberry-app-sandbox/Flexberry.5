import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЕдИзмерMixin
} from '../mixins/regenerated/models/i-i-s-5-ед-измер';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЕдИзмерMixin, Validations, {
});

defineProjections(Model);

export default Model;
