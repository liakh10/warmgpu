// node scripts/to-webp.mjs [srcDir=scripts/src] [outDir=assets] [maxSide=1600]
// Converts png/jpg to webp (quality 82), resizes long side to maxSide, keeps alpha.
import sharp from "sharp";
import { readdirSync, mkdirSync } from "node:fs";
import { join, parse } from "node:path";
const [src = "scripts/src", out = "assets", max = "1600"] = process.argv.slice(2);
mkdirSync(out, { recursive: true });
for (const f of readdirSync(src)) {
  if (!/\.(png|jpe?g)$/i.test(f)) continue;
  const name = parse(f).name.toLowerCase().replace(/[^a-z0-9-]+/g, "-");
  await sharp(join(src, f))
    .resize({ width: +max, height: +max, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(join(out, `${name}.webp`));
  console.log("→", `${out}/${name}.webp`);
}
