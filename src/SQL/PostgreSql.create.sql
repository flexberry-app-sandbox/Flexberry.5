




CREATE TABLE ОтчетОПродажах (
 primaryKey UUID NOT NULL,
 ДатаОкончания TIMESTAMP(3) NULL,
 ДатаНачала TIMESTAMP(3) NULL,
 СумВклНДС INT NULL,
 СостОтгруз VARCHAR(12) NULL,
 СостОплат VARCHAR(15) NULL,
 Подразеления UUID NOT NULL,
 Организации UUID NOT NULL,
 Склады UUID NOT NULL,
 Контрагенты UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Склады (
 primaryKey UUID NOT NULL,
 Склад VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Организации (
 primaryKey UUID NOT NULL,
 Организация VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЕдИзмер (
 primaryKey UUID NOT NULL,
 ЕдИзмер VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧТоварИУслуг (
 primaryKey UUID NOT NULL,
 Сумма INT NULL,
 СуммаНДС INT NULL,
 Количестов INT NULL,
 Цена INT NULL,
 Номенклатуры UUID NOT NULL,
 ОстатНаСклад_m0 UUID NULL,
 ОстатНаСклад_m1 UUID NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЗаказПокуп (
 primaryKey UUID NOT NULL,
 ДатаОкончания TIMESTAMP(3) NULL,
 ДатаНачала TIMESTAMP(3) NULL,
 СумВклНДС INT NULL,
 СостОтгруз VARCHAR(12) NULL,
 СостОплат VARCHAR(15) NULL,
 СуммВклНДС INT NULL,
 Организации UUID NOT NULL,
 Контрагенты UUID NOT NULL,
 Подразеления UUID NOT NULL,
 Склады UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Номенклатуры (
 primaryKey UUID NOT NULL,
 Номенклатура VARCHAR(255) NULL,
 ЕдИзмер UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ОстатНаСклад (
 primaryKey UUID NOT NULL,
 СостОплат VARCHAR(15) NULL,
 СуммВклНДС INT NULL,
 ДатаНачала TIMESTAMP(3) NULL,
 СостОтгруз VARCHAR(12) NULL,
 ДатаОкончания TIMESTAMP(3) NULL,
 Организации UUID NOT NULL,
 Склады UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Подразеления (
 primaryKey UUID NOT NULL,
 Подразделение VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Контрагенты (
 primaryKey UUID NOT NULL,
 Контрагент VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE ОтчетОПродажах ADD CONSTRAINT FKa449d6abff5148b3002a25eb3dd9471b4e131544 FOREIGN KEY (Подразеления) REFERENCES Подразеления; 
CREATE INDEX Indexa449d6abff5148b3002a25eb3dd9471b4e131544 on ОтчетОПродажах (Подразеления); 

 ALTER TABLE ОтчетОПродажах ADD CONSTRAINT FK343692ffd0b3d7874660f497f43232c3c4c58ae9 FOREIGN KEY (Организации) REFERENCES Организации; 
CREATE INDEX Index343692ffd0b3d7874660f497f43232c3c4c58ae9 on ОтчетОПродажах (Организации); 

 ALTER TABLE ОтчетОПродажах ADD CONSTRAINT FK8f74a4c695aa8d8f558aa5f673d1084afd58d1db FOREIGN KEY (Склады) REFERENCES Склады; 
CREATE INDEX Index8f74a4c695aa8d8f558aa5f673d1084afd58d1db on ОтчетОПродажах (Склады); 

 ALTER TABLE ОтчетОПродажах ADD CONSTRAINT FKc80bd96990fa9c6ba867befc152890b2eff0386f FOREIGN KEY (Контрагенты) REFERENCES Контрагенты; 
CREATE INDEX Indexc80bd96990fa9c6ba867befc152890b2eff0386f on ОтчетОПродажах (Контрагенты); 

 ALTER TABLE ТЧТоварИУслуг ADD CONSTRAINT FK3434e527cd453d293c9cf5e5d0c3d5c0e6dcb20b FOREIGN KEY (Номенклатуры) REFERENCES Номенклатуры; 
CREATE INDEX Index3434e527cd453d293c9cf5e5d0c3d5c0e6dcb20b on ТЧТоварИУслуг (Номенклатуры); 

 ALTER TABLE ТЧТоварИУслуг ADD CONSTRAINT FK77f1c0c936235734142077f975283ecd452e5bf7 FOREIGN KEY (ОстатНаСклад_m0) REFERENCES ЗаказПокуп; 
CREATE INDEX Index77f1c0c936235734142077f975283ecd452e5bf7 on ТЧТоварИУслуг (ОстатНаСклад_m0); 

 ALTER TABLE ТЧТоварИУслуг ADD CONSTRAINT FKa7ad49cb33a3bc42d84206177de847594ed71169 FOREIGN KEY (ОстатНаСклад_m1) REFERENCES ОстатНаСклад; 
CREATE INDEX Indexa7ad49cb33a3bc42d84206177de847594ed71169 on ТЧТоварИУслуг (ОстатНаСклад_m1); 

 ALTER TABLE ЗаказПокуп ADD CONSTRAINT FKe331ba79f3a92635a43a72770b79a78fcd627643 FOREIGN KEY (Организации) REFERENCES Организации; 
CREATE INDEX Indexe331ba79f3a92635a43a72770b79a78fcd627643 on ЗаказПокуп (Организации); 

 ALTER TABLE ЗаказПокуп ADD CONSTRAINT FKc77b96e8540d9f4b7aee82f1922ad0ddc125f94e FOREIGN KEY (Контрагенты) REFERENCES Контрагенты; 
CREATE INDEX Indexc77b96e8540d9f4b7aee82f1922ad0ddc125f94e on ЗаказПокуп (Контрагенты); 

 ALTER TABLE ЗаказПокуп ADD CONSTRAINT FK0e1703716e861a77a4021de95ca0142f3bfbdcf3 FOREIGN KEY (Подразеления) REFERENCES Подразеления; 
CREATE INDEX Index0e1703716e861a77a4021de95ca0142f3bfbdcf3 on ЗаказПокуп (Подразеления); 

 ALTER TABLE ЗаказПокуп ADD CONSTRAINT FK14e7a431fb1c3144b2ba870b0bbff05c40603fa1 FOREIGN KEY (Склады) REFERENCES Склады; 
CREATE INDEX Index14e7a431fb1c3144b2ba870b0bbff05c40603fa1 on ЗаказПокуп (Склады); 

 ALTER TABLE Номенклатуры ADD CONSTRAINT FK068576ae85b7bbb1614e856f3a8c27925de830f9 FOREIGN KEY (ЕдИзмер) REFERENCES ЕдИзмер; 
CREATE INDEX Index068576ae85b7bbb1614e856f3a8c27925de830f9 on Номенклатуры (ЕдИзмер); 

 ALTER TABLE ОстатНаСклад ADD CONSTRAINT FKd968fb962916d2190aa545d0544cda4ffefd01f4 FOREIGN KEY (Организации) REFERENCES Организации; 
CREATE INDEX Indexd968fb962916d2190aa545d0544cda4ffefd01f4 on ОстатНаСклад (Организации); 

 ALTER TABLE ОстатНаСклад ADD CONSTRAINT FKd0c0f7fe6a77d9622ce95f76410c3e9f13a3d351 FOREIGN KEY (Склады) REFERENCES Склады; 
CREATE INDEX Indexd0c0f7fe6a77d9622ce95f76410c3e9f13a3d351 on ОстатНаСклад (Склады); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

