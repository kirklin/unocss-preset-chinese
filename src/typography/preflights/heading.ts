import { getVariables } from "../css/variables";

export const ChineseHeading = {
  "h1, h2, h3, h4, h5, h6": {
    "position": "relative",

    // 顶边距默认为一行间距，且不因边距重叠原因减半
    // 底边距考虑到亲密性，默认为半行间距
    "margin": "0",
    "margin-block-start": "var(--un-chinese-typography-std-block-unit)",
    "margin-block-end": "calc(var(--un-chinese-typography-std-block-unit) * 0.5)",
    "font-weight": "var(--un-chinese-typography-font-weight-bold)",
    "font-size": "var(--un-chinese-typography-font-size-h6)",
    "line-height": "var(--un-chinese-typography-line-height-size-h6)",
  },
  "h1": {
    "margin-block-end": "var(--un-chinese-typography-std-block-unit)",
    "font-size": "var(--un-chinese-typography-font-size-h1)",
    "line-height": "var(--un-chinese-typography-line-height-size-h1)",
    "letter-spacing": "0.05em",
  },
  "h2": {
    "font-size": "var(--un-chinese-typography-font-size-h2)",
    "line-height": "var(--un-chinese-typography-line-height-size-h2)",
    "letter-spacing": "0.05em",
  },
  "h3": {
    "font-size": "var(--un-chinese-typography-font-size-h3)",
    "line-height": "var(--un-chinese-typography-line-height-size-h3)",
    "letter-spacing": "0.05em",
  },
  "h4": {
    "font-size": getVariables.fontSizeH4,
    "line-height": getVariables.lineHeightSizeH4,
    "letter-spacing": "0.05em",
  },
  "h5": {
    "font-size": getVariables.fontSizeH5,
    "line-height": getVariables.lineHeightSizeH5,
    "letter-spacing": "0.05em",
  },
  "h6": {
    "font-size": getVariables.fontSizeH6,
    "line-height": getVariables.lineHeightSizeH6,
    "letter-spacing": "0.05em",
  },

  "h1 + h2, h2 + h3, h3 + h4, h4 + h5, h5 + h6": {
    "margin-block-start": "calc(var(--un-chinese-typography-std-block-unit) * 0.5)",
  },
};
