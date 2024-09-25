const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
let lista, media;

Given('a lista {string}', function (str) {
  lista = JSON.parse(str);
});

When('eu calcular a média', function () {
  const soma = lista.reduce((acc, num) => acc + num, 0);
  media = soma / lista.length;
});

Then('o resultado deve ser {float}', function (resultadoEsperado) {
  assert.equal(media, resultadoEsperado);
});
