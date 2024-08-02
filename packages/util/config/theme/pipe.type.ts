export interface AlainThemePipeConfig {
  dateFormat?: string;
  custom?: (value: Date | string | number, formatString?: string | null) => string;
}
