export interface PluginOptions {
  type: 'add' | 'remove';
  projectPrefix: string;
  sourceRoot: string;
  project?: string;
}
