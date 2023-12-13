import { Serializer as ЕдИзмерSerializer } from
  '../mixins/regenerated/serializers/i-i-s-5-ед-измер';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЕдИзмерSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
