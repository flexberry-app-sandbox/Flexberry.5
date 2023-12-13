import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IIS5ЕдИзмерLForm from './forms/i-i-s-5-ед-измер-l';
import IIS5ЗаказПокупLForm from './forms/i-i-s-5-заказ-покуп-l';
import IIS5КонтрагентыLForm from './forms/i-i-s-5-контрагенты-l';
import IIS5НоменклатурыLForm from './forms/i-i-s-5-номенклатуры-l';
import IIS5ОрганизацииLForm from './forms/i-i-s-5-организации-l';
import IIS5ОстатНаСкладLForm from './forms/i-i-s-5-остат-на-склад-l';
import IIS5ОтчетОПродажахLForm from './forms/i-i-s-5-отчет-о-продажах-l';
import IIS5ПодразеленияLForm from './forms/i-i-s-5-подразеления-l';
import IIS5СкладыLForm from './forms/i-i-s-5-склады-l';
import IIS5ЕдИзмерEForm from './forms/i-i-s-5-ед-измер-e';
import IIS5ЗаказПокупEForm from './forms/i-i-s-5-заказ-покуп-e';
import IIS5КонтрагентыEForm from './forms/i-i-s-5-контрагенты-e';
import IIS5НоменклатурыEForm from './forms/i-i-s-5-номенклатуры-e';
import IIS5ОрганизацииEForm from './forms/i-i-s-5-организации-e';
import IIS5ОстатНаСкладEForm from './forms/i-i-s-5-остат-на-склад-e';
import IIS5ОтчетОПродажахEForm from './forms/i-i-s-5-отчет-о-продажах-e';
import IIS5ПодразеленияEForm from './forms/i-i-s-5-подразеления-e';
import IIS5СкладыEForm from './forms/i-i-s-5-склады-e';
import IIS5ЕдИзмерModel from './models/i-i-s-5-ед-измер';
import IIS5ЗаказПокупModel from './models/i-i-s-5-заказ-покуп';
import IIS5КонтрагентыModel from './models/i-i-s-5-контрагенты';
import IIS5НоменклатурыModel from './models/i-i-s-5-номенклатуры';
import IIS5ОрганизацииModel from './models/i-i-s-5-организации';
import IIS5ОстатНаСкладModel from './models/i-i-s-5-остат-на-склад';
import IIS5ОтчетОПродажахModel from './models/i-i-s-5-отчет-о-продажах';
import IIS5ПодразеленияModel from './models/i-i-s-5-подразеления';
import IIS5СкладыModel from './models/i-i-s-5-склады';
import IIS5ТЧТоварИУслугModel from './models/i-i-s-5-т-ч-товар-и-услуг';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-5-ед-измер': IIS5ЕдИзмерModel,
    'i-i-s-5-заказ-покуп': IIS5ЗаказПокупModel,
    'i-i-s-5-контрагенты': IIS5КонтрагентыModel,
    'i-i-s-5-номенклатуры': IIS5НоменклатурыModel,
    'i-i-s-5-организации': IIS5ОрганизацииModel,
    'i-i-s-5-остат-на-склад': IIS5ОстатНаСкладModel,
    'i-i-s-5-отчет-о-продажах': IIS5ОтчетОПродажахModel,
    'i-i-s-5-подразеления': IIS5ПодразеленияModel,
    'i-i-s-5-склады': IIS5СкладыModel,
    'i-i-s-5-т-ч-товар-и-услуг': IIS5ТЧТоварИУслугModel
  },

  'application-name': '5',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': '5',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '5',
          title: '5'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        5: {
          caption: '5',
          title: '5',
          'i-i-s-5-отчет-о-продажах-l': {
            caption: 'Отчет о продажах',
            title: ''
          },
          'i-i-s-5-склады-l': {
            caption: 'Склады',
            title: ''
          },
          'i-i-s-5-организации-l': {
            caption: 'Организации',
            title: ''
          },
          'i-i-s-5-ед-измер-l': {
            caption: 'Ед измер',
            title: ''
          },
          'i-i-s-5-заказ-покуп-l': {
            caption: 'Заказ покуп',
            title: ''
          },
          'i-i-s-5-номенклатуры-l': {
            caption: 'Номенклатуры',
            title: ''
          },
          'i-i-s-5-остат-на-склад-l': {
            caption: 'Остат на склад',
            title: ''
          },
          'i-i-s-5-подразеления-l': {
            caption: 'Подразеления',
            title: ''
          },
          'i-i-s-5-контрагенты-l': {
            caption: 'Контрагенты',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-5-ед-измер-l': IIS5ЕдИзмерLForm,
    'i-i-s-5-заказ-покуп-l': IIS5ЗаказПокупLForm,
    'i-i-s-5-контрагенты-l': IIS5КонтрагентыLForm,
    'i-i-s-5-номенклатуры-l': IIS5НоменклатурыLForm,
    'i-i-s-5-организации-l': IIS5ОрганизацииLForm,
    'i-i-s-5-остат-на-склад-l': IIS5ОстатНаСкладLForm,
    'i-i-s-5-отчет-о-продажах-l': IIS5ОтчетОПродажахLForm,
    'i-i-s-5-подразеления-l': IIS5ПодразеленияLForm,
    'i-i-s-5-склады-l': IIS5СкладыLForm,
    'i-i-s-5-ед-измер-e': IIS5ЕдИзмерEForm,
    'i-i-s-5-заказ-покуп-e': IIS5ЗаказПокупEForm,
    'i-i-s-5-контрагенты-e': IIS5КонтрагентыEForm,
    'i-i-s-5-номенклатуры-e': IIS5НоменклатурыEForm,
    'i-i-s-5-организации-e': IIS5ОрганизацииEForm,
    'i-i-s-5-остат-на-склад-e': IIS5ОстатНаСкладEForm,
    'i-i-s-5-отчет-о-продажах-e': IIS5ОтчетОПродажахEForm,
    'i-i-s-5-подразеления-e': IIS5ПодразеленияEForm,
    'i-i-s-5-склады-e': IIS5СкладыEForm
  },

});

export default translations;
