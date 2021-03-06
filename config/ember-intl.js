/*jshint node:true*/

module.exports = function(/* env */) {
  return {
    /**
    * baseLocale is used to determine if translation keys are missing from other locales.
    * This property is optional, and if you rely on sideloading translations then
    * this should be null
    *
    * @property baseLocale
    * @type {String?}
    * @default "null"
    */
    baseLocale: 'de',

    /**
    * prevents the translations from being bundled with the application code.
    * This enables asynchronously loading the translations for the active locale
    * by fetching them from the asset folder of the build.
    *
    * See: https://github.com/jasonmit/ember-intl/blob/master/docs/asynchronously-loading-translations.md
    *
    * @property publicOnly
    * @type {Boolean}
    * @default "false"
    */
    publicOnly: false,

    /**
    * Path where translations are kept.  This is relative to the project root.
    * For example, if your translations are an npm dependency, set this to:
    *`'./node_modules/path/to/translations'`
    *
    * @property inputPath
    * @type {String}
    * @default "translations"
     */
    inputPath: 'translations'
  };
};
