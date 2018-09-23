const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const {Builder, By, until} = require('selenium-webdriver');
const {registrationPageObjects} = require('../../page-objects/registration-page.js');

let driver = new Builder().forBrowser('chrome').build();
let data = require('../../test-data/register-data');

Given('I am in student registration page', async function () {
  await driver.get('https://abk-qa-school-registration.herokuapp.com/');
});

When('I enter registered student ID',async function () {
  await driver.findElement(By.id(registrationPageObjects.studentIdInput)).sendKeys(data.registeredStudentId);
});

When('click Register Button',async function () {
  await driver.findElement(By.id(registrationPageObjects.registerButton)).click();
});

Then('I should see message "This student is already registered!"', async function () {
  let messageFieldObject = await driver.findElement(By.id(registrationPageObjects.statusMessageField));
  await driver.wait(until.elementIsVisible(messageFieldObject),1000);
  let actualResult = await messageFieldObject.getText();
  assert.equal(actualResult, 'This student is already registered!');
});