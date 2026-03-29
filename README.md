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

## 我们解决的是哪一类问题？

市面上已有优秀的「**一键安装 / 桌面壳**」帮你把 OpenClaw **跑起来**；**龙虾控制台**专注另一件事：

为 OpenClaw 提供 **AI 时代运维台** —— **盯网关与 Token**、**看 Agent 与会话**、**实验模型写回配置**、**逛像素孪生工作室**，一切锚定 **本机目录与 Gateway**。

它不替代官方 CLI，也不与「装好环境」类产品抢赛道；它解决的是 **装好之后**：配置散、状态黑盒、多 Agent 难扫、改模型怕手抄 JSON 等 **日常运维与可观测** 问题。

---

## 界面预览（8 张）

以下为龙虾可视化控制台典型界面。截图放在 **`image/`** 目录下，文件名为 **`1.png`～`8.png`**（与当前仓库一致；若改用 `jpg` / `webp`，请替换下方路径）。说明见 [`image/README.md`](./image/README.md)。

### 1. OneOne 仪表盘 — 运维总览

网关健康、Token 与耗时趋势、渠道与 Agent 任务汇总：把「网关红没红、资源耗在哪」收进一屏，对齐本机与 Gateway 状态。

![OneOne 仪表盘](./image/1.png)

### 2. 专家战队 — 多 Agent 一屏掌控

卡片墙展示各 Agent 在线情况、绑定模型与平台：快速回答「谁在跑、用的哪套模型」，而不是在多窗口里翻。

![专家战队](./image/2.png)

### 3. 模型列表 — 探测与写回配置

接入列表、与 Agent 的绑定关系、单模型探测与校验通过后写入 **openclaw.json**：减少裸改 JSON 带来的环境与漏项风险。

![模型列表](./image/3.png)

### 4. 专家工作室 / 像素办公室 — 孪生与趣味可视化

办公室、舰桥、林地等像素场景，配合热力、榜单与可编辑布局：把「谁在干活」做成可扫、可玩的 **状态可视化**，而不仅是表格。

![像素办公室 / 专家工作室](./image/4.png)

### 5. 会话与通道 — 按 Agent 组织

主会话、通道与连通性测试等同导航可达：会话不再散落在各处，便于排查「哪条通道卡住」。

![会话列表](./image/5.png)

### 6. 记忆管理 — 本机真相延伸

Markdown、SQLite 等记忆视图与 **MEMORY.md** 等文件协同：记忆与配置一样，锚定本机目录，便于审计与备份。

![记忆管理](./image/6.png)

### 7. 告警中心 — 值班与通知

规则、历史记录与飞书等通知渠道：异常有处可查、有处可配，缩短从「发现问题」到「定位动作」的路径。

![告警中心](./image/7.png)

### 8. 极简部署 /setup — 装好之后仍同一条运维叙事

预检与引导 onboard，与仪表盘、模型、网关检查串在同一套产品里：**环境装好后**，继续在同一控制台里完成验收与深入配置。

![极简部署 /setup](./image/8.png)

---

## 简介

本仓库 **[website-display](https://github.com/gaogg521/website-display)** 与 **[龙虾可视化控制台](https://github.com/gaogg521/gaogg521-openclaw-Visual-Control-Panel)** 的 Git **相互独立**，仅通过站内链接指向面板 README / 源码。仓库根目录即为 Vite 项目（不要把整个 monorepo 再套一层 `www/` 再推送，除非你刻意用子目录托管）。

静态站点包含：首屏叙事与 `npm run start` 引导、定位说明、核心优势、设计原则、体验路径示意、安装方式、能力矩阵、截图轮播与画廊（灯箱）、FAQ、联系区（飞书 / 微信二维码）等；**上文的 8 张图为本 README 专用展示**，与构建流程中的 `carousel-sources/`、`npm run assets` 无强制关联。

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
├── image/                  # README 用 8 张截图（1.png～8.png，见 image/README.md）
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
