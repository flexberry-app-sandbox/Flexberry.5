import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номенклатура: DS.attr('string'),
  едИзмер: DS.belongsTo('i-i-s-5-ед-измер', { inverse: null, async: false })
});

export let ValidationRules = {
  номенклатура: {
    descriptionKey: 'models.i-i-s-5-номенклатуры.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  едИзмер: {
    descriptionKey: 'models.i-i-s-5-номенклатуры.validations.едИзмер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НоменклатурыE', 'i-i-s-5-номенклатуры', {
    номенклатура: attr('Номенклатура', { index: 0 }),
    едИзмер: belongsTo('i-i-s-5-ед-измер', 'Ед измер', {
      едИзмер: attr('Ед измер', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'едИзмер' })
  });

  modelClass.defineProjection('НоменклатурыL', 'i-i-s-5-номенклатуры', {
    номенклатура: attr('Номенклатура', { index: 0 }),
    едИзмер: belongsTo('i-i-s-5-ед-измер', 'Ед измер', {
      едИзмер: attr('Ед измер', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
