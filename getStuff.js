const puppeteer = require('puppeteer');
// require('dotenv').config()

async function main() {
 const browser = await puppeteer.launch({ 
  headless: true,
  //  args: [`--proxy-server=http://scraperapi:${process.env.SCRAPER_API_KEY}@proxy-server.scraperapi.com:8001`]
});
 const page = await browser.newPage();
  await page.goto('https://0x8c.org');
  await page.screenshot({ path: '0x8c.png', fullPage: true });
  await browser.close();
}



main();
