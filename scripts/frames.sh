#!/bin/sh
# ./scripts/frames.sh loop.mp4 [count=120] [width=960]  → assets/frames/f0001.jpg … for scroll-scrub.
# Requires ffmpeg:  brew install ffmpeg
set -e
in="$1"; n="${2:-120}"; w="${3:-960}"
dur=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$in")
fps=$(python3 -c "print($n/$dur)")
mkdir -p assets/frames
ffmpeg -y -i "$in" -vf "fps=$fps,scale=$w:-2" -q:v 4 assets/frames/f%04d.jpg
ls assets/frames | wc -l
