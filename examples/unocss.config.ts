import { presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from "unocss";
import { defineConfig } from "unocss/vite";
import presetEase from "unocss-preset-ease";
import presetChinese, { chineseTypography } from "../src/index";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    chineseTypography(),
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
