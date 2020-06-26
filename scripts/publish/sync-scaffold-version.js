// node scripts/publish/sync-scaffold-version.js
// node scripts/publish/sync-scaffold-version.js theme
const fs = require('fs-extra');
const path = require('path');

const nextJson = fs.readJSONSync(path.join(__dirname, '../../package.json'));
const nextVersion = nextJson.version;
const nextVersions = {
  ...nextJson.dependencies,
  ...nextJson.devDependencies,
};
const name = (process.argv.length >= 2 ? process.argv[2] : '') || 'ng-alain';
const packagePath = path.resolve(__dirname, `../../../${name}/package.json`);

const json = fs.readJSONSync(packagePath);
// Update third party
['dependencies', 'devDependencies'].forEach(type => {
  Object.keys(json[type])
    .filter(key => !!nextVersions[key])
    .forEach(key => {
      json[type][key] = nextVersions[key];
    });
});
// Update ng-alain libs
if (name === 'ng-alain') {
  json.version = nextVersion;
}
['abc', 'acl', 'auth', 'chart', 'cache', 'mock', 'form', 'theme', 'util'].forEach(v => {
  json.dependencies[`@delon/${v}`] = `^${nextVersion}`;
});
json.devDependencies[`@delon/testing`] = `^${nextVersion}`;
json.devDependencies[`ng-alain`] = `^${nextVersion}`;

// Save
fs.writeJSONSync(packagePath, json, {
  spaces: 2,
});
