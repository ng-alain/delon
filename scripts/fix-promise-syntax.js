/**
 * Fix Promise wrapper syntax in spec files
 * The issue: it('...', () => new Promise<void>(done => {...}); 
 * Should be: it('...', () => new Promise<void>(done => {...}));
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
  'packages/theme/src/services/menu/menu.service.spec.ts',
  'packages/util/browser/copy.spec.ts'
];

const packagesDir = path.resolve(__dirname, '..');

function fixFile(filePath) {
  const fullPath = path.join(packagesDir, filePath);
  let content = fs.readFileSync(fullPath, 'utf-8');
  let modified = false;

  // Fix: }); at end of it() should be }));
  // Pattern: done => { ... });  at end of it()
  // This is complex because we need to find the matching closing brace
  
  // Simple fix: look for pattern where we have `done => {` but ending with `});` instead of `}));`
  // We'll use a more targeted approach
  
  // Look for: it('...', () => new Promise<void>(done => {
  //           ...
  //         });
  // Should be: }));
  
  const lines = content.split('\n');
  let inPromiseIt = false;
  let braceDepth = 0;
  let startLine = -1;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Detect start of Promise-wrapped it()
    if (line.match(/it\s*\(\s*['"`].*['"`]\s*,\s*\(\s*\)\s*=>\s*new\s+Promise<void>\(done\s*=>\s*\{/)) {
      inPromiseIt = true;
      braceDepth = 1;
      startLine = i;
      continue;
    }
    
    if (inPromiseIt) {
      // Count braces
      const openBraces = (line.match(/\{/g) || []).length;
      const closeBraces = (line.match(/\}/g) || []).length;
      braceDepth += openBraces - closeBraces;
      
      // Check if we're closing the it()
      if (braceDepth === 0 && line.match(/^\s*\}\);?\s*$/)) {
        // This should be })); not });
        if (!line.includes('});')) {
          // Already correct
          inPromiseIt = false;
          continue;
        }
        // Need to check if this is the right closing
        // The issue is the Promise wrapper needs an extra )
        lines[i] = line.replace(/\}\);/, '}));');
        modified = true;
        inPromiseIt = false;
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
