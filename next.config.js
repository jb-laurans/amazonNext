const { i18n } = require('./next-i18next.config');
const nextTranslate = require('next-translate');

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
};

module.exports = nextTranslate();
