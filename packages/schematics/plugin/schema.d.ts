export interface Schema {
  name: string;
  type: 'add' | 'remove';
  project?: string;
  packageManager?: 'npm' | 'yarn';
  defaultLanguage?: string;
}
