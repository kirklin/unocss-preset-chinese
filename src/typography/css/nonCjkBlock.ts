import { isObject, serializeCSS } from "../../utils";

export const getNonCjkBlockCss = (selectorName: string, css: Record<string, string> | string) => {
  return `.${selectorName} em:not(:lang(zh)):not(:lang(ja)):not(:lang(kr)), .${selectorName} em:not(:lang(zh)) { ${isObject(css) ? serializeCSS(css) : css} }`;
};
