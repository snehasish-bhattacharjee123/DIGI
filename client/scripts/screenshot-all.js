#!/usr/bin/env node
/**
 * screenshot-all.js
 *
 * Usage:
 *   node screenshot-all.js [URL] [OUT_DIR]
 *
 * Examples:
 *   node screenshot-all.js http://localhost:3000 ./screenshots
 *   node screenshot-all.js
 *
 * Behavior:
 * - Opens the provided URL (defaults to http://localhost:3000).
 * - Appends ?debugScroll=1 to the URL to enable the debug overlay in the component.
 * - Finds all elements with attribute `[data-wrapper]` and saves a clipped screenshot
 *   for each wrapper as `screenshot-<id>.png` (falls back to `wrapper-<n>` when id missing).
 * - If no wrappers are found it will save a full-page screenshot named `screenshot-full.png`.
 * - Saves screenshots into the provided output directory (defaults to ./screenshots).
 *
 * Notes:
 * - Requires Playwright to be installed in this package:
 *     npm install --save-dev playwright
 *   and optionally download browsers:
 *     npx playwright install
 *
 * - This script is headless by default.
 */

const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

async function run() {
  try {
    const args = process.argv.slice(2);
    const rawUrl = args[0] || "http://localhost:3000";
    const outDir = args[1] || path.join(process.cwd(), "screenshots");

    // Ensure output directory exists
    fs.mkdirSync(outDir, { recursive: true });

    // Append debug query param for the debug overlay (if not already present)
    const debugUrl =
      rawUrl.includes("?") && rawUrl.includes("debugScroll")
        ? rawUrl
        : rawUrl.includes("?")
        ? `${rawUrl}&debugScroll=1`
        : `${rawUrl}?debugScroll=1`;

    console.log(`Launching browser and navigating to: ${debugUrl}`);
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      viewport: { width: 1280, height: 900 },
    });
    const page = await context.newPage();

    await page.goto(debugUrl, { waitUntil: "networkidle" });

    // Let fonts/images settle a bit (tweak if necessary)
    await page.waitForTimeout(800);

    // Query wrappers
    const wrappers = await page.$$("[data-wrapper]");
    if (!wrappers || wrappers.length === 0) {
      console.warn("No wrappers found. Saving full-page screenshot instead.");
      const fullPath = path.join(outDir, "screenshot-full.png");
      await page.screenshot({ path: fullPath, fullPage: true });
      console.log("Saved:", fullPath);
      await browser.close();
      return;
    }

    console.log(`Found ${wrappers.length} wrapper(s). Capturing individually...`);

    for (let i = 0; i < wrappers.length; i++) {
      const el = wrappers[i];
      // Get id attr if present
      const id = (await el.getAttribute("id")) || `wrapper-${i + 1}`;
      // Scroll element into view and wait for layout to settle
      try {
        await el.scrollIntoViewIfNeeded();
      } catch (err) {
        // some Playwright versions have different method names; ignore if not supported
      }
      await page.waitForTimeout(200);

      const box = await el.boundingBox();
      if (!box) {
        console.warn(`Could not determine bounding box for ${id}, skipping.`);
        continue;
      }

      // Add small padding, but keep within viewport bounds
      const pad = 8;
      const clip = {
        x: Math.max(0, Math.floor(box.x - pad)),
        y: Math.max(0, Math.floor(box.y - pad)),
        width: Math.min(
          Math.ceil(box.width + pad * 2),
          page.viewportSize().width - Math.max(0, Math.floor(box.x - pad))
        ),
        height: Math.min(
          Math.ceil(box.height + pad * 2),
          page.viewportSize().height - Math.max(0, Math.floor(box.y - pad))
        ),
      };

      // Sanitize id for filename
      const safeId = id.replace(/[^a-z0-9._-]/gi, "-").toLowerCase();
      const filePath = path.join(outDir, `screenshot-${safeId}.png`);
      try {
        await page.screenshot({ path: filePath, clip });
        console.log(`Saved ${filePath}`);
      } catch (err) {
        console.error(`Failed to capture ${id}:`, err.message);
        // Fallback to element screenshot without clip (full viewport)
        const fallbackPath = path.join(outDir, `screenshot-${safeId}-fallback.png`);
        await page.screenshot({ path: fallbackPath });
        console.log(`Saved fallback ${fallbackPath}`);
      }
    }

    // Also save a full-page screenshot for reference
    const fullRef = path.join(outDir, "screenshot-full.png");
    try {
      await page.screenshot({ path: fullRef, fullPage: true });
      console.log("Saved full-page reference:", fullRef);
    } catch (_) {
      // ignore
    }

    await browser.close();
    console.log("Done.");
  } catch (err) {
    console.error("Error capturing screenshots:", err);
    process.exit(1);
  }
}

run();
