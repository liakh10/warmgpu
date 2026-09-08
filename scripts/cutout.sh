#!/bin/sh
# ./scripts/cutout.sh input.png [out.png]  → removes background with rembg (installed globally).
set -e
in="$1"; out="${2:-scripts/src/cut-$(basename "${in%.*}").png}"
mkdir -p "$(dirname "$out")"
rembg i "$in" "$out"
echo "→ $out"
