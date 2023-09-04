import { presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from "unocss";
import { defineConfig } from "unocss/vite";
import presetEase from "unocss-preset-ease";
import presetChinese from "../src/index";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetChinese({
      chineseType: "simplified",
    }),
    presetEase(),
    presetIcons({
      scale: 1.5,
      warn: true,
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
});
