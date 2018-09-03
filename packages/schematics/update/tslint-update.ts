import { join } from 'path';
import { TargetVersion } from './index';

const upgradeRules = [
  // Element selector update rules
  'element-selectors-string-literal',
  'element-selectors-stylesheet',
  'element-selectors-template',
];

const rulesDirectory = [
  join(__dirname, 'rules/'),
  join(__dirname, 'rules/element-selectors'),
];

export function createTslintConfig(target: TargetVersion) {
  const rules = upgradeRules.reduce((result, ruleName) => {
    result[ruleName] = [true, target];
    return result;
  }, {});

  return { rulesDirectory, rules };
}
