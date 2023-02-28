import { presetAttributify, presetUno, transformerDirectives } from "unocss";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";

import presetChinese from "unocss-preset-chinese";

export default defineConfig({
  plugins: [
    UnoCSS({
      presets: [
        presetUno(),
        presetAttributify(),
        presetChinese(),
      ],
      transformers: [
        transformerDirectives(),
      ],
    }),
  ],
});
