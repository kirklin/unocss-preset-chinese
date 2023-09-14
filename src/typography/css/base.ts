import { getNonCjkBlockCss } from "./nonCjkBlock";
import { getVariables } from "./variables";

export const generateBaseCss = (selectorName: string) => {
  return `
  
    ${getNonCjkBlockCss(`${selectorName} p`, {
        "text-align": "start",
    })}
    ${getNonCjkBlockCss(selectorName, {
        "letter-spacing": getVariables.letterSpacingNormal,
    })}
`;
};
