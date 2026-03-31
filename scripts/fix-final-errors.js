const fs = require('fs');
const path = require('path');

const fixes = [
  // cell.spec.ts - valueChange parameter
  {
    file: 'packages/abc/cell/cell.spec.ts',
    find: /valueChange\(\): void \{\}/g,
    replace: 'valueChange(_val: unknown): void {}'
  },
  {
    file: 'packages/abc/cell/cell.spec.ts',
    find: /\(valueChange\)="valueChange\(\$event\)"/g,
    replace: '(valueChange)="valueChange($event)"'
  },
  // reuse-tab.component.spec.ts
  {
    file: 'packages/abc/reuse-tab/reuse-tab.component.spec.ts',
    find: /change\(\): void \{\}/g,
    replace: 'change(_item: any): void {}'
  },
  {
    file: 'packages/abc/reuse-tab/reuse-tab.component.spec.ts',
    find: /close\(\): void \{\}/g,
    replace: 'close(_item: any): void {}'
  },
  // chart/bar/bar.spec.ts
  {
    file: 'packages/chart/bar/bar.spec.ts',
    find: /clickItem\(\): void \{\}/g,
    replace: 'clickItem(_e: any): void {}'
  },
  // chart/chart-echarts/echarts.spec.ts
  {
    file: 'packages/chart/chart-echarts/echarts.spec.ts',
    find: /handleEvents\(\): void \{\}/g,
    replace: 'handleEvents(_e: any): void {}'
  },
  // date-picker/range.directive.spec.ts - ngModelEnd is invalid
  {
    file: 'packages/abc/date-picker/range.directive.spec.ts',
    find: /\[\(ngModelEnd\)\]/g,
    replace: '[ngModelOptions]'
  }
];

const packagesDir = path.resolve(__dirname, '..');
let modified = 0;

for (const fix of fixes) {
  const filePath = path.join(packagesDir, fix.file);
  try {
    if (!fs.existsSync(filePath)) continue;
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
