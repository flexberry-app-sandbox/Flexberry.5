package 5.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 5.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Номенклатуры
 */
@Entity(name = "IIS5Номенклатуры")
@Table(schema = "public", name = "Номенклатуры")
public class Nomenklatury {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номенклатура")
    private String номенклатура;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "EdIzmer")
    @Convert("EdIzmer")
    @Column(name = "ЕдИзмер", length = 16, unique = true, nullable = false)
    private UUID _edizmerid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "EdIzmer", insertable = false, updatable = false)
    private EdIzmer edizmer;


    public Nomenklatury() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНоменклатура() {
      return номенклатура;
    }

    public void setНоменклатура(String номенклатура) {
      this.номенклатура = номенклатура;
    }


}