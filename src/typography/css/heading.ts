import { getNonCjkBlockCss } from "./nonCjkBlock";
import { getVariables } from "./variables";

export function generateHeadingCss(selectorName: string) {
  return `
  
    ${getNonCjkBlockCss(`${selectorName} h1, h2, h3`, {
        "letter-spacing": "0",
      })}
    ${getNonCjkBlockCss(selectorName, {
        "letter-spacing": getVariables.letterSpacingNormal,
      })}
`;
}
