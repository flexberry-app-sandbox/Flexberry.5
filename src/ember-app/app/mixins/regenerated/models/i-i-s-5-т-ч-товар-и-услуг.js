import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количестов: DS.attr('number'),
  сумма: DS.attr('number'),
  суммаНДС: DS.attr('number'),
  цена: DS.attr('number'),
  номенклатуры: DS.belongsTo('i-i-s-5-номенклатуры', { inverse: null, async: false }),
  остатНаСклад: DS.belongsTo('i-i-s-5-остат-на-склад', { inverse: 'тЧТоварИУслуг', async: false, polymorphic: true })
});

export let ValidationRules = {
  количестов: {
    descriptionKey: 'models.i-i-s-5-т-ч-товар-и-услуг.validations.количестов.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-5-т-ч-товар-и-услуг.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  суммаНДС: {
    descriptionKey: 'models.i-i-s-5-т-ч-товар-и-услуг.validations.суммаНДС.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-5-т-ч-товар-и-услуг.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номенклатуры: {
    descriptionKey: 'models.i-i-s-5-т-ч-товар-и-услуг.validations.номенклатуры.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  остатНаСклад: {
    descriptionKey: 'models.i-i-s-5-т-ч-товар-и-услуг.validations.остатНаСклад.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧТоварИУслугE', 'i-i-s-5-т-ч-товар-и-услуг', {
    сумма: attr('Сумма', { index: 0 }),
    суммаНДС: attr('Сумма НДС', { index: 1 }),
    количестов: attr('Количестов', { index: 2 }),
    цена: attr('Цена', { index: 3 }),
    номенклатуры: belongsTo('i-i-s-5-номенклатуры', 'Номенклатуры', {
      номенклатура: attr('Номенклатура', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'номенклатура' })
  });
};
