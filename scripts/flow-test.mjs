import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import { chromium } from 'playwright';
import { HOTSPOT_CARDS } from '../src/data.js';

const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}/ai-hotspot-game/`;

async function waitForServer(url, retries = 30) {
  for (let i = 0; i < retries; i += 1) {
    try {
      const res = await fetch(url, { method: 'GET' });
      if (res.ok) return true;
    } catch {
      // ignore
    }
    await delay(300);
  }
  throw new Error('Preview server not ready');
}

async function run() {
  const preview = spawn('npm', ['run', 'preview', '--', '--port', String(PORT), '--strictPort'], {
    stdio: 'inherit',
    cwd: new URL('..', import.meta.url).pathname
  });

  try {
    await waitForServer(BASE_URL);

    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.click('text=开始推演');

    for (let i = 0; i < HOTSPOT_CARDS.length; i += 1) {
      await page.click('text=翻牌进入');
      await page.click('text=进入理解挑战');
      await page.click(`button.option[data-idx="${HOTSPOT_CARDS[i].quiz.answerIndex}"]`);
      await page.waitForSelector('text=③ 业务落地');
      await page.click('button.strategy-btn[data-idx="0"]');

      if (i < HOTSPOT_CARDS.length - 1) {
        await page.waitForSelector(`text=第 ${i + 2}/${HOTSPOT_CARDS.length} 张`);
      }
    }

    await page.waitForSelector('.result');
    await browser.close();
  } finally {
    preview.kill('SIGTERM');
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
