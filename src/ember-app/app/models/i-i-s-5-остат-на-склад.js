import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОстатНаСкладMixin
} from '../mixins/regenerated/models/i-i-s-5-остат-на-склад';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОстатНаСкладMixin, Validations, {
});

defineProjections(Model);

export default Model;
