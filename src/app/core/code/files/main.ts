export default (componentName: string): string => `import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import { ${componentName} } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(${componentName}, appConfig).catch((err) =>
  console.error(err)
);
`;
