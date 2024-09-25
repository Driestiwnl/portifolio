const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
let a, b, soma;

Given('dois números {int} e {int}', function (num1, num2) {
  a = num1;
  b = num2;
});

When('eu os somar', function () {
  soma = a + b;
});

Then('o resultado deve ser {int}', function (resultadoEsperado) {
  assert.equal(soma, resultadoEsperado);
});
