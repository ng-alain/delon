/**
 * Convert Swagger API to sf Schema & st columns
 * 
 * - Generation list by swagger api:
 *   `ng g ng-alain:tpl swagger-list list -m=trade -t=trade --swaggerPath=/pet/findByStatus`
 * - Generation edit by swagger api:
 *   `ng g ng-alain:tpl swagger-edit edit -m=trade -t=trade --swaggerPath=/pet --swaggerMethod=post`
 */

const sts = require('ng-alain-sts/src/generator');
const cog = {
  swaggerUrl: 'https://petstore.swagger.io/v2/swagger.json',
  st: null,
  sf: null,
}

async function fix(options) {
  await genSTS(options);
}

// #region sts

async function genSTS(options) {
  try {
    switch (options.tplName) {
      case 'swagger-list':
        const st = await genSTBySTS(options);
        if (st == null) {
          console.warn(`St generated results are null`);
        }
        options.stUrl = options.extraArgs.swaggerPath;
        options.stColumns = JSON.stringify(st, null, 2);
        break;
      case 'swagger-edit':
        const sf = await genSFBySTS(options);
        if (sf == null) {
          console.warn(`Sf generated results are null`);
        }
        options.sfUrl = options.extraArgs.swaggerPath.replace(/(\{[^\}]+\})/g, '');
        options.sfSchema = JSON.stringify(sf, null, 2);
        break;
      default:
        throw new Error(`Not found [_cli-tpl/${options.tplName}] template directory`)
    }
  } catch (err) {
    throw new Error(`Generator st columns or sf schema error: ${err}`);
  }
}

function genSTSOptions(options) {
  const { swaggerPath, swaggerMethod } = options.extraArgs;
  const opt = {
    path: swaggerPath,
  };
  if (typeof swaggerMethod !== 'undefined') {
    opt.method = swaggerMethod;
  }
  return opt;
}

async function genSFBySTS(options) {
  const sfRes = await sts.generator(
    cog.swaggerUrl,
    // https://ng-alain.com/cli/generate/en#Custom-Data
    { ...genSTSOptions(options), type: 'sf' },
    cog.sf
  );
  return sfRes.value;
}

async function genSTBySTS(options) {
  const sfRes = await sts.generator(
    cog.swaggerUrl,
    // https://ng-alain.com/cli/generate/en#Custom-Data
    { ...genSTSOptions(options), type: 'st' },
    cog.st
  );
  return sfRes.value;
}

// #endregion

// NOTICE: Must be export `fix` function
module.exports = {
  fix
};
