import { toArray } from "@unocss/core";
import type { Preset } from "unocss";
import { defaultChineseFonts } from "./defaultChineseFonts";
import type { ChineseFontsOptions } from "./types";

export * from "./types";

const presetChinese = (options: ChineseFontsOptions = {}): Preset => {
  // 解构参数并提供默认值
  const { extendTheme = true, themeKey = "fontFamily" } = options;

  // 合并字体选项
  const fonts = { ...defaultChineseFonts, ...options?.fonts };

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
  //  TODO: Dynamically calculates and sets the font styles for specific Chinese characters based on the selected theme's fonts.
  //  TODO: 根据所选主题的字体动态计算并设置特定中文字符的字体样式。
  preset.preflights = [
    {
      getCSS: () => `
      @font-face {
        font-family: 'Punctuation SC';
        src: local('PingFang SC'), local('Noto Sans SC'), local('Noto Sans CJK SC'), local('Heiti SC'), local('Microsoft Yahei');
        unicode-range: U+201C, U+201D, U+2018, U+2019, U+2E3A, U+2014, U+2013, U+2026, U+00B7, U+007E, U+002F; /* Unicode range for punctuation marks */
      }
      @font-face {
        font-family: 'Punctuation TC';
        src: local('PingFang TC'), local('Noto Sans TC'), local('Noto Sans CJK TC'), local('Heiti TC'), local('Microsoft JhengHei');
        unicode-range: U+201C, U+201D, U+2018, U+2019, U+2E3A, U+2014, U+2013, U+2026, U+00B7, U+007E, U+002F; /* Unicode range for punctuation marks */
      }
    `,
    },
  ];

  return preset;
};

export default presetChinese;
