import { defineConfig, presetAttributify, presetUno, transformerDirectives } from "unocss";

import { presetChinese } from "unocss-preset-chinese";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetChinese({
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],
});
