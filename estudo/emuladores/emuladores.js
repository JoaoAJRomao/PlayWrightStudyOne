const { chromium, devices } = require('playwright');
const expect = require('expect');

(async () => {
  const browser = await chromium.launch({headless: false})
  const iPhone11 = devices["iPhone 11 Pro"];
  const context = await browser.newContext({...iPhone11})
  const page = await context.newPage()
  await page.goto('https://www.maps.ie/coordinates.html')
})()