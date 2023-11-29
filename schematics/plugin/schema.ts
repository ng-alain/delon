export interface Schema {
  name: string;
  type: 'add' | 'remove';
  project?: string;
  defaultLanguage?: string;
}
