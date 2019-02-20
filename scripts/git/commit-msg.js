#!/usr/bin/env node

/**
 * git commit-msg hook to check the commit message against ng-alain conventions
 *
 * Note:
 *  - the script from angular: https://github.com/angular/angular/blob/master/scripts/git/commit-msg.js
 */

'use strict';

const fs = require('fs');
const checkMsg = require('./validate-commit-message');
const msgFile = process.env['HUSKY_GIT_PARAMS'];

let isValid = true;
if (msgFile || true) {
  const commitMsg = fs.readFileSync(msgFile, {
    encoding: 'utf-8'
  });
  const firstLine = commitMsg.split('\n')[0];
  isValid = checkMsg(firstLine);
  if (!isValid) {
    console.error(
      `\nCheck CONTRIBUTING.md at the root of the repo for more information.`
    );
    console.error(
      `请查看根目录下的 CONTRIBUTING.md 获取更多信息。\n`
    );
  }
}

process.exit(isValid ? 0 : 1);
// checkMsg(process.argv[2])
