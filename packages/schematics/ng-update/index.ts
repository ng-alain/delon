import { chain, Rule } from '@angular-devkit/schematics';
import { v10Rule } from './upgrade-rules/v10/v10Rule';
import { v9Rule } from './upgrade-rules/v9/v9Rule';

export function updateToV9(): Rule {
  return chain([v9Rule]);
}

export function updateToV10(): Rule {
  return chain([v10Rule]);
}

export function postUpdate(): Rule {
  return () =>
    console.log('\nComplete! Please check the output above for any issues that were detected but could not be automatically fixed.');
}
