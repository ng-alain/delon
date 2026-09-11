'use strict';
const fs = require('fs');

const types = ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'release', 'revert', 'style', 'test'];

const scopes = ["abc", "acl", "auth", "cache", "chart", "form", "sf", "mock", "cli", "testing", "theme", "util"];

const PATTERN = /^(\w+)(?:\(([^)]+)\))?: (.+)$/;

/** 解析 commit 消息文件路径：优先取 husky 注入的环境变量，其次取 `--edit` 命令行参数 */
function resolveMessagePath() {
  if (process.env['HUSKY_GIT_PARAMS']) {
    return process.env['HUSKY_GIT_PARAMS'];
  }
  const args = process.argv.slice(2);
  const index = args.findIndex(arg => arg === '--edit' || arg === '-e');
  return index === -1 ? null : args[index + 1];
}

function parseMessage(message) {
  const match = PATTERN.exec(message);
  if (!match) {
    return null;
  }
  return {
    type: match[1] || null,
    scope: match[2] || null
  };
}

function getScopesRule() {
  const messagePath = resolveMessagePath();
  const message = messagePath && fs.existsSync(messagePath) ? fs.readFileSync(messagePath, { encoding: 'utf-8' }) : '';
  const parsed = parseMessage(message.split('\n')[0]);
  if (!parsed) {
    return [2, 'always', scopes];
  }
  const { scope, type } = parsed;
  if (scope && !scopes.find(w => scope.startsWith(w)) && type !== 'release') {
    return [2, 'always', scopes.concat(scope)];
  } else {
    return [2, 'always', []];
  }
}

module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'type-enum': [2, 'always', types],
    'scope-enum': getScopesRule
  }
};
