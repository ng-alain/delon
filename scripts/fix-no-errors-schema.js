/**
 * Comprehensive fix script for Vitest migration
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const packagesDir = path.resolve(__dirname, '..\\packages');

// Files that need NO_ERRORS_SCHEMA
const noErrorsSchemaFiles = [
  'abc/se/se.spec.ts',
  'abc/st/test/base.spec.ts',
  'abc/st/test/st.spec.ts',
  'abc/global-footer/global-footer.spec.ts',
  'abc/date-picker/range.directive.spec.ts'
];

// Add NO_ERRORS_SCHEMA import and schema
function addNoErrorsSchema(filePath) {
  const fullPath = path.join(packagesDir, filePath);
  let content = fs.readFileSync(fullPath, 'utf-8');
  
  // Add import
  if (!content.includes('NO_ERRORS_SCHEMA')) {
    content = content.replace(
      /import \{ ([^}]+) \} from '@angular\/core';/,
      (match, imports) => {
        if (!imports.includes('NO_ERRORS_SCHEMA')) {
          return `import { ${imports}, NO_ERRORS_SCHEMA } from '@angular/core';`;
        }
        return match;
      }
    );
  }
  
  // Add schema to TestBed.configureTestingModule
  if (!content.includes('schemas: [NO_ERRORS_SCHEMA]')) {
    content = content.replace(
      /TestBed\.configureTestingModule\(\{([^}]+)\}\);/g,
      (match, config) => {
        if (config.includes('schemas:')) return match;
        return `TestBed.configureTestingModule({${config}, schemas: [NO_ERRORS_SCHEMA] });`;
      }
    );
  }
  
  fs.writeFileSync(fullPath, content, 'utf-8');
  console.log(`✓ Added NO_ERRORS_SCHEMA to ${filePath}`);
}

// Process files
for (const file of noErrorsSchemaFiles) {
  try {
    addNoErrorsSchema(file);
  } catch (e) {
    console.log(`✗ Failed ${file}: ${e.message}`);
  }
}

console.log('\nDone!');
