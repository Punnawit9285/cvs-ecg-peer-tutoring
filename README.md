# CVS I Basic ECG & ECG Lab · Peer support 82

Question-first peer-tutoring deck for **CVS I: the basic ECG lecture (TBL) and the ECG lab**, built from the tutor’s *Peer – EKG* notes, Lab Direction – ECG, the ECG TBL t-RAT 2569 / 2568 and i-RAT 266-66 sets, and the ECG items of AC75–81.

## Open it

| | Link |
|---|---|
| **Student deck** (present to the audience) | https://punnawit9285.github.io/cvs-ecg-peer-tutoring/student.html |
| **Tutor deck** (second screen: answers, Thai explanations, tutor notes, script) | https://punnawit9285.github.io/cvs-ecg-peer-tutoring/tutor.html |
| **Student handout PDF** | https://punnawit9285.github.io/cvs-ecg-peer-tutoring/student.pdf?v=3b439cdb |

Open the student and tutor decks in the same browser and tick *Follow student* in the tutor deck: it jumps to whatever card the student deck shows.

## Sections

- **C · Cardiophysiology**: dipoles and skin electrodes, which cells make which wave, why the T wave is upright, action-potential phases on the tracing
- **W · Waves**: waves, segments and intervals, normal values (PR, QRS, QTc, ST), the ECG on the cardiac cycle, autonomic effects
- **L · Leads**: bipolar and augmented limb leads, the hexaxial wheel, perpendicular pairs, swapped electrodes
- **R · Rate**: paper standardization, the 1500 rule, other paper speeds, irregular rhythms
- **A · Axis**: axis zones, the lead I + aVF quadrant check, projection, two ways to read the axis, combined rate-axis items
- **E · Lab**: electrode positions, sinus rhythm, rhythms that are not sinus, the lab sheet’s reading order

23 concept cards (191 cloze blanks, 37 real figures) and 89 questions (45 core, done in the video).

## Pages

- **`student.html`** (also `index.html`, `dist/deck.html`): Present and Browse modes, *Core only* filter, click-to-reveal cloze blanks (`Space` next blank, `Enter` all, `R` hide), click an option to see the answer, a collapsible Thai *Explanation* under each concept card (`L`), click-to-zoom figures, swipe on phones.
- **`tutor.html`** (also `dist/notes.html`): the same cards with every answer and blank revealed, Thai bullets, the English recording script (5-video plan, 80% summaries, SAY lines), tutor notes beyond the slides, *Follow student*.
- **`student.pdf`**: A4 handout. Each concept on one page with its blanks numbered and empty, then the quiz on that concept without answers. At the back: the answer key with Thai explanations, the blank answers, and each concept’s Thai key points and explanation.

## Building

```bash
tools/crops.sh     # crop the figures listed in tools/crops.txt from src-pdf/ (not published) into img/, then write data/figs.js
node check.js      # validate IDs, answer keys, cloze blanks, figures and every Thai / tutor layer
node build.js all  # bundle student.html / index.html / dist/deck.html and tutor.html / dist/notes.html
tools/pdf.sh       # student.pdf: print.js -> dist/print.html -> headless Chrome, twice (set CHROME=... if Chrome is not in /Applications)
```

Content lives in `data/<section>.js` (listed in `data/sections.json`). Thai layers: `src/thai-data.js` (`THAI_Q`, `THAI_CONCEPT`, `THAI_SEC`, shared by both decks and the PDF) and `src/thai-explain.js`. Tutor-only: `src/tutor-notes.js`, `src/tutor-script.js`. Past-paper stems and options keep their original wording and order; uncertain keys carry a recall note.
