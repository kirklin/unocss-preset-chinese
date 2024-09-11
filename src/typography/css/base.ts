import { getNonCjkBlockCss } from "./nonCjkBlock";
import { getVariables } from "./variables";

export function generateBaseCss(selectorName: string) {
  return `
  
    ${getNonCjkBlockCss(`${selectorName} p`, {
        "text-align": "start",
      })}
    ${getNonCjkBlockCss(selectorName, {
        "letter-spacing": getVariables.letterSpacingNormal,
      })}
`;
}
