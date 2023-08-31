/**
 * Options for configuring Chinese fonts.
 * 配置中文字体的选项。
 */
export interface ChineseFontsOptions {
  /**
   * Extend the theme object
   * 扩展主题对象
   * @default true
   */
  extendTheme?: boolean;

  /**
   * Key for the theme object
   * 主题对象的键
   *
   * @default 'fontFamily'
   */
  themeKey?: string;

  /**
   * Extend fonts
   * 扩展字体
   */
  fonts?: Record<string, string | string[]>;

  /**
   * The type of Chinese: "simplified" or "traditional".
   * 中文的类型: "simplified"（简体）或 "traditional"（繁体）。
   */
  chineseType?: ChineseType;

  /**
   * Fallback font for Chinese characters.
   * 备选字体。
   */
  fallbackFont?: string[] | null;

  /**
   * Declare fonts for English text.
   * 声明英文文本的字体。
   */
  declareEnglishFont?: string[];
}

/**
 * Represents different font types that can be used, including various Chinese fonts and styles.
 * 表示可用的不同字体类型，包括各种中文字体和样式。
 */
export type FontType = "chinese" | "hei" | "kai" | "song" | "imitation-song" | "new-song" | "li";

/**
 * Represents different types of Chinese characters, such as simplified or traditional.
 * 表示不同类型的中文字符，例如简体或繁体。
 */
export type ChineseType = "simplified" | "traditional";
