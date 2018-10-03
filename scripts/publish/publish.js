const chalk = require('chalk');
const fs = require('fs-extra');
const read = require('readline-sync');
const path = require('path');
const conventionalChangelog = require('conventional-changelog');

/* Shortcut methods */
const execSync = require('child_process').execSync;
const print = console.log;
const log = {
  info   : (msg) => {
    print(chalk.bgBlue.black('INFO'), chalk.blue(msg));
  },
  warn   : (msg) => {
    print(chalk.bgYellow.black('WARN'), chalk.yellow(msg));
  },
  error  : (msg) => {
    print(chalk.bgRed.black('ERROR'), chalk.red(msg));
  },
  success: (msg) => {
    print(chalk.bgGreen.black('SUCCESS'), chalk.green(msg));
  }
};

/* The whole process */

log.info('Starting publishing process...');

let nextVersion;

function genChangeLog() {
  conventionalChangelog({
    preset: 'angular'
  });
  // conventional-changelog
}
