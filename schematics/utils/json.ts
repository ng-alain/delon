import { Tree } from '@angular-devkit/schematics';
import { parse } from 'jsonc-parser';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function writeJSON(tree: Tree, jsonFile: string, json: any): void {
  tree.overwrite(jsonFile, JSON.stringify(json, null, 2));
}
