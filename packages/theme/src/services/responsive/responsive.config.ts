export interface ResponsiveConfig {
  rules: { [key: number]: ResponsiveConfigRule };
}

export interface ResponsiveConfigRule {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}
