import * as path from 'path';
import * as fs from 'fs';
import { ExampleModules, SiteConfig } from '../interfaces';
import { generateDoc } from './utils';

export function generateExampleModule(rootDir: string, siteConfig: SiteConfig, options: ExampleModules) {
  const targetDir = path.join(rootDir, `./src/app/routes/gen/examples`);
  const indexFilePath = path.join(targetDir, `index.ts`);
  const tpl = fs.readFileSync(path.join(rootDir, siteConfig.template.examples)).toString('utf8');

  // imports
  options.imports = options.list
    .map(
      i => `import { ${i.componentName} } from './${i.name}';
    import { ${i.componentIndexName} } from './${i.name}_index';`,
    )
    .join(`\n`);

  options.components = [...options.list.map(i => i.componentName), ...options.list.map(i => i.componentIndexName)].join(
    ',',
  );

  options.metadata = options.list
    .map(
      i => `'example-${i.name}-index': { title: ${JSON.stringify(i.meta.title)}, component: ${i.componentIndexName} }`,
    )
    .join(`\n`);

  generateDoc(options, tpl, indexFilePath);
}
