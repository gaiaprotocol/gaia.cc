import { el } from "https://raw.githubusercontent.com/yjgaia/deno-module/main/page.ts";

export function header() {
  return el("header", el("h1", "gaia.cc"));
}

export function footer() {
  return el("footer", `Gaia Protocol 2022-${new Date().getFullYear()}`);
}

export function layout(...children: string[]) {
  return el(".layout", header(), el("main", ...children), footer());
}
