const { Given, Then } = require('@cucumber/cucumber');
const assert = require('assert');
let numero;

Given('o número {int}', function (num) {
  numero = num;
});

Then('ele deve estar entre {int} e {int}', function (min, max) {
  assert.equal(numero >= min && numero <= max, true);
});
