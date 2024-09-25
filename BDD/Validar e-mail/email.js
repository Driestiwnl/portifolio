const { Given, Then } = require('@cucumber/cucumber');
const assert = require('assert');
let email;

Given('o e-mail {string}', function (str) {
  email = str;
});

Then('ele deve ser válido', function () {
  const regex = /\S+@\S+\.\S+/;
  assert.equal(regex.test(email), true);
});
