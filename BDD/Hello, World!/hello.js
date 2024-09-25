const { Given, Then } = require('@cucumber/cucumber');
const assert = require('assert');
let resultado;

Given('eu quero imprimir {string}', function (mensagem) {
  resultado = mensagem;
});

Then('a saída deve ser {string}', function (mensagemEsperada) {
  assert.equal(resultado, mensagemEsperada);
});
