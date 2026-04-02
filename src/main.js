import { site } from "./site.config.js";
import "./style.css";
import "./tech-enhancements.css";

const STRINGS = {
  zh: {
    "a11y.skip": "跳到正文",
    "nav.edge": "优势",
    "nav.highlights": "亮点",
    "nav.flow": "体验路径",
    "nav.install": "安装方式",
    "nav.features": "能力",
    "nav.gallery": "界面",
    "nav.contact": "联系",
    "nav.faq": "FAQ",
    "nav.readme": "文档",
    "theme.label": "主题",
    "theme.hint": "与控制台五套全局主题一致",
    "theme.dark": "深海暗夜",
    "theme.light": "极简浅色",
    "theme.cyber": "蓝色科技风",
    "theme.warm": "橙色暖调",
    "theme.forest": "森林绿境",
    "hero.eyebrow": "安装糊、配置碎、状态像黑盒？",
    "hero.line1": "给 OpenClaw 一面",
    "hero.line2": "看得懂、点得动的运维屏",
    "hero.tagline": "龙虾可视化控制台 · 读本机真相，跟 Gateway 同步",
    "hero.lead": "装好后仍要面对文档散、JSON 不敢动、网关红了全靠猜。日常要盯的状态，我们收进一块屏。",
    "hero.quickLabel": "核心一步",
    "hero.quickHint": "克隆仓库后执行 · 环境以 README 为准",
    "hero.pt1": "网关 · 会话 · 多 Agent，一屏扫完",
    "hero.pt2": "探测与向导写回配置，少手抄 JSON",
    "hero.pt3": "官方 CLI 照常，面板只补可见性",
    "hero.pointsAria": "三条一句话说明",
    "hero.ctaOpenclaw": "OpenClaw 上游",
    "hero.ctaRepo": "面板源码",
    "hero.note": "默认开发端口 3003 · Windows 可选 Electron 安装包 · 完整能力需本机 OpenClaw 与网关就绪",
    "hero.imgAlt": "OneOne 仪表盘界面截图",
    "carousel.region": "产品界面截图轮播",
    "carousel.prev": "上一张",
    "carousel.next": "下一张",
    "carousel.cap1": "仪表盘：网关与 Agent 任务总览（主内容区）",
    "carousel.cap2": "专家战队：十位专家卡片、模型与实时指标",
    "carousel.cap3": "模型列表：Provider、绑定与切换",
    "carousel.cap4": "专家工作室：场景化工作台一览",
    "carousel.cap5": "极简部署：向导步骤，开箱即用",
    "carousel.capFallback": "产品截图",
    "carousel.zoomHint": "点击画面可放大查看",
    "carousel.zoomAria": "点击或按回车放大当前轮播图",
    "pos.title": "我们解决的是哪一类问题？",
    "pos.before": "市面上已有优秀的「一键安装 / 桌面壳」帮你把 OpenClaw 跑起来；",
    "pos.brand": "龙虾控制台",
    "pos.after":
      " 专注另一件事：为 OpenClaw 提供 AI 时代运维台 — 盯网关与 Token、看 Agent 与会话、实验模型写回配置、逛像素孪生工作室，一切锚定本机目录与 Gateway。",
    "edge.kicker": "CORE EDGE",
    "edge.title": "相对「装完就跑」的绝对优势",
    "edge.desc":
      "优先打掉安装、配置、管理三道坎：克隆本仓库后一条命令即可起面板；其余能力仍锚定本地目录与 Gateway，让 OpenClaw 运维看得见、点得动、可落库。",
    "edge.p1t": "一条命令跑起来",
    "edge.p1d":
      "下载/克隆本仓库后执行 npm run start 即可拉起控制台（环境与前置依赖以 README 为准）。把「装半天、文档翻几轮」收敛成单一入口，专治安装难。",
    "edge.p2t": "本地真相 · 网关同源",
    "edge.p2d":
      "openclaw.json、agents、sessions 与 Gateway 实时对齐；健康轮询、流式重启与诊断直连本机进程，拒绝黑盒状态。",
    "edge.p3t": "多 Agent 一屏掌控",
    "edge.p3d":
      "专家战队、任务追踪、会话与通道同导航可达；像素办公室三套场景把「谁在干活」做成热力、榜单与可编辑布局。",
    "edge.p4t": "模型可实验、可落库",
    "edge.p4d":
      "单模型探测、临时 Key、内网预设，通过后写入配置；六语 + 五套主题，与生产面板同一套交互与持久化。",
    "edge.p5t": "配置可视化、少手抄 JSON",
    "edge.p5d":
      "模型、密钥与通道尽量用向导与表单落盘，配合探测与校验再写回配置，降低配错环境与漏项的概率，缓解配置难。",
    "edge.p6t": "状态集中，管理有抓手",
    "edge.p6d":
      "健康、重启、告警、会话与通道在同一套导航里串起来；哪里卡住、谁异常，不必在多窗口间猜，管理路径更短。",
    "highlights.kicker": "WHY ONE CLAW",
    "highlights.title": "四条设计原则",
    "highlights.desc": "不是「再做一个聊天窗」，而是让 Agent 基础设施在屏幕上站得住、找得到、点得动。",
    "highlights.h1t": "文件即真相",
    "highlights.h1d": "openclaw.json、agents、sessions 仍是权威；面板读写都围绕本机目录与网关。",
    "highlights.h2t": "运维可扫一眼",
    "highlights.h2d": "Token、耗时、告警、通道与会话分布在多张表里，但共享同一套导航与主题。",
    "highlights.h3t": "模型改动可实验",
    "highlights.h3d": "探测、临时 Key、内网预设，通过后再写配置，减少手抄 JSON 出错。",
    "highlights.h4t": "工作室带点趣味",
    "highlights.h4d": "像素场景与热力、榜单是「状态可视化」，让值班氛围轻松一点。",
    "flow.kicker": "FLOW",
    "flow.title": "三分钟理解使用路径",
    "flow.desc": "以下为示意流程，具体命令以仓库 README 为准。",
    "flow.nav1": "首页",
    "flow.nav2": "OneOne 仪表盘",
    "flow.nav3": "模型",
    "flow.nav4": "像素办公室",
    "flow.nav5": "/setup",
    "flow.chip1": "Gateway 在线",
    "flow.chip2": "openclaw.json",
    "flow.c1l": "健康",
    "flow.c1v": "轮询合并 · 单飞请求",
    "flow.c2l": "Agent",
    "flow.c2v": "任务与子代理一览",
    "flow.c3l": "下一步",
    "flow.c3v": "去模型页探测或重启网关",
    "flow.s1t": "起面板",
    "flow.s1d": "dev 默认 3003，或与 Electron 包一致。",
    "flow.s2t": "确认 OpenClaw",
    "flow.s2d": "本机已安装 CLI、网关可达；必要时走 /setup。",
    "flow.s3t": "按需深入",
    "flow.s3d": "会话、告警、统计、技能库与网页 /chat 各取所需。",
    "install.kicker": "INSTALL",
    "install.title": "按系统选型",
    "install.desc": "与「桌面一键包」不同路径；这里描述的是本仓库面板的常见装法。",
    "install.win.t": "Windows",
    "install.win.d":
      "可选 NSIS 安装包（Electron 内嵌 Node，拉起 standalone Next）。开发者也可用 Node 18+ 直接 clone 跑 dev。",
    "install.mac.t": "macOS",
    "install.mac.d": "当前仓库主维护路径为源码 + npm；需本机 Node。可配合 Docker。",
    "install.linux.t": "Linux",
    "install.linux.d": "与 macOS 相同：Node 18+ 或 Docker；适合跑在 homelab / VPS 上仅内网访问。",
    "install.docker.t": "Docker",
    "install.docker.d": "仓库提供镜像说明时可整仓构建；挂载 OPENCLAW_HOME 与网关网络需自行规划。",
    "features.kicker": "CAPABILITIES",
    "features.title": "能力矩阵",
    "features.desc":
      "以下为模块速览；完整路由、接口与截图见 README。覆盖观测、Agent、模型、通道与上线全链路。",
    "features.f1t": "一站式运维",
    "features.f1d": "网关健康、Token 与耗时趋势、告警、会话与专家战队同屏可达。",
    "features.f2t": "专家工作室",
    "features.f2d": "办公室 / 星际舰桥 / 蘑菇林地三套像素场景，热力图与趣味榜单。",
    "features.f3t": "模型实验台",
    "features.f3d": "查看 Agent 与模型绑定、探测、内网预设，通过后写回 openclaw.json。",
    "features.f4t": "六语五主题",
    "features.f4d": "简繁英及东南亚语言；五套全局皮肤，localStorage 持久化。",
    "features.f5t": "双轨安装",
    "features.f5d": "仅面板（exe / 源码 / Docker）或与 openclaw-oneclick 一键流水线并行。",
    "features.f6t": "CLI 友好",
    "features.f6d": "不替代官方终端；需要时照常使用 openclaw 命令。",
    "features.readmeLead":
      "更完整的能力说明、路由表与高清预览图见主仓库 README：运维与可观测、Agent 与像素工作室、模型实验台、通道与会话、技能与 /setup、六语五主题等。",
    "features.linkCapabilities": "README · 能力总览",
    "features.linkPreview": "README · 界面预览",
    "gallery.kicker": "SCREEN",
    "gallery.title": "界面一瞥",
    "gallery.desc": "素材与说明对齐主仓库 README「预览」：完整宽度截图，点击任意缩略图可放大。",
    "gallery.rebuildHint": "更新面板 docs/ 后在本目录执行 npm run assets 可重新生成画廊图。",
    "gallery.gridAria": "产品界面截图画廊",
    "gallery.c1": "OneOne 仪表盘：版本与网关健康、Token 趋势、渠道与 Agent 任务总览",
    "gallery.c2": "专家战队：卡片墙展示各 Agent 在线状态、模型与平台、会话与 Token 小趋势",
    "gallery.c3": "模型页：接入列表、与 Agent 绑定、单模型探测与写回 openclaw.json",
    "gallery.c4": "像素办公室：地图、热力、布局编辑与场景切换",
    "gallery.c5": "像素场景 · 经典办公室主题",
    "gallery.c6": "会话列表：按 Agent 查看主会话、通道与连通性测试",
    "gallery.c7": "记忆管理：Markdown 与 SQLite 双轨、MEMORY.md 等",
    "gallery.c8": "网页对话 /chat：浏览器内直连网关验收对话",
    "gallery.c9": "告警中心：规则、历史与飞书等通知",
    "gallery.c10": "极简部署 /setup：预检与引导 onboard",
    "gallery.empty": "暂无画廊图。请保留面板 docs/ 中对应截图并运行 npm run assets。",
    "stack.kicker": "STACK",
    "stack.title": "技术栈",
    "stack.desc": "面板与 OpenClaw 解耦又深度集成：配置仍以本机文件与网关为权威来源。",
    "stack.optional": "可选 MySQL 镜像",
    "faq.kicker": "FAQ",
    "faq.title": "常见问题",
    "faq.desc": "与主项目 README 排错思路一致；更细步骤请以文档为准。",
    "faq.q1": "和「一键安装 OpenClaw」类产品是什么关系？",
    "faq.a1":
      "互补。一键包侧重「把运行时装明白」；龙虾控制台侧重「装好之后怎么看、怎么配、怎么玩」。你可以只用其中一种，也可以组合使用。",
    "faq.q2": "没装 OpenClaw 能只看界面吗？",
    "faq.a2":
      "面板能启动，但读配置、健康检查、会话与网关相关页面会缺数据或报错。建议先按官方方式装好 CLI 与网关，或用 /setup 跟随引导。",
    "faq.q3": "端口 3003 被占用怎么办？",
    "faq.a3":
      "开发模式下仓库提供端口检测脚本；也可通过环境变量修改端口（与 README 一致）。Electron 打包版通常固定 3003，请避免与同机其他服务冲突。",
    "faq.q4": "会改坏我的 openclaw.json 吗？",
    "faq.a4":
      "写入路径均通过项目内 API，意图是合并而非覆盖整文件；仍建议在改动前自行备份 OPENCLAW_HOME。若出现异常，可用 Git 或备份恢复。",
    "start.title": "准备体验？",
    "start.desc": "克隆龙虾可视化控制台仓库，按 README 选择安装路线；本站为静态宣传页，与运行时分离。",
    "start.ctaRepo": "打开 README",
    "start.ctaOpenclaw": "了解 OpenClaw",
    "footer.tag": "龙虾可视化控制台",
    "footer.linkDocs": "文档",
    "footer.linkContact": "联系",
    "footer.rights": "静态宣传站 · build 产物可部署至任意 CDN / Pages",
    "contact.kicker": "CONTACT",
    "contact.title": "交流与联系",
    "contact.desc":
      "使用问题、安装排错、功能建议或合作交流，欢迎 QQ 群或微信（与 README 一致）；也可在 GitHub 提 Issue。",
    "contact.qqAlt": "QQ 群二维码，扫码加入交流群",
    "contact.qqCap": "QQ 群",
    "contact.wechatAlt": "微信二维码，扫码添加作者",
    "contact.wechatCap": "微信",
    "contact.githubLink": "GitHub @gaogg521",
    "contact.githubCap": "代码与反馈",
    "contact.qrZoomAria": "点击放大二维码",
    "lightbox.aria": "放大查看图片",
    "lightbox.close": "关闭",
  },
  en: {
    "a11y.skip": "Skip to content",
    "nav.edge": "Edge",
    "nav.highlights": "Principles",
    "nav.flow": "Flow",
    "nav.install": "Install",
    "nav.features": "Features",
    "nav.gallery": "Screens",
    "nav.contact": "Contact",
    "nav.faq": "FAQ",
    "nav.readme": "Docs",
    "theme.label": "Theme",
    "theme.hint": "Same five global themes as the control panel",
    "theme.dark": "Deep sea dark",
    "theme.light": "Minimal light",
    "theme.cyber": "Cyber blue",
    "theme.warm": "Warm orange",
    "theme.forest": "Forest green",
    "hero.eyebrow": "Messy install, brittle config, blind status?",
    "hero.line1": "One ops screen",
    "hero.line2": "for OpenClaw you can actually use",
    "hero.tagline": "Lobster console — local truth, live Gateway, fewer guesswork loops",
    "hero.lead":
      "After install: docs sprawl, JSON feels risky, red gateway means guesswork. The signals you watch daily — in one console.",
    "hero.quickLabel": "Start here",
    "hero.quickHint": "After clone · prerequisites in README",
    "hero.pt1": "Gateway, sessions, many agents — one pass",
    "hero.pt2": "Probes & wizards write config — less raw JSON",
    "hero.pt3": "Keeps the official CLI; adds visibility",
    "hero.pointsAria": "Three one-line highlights",
    "hero.ctaOpenclaw": "OpenClaw upstream",
    "hero.ctaRepo": "Panel source",
    "hero.note":
      "Dev defaults to port 3003 · Windows Electron installer optional · Full features need OpenClaw + Gateway on the machine",
    "hero.imgAlt": "OneOne dashboard screenshot",
    "carousel.region": "Product screenshot carousel",
    "carousel.prev": "Previous slide",
    "carousel.next": "Next slide",
    "carousel.cap1": "Dashboard: gateway & agent overview (main pane)",
    "carousel.cap2": "Expert squad: agent grid, models, live stats",
    "carousel.cap3": "Models: providers, bindings, switching",
    "carousel.cap4": "Expert studio: workspace scenes",
    "carousel.cap5": "Minimal setup: guided steps, ready to run",
    "carousel.capFallback": "Product screenshot",
    "carousel.zoomHint": "Click the frame to enlarge",
    "carousel.zoomAria": "Click or press Enter to enlarge the current slide",
    "pos.title": "What problem does this solve?",
    "pos.before": "Great installers already help you bootstrap OpenClaw on the desktop. ",
    "pos.brand": "Lobster console",
    "pos.after":
      " ships an AI-era ops console for OpenClaw — gateway & tokens, agents & sessions, model write-backs, and a pixel twin studio, all tied to local files and the Gateway.",
    "edge.kicker": "CORE EDGE",
    "edge.title": "Why this console wins",
    "edge.desc":
      "Install, config, and day‑to‑day ops are first-class: clone the repo, one command brings up the console; the rest stays tied to local files and the Gateway.",
    "edge.p1t": "One command to run",
    "edge.p1d":
      "Clone this repository and run npm run start to launch the console (see the README for prerequisites). Fewer “install marathons” — one clear entry point.",
    "edge.p2t": "Local truth · gateway-native",
    "edge.p2d":
      "openclaw.json, agents, and sessions stay aligned with the Gateway; health, streaming restarts, and diagnostics hit real local processes — no black box.",
    "edge.p3t": "Many agents, one surface",
    "edge.p3d":
      "Expert roster, task tracing, sessions, and channels share one nav; three pixel scenes turn “who is working” into heatmaps, boards, and editable layouts.",
    "edge.p4t": "Models you can try, then commit",
    "edge.p4d":
      "Per-model probes, temp keys, and internal presets — write config only after a green check; six locales and five themes match production UX.",
    "edge.p5t": "Config with guardrails",
    "edge.p5d":
      "Prefer wizards and forms over raw JSON for models, keys, and channels — validate and write back so environments are harder to misconfigure.",
    "edge.p6t": "Ops in one place",
    "edge.p6d":
      "Health, restarts, alerts, sessions, and channels share one navigation model — less tab-hopping to see what broke or who is stuck.",
    "highlights.kicker": "WHY ONE CLAW",
    "highlights.title": "Four design principles",
    "highlights.desc": "Not “yet another chat window” — infrastructure you can see, find, and click.",
    "highlights.h1t": "Files are truth",
    "highlights.h1d": "openclaw.json, agents, sessions stay authoritative; the UI reads/writes around that tree and the gateway.",
    "highlights.h2t": "Ops at a glance",
    "highlights.h2d": "Tokens, latency, alerts, channels, and sessions span several views but share one nav + theming system.",
    "highlights.h3t": "Safe model experiments",
    "highlights.h3d": "Probes, temp keys, internal presets — write config only after a successful check.",
    "highlights.h4t": "Studio with personality",
    "highlights.h4d": "Pixel scenes, heatmaps, and leaderboards are state visualization with lighter on-call vibes.",
    "flow.kicker": "FLOW",
    "flow.title": "A three-step mental model",
    "flow.desc": "Illustrative only — follow the repository README for exact commands.",
    "flow.nav1": "Home",
    "flow.nav2": "OneOne dashboard",
    "flow.nav3": "Models",
    "flow.nav4": "Pixel office",
    "flow.nav5": "/setup",
    "flow.chip1": "Gateway up",
    "flow.chip2": "openclaw.json",
    "flow.c1l": "Health",
    "flow.c1v": "Coalesced polling · single-flight",
    "flow.c2l": "Agents",
    "flow.c2v": "Tasks & subagents",
    "flow.c3l": "Next",
    "flow.c3v": "Probe models or restart gateway",
    "flow.s1t": "Run the panel",
    "flow.s1d": "Dev on 3003 by default, or match the Electron bundle.",
    "flow.s2t": "Verify OpenClaw",
    "flow.s2d": "CLI installed, gateway reachable; use /setup if you need guidance.",
    "flow.s3t": "Go deeper",
    "flow.s3d": "Sessions, alerts, stats, skills, and /chat as needed.",
    "install.kicker": "INSTALL",
    "install.title": "Pick your OS",
    "install.desc": "Different from desktop “one-click” distributions — this is how you run this repo’s panel.",
    "install.win.t": "Windows",
    "install.win.d":
      "Optional NSIS bundle (Electron + embedded Node + standalone Next). Developers can clone with Node 18+.",
    "install.mac.t": "macOS",
    "install.mac.d": "Primary path is source + npm + local Node; Docker works too.",
    "install.linux.t": "Linux",
    "install.linux.d": "Same as macOS: Node 18+ or Docker — handy for homelab / intranet only.",
    "install.docker.t": "Docker",
    "install.docker.d": "Build from the repo when docs provide a recipe; plan volume mounts for OPENCLAW_HOME and gateway networking.",
    "features.kicker": "CAPABILITIES",
    "features.title": "Capability map",
    "features.desc":
      "Module snapshot below; full routes, APIs, and screenshots live in README. Covers observe, agents, models, channels, and ship.",
    "features.f1t": "Ops in one place",
    "features.f1d": "Gateway health, token & latency trends, alerts, sessions, expert roster.",
    "features.f2t": "Expert studio",
    "features.f2d": "Three pixel scenes — office, starship, grove — heatmaps & leaderboards.",
    "features.f3t": "Models lab",
    "features.f3d": "Bindings, probes, presets, then write openclaw.json when ready.",
    "features.f4t": "6 locales · 5 themes",
    "features.f4d": "ZH SC/TC, EN, MS, ID, TH; five themes in localStorage.",
    "features.f5t": "Two install tracks",
    "features.f5d": "Panel-only or scripted one-click alongside openclaw-oneclick.",
    "features.f6t": "CLI-friendly",
    "features.f6d": "Keeps openclaw available whenever you need the terminal.",
    "features.readmeLead":
      "For the full capability write-up, route table, and HD previews, see the main README: observability, agents & pixel studio, models lab, channels & sessions, skills & /setup, six locales & five themes.",
    "features.linkCapabilities": "README · Capabilities",
    "features.linkPreview": "README · UI preview",
    "gallery.kicker": "SCREEN",
    "gallery.title": "Screenshots",
    "gallery.desc": "Aligned with the README “Preview” section — full-width captures; click any tile to zoom.",
    "gallery.rebuildHint": "After updating panel docs/, run npm run assets in this folder to rebuild the gallery.",
    "gallery.gridAria": "Product screenshot gallery",
    "gallery.c1": "OneOne dashboard: version & gateway health, token trends, channels & agent tasks",
    "gallery.c2": "Expert roster: agent cards with presence, models, platforms, sessions & token sparklines",
    "gallery.c3": "Models: provider list, agent bindings, per-model probe & write-back to openclaw.json",
    "gallery.c4": "Pixel office: map, heatmap, layout editor & scene switcher",
    "gallery.c5": "Pixel scene · classic office theme",
    "gallery.c6": "Sessions: per-agent threads, channels & connectivity tests",
    "gallery.c7": "Memory: Markdown + SQLite dual track, MEMORY.md, etc.",
    "gallery.c8": "Web chat /chat: browser sessions against the gateway",
    "gallery.c9": "Alerts: rules, history & Feishu notifications",
    "gallery.c10": "Minimal /setup: preflight & onboard wizard",
    "gallery.empty": "No gallery images yet. Keep screenshots in panel docs/ and run npm run assets.",
    "stack.kicker": "STACK",
    "stack.title": "Stack",
    "stack.desc": "Loosely coupled, tightly integrated — files + gateway stay canonical.",
    "stack.optional": "Optional MySQL mirror",
    "faq.kicker": "FAQ",
    "faq.title": "FAQ",
    "faq.desc": "Aligned with the main README troubleshooting mindset.",
    "faq.q1": "How is this different from “one-click OpenClaw” installers?",
    "faq.a1":
      "They complement each other. Installers focus on bootstrapping runtimes; this panel focuses on operating and visualizing once things run. Mix and match.",
    "faq.q2": "Can I browse the UI without OpenClaw?",
    "faq.a2":
      "The server starts, but config-backed views will be empty or error. Install the official CLI + gateway first, or follow /setup.",
    "faq.q3": "Port 3003 is busy — now what?",
    "faq.a3":
      "The repo ships a dev port check; you can also override the port via env vars per README. Bundled Electron builds usually pin 3003 — avoid clashes.",
    "faq.q4": "Will it corrupt my openclaw.json?",
    "faq.a4":
      "Writes go through project APIs and aim to merge rather than blindly overwrite — still keep backups of OPENCLAW_HOME before big changes.",
    "start.title": "Ready to try?",
    "start.desc": "Clone the lobster panel and follow README; this site is static marketing only.",
    "start.ctaRepo": "Open README",
    "start.ctaOpenclaw": "Discover OpenClaw",
    "footer.tag": "Lobster visualization console",
    "footer.linkDocs": "Docs",
    "footer.linkContact": "Contact",
    "footer.rights": "Static site · deploy the Vite build to any CDN / Pages host",
    "contact.kicker": "CONTACT",
    "contact.title": "Community & contact",
    "contact.desc":
      "Questions, install help, ideas, or collaboration — join the QQ group or add WeChat (same as README); GitHub Issues welcome too.",
    "contact.qqAlt": "QQ group QR code — scan to join",
    "contact.qqCap": "QQ group",
    "contact.wechatAlt": "WeChat QR code — scan to add",
    "contact.wechatCap": "WeChat",
    "contact.githubLink": "GitHub @gaogg521",
    "contact.githubCap": "Code & issues",
    "contact.qrZoomAria": "Click to enlarge QR code",
    "lightbox.aria": "Enlarged image view",
    "lightbox.close": "Close",
  },
};

let lang = localStorage.getItem("www-lang") === "en" ? "en" : "zh";

/** @type {number} */
let heroCarouselIndex = 0;
/** @type {boolean} */
let heroCarouselActive = false;

function syncCarouselCaption() {
  const cap = document.getElementById("carousel-caption");
  if (!cap || !heroCarouselActive) return;
  const dict = STRINGS[lang];
  const key = `carousel.cap${heroCarouselIndex + 1}`;
  cap.textContent = dict[key] || dict["carousel.capFallback"] || "";
}

function readmeHref() {
  if (site.readmeUrl) return site.readmeUrl;
  const base = (site.repoUrl || "").replace(/\/$/, "");
  if (!base) return "#";
  return `${base}/blob/main/README.md`;
}

function repoHref() {
  const base = (site.repoUrl || "").replace(/\/$/, "");
  return base || "#";
}

function setHref(id, href) {
  const el = document.getElementById(id);
  if (!el) return;
  el.href = href;
  if (href === "#") {
    el.setAttribute("aria-disabled", "true");
    el.classList.add("is-disabled");
  } else {
    el.removeAttribute("aria-disabled");
    el.classList.remove("is-disabled");
  }
}

function applyLinks() {
  const r = repoHref();
  const readme = readmeHref();
  const oc = site.openclawUrl;

  setHref("link-readme", readme);
  setHref("link-repo", r);
  setHref("link-repo-2", readme);
  setHref("link-openclaw", oc);
  setHref("link-openclaw-2", oc);
  setHref("link-github-nav", r);
  setHref("link-footer-gh", r);
  setHref("link-footer-readme", readme);
  const readmeBase = readme && readme !== "#" ? readme.replace(/#.*$/, "") : "";
  setHref("link-readme-capabilities", readmeBase ? `${readmeBase}#capabilities` : "#");
  setHref("link-readme-preview", readmeBase ? `${readmeBase}#preview` : "#");
  setHref("link-author-github", site.authorGithub || "#");

  const port = document.getElementById("port-label");
  if (port) port.textContent = String(site.panelPort);
}

function applyI18n() {
  const dict = STRINGS[lang];
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (dict[key]) el.setAttribute("alt", dict[key]);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key]) el.setAttribute("aria-label", dict[key]);
  });

  syncCarouselCaption();
  syncGalleryGridCaptions();
  syncGalleryHitAriaLabels();
  syncFooterQrLightboxAria();
  document.querySelectorAll(".gallery-empty").forEach((el) => {
    if (dict["gallery.empty"]) el.textContent = dict["gallery.empty"];
  });

  const btn = document.getElementById("btn-lang");
  if (btn) btn.textContent = lang === "zh" ? "EN" : "中文";
  document.title =
    lang === "zh" ? "ONE CLAW · 龙虾可视化控制台" : "ONE CLAW · Lobster visualization console";
}

function toggleLang() {
  lang = lang === "zh" ? "en" : "zh";
  localStorage.setItem("www-lang", lang);
  applyI18n();
}

function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupHeaderShadow() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function setupReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

function publicAssetUrl(relPath) {
  const base = import.meta.env.BASE_URL;
  const b = base.endsWith("/") ? base : `${base}/`;
  const p = relPath.startsWith("/") ? relPath.slice(1) : relPath;
  return b + p;
}

/** @type {{ open: (src: string, caption?: string) => void }} */
const imageLightbox = {
  open() {},
};

function setupImageLightbox() {
  const root = document.getElementById("img-lightbox");
  if (!root) return;
  const backdrop = root.querySelector(".img-lightbox-backdrop");
  const closeBtn = root.querySelector(".img-lightbox-close");
  const img = root.querySelector(".img-lightbox-img");
  const capEl = root.querySelector(".img-lightbox-caption");
  /** @type {Element | null} */
  let lastFocus = null;

  function close() {
    root.hidden = true;
    document.body.style.removeProperty("overflow");
    if (lastFocus && "focus" in lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus();
    }
    lastFocus = null;
  }

  function open(src, caption = "") {
    if (!img || !src) return;
    lastFocus = document.activeElement;
    img.src = src;
    img.alt = caption;
    if (capEl) capEl.textContent = caption;
    root.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn?.focus();
  }

  imageLightbox.open = open;
  backdrop?.addEventListener("click", close);
  closeBtn?.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !root.hidden) {
      e.preventDefault();
      close();
    }
  });
}

function syncGalleryGridCaptions() {
  const dict = STRINGS[lang];
  document.querySelectorAll("[data-gallery-cap]").forEach((el) => {
    const k = el.getAttribute("data-gallery-cap");
    if (k && dict[k]) el.textContent = dict[k];
  });
}

function observeRevealNodes(nodes) {
  if (!nodes.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  nodes.forEach((el) => io.observe(el));
}

function wireContactQrFallback() {
  ["contact-img-qq", "contact-img-wechat"].forEach((id) => {
    const img = document.getElementById(id);
    if (!img) return;
    img.addEventListener("error", () => {
      img.closest(".footer-qr-card")?.classList.add("is-missing");
    });
  });
}

function syncFooterQrLightboxAria() {
  const dict = STRINGS[lang];
  const zoom = dict["contact.qrZoomAria"] || "";
  document.querySelectorAll(".footer-qr-card .footer-qr-frame").forEach((frame) => {
    const card = frame.closest(".footer-qr-card");
    const cap = card?.querySelector(".footer-channel-label");
    const name = cap?.textContent?.trim() || "";
    frame.setAttribute("aria-label", name && zoom ? `${name} · ${zoom}` : zoom || name || "QR");
  });
}

function setupFooterQrLightbox() {
  document.querySelectorAll(".footer-qr-card .footer-qr-frame").forEach((frame) => {
    if (frame.getAttribute("role") === "button") return;
    frame.setAttribute("role", "button");
    frame.setAttribute("tabindex", "0");

    function openQr() {
      const card = frame.closest(".footer-qr-card");
      if (card?.classList.contains("is-missing")) return;
      const qrImg = frame.querySelector("img.footer-qr-img, img");
      if (!qrImg) return;
      const src = qrImg.currentSrc || qrImg.src;
      if (!src) return;
      const caption = card?.querySelector(".footer-channel-label")?.textContent?.trim() || "";
      imageLightbox.open(src, caption);
    }

    frame.addEventListener("click", (e) => {
      e.preventDefault();
      openQr();
    });
    frame.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      e.preventDefault();
      openQr();
    });
  });
  syncFooterQrLightboxAria();
}

/**
 * @param {HTMLElement | null} track
 * @param {HTMLElement | null} fallback
 * @param {HTMLElement | null} viewport
 */
function attachHeroCarouselLightbox(track, fallback, viewport) {
  if (!viewport) return;

  function currentCarouselSrc() {
    const active = track?.querySelector(".carousel-slide.is-active img");
    if (active) return active.src;
    const fb = fallback?.querySelector("img");
    if (fb && fallback && !fallback.hidden) return fb.src;
    return "";
  }

  function openCurrent() {
    const src = currentCarouselSrc();
    if (!src) return;
    const dict = STRINGS[lang];
    const key = `carousel.cap${heroCarouselIndex + 1}`;
    const cap = dict[key] || dict["carousel.capFallback"] || "";
    imageLightbox.open(src, cap);
  }

  viewport.addEventListener("click", () => {
    openCurrent();
  });
  viewport.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();
    openCurrent();
  });
}

async function setupGalleryGrid() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;

  let manifest = { items: [] };
  try {
    const res = await fetch(publicAssetUrl("gallery-manifest.json"));
    if (res.ok) manifest = await res.json();
  } catch {
    /* 无 manifest 时留空 */
  }

  const items = manifest.items || [];
  grid.replaceChildren();

  if (items.length === 0) {
    const empty = document.createElement("p");
    empty.className = "gallery-empty muted-hint";
    empty.textContent = STRINGS[lang]["gallery.empty"] || "";
    grid.appendChild(empty);
    return;
  }

  const toReveal = [];
  items.forEach((item) => {
    const fig = document.createElement("figure");
    fig.className = "gallery-card reveal";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "gallery-card-hit";
    const capKey = item.capKey || "";
    btn.setAttribute("aria-label", "");
    btn.setAttribute("data-gallery-aria-key", capKey);

    const img = document.createElement("img");
    img.src = publicAssetUrl(item.src);
    img.alt = "";
    img.loading = "lazy";
    img.decoding = "async";
    img.className = "gallery-card-img";

    btn.appendChild(img);
    const cap = document.createElement("figcaption");
    cap.className = "gallery-card-caption";
    cap.setAttribute("data-gallery-cap", capKey);

    btn.addEventListener("click", () => {
      const dict = STRINGS[lang];
      const text = capKey && dict[capKey] ? dict[capKey] : "";
      imageLightbox.open(img.src, text);
    });

    fig.appendChild(btn);
    fig.appendChild(cap);
    grid.appendChild(fig);
    toReveal.push(fig);
  });

  syncGalleryGridCaptions();
  syncGalleryHitAriaLabels();
  observeRevealNodes(toReveal);
}

function syncGalleryHitAriaLabels() {
  const dict = STRINGS[lang];
  document.querySelectorAll("[data-gallery-aria-key]").forEach((el) => {
    const k = el.getAttribute("data-gallery-aria-key");
    if (k && dict[k]) el.setAttribute("aria-label", `${dict[k]} · ${dict["lightbox.aria"]}`);
  });
}

async function setupHeroCarousel() {
  const track = document.getElementById("carousel-track");
  const fallback = document.getElementById("carousel-fallback");
  const chrome = document.getElementById("carousel-chrome");
  const dots = document.getElementById("carousel-dots");
  const region = document.getElementById("hero-carousel");
  if (!track || !fallback || !chrome || !dots) return;

  let manifest = { slides: [] };
  try {
    const res = await fetch(publicAssetUrl("carousel-manifest.json"));
    if (res.ok) manifest = await res.json();
  } catch {
    /* 使用首屏 fallback 图 */
  }

  if (!manifest.slides?.length) {
    attachHeroCarouselLightbox(null, fallback, document.getElementById("carousel-viewport"));
    return;
  }

  fallback.hidden = true;
  track.hidden = false;
  chrome.hidden = false;
  track.replaceChildren();
  dots.replaceChildren();

  manifest.slides.forEach((src, i) => {
    const slide = document.createElement("div");
    slide.className = `carousel-slide${i === 0 ? " is-active" : ""}`;

    const img = document.createElement("img");
    img.src = publicAssetUrl(src);
    img.alt = "";
    img.width = 1020;
    img.height = 700;
    img.decoding = "async";
    img.loading = i === 0 ? "eager" : "lazy";
    slide.appendChild(img);
    track.appendChild(slide);

    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = `carousel-dot${i === 0 ? " is-active" : ""}`;
    dot.setAttribute("aria-label", `${i + 1} / ${manifest.slides.length}`);
    dot.setAttribute("aria-pressed", i === 0 ? "true" : "false");
    dots.appendChild(dot);
  });

  const slidesEl = () => [...track.querySelectorAll(".carousel-slide")];
  const dotsEl = () => [...dots.querySelectorAll(".carousel-dot")];
  let current = 0;

  function go(to) {
    const n = slidesEl().length;
    if (!n) return;
    current = ((to % n) + n) % n;
    heroCarouselIndex = current;
    slidesEl().forEach((s, idx) => s.classList.toggle("is-active", idx === current));
    dotsEl().forEach((d, idx) => {
      d.classList.toggle("is-active", idx === current);
      d.setAttribute("aria-pressed", idx === current ? "true" : "false");
    });
    syncCarouselCaption();
  }

  heroCarouselActive = true;
  document.querySelector(".carousel-prev")?.addEventListener("click", () => go(current - 1));
  document.querySelector(".carousel-next")?.addEventListener("click", () => go(current + 1));
  dotsEl().forEach((d, i) => d.addEventListener("click", () => go(i)));

  let timer = 0;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function startAutoplay() {
    if (prefersReduced || slidesEl().length < 2) return;
    clearInterval(timer);
    timer = window.setInterval(() => go(current + 1), 5200);
  }

  function stopAutoplay() {
    clearInterval(timer);
    timer = 0;
  }

  region?.addEventListener("mouseenter", stopAutoplay);
  region?.addEventListener("mouseleave", startAutoplay);
  region?.addEventListener("focusin", stopAutoplay);
  region?.addEventListener("focusout", startAutoplay);

  go(0);
  startAutoplay();
  attachHeroCarouselLightbox(track, fallback, document.getElementById("carousel-viewport"));
  applyI18n();
}

const THEME_STORAGE = "www-theme";
const THEME_IDS = ["dark", "light", "cyber-blue", "warm-orange", "forest-green"];

/** 顶栏可拖拽 Logo 的位移与旋转（刷新后保持） */
const BRAND_LOGO_POSE_STORAGE = "www-brand-logo-pose";
const BRAND_LOGO_MAX_D = 240;
const BRAND_LOGO_MAX_ANGLE = 1.2;

function loadBrandLogoPose() {
  try {
    const raw = localStorage.getItem(BRAND_LOGO_POSE_STORAGE);
    if (!raw) return null;
    const o = JSON.parse(raw);
    if (typeof o.dx !== "number" || typeof o.dy !== "number" || typeof o.angle !== "number") return null;
    if (!Number.isFinite(o.dx) || !Number.isFinite(o.dy) || !Number.isFinite(o.angle)) return null;
    return {
      dx: Math.max(-BRAND_LOGO_MAX_D, Math.min(BRAND_LOGO_MAX_D, o.dx)),
      dy: Math.max(-BRAND_LOGO_MAX_D, Math.min(BRAND_LOGO_MAX_D, o.dy)),
      angle: Math.max(-BRAND_LOGO_MAX_ANGLE, Math.min(BRAND_LOGO_MAX_ANGLE, o.angle)),
    };
  } catch {
    return null;
  }
}

function saveBrandLogoPose(dx, dy, angle) {
  try {
    localStorage.setItem(
      BRAND_LOGO_POSE_STORAGE,
      JSON.stringify({
        dx: Math.max(-BRAND_LOGO_MAX_D, Math.min(BRAND_LOGO_MAX_D, dx)),
        dy: Math.max(-BRAND_LOGO_MAX_D, Math.min(BRAND_LOGO_MAX_D, dy)),
        angle: Math.max(-BRAND_LOGO_MAX_ANGLE, Math.min(BRAND_LOGO_MAX_ANGLE, angle)),
      }),
    );
  } catch {
    /* 隐私模式 / 配额 */
  }
}

function setupThemeSelect() {
  const sel = document.getElementById("theme-select");
  if (!sel) return;
  const saved = localStorage.getItem(THEME_STORAGE);
  const initial = THEME_IDS.includes(saved) ? saved : "dark";
  document.documentElement.setAttribute("data-theme", initial);
  sel.value = initial;
  sel.addEventListener("change", () => {
    const v = sel.value;
    document.documentElement.setAttribute("data-theme", v);
    localStorage.setItem(THEME_STORAGE, v);
  });
}

/** 与 app/sidebar.tsx 侧栏品牌角标一致：拖拽平移 + 随移动方向轻微旋转 */
function setupBrandLogoDrag() {
  const wrap = document.getElementById("brand-logo-anchor");
  const link = document.getElementById("brand-link");
  if (!wrap || !link) return;

  const dragRef = {
    active: false,
    startX: 0,
    startY: 0,
    originDx: 0,
    originDy: 0,
    moved: false,
    lastX: 0,
    lastY: 0,
  };

  const saved = loadBrandLogoPose();
  let manualOffset = saved ? { dx: saved.dx, dy: saved.dy } : { dx: 0, dy: 0 };
  let manualAngle = saved ? saved.angle : 0;
  let suppressClick = false;

  function applyTransform() {
    wrap.style.transform = `translate(${manualOffset.dx}px, ${manualOffset.dy}px) rotate(${manualAngle}rad)`;
  }

  applyTransform();

  function stopDrag() {
    if (!dragRef.active) return;
    dragRef.active = false;
    if (dragRef.moved) suppressClick = true;
    wrap.classList.remove("is-dragging");
    document.body.style.userSelect = "";
    saveBrandLogoPose(manualOffset.dx, manualOffset.dy, manualAngle);
  }

  function onMouseMove(e) {
    if (!dragRef.active) return;
    const nextDx = dragRef.originDx + (e.clientX - dragRef.startX);
    const nextDy = dragRef.originDy + (e.clientY - dragRef.startY);
    if (Math.abs(nextDx - dragRef.originDx) > 3 || Math.abs(nextDy - dragRef.originDy) > 3) {
      dragRef.moved = true;
    }
    const moveX = e.clientX - dragRef.lastX;
    const moveY = e.clientY - dragRef.lastY;
    if (Math.abs(moveX) + Math.abs(moveY) > 0.2) {
      const targetAngle = Math.max(-0.95, Math.min(0.95, Math.atan2(moveY, moveX) * 0.65));
      manualAngle = manualAngle * 0.65 + targetAngle * 0.35;
    }
    dragRef.lastX = e.clientX;
    dragRef.lastY = e.clientY;
    manualOffset = { dx: nextDx, dy: nextDy };
    applyTransform();
  }

  wrap.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();
    dragRef.active = true;
    dragRef.startX = e.clientX;
    dragRef.startY = e.clientY;
    dragRef.originDx = manualOffset.dx;
    dragRef.originDy = manualOffset.dy;
    dragRef.moved = false;
    dragRef.lastX = e.clientX;
    dragRef.lastY = e.clientY;
    wrap.classList.add("is-dragging");
    document.body.style.userSelect = "none";
  });

  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseup", stopDrag);

  link.addEventListener(
    "click",
    (e) => {
      if (!suppressClick) return;
      suppressClick = false;
      e.preventDefault();
      e.stopPropagation();
    },
    true,
  );

  const blockNativeDrag = (e) => e.preventDefault();
  wrap.addEventListener("dragstart", blockNativeDrag);
  link.addEventListener("dragstart", blockNativeDrag);
}

document.getElementById("btn-lang")?.addEventListener("click", toggleLang);

setupImageLightbox();
setupThemeSelect();
setupBrandLogoDrag();
wireContactQrFallback();
setupFooterQrLightbox();
applyLinks();
applyI18n();
setupNav();
setupHeaderShadow();
setupReveal();
void setupHeroCarousel();
void setupGalleryGrid();
