'use strict';

/**
 * normalisasi service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::normalisasi.normalisasi');
