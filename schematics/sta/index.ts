/* eslint-disable @typescript-eslint/no-explicit-any */

import { normalize } from '@angular-devkit/core';
import { ProjectDefinition } from '@angular-devkit/core/src/workspace';
import { Rule, SchematicsException, Tree, chain, SchematicContext } from '@angular-devkit/schematics';
import * as colors from 'ansi-colors';
import { rmSync, mkdirSync, existsSync, readFileSync } from 'fs';
import { parse } from 'jsonc-parser';
import { resolve, join } from 'path';
import { generateApi, GenerateApiOutput, GenerateApiParams } from 'swagger-typescript-api';

import { Schema } from './schema';
import { STAConfig } from './types';
import { modifyJSON } from '../utils/json';
import { getProject, isMulitProject } from '../utils/workspace';

let project: ProjectDefinition;
let projectName: string;

const filePrefix = `/* eslint-disable */
/*
 * Automatically generated by 'ng g ng-alain:sta'
 * @see https://ng-alain.com/cli/sta
 *
 * Inspired by: https://github.com/acacode/swagger-typescript-api
 */

`;

function addPathInTsConfig(name: string): Rule {
  return (tree: Tree) => {
    const mulitProject = isMulitProject(tree);
    const commandPrefix = mulitProject ? `projects/${projectName}/` : '';
    const tsConfigPath = 'tsconfig.json';
    const basePath = ['compilerOptions', 'paths'];
    modifyJSON(tree, tsConfigPath, {
      path: [...basePath, `@${name}`],
      value: [`${commandPrefix}src/app/_${name}/index`]
    });
    modifyJSON(tree, tsConfigPath, {
      path: [...basePath, `@${name}/*`],
      value: [`${commandPrefix}src/app/_${name}/*`]
    });
    return tree;
  };
}

function cleanOutput(p: string): void {
  try {
    rmSync(p, { recursive: true });
    mkdirSync(p);
  } catch (e) {}
}

function tagsMapping(res: GenerateApiOutput, config: STAConfig): void {
  if (config.tagsMapping != null && Object.keys(config.tagsMapping).length <= 0) return;

  res.configuration.routes.combined?.forEach(v => {
    const newModuleName = config.tagsMapping[v.moduleName];
    if (newModuleName != null) {
      v.moduleName = newModuleName;
      v.routes.forEach(route => {
        route.raw.moduleName = newModuleName;
      });
    }
  });
}

function fix(output: string, res: GenerateApiOutput, tree: Tree, context: SchematicContext, config: STAConfig): void {
  tagsMapping(res, config);
  const indexList = [`models`, `_base.service`];
  const basePath = normalize(join(project.root, output.replace(process.cwd(), '')));
  try {
    // definitions
    const dataTpl = res.getTemplate({ name: 'dataContracts', fileName: 'data-contracts.eta' });
    const dataContent = res.renderTemplate(dataTpl, { ...res.configuration });
    tree.create(`${basePath}/models.ts`, filePrefix + res.formatTSContent(dataContent));

    // Base Service
    const baseServiceTpl = res.getTemplate({ name: 'baseService', fileName: 'base.service.eta' });
    const baseServiceContent = res.renderTemplate(baseServiceTpl, { ...res.configuration });
    tree.create(`${basePath}/_base.service.ts`, filePrefix + res.formatTSContent(baseServiceContent));

    // Tag Service
    const dtoTypeTpl = res.getTemplate({ name: 'dto-type', fileName: 'dto-type.eta' });
    const serviceTpl = res.getTemplate({ name: 'service', fileName: 'service.eta' });
    res.configuration.routes.combined.forEach(route => {
      const routeIndex: string[] = [];
      // dto
      const dtoContent = res.formatTSContent(
        res.renderTemplate(dtoTypeTpl, {
          ...res.configuration,
          route
        })
      );
      if (dtoContent.trim().length > 10) {
        tree.create(`${basePath}/${route.moduleName}/dtos.ts`, filePrefix + dtoContent);
        routeIndex.push(`dtos`);
      }

      // service
      const serviceContent = res.renderTemplate(serviceTpl, {
        ...res.configuration,
        route
      });
      tree.create(`${basePath}/${route.moduleName}/service.ts`, filePrefix + res.formatTSContent(serviceContent));
      routeIndex.push(`service`);

      // index.ts
      tree.create(
        `${basePath}/${route.moduleName}/index.ts`,
        filePrefix + routeIndex.map(name => `export * from './${name}';`).join('\n')
      );
      indexList.push(`${route.moduleName}/index`);
    });
    // Index
    tree.create(`${basePath}/index.ts`, filePrefix + indexList.map(name => `export * from './${name}';`).join('\n'));
  } catch (ex) {
    throw new SchematicsException(`Parse error: ${ex}`);
  }
}

function genProxy(config: STAConfig): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info(colors.blue(`- Name: ${config.name}`));
    const output = (config.output = resolve(process.cwd(), config.output ?? `./src/app/_${config.name}`));
    const templates = resolve(__dirname, './templates');
    if (config.url) {
      context.logger.info(colors.blue(`- Using url data: ${config.url}`));
    } else if (config.filePath) {
      context.logger.info(colors.blue(`- Using file data: ${config.filePath}`));
    }
    context.logger.info(colors.blue(`- Output: ${output}`));

    return new Promise<void>(resolve => {
      context.logger.info(colors.blue(`Start generating...`));
      const options = {
        name: `${config.name}.ts`,
        url: config.url,
        input: config.filePath,
        spec: config.spec,
        output,
        templates,
        toJS: false,
        modular: true,
        cleanOutput: true,
        generateUnionEnums: true,
        generateClient: true,
        extractRequestParams: false,
        generateResponses: false,
        generateRouteTypes: true,
        generateApi: true,
        silent: true,
        disableStrictSSL: true,
        moduleNameFirstTag: true,
        defaultResponseType: 'any',
        typePrefix: config.modelTypePrefix,
        hooks: {
          onInit: (c: { httpClientType: string }) => {
            c.httpClientType = config.httpClientType;
            return c;
          },
          onPrepareConfig: c => {
            if (!config.responseDataField) return c;

            const getDeepDataType = (ref: string): any => {
              let typeData = c.utils.getComponentByRef(ref)?.typeData as any;
              while (typeData != null && Array.isArray(typeData.allOf) && typeData.allOf.length > 0) {
                typeData = c.utils.getComponentByRef(typeData.allOf[0].$ref)?.typeData;
              }
              return typeData;
            };

            c.routes.combined?.forEach(moduleInfo => {
              moduleInfo.routes.forEach((routeInfo: any) => {
                if (!routeInfo.responseBodySchema) return;
                try {
                  const responseBodyContentFirstType = Object.keys(routeInfo.responseBodySchema?.content).pop();
                  if (!responseBodyContentFirstType) return;

                  const ref = routeInfo.responseBodySchema.content[responseBodyContentFirstType].schema.$ref;
                  const resDataType = getDeepDataType(ref);
                  if (!resDataType) return;
                  const fieldProperty = resDataType.properties?.[config.responseDataField];
                  if (!fieldProperty) return;
                  routeInfo.response.type = fieldProperty.$parsed.content ?? 'any';
                } catch (ex) {
                  throw new SchematicsException(`Parse data field error: ${ex}`);
                }
              });
            });
            return c;
          },
          onFormatTypeName: formattedModelName => {
            if (!config.modelTypePrefix) return formattedModelName;

            if (formattedModelName.startsWith(config.modelTypePrefix + config.modelTypePrefix)) {
              return formattedModelName.substring(config.modelTypePrefix.length);
            }
            return formattedModelName;
          }
        },
        ...(config.generateApiOptions as any)
      } as GenerateApiParams;
      generateApi(options)
        .then((res: GenerateApiOutput) => {
          cleanOutput(output);
          fix(output, res, tree, context, config);
          resolve();
        })
        .catch(ex => {
          throw new SchematicsException(`Generate error: ${ex}`);
        });
    });
  };
}

function finished(): Rule {
  return (_: Tree, context: SchematicContext) => {
    context.logger.info(colors.green(`✓  Finished, refer to: https://ng-alain.com/cli/sta`));
  };
}

function tryLoadConfig(context: SchematicContext, configPath?: string): STAConfig | null {
  if (!configPath || configPath.length <= 0) return null;

  try {
    const configFile = resolve(process.cwd(), configPath);
    context.logger.info(colors.blue(`- Use config file: ${configFile}`));
    if (existsSync(configFile)) {
      return parse(readFileSync(configFile).toString('utf8'));
    }
  } catch (err) {
    throw new SchematicsException(`Invalid config file ${err}`);
  }
}

export default function (options: Schema): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    const res = await getProject(tree, options.project);
    project = res.project;
    projectName = res.name;
    const config: STAConfig = {
      name: 'sta',
      ...options,
      ...tryLoadConfig(context, options.config)
    };
    if (typeof config.generateApiOptions === 'string') {
      try {
        config.generateApiOptions = JSON.parse(config.generateApiOptions);
      } catch (ex) {
        throw new SchematicsException(`Parse generateApiParams error: '${config.generateApiOptions}' => ${ex}`);
      }
    }

    return chain([addPathInTsConfig(config.name), genProxy(config), finished()]);
  };
}
