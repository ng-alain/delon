import { colors } from '@angular/cli/utilities/color';

import { normalize } from '@angular-devkit/core';
import { ProjectDefinition } from '@angular-devkit/core/src/workspace';
import { Rule, SchematicsException, Tree, chain, SchematicContext } from '@angular-devkit/schematics';
import { readFileSync, rmdirSync, mkdirSync, existsSync } from 'fs';
import got from 'got';

import { STAConfig } from './types';

export class STAClient {
  constructor(private cog: STAConfig, private project: ProjectDefinition) {}

  private async getSwagggerByUrl(url: string): Promise<string> {
    let body = '';
    try {
      ({ body } = await got(url, {
        responseType: 'json',
        https: { rejectUnauthorized: false }
      }));
    } catch ({ response }) {
      if (!response?.body || response.statusCode >= 400)
        throw new SchematicsException(`Error while getting swagger by URL ${url}`);

      body = response.body;
    }

    return body;
  }

  private async getSwaggerFile(): Promise<unknown> {
    const { url, filePath } = this.cog;
    const body = existsSync(filePath)
      ? readFileSync(filePath, { encoding: 'UTF-8' })
      : await this.getSwagggerByUrl(url);

    if (typeof body === 'string') {
      try {
        return JSON.parse(body);
      } catch (ex) {
        throw new SchematicsException(`Unable to convert JSON, body: ${body}`);
      }
    }
    return body;
  }

  private async createGenerator(): Promise<Rule> {
    const spec = await this.getSwaggerFile();
    return chain([]);
  }

  private finished(): Rule {
    return (_: Tree, context: SchematicContext) => {
      context.logger.info(colors.green(`✓  Finished, refer to: https://ng-alain.com/cli/sta`));
    };
  }

  exec(): Rule {
    return chain([this.createGenerator, this.finished]);
  }
}
