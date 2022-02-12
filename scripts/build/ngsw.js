#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { spawn } = require('child_process');

const ROOT = path.resolve(__dirname, '../..')
const browserOutput = path.join(ROOT, 'src/dist/browser')

async function runNGSWConfig() {
  return new Promise((res, reject) => {
    spawn
    const childProcess = spawn('node_modules/.bin/ngsw-config', ['src/dist/browser', 'ngsw-config.json'], {
      env: { ...process.env },
      cwd: ROOT,
      stdio: ['pipe', 'ignore', 'ignore']
    });
    childProcess.on('close', (code) => {
      code !== 0 ? reject(`Process failed with code ${code}`) : res();
    });
  });
}

async function saveAsNGSWConfig(local) {
  const config = await fs.readJSON(path.resolve(browserOutput, 'ngsw.json'));
  config.local = local;
  await fs.writeJSON(path.resolve(browserOutput, `ngsw.${local}.json`), config);
}

async function rewriteConfig(local) {
  await runNGSWConfig();
  await saveAsNGSWConfig(local);
}

async function main() {
  await rewriteConfig('zh');
  await rewriteConfig('en');
}

main();
