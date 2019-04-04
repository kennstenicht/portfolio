'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'portfolio',
    environment,
    rootURL: '/',
    locationType: 'auto',

    'ember-cli-bem': {
      elemDelimiter: '__',
      modDelimiter: '--',
      useKeyValuedMods: true,
    },

    'ember-scrollmagic': {
      indicators: true
    },

    ifa: {
      enabled: true,
      inline: true
    },

    fastboot: {
      hostWhitelist: ['wiedenmann.io', 'staging.wiedenmann.io', /^localhost:\d+$/]
    },

    'ember-simple-auth-token': {
      serverTokenEndpoint: '/api/v1/user_token',
      tokenPropertyName: 'jwt',
      refreshAccessTokens: false,
      tokenExpirationInvalidateSession: true,
      tokenExpireName: 'exp'
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
        'experimentalDecorators': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
