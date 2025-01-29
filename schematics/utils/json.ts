import { Tree } from '@angular-devkit/schematics';
import { parse, modify, applyEdits, JSONPath, ModificationOptions } from 'jsonc-parser';

export function readJSON<T = any>(tree: Tree, jsonFile: string, type?: string): T {
  if (!tree.exists(jsonFile)) return null;

  const sourceText = tree.read(jsonFile)!.toString('utf-8');
  try {
    const json = parse(sourceText);
    if (type && !json[type]) {
      json[type] = {};
    }
    return json;
  } catch (ex) {
    console.log(
      `Can't parse json file (${jsonFile}), pls check for comments or trailing commas, or validate json via https://jsonlint.com/`
    );
    throw ex;
  }
}

export function writeJSON(tree: Tree, jsonFile: string, json: any): void {
  tree.overwrite(jsonFile, JSON.stringify(json, null, 2));
}

export interface ModifyJSONParam {
  path: JSONPath;
  value: any;
}

export function modifyJSON(
  tree: Tree,
  jsonPath: string,
  modifies: ModifyJSONParam | ModifyJSONParam[],
  options?: ModificationOptions
): void {
  if (!tree.exists(jsonPath)) return null;
  let sourceText = tree.read(jsonPath)!.toString('utf-8');
  (Array.isArray(modifies) ? modifies : [modifies])
    .map(item =>
      modify(
        sourceText,
        item.path,
        item.value,
        options ?? {
          formattingOptions: {
            insertSpaces: true,
            tabSize: 2,
            eol: '\n',
            keepLines: false
          }
        }
      )
    )
    .forEach(edit => {
      sourceText = applyEdits(sourceText, edit);
    });
  tree.overwrite(jsonPath, sourceText);
}
