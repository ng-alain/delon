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

function main() {
  const result = read.question(chalk.bgYellow.black(`请输入要过期的版本号范围，可以通过 https://semver.npmjs.com/ 来获取`) + '  ');

  if (result === '') {
    log.warn(`空版本信息，中断操作`);
    return;
  }

  const latest = fs.readJSONSync(path.join(root, 'package.json')).version;
  if (result.includes(latest)) {
    log.error(`禁止过期最新版本号`);
    return;
  }

  const confirmResult = read.question(
    chalk.bgYellow.black(
      `将对所有包体进行以下过期处理【npm deprecate ng-alain@"${result}" "Please use latest"】，确认吗？（输入 Y 确认）`,
    ) + '  ',
  );

  if (confirmResult !== 'Y') {
    log.warn(`取消操作`);
    return;
  }

  [
    'ng-alain',
    '@delon/theme',
    '@delon/abc',
    '@delon/chart',
    '@delon/acl',
    '@delon/auth',
    '@delon/cache',
    '@delon/mock',
    '@delon/form',
    '@delon/util',
  ].forEach(libName => {
    const command = `npm deprecate ${libName}@"${result}" "Please use latest"`;
    log.info(`正在执行：${command}`);
    execSync(command);
  });
}

main();
