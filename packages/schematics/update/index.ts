import { Rule } from '@angular-devkit/schematics';
import {createUpdateRule} from './update';

export enum TargetVersion {
  V2,
}

export function updateToV2(): Rule {
  return () => console.log(
    'Not yet!');
  return createUpdateRule(TargetVersion.V2);
}

export function postUpdate(): Rule {
  return () => console.log(
    '\nComplete! Please check the output above for any issues that were detected but could not' +
    ' be automatically fixed.');
}
