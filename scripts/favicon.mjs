// node scripts/favicon.mjs <avatar.png|jpg>  → assets/favicon.png (512, cover) + assets/apple-icon.png (180)
import sharp from "sharp";
const [src] = process.argv.slice(2);
if (!src) { console.error("usage: node scripts/favicon.mjs <avatar>"); process.exit(1); }
await sharp(src).resize(512, 512, { fit: "cover" }).png().toFile("assets/favicon.png");
await sharp(src).resize(180, 180, { fit: "cover" }).png().toFile("assets/apple-icon.png");
console.log("→ assets/favicon.png, assets/apple-icon.png");
