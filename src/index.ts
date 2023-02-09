import { toArray } from "@unocss/core";
import type { Preset } from "@unocss/core";
import { defaultChineseFonts } from "./defaultChineseFonts";
import type { ChineseFontsOptions } from "./types";
const presetChinese = (options: ChineseFontsOptions = {}): Preset<{}> => {
  const {
    extendTheme = true,
    themeKey = "fontFamily",
  } = options;
  options.fonts = { ...defaultChineseFonts, ...options?.fonts };
  const fontObject = Object.fromEntries(
    Object.entries(options.fonts || {})
      .map(([name, meta]) => [name, toArray(meta).map(m => m)]),
  );
  const preset: Preset<{} | any> = {
    name: "unocss-preset-chinese",
  };
  if (extendTheme) {
    preset.extendTheme = (theme) => {
      if (!theme[themeKey]) {
        theme[themeKey] = {};
      }
      const obj = Object.fromEntries(
        Object.entries(fontObject)
          .map(([name, fonts]) => [name, fonts.map(f => f)]),
      );
      for (const key of Object.keys(obj)) {
        if (typeof theme[themeKey][key] === "string") {
          theme[themeKey][key] = obj[key].map(i => `${i},`).join("") + theme[themeKey][key];
        } else {
          theme[themeKey][key] = obj[key].join(",");
        }
      }
    };
  }
  return preset;
};

export default presetChinese;
