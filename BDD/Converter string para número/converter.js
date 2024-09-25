const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
let string, numero;

Given('a string {string}', function (str) {
  string = str;
});

When('eu a converter para número', function () {
  numero = parseInt(string);
});

Then('o resultado deve ser {int}', function (resultadoEsperado) {
  assert.equal(numero, resultadoEsperado);
});
