import { ChineseHeading } from "./heading";
import { ChineseTable } from "./table";
import { ChineseBase } from "./base";
import { ChineseInline } from "./inline";
import { ChineseList } from "./list";

export const DEFAULT_TYPOGRAPHY = {
  ...ChineseBase,
  ...ChineseHeading,
  ...ChineseList,
  ...ChineseTable,
  ...ChineseInline,
};
