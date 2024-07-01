import { symbolRemoval, UpgradeData } from '@angular/cdk/schematics';

import {
  attributeSelectors,
  classNames,
  constructorChecks,
  cssSelectors,
  cssTokens,
  elementSelectors,
  inputNames,
  methodCallChecks,
  outputNames,
  propertyNames
} from './data';

export const ruleUpgradeData: UpgradeData = {
  attributeSelectors,
  classNames,
  constructorChecks,
  cssSelectors,
  elementSelectors,
  inputNames,
  methodCallChecks,
  outputNames,
  propertyNames,
  symbolRemoval,
  cssTokens
};
