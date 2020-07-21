import { chain, Rule } from '@angular-devkit/schematics';
import { sync as globSync } from 'glob';
import { delonUpgradeData } from './upgrade-data';
import { UpgradeTSLintConfig } from './upgrade-rules/tslint-config';
import { v9Rule } from './upgrade-rules/v9/v9Rule';

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

export function updateToV9(): Rule {
  return chain([v9Rule]);
}

export function postUpdate(): Rule {
  return () =>
    console.log('\nComplete! Please check the output above for any issues that were detected but could not be automatically fixed.');
}
