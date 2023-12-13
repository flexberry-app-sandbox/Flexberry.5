import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  подразделение: DS.attr('string')
});

export let ValidationRules = {
  подразделение: {
    descriptionKey: 'models.i-i-s-5-подразеления.validations.подразделение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПодразеленияE', 'i-i-s-5-подразеления', {
    подразделение: attr('Подразделение', { index: 0 })
  });

  modelClass.defineProjection('ПодразеленияL', 'i-i-s-5-подразеления', {
    подразделение: attr('Подразделение', { index: 0 })
  });
};
