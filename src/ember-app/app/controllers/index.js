import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.5.caption'),
          title: i18n.t('forms.application.sitemap.5.title'),
          children: [{
            link: 'i-i-s-5-отчет-о-продажах-l',
            caption: i18n.t('forms.application.sitemap.5.i-i-s-5-отчет-о-продажах-l.caption'),
            title: i18n.t('forms.application.sitemap.5.i-i-s-5-отчет-о-продажах-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-5-склады-l',
            caption: i18n.t('forms.application.sitemap.5.i-i-s-5-склады-l.caption'),
            title: i18n.t('forms.application.sitemap.5.i-i-s-5-склады-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-5-организации-l',
            caption: i18n.t('forms.application.sitemap.5.i-i-s-5-организации-l.caption'),
            title: i18n.t('forms.application.sitemap.5.i-i-s-5-организации-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-5-ед-измер-l',
            caption: i18n.t('forms.application.sitemap.5.i-i-s-5-ед-измер-l.caption'),
            title: i18n.t('forms.application.sitemap.5.i-i-s-5-ед-измер-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-5-заказ-покуп-l',
            caption: i18n.t('forms.application.sitemap.5.i-i-s-5-заказ-покуп-l.caption'),
            title: i18n.t('forms.application.sitemap.5.i-i-s-5-заказ-покуп-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-5-номенклатуры-l',
            caption: i18n.t('forms.application.sitemap.5.i-i-s-5-номенклатуры-l.caption'),
            title: i18n.t('forms.application.sitemap.5.i-i-s-5-номенклатуры-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-5-остат-на-склад-l',
            caption: i18n.t('forms.application.sitemap.5.i-i-s-5-остат-на-склад-l.caption'),
            title: i18n.t('forms.application.sitemap.5.i-i-s-5-остат-на-склад-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-5-подразеления-l',
            caption: i18n.t('forms.application.sitemap.5.i-i-s-5-подразеления-l.caption'),
            title: i18n.t('forms.application.sitemap.5.i-i-s-5-подразеления-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-5-контрагенты-l',
            caption: i18n.t('forms.application.sitemap.5.i-i-s-5-контрагенты-l.caption'),
            title: i18n.t('forms.application.sitemap.5.i-i-s-5-контрагенты-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})