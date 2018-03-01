const reporter = require("wdio-allure-reporter");
const fs = require("fs");

describe('given a UK venue', function() {
    // PNG is not saved correctly and reported fails when parsing attachment
    // as the attachment size is undefined
    it('should save attachment 1', function () {
        browser.url('https://www.google.co.uk');
        expect(browser.getTitle()).to.include("Google");

        var data = fs.readFileSync("./image.png", "base64");
        reporter.createAttachment("attachment1", Buffer.from(data, "base64"), "image/png");
    });
    
    // PNG is not saved correctly and reported fails when parsing attachment
    // as the attachment size is undefined
    it('should save attachment 2', function () {
        browser.url('https://www.google.co.uk');
        expect(browser.getTitle()).to.include("Google");

        var data = fs.readFileSync("./image.png");
        reporter.createAttachment("attachment2", data, "image/png");
    });

    // Screenshot is attached to the step and works correctly when browser.screenshot() is invoked
    // but it's then not working when attaching using createAttachment() 
    it('should save screenshot', function () {
        browser.url('https://www.google.co.uk');
        expect(browser.getTitle()).to.include("Google");

        var res = browser.screenshot();
        reporter.createAttachment("attachment3", Buffer.from(res.value, "base64"), "image/png");
    });
});