export interface AlainThemeResponsiveConfig {
  rules: Record<
    number,
    {
      xs: number;
      sm?: number;
      md?: number;
      lg?: number;
      xl?: number;
      xxl?: number;
    }
  >;
}
