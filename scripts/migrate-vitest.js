/**
 * Jasmine → Vitest migration script for delon spec files.
 * 
 * Patterns handled:
 * 1. jasmine.createSpy('name').and.returnValue(val) → vi.fn().mockReturnValue(val)
 * 2. jasmine.createSpy('name').and.callFake(fn)     → vi.fn().mockImplementation(fn)
 * 3. jasmine.createSpy().and.returnValue(val)        → vi.fn().mockReturnValue(val)
 * 4. jasmine.createSpy().and.callFake(fn)            → vi.fn().mockImplementation(fn)
 * 5. jasmine.createSpyObj('name', ['a','b'])         → { a: vi.fn(), b: vi.fn() }
 * 6. jasmine.createSpyObj('name', { key: spy })      → { key: spy }
 * 7. jasmine.createSpy('name')                        → vi.fn()
 * 8. jasmine.createSpy()                              → vi.fn()
 * 9. spyOnProperty(obj, prop, 'set').and.callThrough() → vi.spyOn(obj, prop, 'set')
 * 10. spyOn(obj, method) (not vi.spyOn)             → vi.spyOn(obj, method)
 * 11. .and.callFake(                                 → .mockImplementation(
 * 12. .and.returnValue(                              → .mockReturnValue(
 * 13. .withContext(msg)                              → (removed)
 */

const fs = require('fs');
const path = require('path');

function migrate(content) {
  // 1-4: Compound jasmine.createSpy with chained mock
  // jasmine.createSpy('name').and.returnValue(val) → vi.fn().mockReturnValue(val)
  content = content.replace(/jasmine\.createSpy\([^)]*\)\.and\.returnValue\(/g, 'vi.fn().mockReturnValue(');
  // jasmine.createSpy('name').and.callFake(fn) → vi.fn().mockImplementation(fn)
  content = content.replace(/jasmine\.createSpy\([^)]*\)\.and\.callFake\(/g, 'vi.fn().mockImplementation(');

  // 5: jasmine.createSpyObj('name', ['a', 'b']) → { a: vi.fn(), b: vi.fn() }
  content = content.replace(
    /jasmine\.createSpyObj\(\s*'[^']*',\s*\[([^\]]*)\]\s*\)/g,
    (_, methods) => {
      const items = methods
        .split(',')
        .map(m => m.trim().replace(/['"]/g, ''))
        .filter(Boolean)
        .map(m => `${m}: vi.fn()`);
      return `{ ${items.join(', ')} }`;
    }
  );

  // 6: jasmine.createSpyObj('name', { key: spy }) → ({ key: spy })
  // This is a statement whose return value is discarded; just replace with the object
  content = content.replace(
    /jasmine\.createSpyObj\(\s*'[^']*',\s*\{([^}]*)\}\s*\)/g,
    (_, props) => `({${props}})`
  );

  // 7: jasmine.createSpy('name') → vi.fn()
  content = content.replace(/jasmine\.createSpy\(\s*'[^']*'\s*\)/g, 'vi.fn()');
  
  // 8: jasmine.createSpy() → vi.fn()
  content = content.replace(/jasmine\.createSpy\(\)/g, 'vi.fn()');

  // 9: spyOnProperty(obj, prop, 'set').and.callThrough() → vi.spyOn(obj, prop, 'set')
  content = content.replace(
    /spyOnProperty\(([^,]+),\s*([^,]+),\s*'set'\)\.and\.callThrough\(\)/g,
    'vi.spyOn($1, $2, \'set\')'
  );

  // 10: spyOn( → vi.spyOn( (but NOT vi.spyOn or already-prefixed)
  content = content.replace(/(?<!vi\.)spyOn\(/g, 'vi.spyOn(');

  // 11: .and.callFake( → .mockImplementation(
  content = content.replace(/\.and\.callFake\(/g, '.mockImplementation(');

  // 12: .and.returnValue( → .mockReturnValue(
  content = content.replace(/\.and\.returnValue\(/g, '.mockReturnValue(');

  // 13: .withContext(msg) → remove
  // Handles: .withContext('some string') and .withContext(`template ${var}`)
  content = content.replace(/\.withContext\((?:[^()]*|\((?:[^()]*|\([^()]*\))*\))*\)/g, '');

  // 14: .calls.mostRecent().args[X] → .mock.calls.at(-1)[X]!
  content = content.replace(/\.calls\.mostRecent\(\)\.args/g, '.mock.calls.at(-1)!');

  // 15: .calls.first().args[X] → .mock.calls[0][X]
  content = content.replace(/\.calls\.first\(\)\.args/g, '.mock.calls[0]');

  // 16: .calls.all() → .mock.calls
  content = content.replace(/\.calls\.all\(\)/g, '.mock.calls');

  // 17: .calls.reset() → .mockClear()
  content = content.replace(/\.calls\.reset\(\)/g, '.mockClear()');

  // 18: jasmine.Spy<jasmine.Func> → any (must come before simple jasmine.Spy)
  content = content.replace(/jasmine\.Spy<jasmine\.Func>/g, 'any');
  // 19: jasmine.Spy → any
  content = content.replace(/jasmine\.Spy/g, 'any');

  // 20: spyOnProperty(obj, prop, 'get') → vi.spyOn(obj, prop, 'get')
  content = content.replace(/spyOnProperty\(([^,]+),\s*([^,]+),\s*'get'\)/g, "vi.spyOn($1, $2, 'get')");
  // 21: spyOnProperty(obj, prop, 'set') → vi.spyOn(obj, prop, 'set')
  content = content.replace(/spyOnProperty\(([^,]+),\s*([^,]+),\s*'set'\)/g, "vi.spyOn($1, $2, 'set')");
  // 22: spyOnProperty(obj, prop) → vi.spyOn(obj, prop, 'get') (default is getter)
  content = content.replace(/spyOnProperty\(([^,]+),\s*([^,)]+)\)/g, "vi.spyOn($1, $2, 'get')");

  // 23: .toBeTrue() → .toBe(true)
  content = content.replace(/\.toBeTrue\(\)/g, '.toBe(true)');

  // 24: xit( → it.skip(
  content = content.replace(/(?<!\.)xit\(/g, 'it.skip(');

  // 25: .toThrowMatching((err: Error) => err.message.includes('...')) → .toThrow(/.../)
  // Simple extraction: match the includes pattern
  content = content.replace(
    /\.toThrowMatching\(\(err:\s*Error\)\s*=>\s*err\.message\.includes\(['"`]([^'"`]+)['"`]\)\)/g,
    ".toThrow(/$1/)"
  );

  // 26: Replace Mock type annotations from jasmine.Spy → Mock migration
  // But don't touch "import * as Mock from 'mockjs'"
  // Pattern: ": Mock;" (type annotation on variable declaration)
  content = content.replace(/(\w+):\s*Mock\s*;/g, '$1: any;');
  // Pattern: "as Mock)" or "as Mock." (type assertion)
  content = content.replace(/ as Mock(\)|\.)/g, ' as any$1');

  // 27: Fix .at(-1) possibly undefined: add ! before direct index access
  // .mock.calls.at(-1)[N] → .mock.calls.at(-1)![N]  (but not if ! already present)
  content = content.replace(/\.mock\.calls\.at\(-1\)(?!!)\[/g, '.mock.calls.at(-1)![');

  return content;
}

function main() {
  const packagesDir = path.resolve(__dirname, '..', 'packages');
  const files = [];

  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name.endsWith('.spec.ts')) {
        files.push(full);
      }
    }
  }

  walk(packagesDir);

  let total = 0;
  let modified = 0;
  let unchanged = 0;

  for (const file of files) {
    total++;
    const original = fs.readFileSync(file, 'utf-8');
    const result = migrate(original);
    
    if (result !== original) {
      fs.writeFileSync(file, result, 'utf-8');
      modified++;
      const rel = path.relative(packagesDir, file);
      console.log(`✓ ${rel}`);
    } else {
      unchanged++;
    }
  }

  console.log(`\nDone! ${modified}/${total} files modified, ${unchanged} unchanged.`);
}

main();
