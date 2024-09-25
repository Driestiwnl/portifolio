const { Given, Then } = require('@cucumber/cucumber');
const assert = require('assert');
let idade;

Given('a idade {int}', function (num) {
  idade = num;
});

Then('a pessoa deve ser maior de idade', function () {
  assert.equal(idade >= 18, true);
});
