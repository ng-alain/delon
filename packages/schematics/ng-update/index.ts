import { chain, Rule } from '@angular-devkit/schematics';
import { sync as globSync } from 'glob';
import { TargetVersion } from './target-version';
import { delonUpgradeData } from './upgrade-data';
import { createUpgradeRule } from './upgrade-rules';
import { UpgradeTSLintConfig } from './upgrade-rules/tslint-config';
import { v2DomRule } from './upgrade-rules/v2/v2DomRule';
import { v2LayoutRule } from './upgrade-rules/v2/v2LayoutRule';

/** List of additional upgrade rules which are specifically for the CDK. */
const extraUpgradeRules = [
  // Misc check rules
  'check-property-names-misc',
];

const ruleDirectories = globSync('upgrade-rules/**/', {
  cwd: __dirname,
  absolute: true,
});

/** TSLint upgrade configuration that will be passed to the CDK ng-update rule. */
const tslintUpgradeConfig: UpgradeTSLintConfig = {
  upgradeData: delonUpgradeData,
  extraRuleDirectories: ruleDirectories,
  extraUpgradeRules,
};

export function updateToV2(): Rule {
  return chain([v2LayoutRule, v2DomRule, createUpgradeRule(TargetVersion.V2, tslintUpgradeConfig)]);
}

export function updateToV9(): Rule {
  return () =>
    console.log(
      `本次升级请参考：https://github.com/ng-alain/ng-alain/issues/1569 \nPlease refer to https://github.com/ng-alain/ng-alain/issues/1569`,
    );
}

export function postUpdate(): Rule {
  return () =>
    console.log('\nComplete! Please check the output above for any issues that were detected but could not be automatically fixed.');
}
