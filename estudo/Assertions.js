const { chromium, expect } = require('@playwright/test');

test.describe('Assertions Example', () => {
  test('should perform various assertions on the page', async ({ page }) => {
    await page.goto('https://react-redux.realworld.io/#/login')

    await page.fill('input[type = "email"]', 'alanvoigt@yahoo.com.br')
    await page.type('input[type = "password"]', 'test123')
    await page.click('form >> "Sign in"')

    // É melhor esperar por um elemento específico do que usar um timeout fixo.
    await page.waitForSelector('.feed-toggle');

    const logoText = await page.$eval('.navbar-brand', el => el.innerText)
    expect(logoText).toBe('conduit')

    const logoHref = await page.$eval('.navbar-brand', el => el.href)
    expect(logoHref).toBe('https://react-redux.realworld.io/#/')

    const popularTagsCount = await page.$$eval('.tag-default', el => el.length)
    expect(popularTagsCount).toBeGreaterThanOrEqual(5)

    const content = await page.textContent('.navbar-brand')
    expect(content).toBe('conduit')

    const html = await page.innerHTML('.feed-toggle')
    expect(html).toMatch('Your Feed')

    const href = await page.getAttribute('.navbar-brand', 'href')
    expect(href).toBe('/#/')
  });
});