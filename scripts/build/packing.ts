import * as path from 'path';
import { ngPackagr } from 'ng-packagr';

const name = process.argv[2];
const target = path.resolve(__dirname, `../../packages/${name}`);

ngPackagr()
  .forProject(path.resolve(target, `ng-package.json`))
  .withTsConfig(path.resolve(target, 'tsconfig.lib.json'))
  .build();
