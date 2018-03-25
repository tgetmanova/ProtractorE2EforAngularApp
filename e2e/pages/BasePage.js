const ReportUtils = require('./../utils/ReportUtils').ReportUtils;

const DEFAULT_WAIT_TIME_INTERVAL = require('.././utils/UtilConstants').DEFAULT_WAIT_TIME_INTERVAL;

class BasePage {

  constructor() {
  }

  enterTextIntoTextField(textFieldElement, textValue, textFieldName) {
    allure.createStep(`Entering [${textValue}] into ${textFieldName}`, () => {
      textFieldElement.sendKeys(textValue);
    })();
    ReportUtils.attachScreenshot(`Submitted text [${textValue}] to [${textFieldName}]`);
  }

  clickTheElement(clickableElement, elementName) {
    allure.createStep(`Clicking the [${elementName}]`, () => {
      clickableElement.click();
    })();
    ReportUtils.attachScreenshot(`Clicked on the [${elementName}] element`);
  }

  verifyElementIsDisplayed(element, elementName) {
    allure.createStep(`Checking that [${elementName}] is displayed`, () => {
      expect(element.isDisplayed()).toBeTruthy();
    })();
    ReportUtils.attachScreenshot(`Expected [${elementName}] element to be displayed`);
  }

  waitForCondition(expectedCondition, expectedConditionDescription, awaitTimeout = DEFAULT_WAIT_TIME_INTERVAL) {
    allure.createStep(`Waiting for: [${expectedConditionDescription}]`, () => {
      browser.driver.wait(expectedCondition, awaitTimeout);
    })();
    ReportUtils.attachScreenshot(`Waiting for: [${expectedConditionDescription}]`);

  }

  scrollToElement(element, elementName) {
    allure.createStep(`Scrolling to [${elementName}] element`, () => {
      browser.controlFlow().execute(() => {
        browser.executeScript('arguments[0].scrollIntoView(true)', element.getWebElement());
      });
    })();
    ReportUtils.attachScreenshot(`Scrolled to [${elementName}] element`);
  }

}

exports.BasePage = BasePage;
