import {
  EXCEPTION_COMPONENT,
  PAGE_NOT_FOUND_NAME,
} from "~/router/constant";

// 404 on a page
export const PAGE_NOT_FOUND_ROUTE = {
  path: "/:path(.*)*",
  name: PAGE_NOT_FOUND_NAME,
  component: EXCEPTION_COMPONENT,
  meta: {
    title: "ErrorPage",
  },
};
