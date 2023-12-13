package 5.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 5.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧТоварИУслуг
 */
@Entity(name = "IIS5ТЧТоварИУслуг")
@Table(schema = "public", name = "ТЧТоварИУслуг")
public class TCHTovarIUslug {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Сумма")
    private Integer сумма;

    @Column(name = "СуммаНДС")
    private Integer суммандс;

    @Column(name = "Количестов")
    private Integer количестов;

    @Column(name = "Цена")
    private Integer цена;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nomenklatury")
    @Convert("Nomenklatury")
    @Column(name = "Номенклатуры", length = 16, unique = true, nullable = false)
    private UUID _nomenklaturyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nomenklatury", insertable = false, updatable = false)
    private Nomenklatury nomenklatury;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "OstatNaSklad")
    @Convert("OstatNaSklad")
    @Column(name = "ОстатНаСклад", length = 16, unique = true, nullable = false)
    private UUID _ostatnaskladid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "OstatNaSklad", insertable = false, updatable = false)
    private OstatNaSklad ostatnasklad;


    public TCHTovarIUslug() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getСумма() {
      return сумма;
    }

    public void setСумма(Integer сумма) {
      this.сумма = сумма;
    }

    public Integer getСуммаНДС() {
      return суммандс;
    }

    public void setСуммаНДС(Integer суммандс) {
      this.суммандс = суммандс;
    }

    public Integer getКоличестов() {
      return количестов;
    }

    public void setКоличестов(Integer количестов) {
      this.количестов = количестов;
    }

    public Integer getЦена() {
      return цена;
    }

    public void setЦена(Integer цена) {
      this.цена = цена;
    }


}