import { getNonCjkBlockCss } from "./nonCjkBlock";
import { getVariables } from "./variables";

export const generateAnnotationCss = (selectorName: string) => {
  return `
     .${selectorName}--annotation p {
      margin-block-start: 0;
      margin-block-end: 0;
      line-height: 2.25;
      text-indent: ${getVariables.textIndentLength};
    }
    .${selectorName}--annotation em {
      -webkit-text-emphasis: filled circle;
      -webkit-text-emphasis-position: under;
      text-emphasis: filled circle;
      text-emphasis-position: under right;
      font-weight: ${getVariables.fontWeightNormal};
    }
    ${getNonCjkBlockCss(`${selectorName}--annotation em`, {
        "-webkit-text-emphasis": "none",
        "text-emphasis": "none",
    })}
    .${selectorName}--annotation .${selectorName}-meta {
        margin-block-start: calc(${getVariables.stdBlockUnit} * 0.5);
        margin-block-end: ${getVariables.stdBlockUnit};
    }
`;
};
