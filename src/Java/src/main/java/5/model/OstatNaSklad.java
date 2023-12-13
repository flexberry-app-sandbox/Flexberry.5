package 5.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 5.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: ОстатНаСклад
 */
@Entity(name = "IIS5ОстатНаСклад")
@Table(schema = "public", name = "ОстатНаСклад")
public class OstatNaSklad {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "СостОплат")
    private String состоплат;

    @Column(name = "СуммВклНДС")
    private Integer суммвклндс;

    @Column(name = "ДатаНачала")
    private Date датаначала;

    @Column(name = "СостОтгруз")
    private String состотгруз;

    @Column(name = "ДатаОкончания")
    private Date датаокончания;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organizacii")
    @Convert("Organizacii")
    @Column(name = "Организации", length = 16, unique = true, nullable = false)
    private UUID _organizaciiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organizacii", insertable = false, updatable = false)
    private Organizacii organizacii;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sklady")
    @Convert("Sklady")
    @Column(name = "Склады", length = 16, unique = true, nullable = false)
    private UUID _skladyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sklady", insertable = false, updatable = false)
    private Sklady sklady;

    @OneToMany(mappedBy = "ostatnasklad", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHTovarIUslug> tchtovariuslugs;


    public OstatNaSklad() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getСостОплат() {
      return состоплат;
    }

    public void setСостОплат(String состоплат) {
      this.состоплат = состоплат;
    }

    public Integer getСуммВклНДС() {
      return суммвклндс;
    }

    public void setСуммВклНДС(Integer суммвклндс) {
      this.суммвклндс = суммвклндс;
    }

    public Date getДатаНачала() {
      return датаначала;
    }

    public void setДатаНачала(Date датаначала) {
      this.датаначала = датаначала;
    }

    public String getСостОтгруз() {
      return состотгруз;
    }

    public void setСостОтгруз(String состотгруз) {
      this.состотгруз = состотгруз;
    }

    public Date getДатаОкончания() {
      return датаокончания;
    }

    public void setДатаОкончания(Date датаокончания) {
      this.датаокончания = датаокончания;
    }


}