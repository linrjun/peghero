import { GAME_VERSION, STORAGE_KEY } from "./config.js";

window.PEG_HERO_CONFIG = Object.freeze({ version: GAME_VERSION, storageKey: STORAGE_KEY });

async function boot() {
  const response = await fetch(new URL("./runtime.js.gz", import.meta.url));
  if (!response.ok) throw new Error(`runtime load failed: ${response.status}`);
  if (!("DecompressionStream" in window)) throw new Error("浏览器不支持 DecompressionStream");
  const stream = response.body.pipeThrough(new DecompressionStream("gzip"));
  const source = await new Response(stream).text();
  Function(source)();
}

boot().catch((error) => {
  console.error(error);
  document.body.innerHTML = `<main style="padding:24px;color:white;background:#10131f;min-height:100vh;font-family:system-ui"><h1>游戏加载失败</h1><p>${error.message}</p></main>`;
});
