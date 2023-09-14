import { getVariables } from "./variables";

export const generateOtherCss = (selectorName: string) => {
  return `
.${selectorName} .${selectorName}-meta {
  display: block;
  text-indent: 0;
}
.${selectorName} .${selectorName}-verse {
  text-align: center;
  text-indent: 0;
}
.${selectorName} .${selectorName}-large {
  font-size: ${getVariables.fontSizeLarge};
  line-height: ${getVariables.lineHeightSizeLarge};
}
.${selectorName} .${selectorName}-x-large {
  font-size: ${getVariables.fontSizeXLarge};
  line-height: ${getVariables.lineHeightSizeXLarge};
  letter-spacing: 0.05em;
}
.${selectorName} .${selectorName}-small {
  font-size: ${getVariables.fontSizeSmall};
  line-height: ${getVariables.lineHeightSizeSmall};
}
.${selectorName} .${selectorName}-x-small {
  font-size: ${getVariables.fontSizeXSmall};
  line-height: ${getVariables.lineHeightSizeXSmall};
}
.${selectorName} .${selectorName}-list-latin {
  list-style-type: upper-latin;
}
.${selectorName} .${selectorName}-list-latin ol {
  list-style-type: lower-roman;
}
.${selectorName} .${selectorName}-list-latin ol ol {
  list-style-type: lower-latin;
}
.${selectorName} .${selectorName}-list-han {
  list-style-type: cjk-ideographic;
}
.${selectorName} .${selectorName}-list-han ol {
  list-style-type: decimal;
}
.${selectorName} .${selectorName}-list-han ol ol {
  list-style-type: decimal-leading-zero;
}
.${selectorName} .${selectorName}-fn {
  margin-block-start: 59px;
  border-block-start: 1px solid;
  border-block-start-color: hsl(0deg, 0%, 80%);
  font-size: ${getVariables.fontSizeSmall};
  line-height: ${getVariables.lineHeightSizeNormal};
  font-family: ${getVariables.fontFamilyHei};
}
.${selectorName} .${selectorName}-fn ol {
  margin-block-start: "calc(var(--un-chinese-typography-std-block-unit) * 0.5)";
  margin-block-end: 0;
}
.${selectorName} .${selectorName}-fn li:target {
  background-color: hsl(210deg, 100%, 93%);
}
[data-darkmode=dark] .${selectorName} .${selectorName}-fn li:target {
  background-color: hsl(210deg, 40%, 38%);
}
@media (prefers-color-scheme: dark) {
  [data-darkmode=auto] .${selectorName} .${selectorName}-fn li:target {
    background-color: hsl(210deg, 40%, 38%);
  }
}
.${selectorName} .${selectorName}-hang {
  position: absolute;
  line-height: inherit;
  text-indent: 0;
}
.${selectorName} .${selectorName}-em {
  -webkit-text-emphasis: filled circle;
  -webkit-text-emphasis-position: under;
  text-emphasis: filled circle;
  text-emphasis-position: under right;
}
.${selectorName} .${selectorName}-em:not(:lang(zh)):not(:lang(ja)):not(:lang(kr)), .${selectorName} .${selectorName}-em:not(:lang(zh)) {
  -webkit-text-emphasis: none;
  text-emphasis: none;
}
.${selectorName} .${selectorName}-ruby--inline {
  display: inline-flex;
  flex-direction: column-reverse;
  height: 1.5em;
  vertical-align: top;
}
.${selectorName} .${selectorName}-ruby--inline rt {
  display: inline;
  margin-bottom: -0.25em;
  line-height: 1;
  text-align: center;
}
.${selectorName} ${selectorName}-spacing {
  display: inline;
}
.${selectorName} ${selectorName}-spacing + sup, .${selectorName} ${selectorName}-spacing + sub {
  margin-inline-start: 0;
}
.${selectorName} .${selectorName}-spacing-start {
  margin-inline-end: 0.25em;
}
.${selectorName} .${selectorName}-spacing-end {
  margin-inline-start: 0.25em;
}
.${selectorName} ${selectorName}-adjacent {
  display: inline;
}
.${selectorName} .${selectorName}-adjacent-half {
  margin-inline-end: -0.5em;
}
.${selectorName} .${selectorName}-adjacent-quarter {
  margin-inline-end: -0.25em;
}
`;
};
