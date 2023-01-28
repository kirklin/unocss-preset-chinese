export interface ChineseFontsOptions {
  /**
   * Extend the theme object
   * @default true
   */
  extendTheme?: boolean;

  /**
   * Key for the theme object
   *
   * @default 'fontFamily'
   */
  themeKey?: string;

  /**
   * extend fonts
   */
  fonts?: Record<string, string | string[]>;

}
