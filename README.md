# ONE CLAW · 龙虾可视化控制台 — 宣传站

**Static marketing site for the Lobster OpenClaw control panel** — Vite + vanilla HTML/CSS/JS, bilingual (ZH/EN), deployable to any static host.

| 本仓库（独立） | 面板主仓库 | OpenClaw |
|----------------|------------|----------|
| [gaogg521/website-display](https://github.com/gaogg521/website-display) | [gaogg521-openclaw-Visual-Control-Panel](https://github.com/gaogg521/gaogg521-openclaw-Visual-Control-Panel) | [openclaw/openclaw](https://github.com/openclaw/openclaw) |

**克隆（SSH）**

```bash
git clone git@github.com:gaogg521/website-display.git
cd website-display
```

**克隆（HTTPS）**

```bash
git clone https://github.com/gaogg521/website-display.git
cd website-display
```

---

## 简介

本仓库 **[website-display](https://github.com/gaogg521/website-display)** 与 **[龙虾可视化控制台](https://github.com/gaogg521/gaogg521-openclaw-Visual-Control-Panel)** 的 Git **相互独立**，仅通过站内链接指向面板 README / 源码。仓库根目录即为 Vite 项目（不要把整个 monorepo 再套一层 `www/` 再推送，除非你刻意用子目录托管）。

页面包含：首屏叙事与 `npm run start` 引导、定位说明、核心优势、设计原则、体验路径示意、安装方式、能力矩阵、截图轮播与画廊（灯箱）、FAQ、联系区（飞书 / 微信二维码）等。

- **构建产物**：`dist/`，可整包作为网站根目录发布。
- **`vite.config.js`** 中 `base: "./"`，适合 **GitHub Pages**、子路径与 CDN。

---

## 环境要求

- **Node.js** ≥ 18（推荐当前 LTS）
- **npm** 或兼容包管理器

---

## 快速开始

```bash
npm install
npm run assets   # 品牌图、轮播、画廊、联系区（详见下文）
npm run dev      # http://localhost:5173
```

生产构建：

```bash
npm run build    # 等价于 npm run assets && vite build
```

本地预览构建结果：

```bash
npm run preview
```

---

## 配置

编辑 **`src/site.config.js`**：

| 字段 | 说明 |
|------|------|
| `repoUrl` | **面板** Git 仓库根 URL；顶栏/页脚「面板源码」「文档」等指向 **龙虾控制台**，不是本宣传站仓库。 |
| `readmeUrl` | 可选。留空则文档按钮为 `${repoUrl}/blob/main/README.md`。 |
| `openclawUrl` | OpenClaw 官方仓库。 |
| `panelPort` | 文案中的默认端口（如 `3003`）。 |
| `authorGithub` | 作者 GitHub 主页。 |

---

## 静态资源与 `npm run assets`

脚本：**`scripts/build-assets.mjs`**（`sharp`）。

1. **品牌图**：若本机在与本仓库**同级**目录下克隆了面板仓库，且存在 `../龙虾可视化控制面板/public/brand-mark.png`，会复制到 `public/brand-mark.png` 并同步 `public/logo.png`。**仅本仓库时**：请自行放入 `public/brand-mark.png`（及可选 `logo.png`）。
2. **首页轮播**：优先使用本仓库 **`carousel-sources/`** 内 PNG（见脚本 `CAROUSEL_SLIDES`）→ `public/carousel/slide-XX.webp` 与 `carousel-manifest.json`。勿把大源图只堆在 `public/`。
3. **画廊与联系区二维码**：脚本会尝试读取 **`../龙虾可视化控制面板/docs/`** 中约定文件名。若独立开发无此路径，可手动维护 `public/gallery/`、`public/contact/`，或与面板仓并列克隆后本地执行一次 `npm run assets` 再提交生成结果。

轮播说明文案对应 **`src/main.js`** 的 `carousel.cap1`–`cap5`（中英 `STRINGS`）。

---

## 部署示例

| 平台 | 说明 |
|------|------|
| **GitHub Pages** | `npm run build` 后部署 `dist`；Pages 指向 `gh-pages` 或 Actions 产物。`base: "./"` 已适配。 |
| **Cloudflare Pages** | Build: `npm run build`，Output: `dist`。 |
| **Nginx / CDN** | 以 `dist` 为站点根目录。 |

---

## 目录结构（仓库根）

```
.
├── index.html
├── public/
├── carousel-sources/       # 轮播源图（大文件可按需 .gitignore）
├── scripts/
│   └── build-assets.mjs
├── src/
│   ├── main.js
│   ├── style.css
│   ├── tech-enhancements.css
│   └── site.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## 功能说明（维护）

- **语言**：右上角 EN / 中文 → `localStorage` `www-lang`。
- **主题**：五套 `data-theme` → `www-theme`。
- **首屏 Logo**：可拖拽，姿态 `www-brand-logo-pose`。
- **灯箱**：轮播、画廊、页脚二维码点击放大。

---

## 与面板仓库的关系

| 仓库 | 职责 |
|------|------|
| **website-display**（本仓库） | 静态宣传页源码与构建 |
| **gaogg521-openclaw-Visual-Control-Panel** | Next.js 面板、安装与 API 以该仓 **README** 为准 |

站内按钮「面板源码 / 文档」仍指向面板仓库；**本仓库**仅托管展示站点。

---

## 许可证

请在本仓库根目录放置 `LICENSE`（可与面板仓一致或单独声明），并在此更新一句说明。

---

## 维护者

[@gaogg521](https://github.com/gaogg521)
