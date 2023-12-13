package 5.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 5.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ЕдИзмер
 */
@Entity(name = "IIS5ЕдИзмер")
@Table(schema = "public", name = "ЕдИзмер")
public class EdIzmer {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ЕдИзмер")
    private String едизмер;


    public EdIzmer() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getЕдИзмер() {
      return едизмер;
    }

    public void setЕдИзмер(String едизмер) {
      this.едизмер = едизмер;
    }


}