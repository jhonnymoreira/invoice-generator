import { chromium } from 'playwright';
import { parseArgs } from 'node:util';
import process from 'node:process';

const { PORT } = process.env;
const port = PORT || 3000;
const previewURL = `http://localhost:${port}`;

const {
  values: { outputPath },
} = parseArgs({
  options: {
    outputPath: {
      short: 'o',
      type: 'string',
    },
  },
});

const generatePDF = async (outputPath: string) => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto(previewURL, { waitUntil: 'load' });
    await page.pdf({
      format: 'Legal',
      landscape: true,
      path: outputPath,
      printBackground: true,
    });

    console.log(`✅ PDF successfully written to:\n${outputPath}`);
  } catch (error) {
    console.error(error);
  } finally {
    await page.close();
    await browser.close();
  }
};

generatePDF(outputPath as string);
