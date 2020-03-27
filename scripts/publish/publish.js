const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const read = require('readline-sync');

const root = path.resolve(__dirname, `../..`);

/* Shortcut methods */
const execSync = require('child_process').execSync;
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

const nextVersion = fs.readJSONSync(path.join(root, 'package.json')).version;

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
    const result = read.question(
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
  const packageData = fs.readJSONSync(path.join(root, 'package.json'));
  const versionData = {
    ...packageData.dependencies,
    ...packageData.devDependencies
  };
  log.info('>> fix ajv version path in code service');
  const codeServicePath = path.join(root, 'src/app/core/code.service.ts');
  fs.writeFileSync(codeServicePath,
    fs.readFileSync(codeServicePath, 'utf-8')
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
