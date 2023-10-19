import chalk from 'chalk';
import { readJSONSync } from 'fs-extra/esm';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextVersion = readJSONSync(join(__dirname, '../../package.json'))
  .version;
const root = resolve(__dirname, `../../../ng-alain`);

/* Shortcut methods */
import { execSync } from 'child_process';
const execSyncOptions = {
  cwd: root,
};
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

fetchOlderVersions();
execSync('npm run sync-scaffold-version');
checkout();
log.success(`Use commit message:`);
log.success(`release(${nextVersion}): release ${nextVersion}`);

function fetchOlderVersions() {
  log.info('Fetching older versions...');
  execSync('git checkout master', execSyncOptions);
  execSync('git pull upstream master', execSyncOptions);
  execSync('git fetch upstream master --prune --tags', execSyncOptions);
  log.success('Older versions fetched!');
}

function checkout() {
  log.info('Checkout and push a new branch for publishing...');
  execSync(`git checkout -b publish-${nextVersion}`, execSyncOptions);
  execSync('git add .', execSyncOptions);
  execSync(
    `git commit -m "release(${nextVersion}): release ${nextVersion}"`,
    execSyncOptions,
  );
  // execSync(`git push origin publish-${nextVersion}`, execSyncOptions);
  log.success('Please go to GitHub and make a pull request.');
  log.success('Bye!');
}
