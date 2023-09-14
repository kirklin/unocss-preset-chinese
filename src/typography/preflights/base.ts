import { getVariables } from "../css/variables";

export const ChineseBase = {
  "blockquote": {
    "margin-block-start": `calc(${getVariables.stdBlockUnit} * 0.5)`,
    "margin-block-end": `${getVariables.stdBlockUnit}`,
    "margin-inline-start": `calc(${getVariables.stdInlineUnit} * 2)`,
    "margin-inline-end": `calc(${getVariables.stdInlineUnit} * 2)`,
    "padding-block-start": `calc(${getVariables.stdBlockUnit} * 0.5)`,
    "padding-block-end": `calc(${getVariables.stdBlockUnit} * 0.5)`,
    "padding-inline-start": getVariables.stdInlineUnit,
    "padding-inline-end": getVariables.stdInlineUnit,
    "background-color": "hsla(0, 0%, 0%, 0.054)",
  },

  "figure": {
    "display": "block",
    "text-align": "center",
  },
  "figure > img": {
    "display": "block",
    "margin-inline-start": "auto",
    "margin-inline-end": "auto",
  },

  "hr": {
    "width": "30%",
    "height": "1px",
    "margin-block-start": `calc(${getVariables.stdBlockUnit} * 2)`,
    "margin-block-end": `calc(${getVariables.stdBlockUnit} * 2 - 1px)`,
    "margin-inline-start": "auto",
    "margin-inline-end": "auto",
    "border": "0",
    "background-color": "hsl(0, 0%, 80%)",
  },

  "p": {
    "margin-block-start": `calc(${getVariables.stdBlockUnit} * 0.5)`,
    "margin-block-end": `${getVariables.stdBlockUnit}`,
    "text-align": "justify",
  },

  "p:not(:lang(zh)):not(:lang(ja)):not(:lang(kr))": {
    "text-align": "start",
  },

  "pre": {
    "margin-block-start": `calc(${getVariables.stdBlockUnit} * 0.5)`,
    "margin-block-end": `calc(${getVariables.stdBlockUnit} * 0.5)`,
    "margin-inline-start": "0",
    "margin-inline-end": "0",
    "padding-block-start": `calc(${getVariables.stdBlockUnit} * 0.5)`,
    "padding-block-end": `calc(${getVariables.stdBlockUnit} * 0.5)`,
    "padding-inline-start": getVariables.stdInlineUnit,
    "padding-inline-end": getVariables.stdInlineUnit,
    "overflow": "auto",
    "font-family": getVariables.fontFamilyMono,
    "white-space": "pre",
    "word-wrap": "normal",
    "border-radius": "4px",
    "background-color": "hsla(0, 0%, 0%, 0.054)",
  },

  "pre code": {
    "margin": "0",
    "padding": "0",
    "border": "0",
    "border-radius": "0",
    "background-color": "transparent",
    "color": "inherit",
  },

  // Non-CJK letter spacing
  "letter-spacing": getVariables.letterSpacingMedium,

  "a, abbr, code, chinese-spacing, [lang='en-US']": {
    "letter-spacing": "normal",
  },
};
