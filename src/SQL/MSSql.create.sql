



CREATE TABLE [ОтчетОПродажах] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДатаНачала] DATETIME  NULL,

	 [ДатаОкончания] DATETIME  NULL,

	 [СостОплат] VARCHAR(15)  NULL,

	 [СостОтгруз] VARCHAR(12)  NULL,

	 [СумВклНДС] INT  NULL,

	 [Контрагенты] UNIQUEIDENTIFIER  NOT NULL,

	 [Организации] UNIQUEIDENTIFIER  NOT NULL,

	 [Подразеления] UNIQUEIDENTIFIER  NOT NULL,

	 [Склады] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Склады] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Склад] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Организации] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Организация] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ЕдИзмер] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ЕдИзмер] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТЧТоварИУслуг] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Количестов] INT  NULL,

	 [Сумма] INT  NULL,

	 [СуммаНДС] INT  NULL,

	 [Цена] INT  NULL,

	 [Номенклатуры] UNIQUEIDENTIFIER  NOT NULL,

	 [ОстатНаСклад_m0] UNIQUEIDENTIFIER  NULL,

	 [ОстатНаСклад_m1] UNIQUEIDENTIFIER  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ЗаказПокуп] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДатаНачала] DATETIME  NULL,

	 [ДатаОкончания] DATETIME  NULL,

	 [СостОплат] VARCHAR(15)  NULL,

	 [СостОтгруз] VARCHAR(12)  NULL,

	 [СумВклНДС] INT  NULL,

	 [СуммВклНДС] INT  NULL,

	 [Контрагенты] UNIQUEIDENTIFIER  NOT NULL,

	 [Организации] UNIQUEIDENTIFIER  NOT NULL,

	 [Подразеления] UNIQUEIDENTIFIER  NOT NULL,

	 [Склады] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Номенклатуры] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Номенклатура] VARCHAR(255)  NULL,

	 [ЕдИзмер] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ОстатНаСклад] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [СостОплат] VARCHAR(15)  NULL,

	 [СуммВклНДС] INT  NULL,

	 [ДатаНачала] DATETIME  NULL,

	 [СостОтгруз] VARCHAR(12)  NULL,

	 [ДатаОкончания] DATETIME  NULL,

	 [Организации] UNIQUEIDENTIFIER  NOT NULL,

	 [Склады] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Подразеления] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Подразделение] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Контрагенты] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Контрагент] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))




