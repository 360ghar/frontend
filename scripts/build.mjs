#!/usr/bin/env node
/**
 * Build orchestrator — two tracks:
 *
 * Deploy path (default, including Netlify production):
 *   Local/static work only — vite + CSS purge. Target: tens of seconds.
 *   Skips Chrome, external entity scraping, API sitemap/RSS crawls,
 *   Puppeteer prerender, and IndexNow.
 *
 * Content / full path (FULL_BUILD=1 only):
 *   Full SEO pipeline — entities, sitemaps, RSS, images, vite, CSS purge,
 *   prerender (Puppeteer), IndexNow. Use for scheduled/nightly content
 *   refreshes or manual SEO rebuilds (`npm run build:full`).
 *
 * Override: set FULL_BUILD=1 to force the content pipeline anywhere.
 *
 * Why production is no longer auto-full:
 *   Netlify CONTEXT=production previously ran 244 Puppeteer routes + API
 *   crawls + Chrome install (~10+ minutes). Prerender cache was also cold
 *   every deploy (global bulk-data hash + vite asset hash). SEO freshness
 *   is owned by the scheduled content job, not every code deploy.
 */
import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import path from 'node:path';

const cwd = process.cwd();
const isFullBuild = process.env.FULL_BUILD === '1';
const skipPrecompute = process.env.SKIP_PRECOMPUTE === '1';

function run(cmd) {
  console.log(`\n> ${cmd}`);
  const label = cmd.length > 80 ? `${cmd.slice(0, 77)}...` : cmd;
  console.time(label);
  try {
    execSync(cmd, { stdio: 'inherit', cwd });
  } finally {
    console.timeEnd(label);
  }
}

const LOCALITIES_JSON = path.join(cwd, 'src', 'data', 'localities.json');
const LOCALITIES_INDEX = path.join(cwd, 'src', 'data', 'localities-index.json');

console.log('');
console.log('=========================================================');
if (isFullBuild) {
  console.log(' FULL / content build (FULL_BUILD=1)');
  if (skipPrecompute) {
    console.log(' precompute skipped (SKIP_PRECOMPUTE=1) — vite, prerender, IndexNow');
  } else {
    console.log(' entities, sitemaps, RSS, images, vite, prerender, IndexNow');
  }
} else {
  console.log(' Fast deploy build (default)');
  console.log(' Skipping: Chrome, entities scrape, API sitemaps/RSS,');
  console.log(' prerender (Puppeteer), IndexNow');
  console.log(' Set FULL_BUILD=1 or run: npm run build:full');
}
console.log('=========================================================');
console.log('');

// ── Pre-vite ───────────────────────────────────────────────────────────

if (isFullBuild) {
  if (!skipPrecompute) {
    run('npm run build:entities');
    run('npm run build:sitemaps');
    run('npm run build:rss');
    run('npm run build:images');
  }
} else {
  // Localities power locality pages + light sitemap gen. Prefer vendored
  // files in the repo; only scrape if both are missing (fresh clone).
  if (!existsSync(LOCALITIES_JSON) || !existsSync(LOCALITIES_INDEX)) {
    console.log('localities data missing — running entity ingestion once');
    run('npm run build:entities');
  }

  // Static + locality sitemaps only (no API crawls).
  // Dynamic/datahub/RSS sitemaps are refreshed on FULL_BUILD.
  run('node scripts/generate-sitemaps.mjs');
  if (existsSync(LOCALITIES_INDEX)) {
    run('node scripts/generate-locality-sitemap.mjs');
  }

  // Idempotent: no-ops when webp/avif variants are already newer than sources.
  run('npm run build:images');
}

if (!isFullBuild || !skipPrecompute) {
  run('npm run build:ai-discovery');
  run('node scripts/generate-og-image.mjs');
}

// ── Vite build ─────────────────────────────────────────────────────────

run('vite build');

// ── Post-vite ──────────────────────────────────────────────────────────

// CSS purge scripts scan dist/**/*.html + src/**/*.{jsx,js} — they work
// with or without prerendered pages (source JSX covers all class names).
run('node scripts/purge-main-css.mjs');

if (isFullBuild) {
  // Puppeteer Chrome is only needed for prerendering.
  run('npx puppeteer browsers install chrome');
  run('npm run build:prerender');
}

run('node scripts/purge-bootstrap.mjs');

if (isFullBuild) {
  run('npm run build:indexnow');
}

console.log(
  isFullBuild
    ? '\nFull content build complete.'
    : '\nFast deploy build complete (SEO crawl/prerender skipped).',
);
