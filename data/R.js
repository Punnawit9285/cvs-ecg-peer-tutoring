/* Section R: Heart rate from the tracing.
   Sources: Peer - EKG p.1-2 (tutor notes: standardization, 1500 rule, speed correction), ECG TBL t-RAT 2569 / 2568, i-RAT 266-66 (key), AC75-81.
   Past-paper stems and options keep their original wording and order. */
CVS.add({
  id: 'R', short: 'Rate', title: 'Heart rate from the tracing', kind: 'Lecture',
  blurb: 'ECG paper standardization, the 1500 and 300 rules, correcting for paper speeds other than 25 mm/s, and counting an irregular rhythm.',
  items: [
    { t: 'c', id: 'R-C1', title: 'ECG paper and the 1500 rule', src: 'Peer – EKG p.1–2 (tutor notes) · i-RAT 266-66 key',
      html: '<div class="cols2"><div class="mini"><h4>Standardization</h4><ul>' +
        '<li>Paper speed: {{25 mm/s}}</li><li>Gain: {{10 mm/mV}} (the calibration box at the start of each row)</li>' +
        '<li>1 small box = 1 mm = {{0.04 s}} (40 ms)</li><li>1 big box = 5 small = 5 mm = {{0.2 s}}</li></ul></div>' +
        '<div class="mini"><h4>Rate from one RR interval (regular rhythm, standard speed)</h4><ul>' +
        '<li>HR = {{1500}} ÷ small boxes between two R waves</li><li>HR = {{300}} ÷ big boxes</li>' +
        '<li>HR = 60 ÷ RR in seconds: RR 0.8 s → {{75 bpm}}</li></ul></div></div>' +
        '<div class="tblwrap"><table class="tbl compact"><thead><tr><th>Big boxes between R waves</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr></thead><tbody>' +
        '<tr><td>Heart rate (bpm)</td><td>300</td><td>150</td><td>{{100}}</td><td>75</td><td>{{60}}</td><td>50</td></tr></tbody></table></div>' +
        '<p class="note">Why the rule works: in one minute the paper moves (speed × 60 s) millimetres, and each small box is 1 mm. Normal sinus rate {{60–100}} bpm.</p>' },
    { t: 'q', id: 'R1', src: 'AC75', core: true,
      q: 'RR interval 15 mm หา heart rate (ความเร็วกระดาษ 25 mm/s)?<br><span class="muted">RR interval 15 mm: find the heart rate (paper speed 25 mm/s).</span>',
      o: ['50 bpm', '75 bpm', '100 bpm', '150 bpm', '200 bpm'],
      a: 2,
      ex: '15 mm = 15 small boxes at 25 mm/s = 0.6 s. HR = 1500 ÷ 15 = 100 bpm.' },
    { t: 'q', id: 'R2', src: 'i-RAT 266-66',
      q: 'In this EKG, which runs at a speed of 25 mm/s, what is the heart rate?',
      fig: CVS.fig('ir-rate100', 'i-RAT Q15: 12-lead at 25 mm/s.', 'ekg', 47),
      o: ['50 bpm', '100 bpm', '150 bpm', '200 bpm'],
      a: 1,
      ex: 'The R waves are 15 small boxes (3 big boxes) apart: 1500 ÷ 15 = 100 bpm.' },
    { t: 'q', id: 'R3', src: 'AC78',
      q: 'An ECG shows with an ECG speed of 25 mm/s, what is the heart rate?',
      fig: CVS.fig('ac78-rate', 'AC78 Q22: leads V5 and V6 at 25 mm/s.', 'ac75', 20),
      o: ['25', '50', '100', '200', '300'],
      a: 2,
      ex: 'The R waves are about 3 big boxes (15 small boxes) apart: 300 ÷ 3 = 100 bpm.',
      flag: 'The printed copy is small; the RR measures about 15 small boxes. Check the box count on the original if you show it on video.' },

    { t: 'c', id: 'R-C2', title: 'When the paper runs at another speed', src: 'Peer – EKG p.1–2 (tutor notes) · i-RAT 266-66 key · AC76 · AC80 · AC81',
      html: '<p>The 1500 rule assumes 25 mm/s. For any speed, count the boxes first, then correct:</p>' +
        '<p class="eqn"><span>HR = 1500 ÷ small boxes × <b>speed ÷ 25</b></span><span>= 60 × speed (mm/s) ÷ RR (mm)</span></p>' +
        '<div class="tblwrap"><table class="tbl compact"><thead><tr><th>Paper speed</th><th>The tracing looks</th><th>Rule</th></tr></thead><tbody>' +
        '<tr><td>12.5 mm/s</td><td>squeezed, half as wide</td><td>{{750}} ÷ small boxes</td></tr>' +
        '<tr><td>25 mm/s</td><td>standard</td><td>1500 ÷ small boxes</td></tr>' +
        '<tr><td>30 mm/s</td><td>a little stretched</td><td>{{1800}} ÷ small boxes</td></tr>' +
        '<tr><td>50 mm/s</td><td>{{stretched, twice as wide}}</td><td>{{3000}} ÷ small boxes</td></tr>' +
        '</tbody></table></div>' +
        '<div class="cols2"><div class="mini art"><h4>Worked: i-RAT Q14</h4><p>50 mm/s, RR = 18 small boxes. 1500 ÷ 18 = 83 is the trap; × 2 for the speed = {{168 bpm}}.</p></div>' +
        '<div class="mini ven"><h4>Worked: AC76 Q7</h4><p>12.5 mm/s, RR = 15 mm. 1500 ÷ 15 = 100, × 0.5 = {{50 bpm}}.</p></div></div>' +
        '<p class="trap">Fast paper makes a normal rate look {{too slow}}; slow paper makes it look fast. Always read the speed printed under the tracing.</p>' },
    { t: 'q', id: 'R4', src: 'AC76', core: true,
      q: 'If an EKG paper that is run with a speed of 12.5 mm/sec reveal sinus rhythm with R-R interval of 15 mm, what is the heart rate?',
      o: ['25', '50', '75', '100', '150'],
      a: 1,
      ex: 'At 12.5 mm/s, 15 mm of paper = 1.2 s. HR = 60 ÷ 1.2 = 50 bpm (or 750 ÷ 15).' },
    { t: 'q', id: 'R5', src: 'AC80',
      q: 'Given that Paper velocity = 12.5, RR interval = 15 small boxes, what is the heart rate?',
      o: ['100', '50', '200', '25', '150'],
      a: 1,
      ex: 'Same numbers as R4: 15 small boxes at 12.5 mm/s = 1.2 s, so 50 bpm. 100 is the answer you get if you forget the speed.' },
    { t: 'q', id: 'R6', src: 'i-RAT 266-66', core: true,
      q: 'In this EKG, which runs at a speed of 50 mm/s, what is the heart rate?',
      fig: CVS.fig('ir-rate168', 'i-RAT Q14: 12-lead at 50 mm/s.', 'ekg', 47),
      o: ['21 bpm', '42 bpm', '84 bpm', '168 bpm'],
      a: 3,
      ex: 'The RR is about 18 small boxes. At 25 mm/s that would be 1500 ÷ 18 ≈ 83, but the paper runs twice as fast, so the true rate is about 168 bpm (3000 ÷ 18).' },
    { t: 'q', id: 'R7', src: 't-RAT 2569',
      q: 'In this ECG, which runs at a speed of 50 mm/s, what is the heart rate?',
      fig: CVS.fig('t69-rate50', 't-RAT 2569 Q12: 12-lead at 50 mm/s.', 'ekg', 8),
      o: ['50 bpm', '100 bpm', '150 bpm', '200 bpm'],
      a: 3,
      ex: 'The R waves are about 15 small boxes apart. 1500 ÷ 15 = 100 at standard speed; doubled for 50 mm/s = 200 bpm.' },
    { t: 'q', id: 'R8', src: 'AC81', core: true,
      q: 'From the given EKG, find the heart rate. (Paper speed 50 mm/s)',
      fig: CVS.fig('ac81-rate', 'AC81 Q2: rhythm strip at 50 mm/s.', 'ac81', 22),
      o: ['50 bpm', '80 bpm', '100 bpm', '150 bpm', '200 bpm'],
      a: 4,
      ex: 'AC81 short key: 200 bpm. Count the small boxes between R waves, apply 1500 ÷ boxes, then double for 50 mm/s.' },
    { t: 'q', id: 'R9', src: 'AC77',
      q: 'ให้กราฟ 50 mm/s เมื่อนับ QRS ได้ 18 wave ถาม Heart rate<br><span class="muted">A tracing at 50 mm/s is given; 18 QRS waves are counted. What is the heart rate?</span>',
      o: ['50 bpm', '100 bpm', '150 bpm', '200 bpm', '250 bpm'],
      a: 3,
      ex: 'Read literally: 18 QRS complexes on a standard 250 mm strip. At 50 mm/s that strip covers only 5 s, so 18 × 12 ≈ 216 bpm, nearest 200 bpm.',
      flag: 'Recalled stem, no key. If “18” was really 18 small boxes between R waves (as in i-RAT Q14, R6), the rate is 3000 ÷ 18 ≈ 167 bpm, and the nearest option would be 150. Teach the method, not the letter.' },
    { t: 'q', id: 'R10', src: 't-RAT 2568', core: true,
      q: 'A 35-year-old man presents to the Emergency Department with progressive dyspnea. A 12-lead ECG is obtained, revealing the findings shown. The paper speed is 30 mm/sec. What is the heart rate?',
      fig: CVS.fig('t68-dyspnea', 't-RAT 2568 Q12–13: 12-lead, paper speed 30 mm/s.', 'ekg', 40),
      o: ['35 – 40 bpm', '60 – 65 bpm', '70 – 75 bpm', '100 – 105 bpm'],
      a: 2,
      ex: 'The R waves are about 25 small boxes (5 big boxes) apart. 1500 ÷ 25 = 60 at 25 mm/s; × 30/25 = 72 bpm.' },

    { t: 'c', id: 'R-C3', title: 'Irregular rhythm: count, don’t divide', src: 't-RAT 2568 (tutor notes on Q14)',
      html: '<ul class="pts"><li>When the RR intervals {{vary}}, one RR gives a different rate every time you measure.</li>' +
        '<li>Count instead: the rhythm strip along the bottom of a 12-lead is {{10 s}} long at 25 mm/s (250 mm).</li>' +
        '<li>Rate ≈ number of QRS complexes in the strip × {{6}}.</li>' +
        '<li>Example (t-RAT 2568 Q14): 22 QRS in the strip → {{132}} bpm.</li></ul>' +
        '<div class="cols2"><div class="mini art"><h4>Atrial fibrillation on the strip</h4><ul><li>no P waves: a {{wavy, fibrillating baseline}}</li><li>RR {{irregularly irregular}}</li><li>QRS narrow: the ventricles still conduct normally</li></ul></div>' +
        '<div class="mini ven"><h4>Ventricular vs atrial rate</h4><p>In AF you count the {{ventricular rate}} (QRS); the atria fire far faster and cannot be counted.</p></div></div>' },
    { t: 'q', id: 'R11', src: 't-RAT 2568', core: true,
      q: 'This ECG is recorded at a speed of 25 mm/sec. What is the estimated ventricular rate based on this tracing?',
      fig: CVS.fig('t68-af', 't-RAT 2568 Q14: 25 mm/s; the bottom row is a 10-second strip.', 'ekg', 42),
      o: ['66 bpm', '99 bpm', '132 bpm', '162 bpm'],
      a: 2,
      ex: 'The rhythm is irregularly irregular without P waves (AF), so divide-by-boxes fails. About 22 QRS complexes fill the 10-second strip: 22 × 6 = 132 bpm.' }
  ]
});
