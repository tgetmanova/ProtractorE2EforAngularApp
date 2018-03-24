class BasePage {

  constructor() {
  }

  enterTextIntoTextField(textFieldElement, textValue, textFieldName) {
    allure.createStep(`Entering [${textValue}] into ${textFieldName}`, () => {
      textFieldElement.sendKeys(textValue);
    })();
  }

}

exports.BasePage = BasePage;
