#!/usr/bin/env node
/**
 * Standalone content precompute pipeline.
 *
 * Fetches/scrapes API and external data and writes vendored artifacts to
 * public/ and src/data/ without running Vite or Puppeteer. This is intended
 * for the scheduled precompute job that commits generated content so normal
 * Netlify builds can skip these heavy, network-dependent steps.
 */
import { execSync } from 'node:child_process';

const cwd = process.cwd();

function run(cmd) {
  console.log(`\n> ${cmd}`);
  execSync(cmd, { stdio: 'inherit', cwd });
}

// API-dependent heavy steps
run('npm run build:entities');
run('npm run build:sitemaps');
run('npm run build:rss');

// Local asset generation (images are skipped automatically if unchanged)
run('npm run build:images');
run('npm run build:ai-discovery');
run('node scripts/generate-og-image.mjs');

console.log('\nContent precompute complete.');
