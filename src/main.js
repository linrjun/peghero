import { GAME_VERSION, STORAGE_KEY } from "./config.js";

window.PEG_HERO_CONFIG = Object.freeze({
  version: GAME_VERSION,
  storageKey: STORAGE_KEY,
});

const partUrls = [
  "./runtime/part-1.txt",
  "./runtime/part-2.txt",
  "./runtime/part-3.txt",
  "./runtime/part-4.txt",
  "./runtime/part-5.txt",
  "./runtime/part-6.txt",
];

try {
  const responses = await Promise.all(partUrls.map((url) => fetch(url)));
  const failed = responses.find((response) => !response.ok);
  if (failed) {
    throw new Error(`Runtime chunk failed: ${failed.status} ${failed.url}`);
  }
  const runtime = (await Promise.all(responses.map((response) => response.text()))).join("");
  Function(runtime)();
} catch (error) {
  console.error(error);
  const app = document.getElementById("app");
  if (app) {
    app.innerHTML = `<div style="padding:24px;color:white;font-family:system-ui">游戏加载失败，请刷新页面。<br><small>${String(error)}</small></div>`;
  }
}
