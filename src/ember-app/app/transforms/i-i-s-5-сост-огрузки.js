import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостОгрузкиEnum from '../enums/i-i-s-5-сост-огрузки';

export default FlexberryEnum.extend({
  enum: СостОгрузкиEnum,
  sourceType: 'IIS.5.СостОгрузки'
});
