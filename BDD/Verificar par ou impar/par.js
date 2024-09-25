const { Given, Then } = require('@cucumber/cucumber');
const assert = require('assert');
let numero;

Given('o número {int}', function (num) {
  numero = num;
});

Then('ele deve ser par', function () {
  assert.equal(numero % 2, 0);
});
