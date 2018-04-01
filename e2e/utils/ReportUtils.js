class ReportUtils {

  static attachScreenshot(descriptionLabel) {
    browser.takeScreenshot().then(png => {
      allure.createAttachment(descriptionLabel, function () {
        return new Buffer(png, 'base64');
      }, 'image/png')();
    });
  }

  static addStep(description, action) {
    if (action === undefined) {
      action = () => { };
    }
    allure.createStep(description, action)();
  }

  static attachText(description, text) {
    allure.createAttachment(description, () => {
      return new Buffer(text, 'UTF-8');
    }, 'text/plain')();
  }
}

exports.ReportUtils = ReportUtils;
