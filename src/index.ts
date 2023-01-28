import type { Preset } from "unocss";

const defaultOption: Required<PresetChineseDefaultOption> = {
  clsPrefix: "",
};

export interface PresetChineseDefaultOption {
  /**
     * css variable prefix
     * @default ''
     */
  clsPrefix?: string;
}

const customRules = {
};

export function presetChinese(option?: PresetChineseDefaultOption): Preset {
  const config = {
    ...defaultOption,
    ...option,
  };
  return {
    name: "unocss-preset-chinese",
    shortcuts: [
    ],
    variants: [
    ],
    rules: [

    ],
  };
}
