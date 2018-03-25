class ReportUtils {

  static attachScreenshot(descriptionLabel) {
    browser.takeScreenshot().then(function(png) {
      allure.createAttachment(descriptionLabel, function () {
        return new Buffer(png, 'base64');
      }, 'image/png')();
    });
  }
}

exports.ReportUtils = ReportUtils;
