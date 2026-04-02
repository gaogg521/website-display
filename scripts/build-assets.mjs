/**
 * 1) 品牌角标：优先复制面板 `龙虾可视化控制面板/public/brand-mark.png`（与运行中侧栏完全一致）；
 *    若不存在再用 scripts/process-brand-mark.mjs + docs/readme-logo.png 生成。
 * 2) 将 brand-mark 同步为 public/logo.png（favicon 等兼容）
 * 3) 轮播：carousel-sources/ → public/carousel/slide-XX.webp（contain + 透明边）
 * 4) 界面一瞥：面板 docs/ 与 README「预览」对应的多张大图 → public/gallery/g-XX.webp + gallery-manifest.json
 * 5) 联系区：docs/QQ群.png、微信.png → public/contact/*.webp
 * 运行：npm run assets
 */
import { execFileSync } from "child_process";
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const wwwRoot = path.join(__dirname, "..");
const publicDir = path.join(wwwRoot, "public");
const carouselDir = path.join(publicDir, "carousel");
const panelRoot = path.join(wwwRoot, "..", "龙虾可视化控制面板");
const panelDocs = path.join(panelRoot, "docs");

const W = 1020;
const H = 700;

/** 首页轮播源图目录（勿提交到 public/，避免 dist 带上大 PNG） */
const CAROUSEL_SOURCES_DIR = path.join(wwwRoot, "carousel-sources");

/** 展示顺序：与 main.js 中 carousel.cap1–cap5 一一对应 */
const CAROUSEL_SLIDES = [
  "仪表盘.png",
  "专家战队.png",
  "模型列表.png",
  "专家工作室.png",
  "极简部署1.png",
];

/** 无 carousel-sources 时的回退（面板 docs） */
const LEGACY_CAROUSEL = [
  "bot_dashboard.png",
  "专家战队.png",
  "models-preview.png",
  "pixel-office.png",
  "极简的安装.png",
];

async function main() {
  const scriptPath = path.join(panelRoot, "scripts", "process-brand-mark.mjs");
  const readmeLogo = path.join(panelDocs, "readme-logo.png");
  const panelBrand = path.join(panelRoot, "public", "brand-mark.png");
  const brandOut = path.join(publicDir, "brand-mark.png");
  const logoOut = path.join(publicDir, "logo.png");

  let brandOk = false;
  if (fs.existsSync(panelBrand)) {
    fs.copyFileSync(panelBrand, brandOut);
    brandOk = true;
    console.log("Copied panel public/brand-mark.png → www public/ (authoritative)");
  } else if (fs.existsSync(scriptPath) && fs.existsSync(readmeLogo)) {
    try {
      execFileSync(process.execPath, [scriptPath, readmeLogo, brandOut], {
        stdio: "inherit",
        cwd: panelRoot,
      });
      brandOk = true;
      console.log("Generated public/brand-mark.png from readme-logo (panel brand-mark missing)");
    } catch (e) {
      console.warn("[assets] process-brand-mark failed:", e?.message || e);
    }
  }
  if (!brandOk) {
    console.warn("No brand-mark source — keep existing public/brand-mark.png if any");
  }
  if (fs.existsSync(brandOut)) {
    fs.copyFileSync(brandOut, logoOut);
    console.log("Synced public/logo.png from brand-mark.png");
  }

  fs.mkdirSync(carouselDir, { recursive: true });
  fs.mkdirSync(CAROUSEL_SOURCES_DIR, { recursive: true });

  let jobs = CAROUSEL_SLIDES.filter((f) => fs.existsSync(path.join(CAROUSEL_SOURCES_DIR, f))).map((f) => ({
    input: path.join(CAROUSEL_SOURCES_DIR, f),
  }));

  if (jobs.length === 0) {
    jobs = LEGACY_CAROUSEL.filter((f) => fs.existsSync(path.join(panelDocs, f))).map((f) => ({
      input: path.join(panelDocs, f),
    }));
    if (jobs.length) console.log("Carousel: using legacy panel docs/ assets (add files under carousel-sources/ for cropped CN screenshots)");
  }

  if (jobs.length === 0) {
    const fallback = path.join(publicDir, "hero-dashboard.png");
    if (fs.existsSync(fallback)) {
      jobs.push({ input: fallback }, { input: fallback }, { input: fallback });
    } else {
      console.warn("No carousel-sources/, no docs screenshots, no hero-dashboard.png — skip carousel.");
      jobs = [];
    }
  }

  let i = 0;
  if (jobs.length > 0) {
    for (const { input } of jobs) {
      i += 1;
      const out = path.join(carouselDir, `slide-${String(i).padStart(2, "0")}.webp`);
      await sharp(input)
        .ensureAlpha()
        .resize(W, H, {
          fit: "contain",
          position: "center",
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .webp({ quality: 90, effort: 4 })
        .toFile(out);
      console.log("Wrote", path.relative(wwwRoot, out), "<-", path.basename(input));
    }

    for (let j = i + 1; j <= 12; j++) {
      const stale = path.join(carouselDir, `slide-${String(j).padStart(2, "0")}.webp`);
      if (fs.existsSync(stale)) {
        fs.unlinkSync(stale);
        console.log("Removed stale", path.relative(wwwRoot, stale));
      }
    }

    const manifest = {
      count: i,
      slides: Array.from({ length: i }, (_, j) => `/carousel/slide-${String(j + 1).padStart(2, "0")}.webp`),
    };
    fs.writeFileSync(path.join(publicDir, "carousel-manifest.json"), JSON.stringify(manifest, null, 2));
    console.log("Wrote public/carousel-manifest.json");
  } else {
    console.warn("Carousel skipped — no input files; leaving existing carousel-manifest.json if any.");
  }

  const galleryDir = path.join(publicDir, "gallery");
  const GALLERY_MAX_W = 1680;
  /** 与 README.md「预览」图文顺序大致对应；缺文件则跳过 */
  const GALLERY_ITEMS = [
    { file: "bot_dashboard.png", capKey: "gallery.c1" },
    { file: "dashboard.png", capKey: "gallery.c2" },
    { file: "models-preview.png", capKey: "gallery.c3" },
    { file: "pixel-office.png", capKey: "gallery.c4" },
    { file: "游戏场景-办公室.png", capKey: "gallery.c5" },
    { file: "会话列表.png", capKey: "gallery.c6" },
    { file: "记忆管理.png", capKey: "gallery.c7" },
    { file: "快速聊天对话.png", capKey: "gallery.c8" },
    { file: "告警中心.png", capKey: "gallery.c9" },
    { file: "极简的安装.png", capKey: "gallery.c10" },
  ];

  fs.mkdirSync(galleryDir, { recursive: true });
  const galleryManifestItems = [];
  let gIdx = 0;
  for (const { file, capKey } of GALLERY_ITEMS) {
    const input = path.join(panelDocs, file);
    if (!fs.existsSync(input)) continue;
    gIdx += 1;
    const name = `g-${String(gIdx).padStart(2, "0")}.webp`;
    const out = path.join(galleryDir, name);
    await sharp(input)
      .rotate()
      .resize(GALLERY_MAX_W, null, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 86, effort: 4 })
      .toFile(out);
    galleryManifestItems.push({ src: `/gallery/${name}`, capKey });
    console.log("Gallery", name, "<-", file);
  }

  for (let j = gIdx + 1; j <= 16; j++) {
    const stale = path.join(galleryDir, `g-${String(j).padStart(2, "0")}.webp`);
    if (fs.existsSync(stale)) {
      fs.unlinkSync(stale);
      console.log("Removed stale", path.relative(wwwRoot, stale));
    }
  }

  fs.writeFileSync(
    path.join(publicDir, "gallery-manifest.json"),
    JSON.stringify({ items: galleryManifestItems }, null, 2),
  );
  console.log("Wrote public/gallery-manifest.json", `(${galleryManifestItems.length} items)`);

  const contactDir = path.join(publicDir, "contact");
  fs.mkdirSync(contactDir, { recursive: true });
  const CONTACT_QR = [
    ["QQ群.png", "qq-qr.webp"],
    ["微信.png", "wechat-qr.webp"],
  ];
  for (const [srcName, destName] of CONTACT_QR) {
    const input = path.join(panelDocs, srcName);
    const out = path.join(contactDir, destName);
    if (!fs.existsSync(input)) {
      console.warn("Missing contact QR source:", srcName);
      continue;
    }
    await sharp(input)
      .rotate()
      .resize(400, 400, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 92, effort: 4 })
      .toFile(out);
    console.log("Contact", destName, "<-", srcName);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
