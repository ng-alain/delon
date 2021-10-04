export interface Schema {
  /**
   * 指定配置文件路径 (Specify the configuration file path)
   */
  config?: string;

  /**
   * Name for swagger project name, Default: `proxy`
   */
  name?: string;

  url?: string;

  input?: string;

  /**
   * Path to folder where will been located the created api module, Default: `/src/app/${name}`
   */
  output?: string;

  project?: string;
}
