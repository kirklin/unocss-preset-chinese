import type { Preset } from "unocss";
import { toArray } from "./utils";
import { fontType } from "./constants";
import type { ChineseFontsOptions, FontType } from "./types";
import { defaultChineseFonts, generateFontFaceRule, generateFontList } from "./core";

export * from "./types";

export * from "./typography/index";

const presetChinese = (options: ChineseFontsOptions = {}): Preset => {
  // 解构参数并提供默认值
  const {
    extendTheme = true,
    themeKey = "fontFamily",
    chineseType = "simplified",
    fallbackFont = ["sans-serif"],
    declareEnglishFont = ["Arial"],
  } = options;

  // 合并字体选项
  const fonts = {
    ...fontType.reduce((fonts, type) => {
      fonts[type] = generateFontList(chineseType, type, fallbackFont, declareEnglishFont);
      return fonts;
    }, {} as Record<FontType, string[]>),
    ...options?.fonts,
  };

  // 转换字体选项为字体对象
  const fontObject = Object.fromEntries(
    Object.entries(fonts || {})
      .map(([name, meta]) => [name, toArray(meta).map(m => m)]),
  );

  // 构造预设对象
  const preset: Preset<any> = {
    name: "unocss-preset-chinese",
  };

  // 如果需要扩展主题
  if (extendTheme) {
    preset.extendTheme = (theme) => {
      // 如果主题中没有字体属性，则添加一个空对象
      if (!theme[themeKey]) {
        theme[themeKey] = {};
      }

      // 将字体对象转换为字体字符串，并添加到主题中
      for (const [name, fonts] of Object.entries(fontObject)) {
        const fontString = fonts.join(",");
        if (typeof theme[themeKey][name] === "string") {
          // 如果已有字体属性值，则在其前面添加新的字体字符串
          theme[themeKey][name] = `${fontString},${theme[themeKey][name]}`;
        } else {
          theme[themeKey][name] = fontString;
        }
      }
    };
  }

  const fontFacePreflights = Object.keys(defaultChineseFonts).map(fontType => ({
    getCSS: () => generateFontFaceRule(<FontType>fontType, declareEnglishFont),
  }));

  preset.preflights = fontFacePreflights;

  return preset;
};

export default presetChinese;
