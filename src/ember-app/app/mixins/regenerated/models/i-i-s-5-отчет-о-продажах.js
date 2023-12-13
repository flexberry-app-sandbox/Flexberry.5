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
  склады: DS.belongsTo('i-i-s-5-склады', { inverse: null, async: false })
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-5-отчет-о-продажах.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкончания: {
    descriptionKey: 'models.i-i-s-5-отчет-о-продажах.validations.датаОкончания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  состОплат: {
    descriptionKey: 'models.i-i-s-5-отчет-о-продажах.validations.состОплат.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состОтгруз: {
    descriptionKey: 'models.i-i-s-5-отчет-о-продажах.validations.состОтгруз.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумВклНДС: {
    descriptionKey: 'models.i-i-s-5-отчет-о-продажах.validations.сумВклНДС.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  контрагенты: {
    descriptionKey: 'models.i-i-s-5-отчет-о-продажах.validations.контрагенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-5-отчет-о-продажах.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  подразеления: {
    descriptionKey: 'models.i-i-s-5-отчет-о-продажах.validations.подразеления.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склады: {
    descriptionKey: 'models.i-i-s-5-отчет-о-продажах.validations.склады.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтчетОПродажахE', 'i-i-s-5-отчет-о-продажах', {
    датаОкончания: attr('Дата окончания', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    сумВклНДС: attr('Сум вкл НДС', { index: 2 }),
    состОтгруз: attr('Сост отгруз', { index: 3 }),
    состОплат: attr('Сост оплат', { index: 4 }),
    подразеления: belongsTo('i-i-s-5-подразеления', 'Подразеления', {
      подразделение: attr('Подразделение', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'подразделение' }),
    организации: belongsTo('i-i-s-5-организации', 'Организации', {
      организация: attr('Организация', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'организация' }),
    склады: belongsTo('i-i-s-5-склады', 'Склады', {
      склад: attr('Склад', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'склад' }),
    контрагенты: belongsTo('i-i-s-5-контрагенты', 'Контрагенты', {
      контрагент: attr('Контрагент', { index: 12, hidden: true })
    }, { index: 11, displayMemberPath: 'контрагент' })
  });

  modelClass.defineProjection('ОтчетОПродажахL', 'i-i-s-5-отчет-о-продажах', {
    датаОкончания: attr('Дата окончания', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    сумВклНДС: attr('Сум вкл НДС', { index: 2 }),
    состОтгруз: attr('Сост отгруз', { index: 3 }),
    состОплат: attr('Сост оплат', { index: 4 }),
    подразеления: belongsTo('i-i-s-5-подразеления', 'Подразделение', {
      подразделение: attr('Подразделение', { index: 5 })
    }, { index: -1, hidden: true }),
    организации: belongsTo('i-i-s-5-организации', 'Организация', {
      организация: attr('Организация', { index: 6 })
    }, { index: -1, hidden: true }),
    склады: belongsTo('i-i-s-5-склады', 'Склад', {
      склад: attr('Склад', { index: 7 })
    }, { index: -1, hidden: true }),
    контрагенты: belongsTo('i-i-s-5-контрагенты', 'Контрагент', {
      контрагент: attr('Контрагент', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
