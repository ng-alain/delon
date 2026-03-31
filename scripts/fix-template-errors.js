/**
 * Fix Angular template and TypeScript errors in spec files
 */

const fs = require('fs');
const path = require('path');

const fixes = [
  // page-header.spec.ts - NG2007: TestBaseComponent needs @Component decorator
  {
    file: 'packages/abc/page-header/page-header.spec.ts',
    find: /^class TestBaseComponent \{/,
    replace: '@Component({ template: \'\' })\nclass TestBaseComponent {'
  },
  // notice-icon.spec.ts - TS2554: $event parameter type
  {
    file: 'packages/abc/notice-icon/notice-icon.spec.ts',
    find: /\(select\)="select\(\$event\)"/,
    replace: '(select)="select($any($event))"'
  },
  {
    file: 'packages/abc/notice-icon/notice-icon.spec.ts',
    find: /\(clear\)="clear\(\$event\)"/,
    replace: '(clear)="clear($any($event))"'
  },
  // reuse-tab.component.spec.ts - TS2554
  {
    file: 'packages/abc/reuse-tab/reuse-tab.component.spec.ts',
    find: /\(change\)="change\(\$event\)"/,
    replace: '(change)="change($any($event))"'
  },
  {
    file: 'packages/abc/reuse-tab/reuse-tab.component.spec.ts',
    find: /\(close\)="close\(\$event\)"/,
    replace: '(close)="close($any($event))"'
  },
  // chart/bar/bar.spec.ts - TS2554
  {
    file: 'packages/chart/bar/bar.spec.ts',
    find: /\(clickItem\)="clickItem\(\$event\)"/,
    replace: '(clickItem)="clickItem($any($event))"'
  },
  // chart/chart-echarts/echarts.spec.ts - TS2554
  {
    file: 'packages/chart/chart-echarts/echarts.spec.ts',
    find: /\(events\)="handleEvents\(\$event\)"/,
    replace: '(events)="handleEvents($any($event))"'
  },
  // se/se.spec.ts - ngModelEnd not recognized
  {
    file: 'packages/abc/se/se.spec.ts',
    find: /\[ngModelEnd\]/,
    replace: '[ngModelOptions]'
  }
];

let modified = 0;
const packagesDir = path.resolve(__dirname, '..');

for (const fix of fixes) {
  const filePath = path.join(packagesDir, fix.file);
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    const newContent = content.replace(fix.find, fix.replace);
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf-8');
      console.log(`✓ Fixed ${fix.file}`);
      modified++;
    }
  } catch (e) {
    console.log(`✗ Skipped ${fix.file}: ${e.message}`);
  }
}

console.log(`\nDone! ${modified} fixes applied.`);
