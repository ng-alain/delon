const fs = require('fs');
const path = require('path');

const rootPath = path.resolve(__dirname, '../src/dist');

fs.copyFileSync(path.join(rootPath, 'index.html'), path.join(rootPath, '404.html'));
