import type { App } from "vue";
import anchor from "./src/anchor";

export const AllDirectives = {
  // Custom directives
  anchor,
};

export function setupDirectives(app: App) {
  Object.keys(AllDirectives).forEach((key) => {
    app.directive(key, AllDirectives[key]);
  });
}
