import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as ЗаказПокупMixin
} from '../mixins/regenerated/models/i-i-s-5-заказ-покуп';

import ОстатНаСкладModel from './i-i-s-5-остат-на-склад';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-5-остат-на-склад';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = ОстатНаСкладModel.extend(ЗаказПокупMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
