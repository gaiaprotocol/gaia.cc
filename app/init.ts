import { BodyNode } from "@common-module/app";

export default async function init() {
  if (
    location.pathname.startsWith("/god/") &&
    location.pathname.endsWith("/image")
  ) {
    BodyNode.htmlElement.innerHTML = "Loading...";
    const godId = location.pathname.split("/")[2];
    const response = await fetch(
      `https://dhzxulywizygtdficytt.supabase.co/functions/v1/god-metadata/${godId}`,
    );
    const data = await response.json();
    location.href = data.image;
  }
}
