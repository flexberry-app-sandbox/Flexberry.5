package 5.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 5.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Подразеления
 */
@Entity(name = "IIS5Подразеления")
@Table(schema = "public", name = "Подразеления")
public class Podrazeleniya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Подразделение")
    private String подразделение;


    public Podrazeleniya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getПодразделение() {
      return подразделение;
    }

    public void setПодразделение(String подразделение) {
      this.подразделение = подразделение;
    }


}