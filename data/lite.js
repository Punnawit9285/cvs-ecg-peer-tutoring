/* Short concept cards: each card's body is written here as arrow chains and brief bullets.
   Loaded last (data/sections.json), so it rebuilds the html of every card listed below.
   The card's figures and flow widgets are taken from its original html in the section file;
   the text there is superseded. Block syntax (one string per block):
     '> A → B → C'      cause → effect chain          '- text'   bullet (consecutive bullets form one list)
     '## Heading'        small group label            '! text'   exam trap / past-paper note
     '| a | b |'         table row (first row = head)  '= text'   centered equation
     '@F1' '@F2'         place that figure here; figures not placed go to a column beside the text
     '@X1'               place that flow widget        {{...}}    cloze blank (keep 3–8 per card, key ideas only)
     '---'               what follows goes full width under the text and figure columns */
(function () {
  var C = window.CVS, byId = {};
  C.sections.forEach(function (s) { s.items.forEach(function (it) { byId[it.id] = it; }); });
  function inl(t) { return C.cloze(String(t)).replace(/(→|↔|⇄)/g, '<span class="lt-ar">$1</span>'); }
  function render(blocks, F, X) {
    var out = [], main = out, below = null, ul = null, tb = null, used = {};
    function flush() {
      if (ul) { out.push('<ul class="lt-pts">' + ul.join('') + '</ul>'); ul = null; }
      if (tb) {
        out.push('<div class="tblwrap"><table class="lt-tbl"><thead><tr>' + tb[0].map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr></thead><tbody>' +
          tb.slice(1).map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + inl(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>');
        tb = null;
      }
    }
    blocks.forEach(function (b) {
      var k = b.slice(0, 2), t = b.slice(2);
      if (k === '- ') { if (tb) flush(); (ul = ul || []).push('<li>' + inl(t) + '</li>'); return; }
      if (b[0] === '|') { if (ul) flush(); (tb = tb || []).push(b.replace(/^\|\s*|\s*\|\s*$/g, '').split(/\s*\|\s*/)); return; }
      flush();
      if (b === '---') { below = []; out = below; return; }
      if (k === '> ') out.push('<p class="lt-chain">' + inl(t) + '</p>');
      else if (b.slice(0, 3) === '## ') out.push('<h4 class="lt-h">' + b.slice(3) + '</h4>');
      else if (k === '! ') out.push('<p class="lt-trap">' + inl(t) + '</p>');
      else if (k === '= ') out.push('<div class="eqn">' + inl(t) + '</div>');
      else if (/^@F\d+$/.test(b)) { var i = +b.slice(2) - 1; if (!F[i]) throw new Error('no figure ' + b); used[i] = 1; out.push(F[i]); }
      else if (/^@X\d+$/.test(b)) { var j = +b.slice(2) - 1; if (!X[j]) throw new Error('no flow ' + b); out.push(X[j]); }
      else out.push('<p class="lt-p">' + inl(b) + '</p>');
    });
    flush();
    var rest = F.filter(function (f, i) { return !used[i]; });
    var text = '<div class="lt">' + main.join('') + '</div>';
    var top = rest.length ? '<div class="two lt-two">' + text + '<div class="lt-figs">' + rest.join('') + '</div></div>' : text;
    return below ? '<div class="lt">' + top + below.join('') + '</div>' : top;
  }
  C.short = function (id, blocks, opt) {
    var it = byId[id];
    if (!it || it.t !== 'c') throw new Error('short(): no concept ' + id);
    var F = [], X = [];
    String(it.html).replace(/<figure\b[\s\S]*?<\/figure>/g, function (m) { F.push(m); return m; });
    String(it.html).replace(/<div class="flowx"[^>]*><\/div>/g, function (m) { X.push(m); return m; });
    if (opt && opt.drop) F = F.filter(function (f, i) { return opt.drop.indexOf(i + 1) < 0; });
    it.html = render(blocks, F, X);
  };
})();
var S_ = CVS.short;

/* ---------- C · How the ECG is made ---------- */
S_('C-C1', [
  '> ECG = {{potential difference}} on the skin, not one cell’s voltage',
  '- Resting cells: outside + · depolarized cells: outside −',
  '> Depolarization moving toward the + electrode → {{upward}} deflection',
  '| Wave moving | Depolarization | Repolarization |',
  '| toward + | ↑ | ↓ |',
  '| away from + | ↓ | ↑ |',
  '| at 90° | biphasic | biphasic |',
  '> All at rest or all depolarized → no difference → {{flat}} line',
  '- Repolarization = mirror image: same direction, {{opposite sign}}'
]);
S_('C-C2', [
  '| Event | Current | ECG |',
  '| Atrial depolarization | atrial phase 0 | {{P wave}} |',
  '| Ventricular depolarization | {{fast Na<sup>+</sup>}} in | QRS |',
  '| Ventricular repolarization | {{K<sup>+</sup> efflux}} | T wave |',
  '| Atrial repolarization | K<sup>+</sup> out | {{hidden}} under the ventricular complex |',
  '> Wave size ∝ muscle mass → small P, big QRS',
  '- SA and AV node currents are too small to see · PR segment = time in the AV node'
]);
S_('C-C3', [
  '> Depolarization runs {{endocardium → epicardium}}',
  '> Endocardial cells have the {{longer AP}} → epicardium repolarizes first → repolarization runs epi → endo',
  '> Opposite direction × opposite sign → T has the {{same polarity}} as QRS (concordant)',
  '- T upright in II, V3–V6 · inverted in aVR',
  '! T against its QRS → think disease'
]);
S_('C-C4', [
  '| AP phase | Current | ECG |',
  '| 0 upstroke | Na<sup>+</sup> in | QRS |',
  '| 2 plateau | Ca<sup>2+</sup> ≈ K<sup>+</sup> | {{ST segment}} (isoelectric) |',
  '| 3 repolarization | K<sup>+</sup> out | {{T wave}} |',
  '| 4 rest | K<sup>+</sup> leak | {{TP segment}} |',
  '- Atrial phase 3 falls {{inside the QRS}}',
  '- Absolute refractory ≈ QRS → plateau (ST) → peak of T'
]);

/* ---------- W · Waves, intervals and segments ---------- */
S_('W-C1', [
  '- Wave = deflection · segment = {{flat stretch}} between waves · interval = wave + segment',
  '> PR segment → impulse held in the {{AV node}}',
  '- PR interval = P start → QRS start (atria + nodal delay) · QT = QRS start → {{end of T}}',
  '- ST = plateau → isoelectric · baseline best judged on the {{TP segment}}'
]);
S_('W-C2', [
  '| Measure | Normal | Abnormal |',
  '| PR | {{120–200 ms}} | < 120 pre-excitation · > 200 1st-degree block |',
  '| QRS | ≤ 100–110 ms | wider = slow ventricular conduction |',
  '| QTc | 330–440 ms (♀ ≤ 450) | 500 = prolonged |',
  '> HR ↑ → QT {{shortens}} (QT ∝ RR)',
  '- 1 small box = 40 ms → normal PR = 3–5 boxes',
  '> AV node defect → {{PR interval}} changes'
]);
S_('W-C3', [
  '| Finding | Normal | Abnormal |',
  '| P wave | upright in II, {{negative in aVR}} | negative in II |',
  '| T wave | upright in {{V3–V6}} | |',
  '| ST | within ±1 mm | elevation {{4 mm}} |',
  '| Q wave | small, < 40 ms | broad, deep → old MI |',
  '| RR | 600–1000 ms | 500 ms = 120 bpm |',
  '| Axis | −30° to +90° | |',
  '> HR = 60 000 ÷ RR (ms)'
]);
S_('W-C4', [
  '> Each wave comes {{before}} the contraction it triggers',
  '> P → {{atrial contraction}}',
  '> QRS → S1, isovolumic contraction → aortic valve opens just after the QRS',
  '> ST, T → ejection',
  '> End of T → S2 → {{isovolumic relaxation}}',
  '> Early TP → mitral opens → {{rapid filling}} (largest mitral flow)'
]);
S_('W-C5', [
  '## Sympathetic ↑ or atropine',
  '> SA faster → RR {{shortens}} · AV faster → PR shorter · QT shorter',
  '- QRS width {{unchanged}} (ventricular conduction isn’t autonomic)',
  '## Vagus ↑ (ACh on M₂)',
  '> SA slower → RR longer · AV slower → PR longer → block or pause',
  '! Drug on the SA node → measure the {{RR interval}} · ST elevation = injury, not autonomic'
]);

/* ---------- L · Limb leads ---------- */
S_('L-C1', [
  '| Lead | + | − | Angle |',
  '| I | LA | RA | 0° |',
  '| II | LL | RA | +60° |',
  '| III | LL | LA | +120° |',
  '> Lead II: + on the {{left leg}}, − on the right arm',
  '> Left arm + left foot electrodes = {{lead III}}',
  '- Right leg = {{ground}}, in no lead · II = I + III (Einthoven)',
  '> Watch on the left wrist + right finger on the crown → the {{0°}} lead'
]);
S_('L-C2', [
  '- aVR + right arm · aVL + left arm · aVF + left foot',
  '- Angles: aVL {{−30°}} · aVF {{+90°}} · aVR {{−150°}}',
  '> Six limb leads every 30° = {{hexaxial}} wheel (frontal plane)',
  '> Pairs 90° apart: I–aVF · II–aVL · III–aVR'
]);
S_('L-C3', [
  '| Swap | Effect | Unchanged lead |',
  '| RA ↔ LA (commonest) | lead I {{flips}}; II ↔ III | {{aVF}} |',
  '| RA ↔ LL | II inverted | aVL |',
  '| LA ↔ LL | III inverted | aVR |',
  '| LL ↔ RL | almost {{no change}} | all |',
  '> Unchanged lead = augmented lead of the {{limb not moved}}'
]);

/* ---------- R · Heart rate ---------- */
S_('R-C1', [
  '- 25 mm/s · 10 mm/mV · 1 small box = {{0.04 s}} · 1 big box = 0.2 s',
  '= HR = {{1500}} ÷ small boxes = 300 ÷ big boxes',
  '| Big boxes | 1 | 2 | 3 | 4 | 5 |',
  '| HR | 300 | 150 | {{100}} | 75 | 60 |',
  '- Normal sinus {{60–100}} bpm'
]);
S_('R-C2', [
  '> 1500 rule assumes 25 mm/s → other speed: count boxes, then {{correct for speed}}',
  '| Speed | Rule |',
  '| 12.5 mm/s | {{750}} ÷ small boxes |',
  '| 25 mm/s | 1500 ÷ small boxes |',
  '| 50 mm/s | {{3000}} ÷ small boxes |',
  '> Fast paper → a normal rate looks {{too slow}} → always read the printed speed'
]);
S_('R-C3', [
  '> RR varies → one RR gives a different rate each time → {{count}} instead',
  '> 12-lead rhythm strip = {{10 s}} → number of QRS × 6',
  '- AF: no P waves, wavy baseline, RR {{irregularly irregular}}, QRS narrow',
  '- In AF report the {{ventricular}} rate (QRS)'
]);

/* ---------- A · QRS axis ---------- */
S_('A-C1', [
  '| Zone | Range |',
  '| Normal | {{−30° to +90°}} |',
  '| Left axis deviation | −30° to −90° |',
  '| Right axis deviation | +90° to +180° |',
  '## Quadrant check',
  '| Lead I | aVF | Axis |',
  '| + | + | normal |',
  '| − | + | {{RAD}} |',
  '| − | − | extreme |',
  '| + | − | check lead II: + normal · − {{LAD}} |'
]);
S_('A-C2', [
  '> Each lead shows the QRS vector {{projected}} onto its axis',
  '| Angle to the lead | QRS |',
  '| 0° | tallest positive |',
  '| < 90° | more positive |',
  '| 90° | {{biphasic}} |',
  '| > 90° | {{more negative}} |',
  '| 180° | deepest negative |',
  '- Flat (R ≈ S) lead at axis +30° → III · −30° → II · +60° → aVL'
]);
S_('A-C3', [
  '## Shortcut',
  '> Limb leads only → find the most {{biphasic}} → axis is ±90° from it → check the lead there: upright → that way',
  '## Direct',
  '> Mark each lead + or − → axis ≈ {{midpoint}} of the two farthest + leads (± 15°)',
  '- Example: equiphasic {{aVL}} (−30°) → +60° or −120° → II tall → +60°',
  '! Confirm with the quadrant: lead I and aVF must agree'
]);
S_('A-C4', [
  '> 1 · Rate: read the {{paper speed}} → 1500 ÷ boxes → correct',
  '> 2 · Axis: lead I, aVF → then {{lead II}} if I + / aVF −',
  '> 3 · QRS width: under {{3 small boxes}}',
  '- Then pick the option that matches all three'
]);

/* ---------- E · ECG lab ---------- */
S_('E-C1', [
  '- 10 electrodes → 12 leads · limb leads = frontal plane · chest leads = {{horizontal plane}}',
  '| Lead | Position |',
  '| V1 | 4th ICS, right sternal border |',
  '| V2 | 4th ICS, {{left}} sternal border |',
  '| V3 | midway V2–V4 |',
  '| V4 | 5th ICS, {{midclavicular}} line |',
  '| V5 | {{anterior axillary}} line, level with V4 |',
  '| V6 | mid-axillary line |'
]);
S_('E-C2', [
  '| Criterion | Check |',
  '| Rate | 60–100 |',
  '| Origin | {{SA node}} |',
  '| Conduction | every P → QRS, {{1 : 1}} |',
  '| P shape | same within one lead |',
  '| P direction | upright in II, inverted in {{aVR}} |',
  '! P waves differ between leads (match only within a lead) · not “positive in all leads”'
]);
S_('E-C3', [
  '| Rhythm | ECG |',
  '| 1st-degree AV block | PR > 200 ms, all conducted |',
  '| 2nd-degree | some P {{not followed}} by QRS |',
  '| 3rd-degree | P and QRS {{dissociated}} (atria 70, ventricles 40) |',
  '| SA node failure | {{AV node}} takes over: slow, narrow QRS |',
  '| AF | no P, irregularly irregular, QRS narrow |',
  '> Narrow QRS → ventricles still use the {{His–Purkinje}} system → problem above the ventricles'
]);
S_('E-C4', [
  '> Rate (regular?) → P wave → QRS height → axis → T wave → ST → PR → QT',
  '- Normal: axis −30° to +90° · PR {{0.12–0.20 s}} · ST on the {{isoelectric}} line',
  '- P: normal, notched, biphasic, peaked · T: normal, {{inverted}}, tent-shaped',
  '! “Which interpretation is wrong?” → check each row · usually {{two}} are wrong'
]);
