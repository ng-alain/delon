import { Rule } from '@angular-devkit/schematics';
import { updateWorkspace } from '@schematics/angular/utility/workspace';

import { BUILD_TARGET_BUILD } from '../../../utils';

export function fixAngularJson(): Rule {
  return updateWorkspace(async workspace => {
    workspace.projects.forEach(project => {
      const build = project.targets?.get(BUILD_TARGET_BUILD);
      if (build == null) return;
      if (build.builder !== '@angular-devkit/build-angular:browser') return;

      build.builder = '@angular-devkit/build-angular:application';
      const options = build.options;
      options['browser'] = options.main;
      delete options.main;
      const dev = build.configurations.development;
      delete dev.buildOptimizer;
      delete dev.vendorChunk;
      delete dev.namedChunks;
    });
  });
}
