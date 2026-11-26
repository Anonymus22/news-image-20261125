# news-image-20261125 — THE WORLD TODAY

[![news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/Anonymus22/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/Anonymus22/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125)

Sum up the world's news of **Wednesday, 25 November 2026** in one image: a
one-page daily news poster — **THE WORLD TODAY** — with 45 verified stories
from every continent.

- **3 lead panels**: two tankers ablaze in the Strait of Hormuz, sweeping new
  US tariffs, and stocks sliding again as the AI rout deepens.
- **Panels 4–14 illustrated** (Houthi claim on Ras Tanura, Hamas security
  chief killed in Gaza, Russia's war dead at 490,334, Ukraine's deep strikes,
  Merz on Russia, North Korea expelling a Swiss diplomat, the Solomons ending
  its China pact, Sudan, Netanyahu, the US anti-scam sweep, the Iowa blast).
- **Briefs 15–45** with capitalised datelines, a dark world map with numbered
  red pins for panels 1–14 and grey dots for the briefs, a region tally
  (Mideast 4 · Americas 20 · Europe 9 · Asia-Pacific 5 · Africa 6 · Oceania 1),
  a "THE DAY IN NUMBERS" strip, a "THE DAY IN UTC" timeline, and a
  **DATE CHECK** box listing Tuesday's stories deliberately left out.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts   # writes /output/entry.png
```

`main.ts` (Node 22, standard library only) copies the poster `entry.png`
(1024×1024 PNG, under 1 MiB) to `$MAKEFUN_OUTPUT_DIR/entry.png`, falling back
to `/output`. The copy is byte-for-byte, so repeated runs are identical.

`poster.html` is the poster's source; `render.mjs` screenshots it to
`entry.png` with headless Chromium.

## Bounty

[news-image-20261125 on make.fun](https://make.fun/bounty/news-image-20261125)
— $100 prize, top 50 entries paid. Deadline: Friday, 27 November 2026,
00:00 UTC.
