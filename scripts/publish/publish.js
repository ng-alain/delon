import { writeFileSync, readFileSync } from 'fs';
import { readJSONSync } from 'fs-extra/esm';
import { resolve, join, dirname } from 'path';
import { question } from 'readline-sync';
import chalk from 'chalk';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, `../..`);

/* Shortcut methods */
const print = console.log;
const log = {
  info: msg => {
    print(chalk.bgBlue.black('INFO'), chalk.blue(msg));
  },
  warn: msg => {
    print(chalk.bgYellow.black('WARN'), chalk.yellow(msg));
  },
  error: msg => {
    print(chalk.bgRed.black('ERROR'), chalk.red(msg));
  },
  success: msg => {
    print(chalk.bgGreen.black('SUCCESS'), chalk.green(msg));
  },
};

/* The whole process */
log.info('Starting publishing process...');

const nextVersion = readJSONSync(join(root, 'package.json')).version;

fetchOlderVersions();
generatingPublishNote();
// fixDependenciePath();
checkout();

function fetchOlderVersions() {
  log.info('Fetching older versions...');
  execSync('git checkout master');
  execSync('git pull upstream master');
  execSync('git fetch upstream master --prune --tags');
  log.success('Older versions fetched!');
}

function generatingPublishNote() {
  log.info('Generating changelog...');
  execSync('npm run changelog');
  log.success('Changelog generated!');

  let completeEditing = false;

  while (!completeEditing) {
    const result = question(
      chalk.bgYellow.black(
        'Please manually update docs/changelog. Press [Y] if you are done:',
      ) + '  ',
    );
    if (result.trim().toLowerCase() === 'y') {
      completeEditing = true;
    }
  }

  log.success('Change log finished!');
}

function fixDependenciePath() {
  log.info('Fix dependencie paths...');
  const packageData = readJSONSync(join(root, 'package.json'));
  const versionData = {
    ...packageData.dependencies,
    ...packageData.devDependencies
  };
  log.info('>> fix ajv version path in code service');
  const codeServicePath = join(root, 'src/app/core/code.service.ts');
  writeFileSync(codeServicePath,
    readFileSync(codeServicePath, 'utf-8')
      .replace(/\/ajv\/[^\/]+\//g, `/ajv/${versionData['ajv'].replace(/\^/g, '').replace(/\~/g, '')}/`)
  );
}

function checkout() {
  log.info('Checkout and push a new branch for publishing...');
  execSync(`git checkout -b publish-${nextVersion}`);
  execSync('git add .');
  execSync(`git commit -m "release(${nextVersion}): release ${nextVersion}"`);
  execSync(`git push origin publish-${nextVersion}`);
  log.success('Please go to GitHub and make a pull request.');
  log.success('Bye!');
}
