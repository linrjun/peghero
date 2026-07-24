# 弹珠勇者 PegHero

手机竖屏弹珠 Roguelike 原型。

## 本地运行

项目是纯静态站点。可直接启动任意静态服务器：

```bash
npx serve .
```

## Netlify

- Build command：留空
- Publish directory：`.`
- Production branch：`main`

仓库已包含 `netlify.toml` 与 `_redirects`。

## 当前结构

- `index.html`：页面入口
- `styles.css`：移动端界面样式
- `src/main.js`：运行时加载器
- `src/runtime/`：游戏运行时代码分片
- `src/config.js`：版本与存档配置
- `src/data/`：数据模块预留目录
- `src/systems/`：系统模块预留目录
- `src/ui/`：界面模块预留目录

后续会逐步将运行时分片迁移为正式 ES Modules。
