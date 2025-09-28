const { chromium } = require('playwright');
const expect = require('expect');

(async () => {
  const browser = await chromium.launch({headless: false})
  const context = await browser.newContext({
      locale: 'de-DE',
      timezoneId: 'Europe/Berlin',
  })
  const page = await context.newPage()
  await page.goto('http://www.thetimezoneconverter.com/')
})()