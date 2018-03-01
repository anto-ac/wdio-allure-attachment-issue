# WDIO Allure Reporter issue with Attachments

Example repo to demonstrate issue when trying to add attachment to allure report ussing `reporter.createAttachemnt()`

## Installing

`npm install`

## Running the tests

`npm test`

## Generate Allure report
`npm run allure`

## Results

When adding an png attachment invoking reporter.createAttachment() in various ways, the attachment file is not saved correctly (i.e. the PNG file cannot be opened).
Also the attachment is added to the test case in the form below, and the report generation fails.

(NOTE: the attachment generated when invoking `browser.screenshot()` is correctly attached to the xml result file under its own step)

```
<attachments>
 <attachment title='attachment3' source='23c9b5e7-55dc-42ca-bcf3-2333159b7069-attachment.png' type='image/png' size='undefined'/>
</attachments>
```
