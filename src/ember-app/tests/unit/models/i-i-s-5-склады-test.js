import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-5-склады', 'Unit | Model | i-i-s-5-склады', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-5-ед-измер',
    'model:i-i-s-5-заказ-покуп',
    'model:i-i-s-5-контрагенты',
    'model:i-i-s-5-номенклатуры',
    'model:i-i-s-5-организации',
    'model:i-i-s-5-остат-на-склад',
    'model:i-i-s-5-отчет-о-продажах',
    'model:i-i-s-5-подразеления',
    'model:i-i-s-5-склады',
    'model:i-i-s-5-т-ч-товар-и-услуг',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
