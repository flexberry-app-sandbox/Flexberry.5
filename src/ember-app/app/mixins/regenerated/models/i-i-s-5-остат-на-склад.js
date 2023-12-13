import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date', { defaultValue() { return new Date(); } }),
  датаОкончания: DS.attr('date'),
  состОплат: DS.attr('i-i-s-5-сост-оплаты'),
  состОтгруз: DS.attr('i-i-s-5-сост-огрузки'),
  суммВклНДС: DS.attr('number'),
  организации: DS.belongsTo('i-i-s-5-организации', { inverse: null, async: false }),
  склады: DS.belongsTo('i-i-s-5-склады', { inverse: null, async: false }),
  тЧТоварИУслуг: DS.hasMany('i-i-s-5-т-ч-товар-и-услуг', { inverse: 'остатНаСклад', async: false })
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-5-остат-на-склад.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкончания: {
    descriptionKey: 'models.i-i-s-5-остат-на-склад.validations.датаОкончания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  состОплат: {
    descriptionKey: 'models.i-i-s-5-остат-на-склад.validations.состОплат.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состОтгруз: {
    descriptionKey: 'models.i-i-s-5-остат-на-склад.validations.состОтгруз.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммВклНДС: {
    descriptionKey: 'models.i-i-s-5-остат-на-склад.validations.суммВклНДС.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-5-остат-на-склад.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склады: {
    descriptionKey: 'models.i-i-s-5-остат-на-склад.validations.склады.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧТоварИУслуг: {
    descriptionKey: 'models.i-i-s-5-остат-на-склад.validations.тЧТоварИУслуг.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОстатНаСкладE', 'i-i-s-5-остат-на-склад', {
    состОплат: attr('Сост оплат', { index: 0 }),
    суммВклНДС: attr('Сумм вкл НДС', { index: 1 }),
    датаНачала: attr('Дата начала', { index: 2 }),
    состОтгруз: attr('Сост отгруз', { index: 3 }),
    датаОкончания: attr('Дата окончания', { index: 4 }),
    организации: belongsTo('i-i-s-5-организации', 'Организации', {
      организация: attr('Организация', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'организация' }),
    склады: belongsTo('i-i-s-5-склады', 'Склады', {
      склад: attr('Склад', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'склад' }),
    тЧТоварИУслуг: hasMany('i-i-s-5-т-ч-товар-и-услуг', 'Т ч товар и услуг', {
      сумма: attr('Сумма', { index: 0 }),
      суммаНДС: attr('Сумма НДС', { index: 1 }),
      количестов: attr('Количестов', { index: 2 }),
      цена: attr('Цена', { index: 3 }),
      номенклатуры: belongsTo('i-i-s-5-номенклатуры', 'Номенклатуры', {
        номенклатура: attr('Номенклатура', { index: 5, hidden: true })
      }, { index: 4, displayMemberPath: 'номенклатура' })
    })
  });

  modelClass.defineProjection('ОстатНаСкладL', 'i-i-s-5-остат-на-склад', {
    состОплат: attr('Сост оплат', { index: 0 }),
    суммВклНДС: attr('Сумм вкл НДС', { index: 1 }),
    датаНачала: attr('Дата начала', { index: 2 }),
    состОтгруз: attr('Сост отгруз', { index: 3 }),
    датаОкончания: attr('Дата окончания', { index: 4 }),
    организации: belongsTo('i-i-s-5-организации', 'Организация', {
      организация: attr('Организация', { index: 5 })
    }, { index: -1, hidden: true }),
    склады: belongsTo('i-i-s-5-склады', 'Склад', {
      склад: attr('Склад', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
