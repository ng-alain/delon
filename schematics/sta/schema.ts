export interface Schema {
  /**
   * 指定配置文件路径 (Specify the configuration file path)
   */
  config?: string;

  /**
   * Name for swagger project name, Default: `sta`
   */
  name?: string;

  url?: string;

  input?: string;

  /**
   * Path to folder where will been located the created api module, Default: `/src/app/${name}`
   */
  output?: string;

  /**
   * The real data field of Response
   */
  responseDataField?: string;

  /**
   * httpClient request type, Default: `delon`
   */
  httpClientType?: 'angular' | 'delon';

  /**
   * Model name prefix
   */
  modelTypePrefix?: string;

  generateApiOptions?: string;

  project?: string;
}
