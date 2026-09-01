import { Tree } from '@angular-devkit/schematics';
import { parse, modify, applyEdits, JSONPath, ModificationOptions } from 'jsonc-parser';

export function readJSON<T = any>(tree: Tree, jsonFile: string, type?: string): T {
  if (!tree.exists(jsonFile)) return null as T;

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
  if (!tree.exists(jsonPath)) return;
  const sourceText = tree.read(jsonPath)!.toString('utf-8');
  const edits = (Array.isArray(modifies) ? modifies : [modifies]).flatMap(item =>
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
  );
  // `applyEdits` sorts all edits by offset and applies them back-to-front,
  // so multiple non-overlapping edits are applied in a single pass.
  tree.overwrite(jsonPath, applyEdits(sourceText, edits));
}
