import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  едИзмер: DS.attr('string')
});

export let ValidationRules = {
  едИзмер: {
    descriptionKey: 'models.i-i-s-5-ед-измер.validations.едИзмер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЕдИзмерE', 'i-i-s-5-ед-измер', {
    едИзмер: attr('Ед измер', { index: 0 })
  });

  modelClass.defineProjection('ЕдИзмерL', 'i-i-s-5-ед-измер', {
    едИзмер: attr('Ед измер', { index: 0 })
  });
};
