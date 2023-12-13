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
  сумВклНДС: DS.attr('number'),
  контрагенты: DS.belongsTo('i-i-s-5-контрагенты', { inverse: null, async: false }),
  организации: DS.belongsTo('i-i-s-5-организации', { inverse: null, async: false }),
  подразеления: DS.belongsTo('i-i-s-5-подразеления', { inverse: null, async: false }),
  склады: DS.belongsTo('i-i-s-5-склады', { inverse: null, async: false }),
  тЧТоварИУслуг: DS.hasMany('i-i-s-5-т-ч-товар-и-услуг', { inverse: 'заказПокуп', async: false })
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-5-заказ-покуп.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкончания: {
    descriptionKey: 'models.i-i-s-5-заказ-покуп.validations.датаОкончания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  состОплат: {
    descriptionKey: 'models.i-i-s-5-заказ-покуп.validations.состОплат.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состОтгруз: {
    descriptionKey: 'models.i-i-s-5-заказ-покуп.validations.состОтгруз.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумВклНДС: {
    descriptionKey: 'models.i-i-s-5-заказ-покуп.validations.сумВклНДС.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  контрагенты: {
    descriptionKey: 'models.i-i-s-5-заказ-покуп.validations.контрагенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-5-заказ-покуп.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  подразеления: {
    descriptionKey: 'models.i-i-s-5-заказ-покуп.validations.подразеления.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склады: {
    descriptionKey: 'models.i-i-s-5-заказ-покуп.validations.склады.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧТоварИУслуг: {
    descriptionKey: 'models.i-i-s-5-заказ-покуп.validations.тЧТоварИУслуг.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-5-остат-на-склад'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказПокупE', 'i-i-s-5-заказ-покуп', {
    датаОкончания: attr('Дата окончания', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    сумВклНДС: attr('Сум вкл НДС', { index: 2 }),
    состОтгруз: attr('Сост отгруз', { index: 3 }),
    состОплат: attr('Сост оплат', { index: 4 }),
    суммВклНДС: attr('Сумм вкл НДС', { index: 5 }),
    организации: belongsTo('i-i-s-5-организации', 'Организации', {
      организация: attr('Организация', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'организация' }),
    контрагенты: belongsTo('i-i-s-5-контрагенты', 'Контрагенты', {
      контрагент: attr('Контрагент', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'контрагент' }),
    подразеления: belongsTo('i-i-s-5-подразеления', 'Подразеления', {
      подразделение: attr('Подразделение', { index: 11, hidden: true })
    }, { index: 10, displayMemberPath: 'подразделение' }),
    склады: belongsTo('i-i-s-5-склады', 'Склады', {
      склад: attr('Склад', { index: 13, hidden: true })
    }, { index: 12, displayMemberPath: 'склад' }),
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

  modelClass.defineProjection('ЗаказПокупL', 'i-i-s-5-заказ-покуп', {
    датаОкончания: attr('Дата окончания', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    сумВклНДС: attr('Сум вкл НДС', { index: 2 }),
    состОтгруз: attr('Сост отгруз', { index: 3 }),
    состОплат: attr('Сост оплат', { index: 4 }),
    суммВклНДС: attr('Сумм вкл НДС', { index: 5 }),
    организации: belongsTo('i-i-s-5-организации', 'Организация', {
      организация: attr('Организация', { index: 6 })
    }, { index: -1, hidden: true }),
    контрагенты: belongsTo('i-i-s-5-контрагенты', 'Контрагент', {
      контрагент: attr('Контрагент', { index: 7 })
    }, { index: -1, hidden: true }),
    подразеления: belongsTo('i-i-s-5-подразеления', 'Подразделение', {
      подразделение: attr('Подразделение', { index: 8 })
    }, { index: -1, hidden: true }),
    склады: belongsTo('i-i-s-5-склады', 'Склад', {
      склад: attr('Склад', { index: 9 })
    }, { index: -1, hidden: true })
  });
};
