#!/usr/bin/env node

/**
 * GIT commit message format enforcement
 *
 * Note:
 *  - the script from angular: https://github.com/angular/angular/blob/master/tools/validate-commit-message/validate-commit-message.js
 */

'use strict';

const fs = require('fs');
const path = require('path');
const configPath = path.resolve(__dirname, './commit-message.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const PATTERN = /^(\w+)(?:\(([^)]+)\))?\: (.+)$/;
const FIXUP_SQUASH = /^(fixup|squash)\! /i;
const REVERT = /^revert:? /i;

module.exports = function (commitSubject) {
  const subject = commitSubject.replace(FIXUP_SQUASH, '');

  if (subject.match(REVERT)) {
    return true;
  }

  if (subject.length > config['maxLength']) {
    error(
      `The commit message is longer than ${config['maxLength']} characters`,
      commitSubject,
    );
    error(
      `commit 信息不能超过 ${config['maxLength']} 字符`,
      commitSubject,
      'zh',
    );
    return false;
  }

  const match = PATTERN.exec(subject);
  if (!match) {
    error(
      `The commit message does not match the format of '<type>(<scope>): <subject>' OR '<type>: <subject>'`,
      commitSubject,
    );
    error(
      `commit 信息格式不正确 '<type>(<scope>): <subject>' 或 '<type>: <subject>`,
      commitSubject,
      'zh',
    );
    return false;
  }

  const type = match[1];

  if (type.toLowerCase() === 'wip') {
    error(
      `wip are not allowed in a commit, you can change this PR title`,
      commitSubject,
    );
    error(
      `wip 不允许出现在 commit 中，你可以在 PR 中修改它的标题`,
      commitSubject,
      'zh',
    );
    return false;
  }

  if (config['types'].indexOf(type) === -1) {
    error(
      `"${type}" is not an allowed type.\n => TYPES: ${config['types'].join(
        ', ',
      )}`,
      commitSubject,
    );
    error(
      `"${type}" 是不允许的 type.\n => TYPES: ${config['types'].join(', ')}`,
      commitSubject,
      'zh',
    );
    return false;
  }

  const scope = match[2];

  if (
    scope && !config['scopes'].includes(scope) && type !== 'release' &&
    !scope.includes(':')
  ) {
    error(
      `"${scope}" is not an allowed scope.\n => SCOPES: ${config['scopes'].join(
        ', ',
      )}`,
      commitSubject,
    );
    error(
      `"${scope}" 是不允许的 scope.\n => SCOPES: ${config['scopes'].join(
        ', ',
      )}`,
      commitSubject,
      'zh',
    );
    return false;
  }

  return true;
};

function error(errorMessage, commitMessage, lang) {
  if (lang === 'zh') {
    console.error(
      `\n无效 COMMIT 信息: "${commitMessage}"\n => 错误: ${errorMessage}`,
    );
  } else {
    console.error(
      `\nINVALID COMMIT MSG: "${commitMessage}"\n => ERROR: ${errorMessage}`,
    );
  }
}

module.exports.config = config;
