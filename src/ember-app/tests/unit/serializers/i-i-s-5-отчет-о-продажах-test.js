import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-5-отчет-о-продажах', 'Unit | Serializer | i-i-s-5-отчет-о-продажах', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-5-отчет-о-продажах',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-5-сост-огрузки',
    'transform:i-i-s-5-сост-оплаты',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
