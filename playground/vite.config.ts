import { presetAttributify, presetUno, transformerDirectives } from "unocss";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";

import presetChinese from "../src/index";

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
