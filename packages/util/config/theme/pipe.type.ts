export interface AlainThemePipeConfig {
  dateFormat?: string;
  dateFormatCustom?: AlainThemePipeDateFormatCustom;
}

export type AlainThemePipeDateFormatCustom = (
  value: Date | string | number,
  formatString?: string | null,
  options?: { locale?: Locale }
) => string;
