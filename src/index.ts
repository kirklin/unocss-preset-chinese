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

  return preset;
};

export default presetChinese;
