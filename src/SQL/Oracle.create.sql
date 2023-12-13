



CREATE TABLE "ОтчетОПродажах"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаОкончания" DATE NULL,

	"ДатаНачала" DATE NULL,

	"СумВклНДС" NUMBER(10) NULL,

	"СостОтгруз" NVARCHAR2(12) NULL,

	"СостОплат" NVARCHAR2(15) NULL,

	"Подразеления" RAW(16) NOT NULL,

	"Организации" RAW(16) NOT NULL,

	"Склады" RAW(16) NOT NULL,

	"Контрагенты" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Склады"
(

	"primaryKey" RAW(16) NOT NULL,

	"Склад" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Организации"
(

	"primaryKey" RAW(16) NOT NULL,

	"Организация" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЕдИзмер"
(

	"primaryKey" RAW(16) NOT NULL,

	"ЕдИзмер" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧТоварИУслуг"
(

	"primaryKey" RAW(16) NOT NULL,

	"Сумма" NUMBER(10) NULL,

	"СуммаНДС" NUMBER(10) NULL,

	"Количестов" NUMBER(10) NULL,

	"Цена" NUMBER(10) NULL,

	"Номенклатуры" RAW(16) NOT NULL,

	"ОстатНаСклад_m0" RAW(16) NULL,

	"ОстатНаСклад_m1" RAW(16) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЗаказПокуп"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаОкончания" DATE NULL,

	"ДатаНачала" DATE NULL,

	"СумВклНДС" NUMBER(10) NULL,

	"СостОтгруз" NVARCHAR2(12) NULL,

	"СостОплат" NVARCHAR2(15) NULL,

	"СуммВклНДС" NUMBER(10) NULL,

	"Организации" RAW(16) NOT NULL,

	"Контрагенты" RAW(16) NOT NULL,

	"Подразеления" RAW(16) NOT NULL,

	"Склады" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Номенклатуры"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номенклатура" NVARCHAR2(255) NULL,

	"ЕдИзмер" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ОстатНаСклад"
(

	"primaryKey" RAW(16) NOT NULL,

	"СостОплат" NVARCHAR2(15) NULL,

	"СуммВклНДС" NUMBER(10) NULL,

	"ДатаНачала" DATE NULL,

	"СостОтгруз" NVARCHAR2(12) NULL,

	"ДатаОкончания" DATE NULL,

	"Организации" RAW(16) NOT NULL,

	"Склады" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Подразеления"
(

	"primaryKey" RAW(16) NOT NULL,

	"Подразделение" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Контрагенты"
(

	"primaryKey" RAW(16) NOT NULL,

	"Контрагент" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ОтчетОПродажах"
	ADD CONSTRAINT "ОтчетОПродаж_5818" FOREIGN KEY ("Подразеления") REFERENCES "Подразеления" ("primaryKey");

CREATE INDEX "ОтчетОПродаж_6054" on "ОтчетОПродажах" ("Подразеления");

ALTER TABLE "ОтчетОПродажах"
	ADD CONSTRAINT "ОтчетОПродаж_5067" FOREIGN KEY ("Организации") REFERENCES "Организации" ("primaryKey");

CREATE INDEX "ОтчетОПродаж_4346" on "ОтчетОПродажах" ("Организации");

ALTER TABLE "ОтчетОПродажах"
	ADD CONSTRAINT "ОтчетОПродаж_4997" FOREIGN KEY ("Склады") REFERENCES "Склады" ("primaryKey");

CREATE INDEX "ОтчетОПродаж_6257" on "ОтчетОПродажах" ("Склады");

ALTER TABLE "ОтчетОПродажах"
	ADD CONSTRAINT "ОтчетОПродаж_1307" FOREIGN KEY ("Контрагенты") REFERENCES "Контрагенты" ("primaryKey");

CREATE INDEX "ОтчетОПродаж_9113" on "ОтчетОПродажах" ("Контрагенты");

ALTER TABLE "ТЧТоварИУслуг"
	ADD CONSTRAINT "ТЧТоварИУслу_3069" FOREIGN KEY ("Номенклатуры") REFERENCES "Номенклатуры" ("primaryKey");

CREATE INDEX "ТЧТоварИУслуг_839" on "ТЧТоварИУслуг" ("Номенклатуры");

ALTER TABLE "ТЧТоварИУслуг"
	ADD CONSTRAINT "ТЧТоварИУслу_2213" FOREIGN KEY ("ОстатНаСклад_m0") REFERENCES "ЗаказПокуп" ("primaryKey");

CREATE INDEX "ТЧТоварИУслу_8022" on "ТЧТоварИУслуг" ("ОстатНаСклад_m0");

ALTER TABLE "ТЧТоварИУслуг"
	ADD CONSTRAINT "ТЧТоварИУслуг_547" FOREIGN KEY ("ОстатНаСклад_m1") REFERENCES "ОстатНаСклад" ("primaryKey");

CREATE INDEX "ТЧТоварИУслу_8023" on "ТЧТоварИУслуг" ("ОстатНаСклад_m1");

ALTER TABLE "ЗаказПокуп"
	ADD CONSTRAINT "ЗаказПокуп_FО_9735" FOREIGN KEY ("Организации") REFERENCES "Организации" ("primaryKey");

CREATE INDEX "ЗаказПокуп_IО_9361" on "ЗаказПокуп" ("Организации");

ALTER TABLE "ЗаказПокуп"
	ADD CONSTRAINT "ЗаказПокуп_FК_5975" FOREIGN KEY ("Контрагенты") REFERENCES "Контрагенты" ("primaryKey");

CREATE INDEX "ЗаказПокуп_IК_4121" on "ЗаказПокуп" ("Контрагенты");

ALTER TABLE "ЗаказПокуп"
	ADD CONSTRAINT "ЗаказПокуп_FП_1092" FOREIGN KEY ("Подразеления") REFERENCES "Подразеления" ("primaryKey");

CREATE INDEX "ЗаказПокуп_IП_1384" on "ЗаказПокуп" ("Подразеления");

ALTER TABLE "ЗаказПокуп"
	ADD CONSTRAINT "ЗаказПокуп_FС_2951" FOREIGN KEY ("Склады") REFERENCES "Склады" ("primaryKey");

CREATE INDEX "ЗаказПокуп_IС_2554" on "ЗаказПокуп" ("Склады");

ALTER TABLE "Номенклатуры"
	ADD CONSTRAINT "Номенклатуры__7142" FOREIGN KEY ("ЕдИзмер") REFERENCES "ЕдИзмер" ("primaryKey");

CREATE INDEX "Номенклатуры__9086" on "Номенклатуры" ("ЕдИзмер");

ALTER TABLE "ОстатНаСклад"
	ADD CONSTRAINT "ОстатНаСклад__9677" FOREIGN KEY ("Организации") REFERENCES "Организации" ("primaryKey");

CREATE INDEX "ОстатНаСклад__9706" on "ОстатНаСклад" ("Организации");

ALTER TABLE "ОстатНаСклад"
	ADD CONSTRAINT "ОстатНаСклад__1613" FOREIGN KEY ("Склады") REFERENCES "Склады" ("primaryKey");

CREATE INDEX "ОстатНаСклад__1541" on "ОстатНаСклад" ("Склады");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


