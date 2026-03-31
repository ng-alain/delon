/**
 * Fix done() callback pattern for Vitest compatibility.
 *
 * Transforms:
 *   it('name', (done) => { ... done(); })
 *   it('name', done => { ... done(); })
 * Into:
 *   it('name', () => new Promise<void>(done => { ... done(); }))
 *
 * This is the minimal-diff approach: wrap the body in a Promise
 * so done() works as a resolve callback, without rewriting logic.
 */

const fs = require('fs');
const path = require('path');

const files = process.argv.slice(2);

function fixDoneCallbacks(content) {
  // Match: it/fit/xit patterns with done parameter
  // Handles: (done) => {  |  done => {  |  (done: DoneFn) => {  |  async (done) => {
  // Strategy: wrap the arrow function body in new Promise<void>(done => { ... })

  // Pattern: it('...', (done) => { BODY })  or  it('...', done => { BODY })
  // We need to find the matching closing brace - use a simple state machine

  let result = content;

  // Replace: it/fit/xit/test with done parameter
  // Match the function signature and wrap body
  result = result.replace(
    /\b(it|fit|test)\(([^,]+),\s*(?:async\s+)?\(?\s*done\s*(?::\s*\w+)?\s*\)?\s*=>\s*\{/g,
    (match, keyword, name) => {
      return `${keyword}(${name}, () => new Promise<void>(done => {`;
    }
  );

  // Now we need to close the Promise wrapper before the closing }) of each it block
  // This is complex to do with regex alone - use a different approach:
  // Find all occurrences and fix the closing braces

  // Actually, let's use a simpler approach:
  // Replace the closing pattern: });  at the end of the it block
  // But this is hard without proper parsing.

  // Simpler approach: just add `: DoneFn` type annotation removal
  // and wrap in Promise using a different pattern

  return result;
}

// Better approach: use line-by-line processing with state tracking
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const original = content;

  // Step 1: Find all it/fit/test blocks with done parameter
  // Use regex to find the opening and then manually find the matching close

  const lines = content.split('\n');
  const result = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Match: it('...', (done) => {  or  it('...', done => {
    const doneMatch = line.match(/^(\s*)(it|fit|test)\((.+),\s*(?:async\s+)?\(?\s*done\s*(?::\s*\w+)?\s*\)?\s*=>\s*\{(.*)$/);

    if (doneMatch) {
      const [, indent, keyword, name, rest] = doneMatch;

      // Find the matching closing brace for this it block
      // Count braces starting from this line
      let braceCount = 1; // we opened one {
      // Count braces in rest of first line
      for (const ch of rest) {
        if (ch === '{') braceCount++;
        if (ch === '}') braceCount--;
      }

      // Collect body lines
      const bodyLines = [];
      if (rest.trim()) bodyLines.push(rest);

      let j = i + 1;
      let closingLine = -1;
      let closingRest = '';

      while (j < lines.length && braceCount > 0) {
        const l = lines[j];
        let k = 0;
        let closePos = -1;

        while (k < l.length) {
          if (l[k] === '{') braceCount++;
          if (l[k] === '}') {
            braceCount--;
            if (braceCount === 0) {
              closePos = k;
              break;
            }
          }
          k++;
        }

        if (closePos >= 0) {
          // This line contains the closing brace
          closingLine = j;
          // Everything before closePos is body, closePos is }, rest after is );
          const beforeClose = l.substring(0, closePos);
          closingRest = l.substring(closePos + 1); // should be ); or );
          if (beforeClose.trim()) bodyLines.push(beforeClose);
          break;
        } else {
          bodyLines.push(l);
          j++;
        }
      }

      if (closingLine >= 0) {
        // Emit the transformed block
        result.push(`${indent}${keyword}(${name}, () => new Promise<void>(done => {`);
        for (const bl of bodyLines) {
          result.push(bl);
        }
        result.push(`${indent}}));`);
        i = closingLine + 1;
        continue;
      }
    }

    result.push(line);
    i++;
  }

  const newContent = result.join('\n');
  if (newContent !== original) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    return true;
  }
  return false;
}

// Get all spec files with done() callbacks
const packagesDir = path.resolve(__dirname, '..', 'packages');

function walk(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, results);
    else if (entry.name.endsWith('.spec.ts')) results.push(full);
  }
  return results;
}

const targetFiles = files.length > 0
  ? files.map(f => path.resolve(f))
  : walk(packagesDir).filter(f => {
      const c = fs.readFileSync(f, 'utf-8');
      return /\b(it|fit|test)\([^,]+,\s*(?:async\s+)?\(?\s*done\s*(?::\s*\w+)?\s*\)?\s*=>/.test(c);
    });

let modified = 0;
for (const f of targetFiles) {
  if (fixFile(f)) {
    modified++;
    console.log(`✓ ${path.relative(packagesDir, f)}`);
  }
}
console.log(`\nDone! ${modified} files modified.`);
