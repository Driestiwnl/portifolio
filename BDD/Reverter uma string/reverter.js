const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
let string, resultado;

Given('a string {string}', function (str) {
  string = str;
});

When('eu a reverter', function () {
  resultado = string.split('').reverse().join('');
});

Then('o resultado deve ser {string}', function (resultadoEsperado) {
  assert.equal(resultado, resultadoEsperado);
});
