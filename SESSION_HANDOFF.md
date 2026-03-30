# 项目交接备忘（会话摘要）

> 供日后打开 **website-display / 本宣传站仓库** 时快速对齐上下文。  
> 独立远程：`git@github.com:gaogg521/website-display.git`

**日期**：2026-03-28（整理）

---

## 1. 仓库与配置

- 宣传站与 **龙虾可视化控制台** 主仓 **Git 分离**；`src/site.config.js` 里 **`repoUrl` 仍指向面板仓**（顶栏「面板源码 / 文档」），**不要**改成 website-display。
- 根目录 **`README.md`**：含定位文案「我们解决的是哪一类问题？」、**`image/1.png`～`8.png`** 与页面锚点对应说明、文末 **`image/全页展示.png`** 整页长图。
- **`image/README.md`**：配图文件名与区块对照表。

---

## 2. 已实现功能（代码层面）

| 主题 | 位置 / 说明 |
|------|-------------|
| 页脚飞书/微信二维码点击放大 | `src/main.js`：`setupFooterQrLightbox()`、`syncFooterQrLightboxAria()`；`is-missing` 卡不绑定。初始化在 `setupImageLightbox()` 之后。 |
| CORE EDGE 六条优势 | `index.html` 六个 `edge-card`；`main.js` `edge.p1`～`p6` 中英；首条强调 **`npm run start`**。`tech-enhancements.css` 中 `edge-card` 错落延迟到 6 张。 |
| 首屏 Hero | 痛点眉标 + 短导语 + **`hero-quickstart`**（`npm run start`）+ 三条 bullet；`main.js` `hero.*` + `style.css` 冷暖渐变（与全站标题风格一致）。 |
| 全站标题/正文层次 | `style.css`：`section-kicker`、`section-title`、`section-desc`、各卡片与 FAQ、CTA、页脚等 **青→金/橙** 渐变与 `color-mix` 正文，含 `light` / `warm-orange` 主题覆盖。 |

---

## 3. README 与配图约定

- **`1.png`～`8.png`**：均为 **静态单页宣传站** 分段截图（Hero、#edge、#highlights、#flow、#features、#gallery、#faq、#start+#contact），**不是**面板应用逐页八张。
- **`全页展示.png`**：整页纵向长图，挂在 README **最底部**「整页长图一览」；体积较大（约数 MB），若 GitHub 加载慢可改为外链。

---

## 4. 常用命令

```bash
npm install
npm run assets   # 需与面板仓并列或自备 public/ 资源时见 README
npm run dev
npm run build
```

---

## 5. 后续可做（未做）

- GitHub Actions 自动部署 Pages（如需要可再加 workflow）。
- 整页长图若过大：改为 Release / 图床链接，README 只保留文字 + 链接。
- `全页展示.png` 若遇路径编码问题：复制为 `full-page.png` 并改 README 引用。

---

## 6. 关键文件速查

```
src/main.js              # i18n、灯箱、页脚二维码、轮播/画廊
src/site.config.js       # repoUrl / openclawUrl / panelPort / authorGithub
src/style.css            # 全站排版与冷暖字体层次
src/tech-enhancements.css
index.html
README.md
image/
SESSION_HANDOFF.md       # 本文件
```

将本文件 **随仓库提交**，新会话中可提示：「先读 `SESSION_HANDOFF.md`」。
