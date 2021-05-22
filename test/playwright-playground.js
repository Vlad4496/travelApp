const playwright = require('playwright');
// const iPhone11 = playwright.devices['iPhone 11 Pro'];

const url = 'https://naughty-jepsen-237a46.netlify.app/';
const placesNavItemSelector = '';

(async () => {
  for (const browserType of ['chromium']) {
    const browser = await playwright[browserType].launch({
      headless: false,
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(url);
    // await page.screenshot({ path: `example-${browserType}.png` });
    await page.click('');
    // await browser.close();
  }
})();
