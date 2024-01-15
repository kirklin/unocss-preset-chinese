import type { CSSObject, Preset } from "unocss";
import type { Theme } from "@unocss/preset-mini";
import { toEscapedSelector } from "@unocss/core";
import { generateBaseCss } from "./css/base";
import { generateHeadingCss } from "./css/heading";
import { generateOtherCss } from "./css/other";
import { getVariables } from "./css/variables";
import { getPreflights } from "./preflights";
import { generateAncientCss } from "./css/ancient";
import type { TypographyCompatibilityOptions } from "./types/compatibilityOptions";
import { generateDefaultVariables } from "./preflights/variables";
import { generateAnnotationCss } from "./css/annotation";

/**
 * @public
 */
export interface TypographyOptions {
  /**
   * The selector name to use the typographic utilities.
   * To undo the styles to the elements, use it like
   * `not-${selectorName}` which is by default `not-chinese`.
   *
   * Note: `not` utility is only available in class mode.
   *
   * @defaultValue `chinese`
   */
  selectorName?: string;

  /**
   * Extend or override CSS selectors with CSS declaration block.
   *
   * @defaultValue undefined
   */
  cssExtend?: Record<string, CSSObject>;

  /**
   * Compatibility option. Notice that it will affect some features.
   * For more instructions, see
   * [README](https://github.com/unocss/unocss/tree/main/packages/preset-typography)
   *
   * @defaultValue undefined
   */
  compatibility?: TypographyCompatibilityOptions;
}

/**
 * UnoCSS Preset for Chinese Typography
 * @returns typography preset
 * @public
 */
export function chineseTypography(options?: TypographyOptions): Preset<Theme> {
  const escapedSelectors = new Set<string>();
  const selectorName = options?.selectorName || "chinese";
  const selectorNameRE = new RegExp(`^${selectorName}$`);
  const colorsRE = new RegExp(`^${selectorName}-([-\\w]+)$`);
  const invertRE = new RegExp(`^${selectorName}-invert$`);
  const columnRE = new RegExp(`^${selectorName}--columns-(\\d+)$`);
  const columnPRE = new RegExp(`^${selectorName}--columns-(\\d+) p$`);
  const columnCommaRE = new RegExp(`^${selectorName}--columns-(\\d+) comma$`);
  const columnWidthRE = new RegExp(`^${selectorName}--columns-width-(\\d+)$`);
  const verticalRE = new RegExp(`^${selectorName}--vertical$`);
  const verticalTitleRE = new RegExp(`^${selectorName}--vertical h-(\\d+)$`);
  const cssExtend = options?.cssExtend;
  const compatibility = options?.compatibility;
  return {
    name: "unocss-preset-chinese-typography",
    enforce: "post",
    layers: { typography: -20 },
    rules: [
      [
        selectorNameRE,
        (_, { rawSelector, theme }) => {
          escapedSelectors.add(toEscapedSelector(rawSelector));
          return {
            // 中文每行展示文字（CPL）建议在 30~50 之间，默认 42
            "max-width": getVariables.lineLength,

            // 默认字体大小为 16px，行高 1.5
            "font-size": getVariables.fontSizeNormal,
            "font-weight": getVariables.fontWeightNormal,
            "-webkit-font-smoothing": "subpixel-antialiased",
            "line-height": getVariables.lineHeightNormal,

            // 针对混合英文段落，采取按词折行，长单词通过连词符段行
            // https://justmarkup.com/articles/2015-07-31-dealing-with-long-words-in-css/
            "overflow-wrap": "break-word",
            "word-wrap": "break-word",
            "hyphens": "auto",

            ...generateDefaultVariables(selectorName, theme),
          };
        },
        { layer: "typography" },
      ],
      [
        colorsRE,
        ([, color], { theme }) => {
          const baseColor = theme.colors?.[color] as Record<string, string> | string;
          if (baseColor == null) {
            return;
          }
          const colorObject = typeof baseColor === "object" ? baseColor : {};
          return {
            "--un-chinese-typography-body": colorObject[700] ?? baseColor,
            "--un-chinese-typography-headings": colorObject[900] ?? baseColor,
            "--un-chinese-typography-links": colorObject[900] ?? baseColor,
            "--un-chinese-typography-lists": colorObject[400] ?? baseColor,
            "--un-chinese-typography-hr": colorObject[200] ?? baseColor,
            "--un-chinese-typography-captions": colorObject[500] ?? baseColor,
            "--un-chinese-typography-code": colorObject[900] ?? baseColor,
            "--un-chinese-typography-borders": colorObject[200] ?? baseColor,
            "--un-chinese-typography-bg-soft": colorObject[100] ?? baseColor,

            // invert colors (dark mode)
            "--un-chinese-typography-invert-body": colorObject[200] ?? baseColor,
            "--un-chinese-typography-invert-headings": colorObject[100] ?? baseColor,
            "--un-chinese-typography-invert-links": colorObject[100] ?? baseColor,
            "--un-chinese-typography-invert-lists": colorObject[500] ?? baseColor,
            "--un-chinese-typography-invert-hr": colorObject[700] ?? baseColor,
            "--un-chinese-typography-invert-captions": colorObject[400] ?? baseColor,
            "--un-chinese-typography-invert-code": colorObject[100] ?? baseColor,
            "--un-chinese-typography-invert-borders": colorObject[700] ?? baseColor,
            "--un-chinese-typography-invert-bg-soft": colorObject[800] ?? baseColor,

            "--un-chinese-typography-font-mono": theme.fontFamily?.mono,
          };
        },
        { layer: "typography" },
      ],
      [
        invertRE,
        () => {
          return {
            "--un-chinese-typography-body": "var(--un-chinese-typography-invert-body)",
            "--un-chinese-typography-headings": "var(--un-chinese-typography-invert-headings)",
            "--un-chinese-typography-links": "var(--un-chinese-typography-invert-links)",
            "--un-chinese-typography-lists": "var(--un-chinese-typography-invert-lists)",
            "--un-chinese-typography-hr": "var(--un-chinese-typography-invert-hr)",
            "--un-chinese-typography-captions": "var(--un-chinese-typography-invert-captions)",
            "--un-chinese-typography-code": "var(--un-chinese-typography-invert-code)",
            "--un-chinese-typography-borders": "var(--un-chinese-typography-invert-borders)",
            "--un-chinese-typography-bg-soft": "var(--un-chinese-typography-invert-bg-soft)",
          };
        },
        { layer: "typography" },
      ],
      [
        columnRE,
        ([, d]) => ({ "column-count": Number(d) }),
        { layer: "typography" },
      ],
      [
        columnCommaRE,
        () => ({ "max-width": "none", "column-gap": "2em" }),
        { layer: "typography" },
      ],
      [
        columnPRE,
        () => ({
          "margin-block-start": `calc(${getVariables.stdBlockUnit} * 0.5 * 0.5 )`,
          "margin-block-end": `calc(${getVariables.stdBlockUnit} * 0.5 )`,
          "text-indent": `calc(${getVariables.textIndentLength} * 0.5 * 0.5 )`,
        }),
        { layer: "typography" },
      ],
      [
        columnWidthRE,
        ([, d]) => ({ "column-width": `${Number(d)}em` }),
        { layer: "typography" },
      ],
      [
        verticalRE,
        () => {
          return {
            "max-width": "none",
            "max-height": "var(--un-chinese-typography-line-length)",
            "writing-mode": "vertical-rl",
            "letter-spacing": "0.125em",
          };
        },
        { layer: "typography" },
      ],
      [
        verticalTitleRE,
        () => ({ "text-align": "start" }),
        { layer: "typography" },
      ],

    ],
    preflights: [
      {
        layer: "typography",
        getCSS: () => {
          return generateBaseCss(selectorName);
        },
      },
      {
        layer: "typography",
        getCSS: () => {
          return generateHeadingCss(selectorName);
        },
      },
      {
        layer: "typography",
        getCSS: () => {
          return generateOtherCss(selectorName);
        },
      },
      {
        layer: "typography",
        getCSS: () => {
          return generateAncientCss(selectorName);
        },
      },
      {
        layer: "typography",
        getCSS: () => {
          return generateAnnotationCss(selectorName);
        },
      },
      {
        layer: "typography",
        getCSS: () => {
          if (escapedSelectors.size > 0) {
            return getPreflights({ escapedSelectors, selectorName, cssExtend, compatibility });
          }
        },
      },
    ],
  };
}
