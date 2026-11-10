#!/bin/sh
# Crop the course figures listed in tools/crops.txt from the source PDFs (src-pdf/, not published) into img/*.jpg.
# Coordinates are normalized (0-1, origin top-left); w=<px> sets the page render width (default 2000) for small pasted images. ONLY=<pattern> limits the run. Then writes data/figs.js.
set -e
cd "$(dirname "$0")/.."
[ tools/pdfrender -nt tools/pdfrender.swift ] || swiftc -O -o tools/pdfrender tools/pdfrender.swift
grep -v '^#' tools/crops.txt | while read -r name pdf page x0 y0 x1 y1 rest; do
  [ -n "$name" ] || continue
  [ -n "$ONLY" ] && ! echo "$name" | grep -q "$ONLY" && continue
  w=2000; flags=""
  for f in $rest; do case "$f" in w=*) w="${f#w=}";; *) flags="$flags $f";; esac; done
  tools/pdfrender crop "src-pdf/$pdf.pdf" "$page" "$w" $x0 $y0 $x1 $y1 "img/$name.jpg" $flags 2>/dev/null >/dev/null
done
ls img/*.jpg | wc -l
tools/dims.sh
