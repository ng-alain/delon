export interface STAConfig {
  name?: string;

  url?: string;

  filePath?: string;

  output?: string;

  responseDataField?: string;

  /**
   * httpClient request type, Default: `delon`
   */
  httpClientType?: 'angular' | 'delon';

  /**
   * swagger-typescript-api [options](https://github.com/acacode/swagger-typescript-api#-usage)
   */
  generateApiOptions?: unknown;

  spec?: unknown;

  /**
   * Model name prefix
   */
  modelTypePrefix?: string;
}
