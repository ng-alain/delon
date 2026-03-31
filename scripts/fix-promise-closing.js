/**
 * Fix incorrect })); that should be });
 * The previous script incorrectly added extra ) to non-Promise tests
 */

const fs = require('fs');
const path = require('path');

const files = [
  'packages/abc/error-collect/error-collect.spec.ts',
  'packages/abc/lodop/lodop.spec.ts',
  'packages/abc/xlsx/xlsx.spec.ts',
  'packages/abc/zip/zip.spec.ts',
  'packages/acl/src/acl-guard.spec.ts',
  'packages/auth/src/token/jwt/jwt.guard.spec.ts',
  'packages/auth/src/token/jwt/jwt.interceptor.spec.ts',
  'packages/auth/src/token/simple/simple.guard.spec.ts',
  'packages/auth/src/token/simple/simple.interceptor.spec.ts',
  'packages/auth/src/token/token.service.spec.ts',
  'packages/cache/src/cache.spec.ts',
  'packages/mock/src/mock.interceptor.spec.ts',
  'packages/theme/src/services/menu/menu.service.spec.ts'
];

const packagesDir = path.resolve(__dirname, '..');

function fixFile(filePath) {
  const fullPath = path.join(packagesDir, filePath);
  let content = fs.readFileSync(fullPath, 'utf-8');
  let modified = false;

  // Pattern: it('...', () => { ... }));
  // Should be: it('...', () => { ... });
  // BUT: it('...', () => new Promise<void>(done => { ... })); is correct!
  
  const lines = content.split('\n');
  let inIt = false;
  let inPromise = false;
  let braceDepth = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Detect start of it()
    const itMatch = line.match(/it\s*\(\s*['"`].*['"`]\s*,\s*\(/);
    if (itMatch) {
      inIt = true;
      inPromise = line.includes('new Promise<void>');
      braceDepth = (line.match(/\(/g) || []).length - (line.match(/\)/g) || []).length;
      continue;
    }
    
    if (inIt) {
      braceDepth += (line.match(/\(/g) || []).length - (line.match(/\)/g) || []).length;
      
      // Check if line is just })); or });
      const closingMatch = line.match(/^(\s*)\}\)\);?\s*$/);
      if (closingMatch && braceDepth < 0) {
        if (!inPromise && line.includes('}));')) {
          // Non-promise test with })); should be });
          lines[i] = line.replace(/\}\)\);/, '});');
          modified = true;
        }
        inIt = false;
        inPromise = false;
        braceDepth = 0;
      }
    }
  }
  
  if (modified) {
    content = lines.join('\n');
    fs.writeFileSync(fullPath, content, 'utf-8');
    console.log(`✓ Fixed ${filePath}`);
    return true;
  }
  
  console.log(`  No changes needed for ${filePath}`);
  return false;
}

let fixed = 0;
for (const file of files) {
  try {
    if (fixFile(file)) fixed++;
  } catch (e) {
    console.log(`✗ Error fixing ${file}: ${e.message}`);
  }
}

console.log(`\nDone! Fixed ${fixed} files.`);
