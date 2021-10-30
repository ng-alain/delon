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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  generateApiParams?: any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  spec?: any;
}
