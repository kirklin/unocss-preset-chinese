// 示例SCSS代码

import { getVariables } from "./variables";

export function generateAncientCss(selectorName: string) {
  return `
.${selectorName}--ancient, .${selectorName}--poetry {
  font-family: ${getVariables.fontFamilySong};
}
.${selectorName}--ancient h1,
.${selectorName}--ancient h2,
.${selectorName}--ancient h3,
.${selectorName}--ancient h4,
.${selectorName}--ancient h5,
.${selectorName}--ancient h6, .${selectorName}--poetry h1,
.${selectorName}--poetry h2,
.${selectorName}--poetry h3,
.${selectorName}--poetry h4,
.${selectorName}--poetry h5,
.${selectorName}--poetry h6 {
  font-family: ${getVariables.fontFamilyKaiBlack};
  font-weight: 800;
  text-align: center;
}
.${selectorName}--ancient h1 .${selectorName}-meta,
.${selectorName}--ancient h2 .${selectorName}-meta,
.${selectorName}--ancient h3 .${selectorName}-meta,
.${selectorName}--ancient h4 .${selectorName}-meta,
.${selectorName}--ancient h5 .${selectorName}-meta,
.${selectorName}--ancient h6 .${selectorName}-meta, .${selectorName}--poetry h1 .${selectorName}-meta,
.${selectorName}--poetry h2 .${selectorName}-meta,
.${selectorName}--poetry h3 .${selectorName}-meta,
.${selectorName}--poetry h4 .${selectorName}-meta,
.${selectorName}--poetry h5 .${selectorName}-meta,
.${selectorName}--poetry h6 .${selectorName}-meta {
  font-weight: 400;
}
@media screen and (min-width: 640px) {
  .${selectorName}--ancient h1 .${selectorName}-meta,
  .${selectorName}--ancient h2 .${selectorName}-meta,
  .${selectorName}--ancient h3 .${selectorName}-meta,
  .${selectorName}--ancient h4 .${selectorName}-meta,
  .${selectorName}--ancient h5 .${selectorName}-meta,
  .${selectorName}--ancient h6 .${selectorName}-meta, .${selectorName}--poetry h1 .${selectorName}-meta,
  .${selectorName}--poetry h2 .${selectorName}-meta,
  .${selectorName}--poetry h3 .${selectorName}-meta,
  .${selectorName}--poetry h4 .${selectorName}-meta,
  .${selectorName}--poetry h5 .${selectorName}-meta,
  .${selectorName}--poetry h6 .${selectorName}-meta {
    position: absolute;
    line-height: inherit;
    text-indent: 0;
    display: inline;
    margin-block-start: 4px;
    margin-inline-start: 8px;
  }
}
.${selectorName}--ancient .${selectorName}-meta, .${selectorName}--poetry .${selectorName}-meta {
  line-height: 24px;
  text-align: center;
  text-indent: 0;
}
.${selectorName}--ancient p {
  text-indent: 2em;
}
.${selectorName}--poetry p {
  text-align: center;
  text-indent: 0;
}
`;
}
