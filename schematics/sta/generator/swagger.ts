import { SchematicsException } from '@angular-devkit/schematics';

import { OpenAPI, OpenAPI2, OpenAPI3 } from './swagger-types';

const converter = require('swagger2openapi');

export function convertSwagger(schema: unknown): Promise<OpenAPI> {
  return new Promise(resolve => {
    converter.convertObj(
      schema,
      {
        warnOnly: true,
        refSiblings: 'preserve',
        rbname: 'requestBodyName'
      },
      (err?: { options: { openapi: unknown } }, options?: { openapi: unknown }) => {
        const result = options?.openapi || err?.options.openapi;
        if (!result && err) {
          throw new SchematicsException(`Unable to parse Swagger as OpenApi`);
        }
        resolve(fixSpec(result as OpenAPI));
      }
    );
  });
}

export function swaggerVersion(spec: OpenAPI2 | OpenAPI3): 2 | 3 {
  // OpenAPI 3
  if ('openapi' in spec) {
    // OpenAPI version requires semver, therefore will always be string
    if (parseInt(spec.openapi, 10) === 3) {
      return 3;
    }
  }

  // OpenAPI 2
  if ('swagger' in spec) {
    // note: swagger 2.0 may be parsed as a number
    if (typeof spec.swagger === 'number' && Math.round(spec.swagger as number) === 2) {
      return 2;
    }
    if (parseInt(spec.swagger, 10) === 2) {
      return 2;
    }
  }

  throw new SchematicsException(
    `Version missing from schema; specify whether this is OpenAPI v3 or v2 https://swagger.io/specification`
  );
}

function fixSpec(spec: OpenAPI): OpenAPI {
  spec.version = swaggerVersion(spec);
  if (spec.version <= 2) {
    throw new SchematicsException(`Only supports Swagger v3 version`);
  }
  return spec;
}
