/* This file was generated by './scripts/generate-plugin-combinations.js'! */
const Raven = require('../../src/singleton');
const angularPlugin = require('../angular');
const requirePlugin = require('../require');

Raven
  .addPlugin(angularPlugin)
  .addPlugin(requirePlugin);
