import { Tree } from '@angular-devkit/schematics';
import { parse } from 'jsonc-parser';

export function readJSON(tree: Tree, jsonFile: string, type?: string): any {
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
      `Can't parse json file (${jsonFile}), pls check for comments or trailing commas, or validate json via https://jsonlint.com/`,
    );
    throw ex;
  }
}

export function writeJSON(tree: Tree, jsonFile: string, json: any): void {
  tree.overwrite(jsonFile, JSON.stringify(json, null, 2));
}
