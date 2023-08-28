import { defineConfig, presetUno } from "unocss";
import presetChinese from "../src/index";

export default defineConfig({
  presets: [
    presetUno(),
    presetChinese(),
  ],
});
