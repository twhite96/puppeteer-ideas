const puppeteer = require('puppeteer');
require('dotenv').config()

async function main() {
 const browser = await puppeteer.launch({ 
  headless: true,
   args: [`--proxy-server=http://scraperapi:${process.env.SCRAPER_API_KEY}@proxy-server.scraperapi.com:8001`]
});
 const page = await browser.newPage();
  await page.goto('https://www.programmathically.com/computer-architecture-hardware/');
  await page.pdf({ path: 'program.pdf' });
  await browser.close();

}

main();