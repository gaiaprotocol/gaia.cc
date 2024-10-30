import {
  createPage,
} from "https://raw.githubusercontent.com/yjgaia/deno-module/main/page.ts";
import { home } from "./pages/home.ts";
import { layout } from "./pages/layout.ts";

export function pages(path: string, isDevMode = false): string | undefined {
  if (path === "/") {
    return createPage(
      {
        title: "gaia.cc",
        cssFiles: [isDevMode ? "bundle-dev.css" : "/bundle.css"],
        gtagId: "G-5V6VEQVW28",
      },
      layout(home()),
    );
  }
}
