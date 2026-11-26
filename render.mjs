// Renders poster.html to entry.png (1024x1024) with headless Chromium.
// Build-time helper only; the submitted program is main.ts.
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import path from "node:path";

const require = createRequire(import.meta.url);

function loadPuppeteer() {
  const candidates = [
    process.env.PUPPETEER_CORE_PATH,
    "/tmp/render-tools/node_modules/puppeteer-core",
    "puppeteer-core",
  ].filter(Boolean);
  for (const c of candidates) {
    try {
      return require(c);
    } catch {
      // try next candidate
    }
  }
  throw new Error("puppeteer-core not found; set PUPPETEER_CORE_PATH");
}

const puppeteer = loadPuppeteer().default ?? loadPuppeteer();

const dir = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(dir, "poster.html");
const outPath = path.join(dir, "entry.png");

const executablePath =
  process.env.CHROME_PATH ||
  `${process.env.HOME}/.cache/puppeteer/chrome/linux-157.0.8103.50/chrome-linux64/chrome`;

const browser = await puppeteer.launch({
  executablePath,
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--force-device-scale-factor=1"],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 1024, deviceScaleFactor: 1 });
  await page.goto(`file://${htmlPath}`, { waitUntil: "load" });
  await page.screenshot({ path: outPath, type: "png" });
  console.log("wrote", outPath);
} finally {
  await browser.close();
}
