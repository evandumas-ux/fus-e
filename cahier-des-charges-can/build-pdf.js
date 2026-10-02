// Génère le PDF à partir de la page HTML (Chromium via Playwright).
// Usage : node build-pdf.js [entrée.html] [sortie.pdf]
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const input = process.argv[2] || path.join(__dirname, 'cdc-bus-can-iris.html');
  const output = process.argv[3] || path.join(__dirname, 'Cahier_des_charges_allege_bus_CAN_IRIS_v1.8.pdf');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.resolve(input), { waitUntil: 'load' });
  await page.pdf({ path: output, preferCSSPageSize: true, printBackground: true, tagged: true });
  await browser.close();
})();
