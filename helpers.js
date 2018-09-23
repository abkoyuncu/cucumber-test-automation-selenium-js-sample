
const {Builder, By, Key, until} = require('selenium-webdriver');


let driver = new Builder().forBrowser('chrome').build();



module.exports = {
  async clickOnElement(selectorType, element) {
    switch(selectorType) {
      case 'id' : {
        await driver.findElement(By.id(element)).click();
      } break;
      case 'css' : {
        await driver.findElement(By.css(element)).click();
      } break;
      case 'xpath' :{
        await driver.findElement(By.xpath(element)).click();
      }
        break;
    }

  }
}

