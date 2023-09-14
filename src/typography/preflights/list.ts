export const ChineseList = {
  "ul, ol, dl": {
    "margin-block-start": "calc(var(--un-chinese-typography-line-height-size-normal) * 0.5)",
    "margin-block-end": "var(--un-chinese-typography-line-height-size-normal)",
  },
  "ul, ol": {
    "padding-inline-start": "var(--un-chinese-typography-text-indent-size)",
    "ul, ol": {
      "margin-block-start": "0",
      "margin-block-end": "0",
    },
  },
  "ul": {
    "list-style-type": "disc",
  },
  "ol": {
    "list-style-type": "decimal",
  },
  "li": {
    "list-style-type": "unset",
  },
  "ul ul, ol ul": {
    "list-style-type": "circle",
  },
  "ul ul ul, ul ol ul, ol ul ul, ol ol ul": {
    "list-style-type": "square",
  },
};
