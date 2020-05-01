const fs = require('fs-extra');
const path = require('path');

const filePath = path.join(__dirname, '../../src/tsconfig.json');

const json = fs.readJsonSync(filePath);
json.angularCompilerOptions = { enableIvy: false };
fs.writeJSONSync(filePath, json, { spaces: 2 });
