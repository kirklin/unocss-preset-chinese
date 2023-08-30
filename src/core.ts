import { fontType } from "./constants";
import type { ChineseType, FontType } from "./types";

export const macosSimplifiedChinese = ["-apple-system", "BlinkMacSystemFont", "PingFang SC", "Hiragino Sans GB", "Heiti SC"];
export const macosTraditionalChinese = ["-apple-system", "BlinkMacSystemFont", "PingFang SC"];
export const windowsSimplifiedChinese = ["Microsoft YaHei"];
export const windowsTraditionalChinese = ["Microsoft Jhenghei"];
export const linuxSimplifiedChinese = ["system-ui", "Ubuntu", "Droid Sans", "Source Han Sans SC", "Source Han Sans CN", "Source Han Sans"];
export const linuxTraditionalChinese = ["system-ui", "Ubuntu", "Droid Sans", "Source Han Sans TC", "Source Han Sans TW", "Source Han Sans"];

/**
 * Generates a list of fonts for the specified character type and font type, with optional fallback font.
 * 根据指定的字符类型和字体类型生成字体列表，可以选择性地指定回退字体。
 *
 * @param chineseType - The type of chinese: "simplified" or "traditional".
 *                       要考虑的汉字类型："simplified"（简体）或 "traditional"（繁体）。
 * @param fontType - The type of font to generate the list for: "chinese", "helvetica", "italics", "song", "imitation-song", "new-song", or "li".
 *                  要生成列表的字体类型："chinese"、"helvetica"、"italics"、"song"、"imitation-song"、"new-song" 或 "li"。
 * @param fallbackFont - The fallback font to use if the desired font type is not available. Pass `null` for no fallback.
 *                      如果所需字体类型不可用，则使用的回退字体。传递 `null` 表示没有回退字体。
 * @param declareEnglishFont - Whether to declare an English font.
 *                             是否声明英文字体。
 *
 * @returns {string[]} An array of font names based on the specified criteria.
 *                    基于指定条件的字体名称数组。
 */
export function generateFontList(
  chineseType: ChineseType,
  fontType: FontType,
  fallbackFont: string[] | null = ["sans-serif"],
  declareEnglishFont: string[] = ["Arial"],
): string[] {
  const fontList: string[] = [];

  // Add English font declaration if required
  if (declareEnglishFont.length > 0) {
    fontList.push(generatePunctuationFontName(fontType));
    fontList.push(...declareEnglishFont);
  }

  // Determine the appropriate font list based on the character type
  if (chineseType === "simplified") {
    const chineseFonts = [macosSimplifiedChinese, windowsSimplifiedChinese, linuxSimplifiedChinese].flat();
    // Select the font list based on the font type
    switch (fontType) {
      case "chinese":
        fontList.push(...chineseFonts);
        break;
        // 黑体
      case "helvetica":
        fontList.push("PingFang SC", "Heiti SC", "Microsoft YaHei", "Source Han Sans SC", "Source Han Sans CN", "Noto Sans CJK SC",
          "WenQuanYi Micro Hei", "WenQuanYi Zen Hei", "SimHei", "WenQuanYi Zen Hei Sharp");
        break;
        // 楷体
      case "italics":
        fontList.push("Kaiti SC", "STKaiti",
          "AR PL UKai CN", "AR PL UKai HK", "AR PL UKai TW", "AR PL UKai TW MBE", "AR PL KaitiM GB",
          "KaiTi", "KaiTi_GB2312", "DFKai-SB");
        fontList.push(...chineseFonts);
        break;
        // 宋体
      case "song":
        fontList.push("Songti SC", "Noto Serif CJK SC",
          "Source Han Serif SC",
          "Source Han Serif CN",
          "STSong",
          "AR PL New Sung",
          "AR PL SungtiL GB",
          "NSimSun",
          "SimSun",
          "WenQuanYi Bitmap Song",
          "AR PL UMing CN",
          "PMingLiU",
          "MingLiU",
        );
        fontList.push(...chineseFonts);
        break;
        // 仿宋体
      case "imitation-song":
        fontList.push("STFangsong", "FangSong", "FangSong_GB2312");
        fontList.push(...chineseFonts);
        break;
        // 新宋体
      case "new-song":
        fontList.push("SimSun-ExtB", "NSimSun");
        fontList.push(...chineseFonts);
        break;
        // 隶书
      case "li":
        fontList.push("STLiti", "LiSu", "Hiragino Mincho ProN W6", "Hiragino Mincho ProN W3");
        fontList.push(...chineseFonts);
        break;
      default:
        fontList.push(...chineseFonts);
    }
  } else {
    const chineseFonts = [macosTraditionalChinese, windowsTraditionalChinese, linuxTraditionalChinese].flat();
    // Select the font list based on the font type
    switch (fontType) {
      case "chinese":
        fontList.push(...chineseFonts);
        break;
        // 黑体
      case "helvetica":
        fontList.push("PingFang SC", "Heiti SC", "Microsoft YaHei", "Source Han Sans SC", "Source Han Sans CN", "Noto Sans CJK SC",
          "WenQuanYi Micro Hei", "WenQuanYi Zen Hei", "SimHei", "WenQuanYi Zen Hei Sharp");
        break;
        // 楷体
      case "italics":
        fontList.push("Kaiti SC", "STKaiti",
          "AR PL UKai CN", "AR PL UKai HK", "AR PL UKai TW", "AR PL UKai TW MBE", "AR PL KaitiM GB",
          "KaiTi", "KaiTi_GB2312", "DFKai-SB", "TW-Kai");
        fontList.push(...chineseFonts);
        break;
        // 宋体
      case "song":
        fontList.push("Songti SC", "Noto Serif CJK SC",
          "Source Han Serif SC",
          "Source Han Serif CN",
          "STSong",
          "AR PL New Sung",
          "AR PL SungtiL GB",
          "NSimSun",
          "SimSun",
          "TW-Sung",
          "WenQuanYi Bitmap Song",
          "AR PL UMing CN",
          "AR PL UMing HK",
          "AR PL UMing TW",
          "AR PL UMing TW MBE",
          "PMingLiU",
          "MingLiU",
        );
        fontList.push(...chineseFonts);
        break;
        // 仿宋体
      case "imitation-song":
        fontList.push("STFangsong", "FangSong", "FangSong_GB2312");
        fontList.push(...chineseFonts);
        break;
        // 新宋体
      case "new-song":
        fontList.push("SimSun-ExtB", "NSimSun");
        fontList.push(...chineseFonts);
        break;
        // 隶书
      case "li":
        fontList.push("LiSu", "STLiti");
        fontList.push(...chineseFonts);
        break;
      default:
        fontList.push(...chineseFonts);
    }
  }

  // Add fallback font if specified
  if (fallbackFont !== null) {
    fontList.push(...fallbackFont);
  }

  return fontList;
}

export const defaultChineseFonts: Record<FontType, string[]> = fontType.reduce((fonts, type) => {
  fonts[type] = generateFontList("simplified", type);
  return fonts;
}, {} as Record<FontType, string[]>);

/**
 * Generates a CSS @font-face rule for the specified font type.
 * 根据指定的字体类型生成 CSS @font-face 规则。
 *
 * @param fontType - The type of font to generate the @font-face rule for.
 *                  要生成 @font-face 规则的字体类型。
 * @param {string[]} filterFontList - The list of fonts to be filtered out from the default font list.
 *                                  要从默认字体列表中过滤掉的字体列表。
 * @returns {string} The generated @font-face CSS rule as a string.
 *                   生成的 @font-face CSS 规则作为字符串。
 */
export function generateFontFaceRule(fontType: FontType, filterFontList: string[]): string {
  const fontList = defaultChineseFonts[fontType];
  if (!fontList) {
    throw new Error(`Font type "${fontType}" is not valid.`);
  }

  const fontName = generatePunctuationFontName(fontType);
  // Filtering out specified fonts
  const filteredFontList = fontList.filter(font => !filterFontList.includes(font));
  const fontSrc = filteredFontList.map(font => `local('${font}')`).join(", ");

  return `
@font-face {
  font-family: '${fontName}';
  src: ${fontSrc};
  unicode-range: U+201C, U+201D, U+2018, U+2019, U+2E3A, U+2014, U+2013, U+2026, U+00B7, U+007E, U+002F; 
}
`;
}
export function generatePunctuationFontName(fontType: FontType): string {
  return `Punctuation ${fontType.charAt(0).toUpperCase() + fontType.slice(1)}`;
}
