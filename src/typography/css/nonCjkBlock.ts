import { isObject, serializeCSS } from "../../utils";

export function getNonCjkBlockCss(selectorName: string, css: Record<string, string> | string) {
  return `.${selectorName} em:not(:lang(zh)):not(:lang(ja)):not(:lang(ko)), .${selectorName} em:not(:lang(zh)) { ${isObject(css) ? serializeCSS(css) : css} }`;
}
