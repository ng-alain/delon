#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files with Prettier issues
const files = [
  'packages/theme/src/services/http/http.spec.ts',
  'packages/util/date-time/picker.spec.ts',
  'packages/util/format/validate.spec.ts',
  'packages/util/math/in-range.spec.ts'
];

files.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Remove extra newlines in expect chains
  // Pattern: expect(...)\n\s+.toBe(...) → expect(...).toBe(...)
  content = content.replace(/expect\([^)]+\)\s*\n\s+\.toBe/g, (match) => {
    return match.replace(/\s*\n\s+/, '');
  });
  
  // Pattern: expect(...)\n\s+.toBeNull() → expect(...).toBeNull()
  content = content.replace(/expect\([^)]+\)\s*\n\s+\.toBeNull/g, (match) => {
    return match.replace(/\s*\n\s+/, '');
  });
  
  // Pattern: expect(...)\n\s+.toThrow → expect(...).toThrow
  content = content.replace(/expect\([^)]+\)\s*\n\s+\.toThrow/g, (match) => {
    return match.replace(/\s*\n\s+/, '');
  });
  
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`✓ Fixed ${file}`);
});

console.log('\nDone! All Prettier issues fixed.');
