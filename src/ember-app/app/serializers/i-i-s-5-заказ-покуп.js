import { Serializer as ЗаказПокупSerializer } from
  '../mixins/regenerated/serializers/i-i-s-5-заказ-покуп';
import ОстатНаСкладSerializer from './i-i-s-5-остат-на-склад';

export default ОстатНаСкладSerializer.extend(ЗаказПокупSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
