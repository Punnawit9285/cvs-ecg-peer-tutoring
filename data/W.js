/* Section W: Waves, intervals and segments.
   Sources: Lab Direction - ECG p.1, Peer - EKG p.1-2 (tutor notes, filled-in values), Peer - Physiology of the Heart p.2 (Wiggers sketch),
   ECG TBL t-RAT 2569 / 2568, i-RAT 266-66 (with key), AC75-79. Past-paper stems and options keep their original wording and order. */
CVS.add({
  id: 'W', short: 'Waves', title: 'Waves, intervals and segments', kind: 'Lecture',
  blurb: 'Naming the parts of the tracing, what each interval times, the normal values the exam checks, the ECG on the cardiac cycle, and what autonomic tone changes.',
  items: [
    { t: 'c', id: 'W-C1', title: 'Waves, segments and intervals', src: 'Lab Direction p.1 · t-RAT 2569 · t-RAT 2568',
      html: '<div class="two"><div class="stack"><ul class="pts">' +
        '<li><b>Wave</b>: a deflection away from baseline: P, Q, R, S, T, U.</li>' +
        '<li><b>Segment</b>: a {{flat stretch between two waves}}: the PR, ST and TP segments.</li>' +
        '<li><b>Interval</b>: a {{wave plus the segment after it}}. PR interval = start of P → start of QRS. QT interval = start of QRS → {{end of T}}.</li>' +
        '<li><b>PR segment</b> (end of P → QRS): the impulse is held in the {{AV node}}, so this stretch measures AV nodal delay.</li>' +
        '<li><b>ST segment</b>: the ventricles are all depolarized ({{plateau}}), so it sits on the isoelectric line.</li>' +
        '<li><b>Isoelectric line</b>: the baseline, best judged on the {{TP segment}} where the whole heart is at rest.</li>' +
        '</ul></div>' +
        CVS.fig('lab-waves', 'Fig 10-1: P, QRS, T and U waves; PR interval, PR segment, QRS duration, ST segment and QT interval. Calibration 10 mV mark at left.', 'lab', 1) + '</div>' +
        '<p class="trap">PR <i>interval</i> includes the P wave (atrial depolarization + nodal delay); PR <i>segment</i> is only the {{AV delay}} part.</p>' },
    { t: 'q', id: 'W1', src: 't-RAT 2568', core: true,
      q: 'A 12-lead ECG from a 40-year-old woman is shown below. Identify the ECG components labeled A and B, respectively.',
      fig: CVS.fig('t68-labels', 't-RAT 2568 Q8: arrows A (lead II) and B (lead V2).', 'ekg', 38),
      o: ['P wave, T wave', 'PR interval, TP segment', 'Q wave, ST segment', 'P wave, ST segment'],
      a: 3,
      ex: 'Arrow A points at the small hump before the QRS in lead II: the P wave. Arrow B points at the flat stretch just after the QRS in V2: the ST segment.' },
    { t: 'q', id: 'W2', src: 't-RAT 2569', core: true,
      q: 'A 2nd-year medical student is studying the effects of a cardiovascular drug. He obtains ECG recordings from healthy individuals and measures the duration of specific parts of the ECG. A lead II recording from a healthy individual is shown. A specific part of the recording is marked with “X”. Which of the following cardiac electrophysiological properties best explains the duration of the marked part in the recording?',
      fig: CVS.fig('t69-prseg', 't-RAT 2569 Q8: lead II with the part marked X.', 'ekg', 7),
      o: ['Transmission of the electrical impulse through the AV node', 'Atrial depolarization which corresponds to atrial conntraction', 'Interval between ventricular depolarization and repolarization', 'Ventricular depolarization which corresponds to ventricular systole'],
      a: 0,
      ex: 'X is the PR segment, from the end of the P wave to the start of the QRS. During it the impulse crosses the slow AV node, so its length is AV nodal delay. Atrial depolarization is the P wave itself; ventricular depolarization is the QRS.' },
    { t: 'q', id: 'W3', src: 't-RAT 2568',
      q: 'Which of the following correctly matches an ECG segment with the corresponding phase of the cardiac cycle?',
      o: ['P wave – Ventricular systole', 'PR interval – Atrial depolarization and AV nodal delay', 'QRS complex – Ventricular repolarization', 'ST segment – Ventricular filling'],
      a: 1,
      ex: 'The PR interval runs from the start of P (atrial depolarization) to the start of QRS, so it holds atrial depolarization plus AV nodal delay. The P wave precedes atrial, not ventricular, systole; QRS is depolarization; the ST segment falls in ventricular ejection, not filling.' },

    { t: 'c', id: 'W-C2', title: 'Intervals time the conduction', src: 'Peer – EKG p.2 (tutor notes) · i-RAT 266-66 key',
      html: '<div class="tblwrap"><table class="tbl"><thead><tr><th>Measure</th><th>What it times</th><th>Normal</th><th>Too short / too long</th></tr></thead><tbody>' +
        '<tr><td><b>PR interval</b></td><td>atria start → ventricles start (incl. AV node)</td><td>{{120–200 ms}}</td><td>&lt; 120: {{pre-excitation}} (impulse skips the AV node) · &gt; 200: {{1st-degree AV block}}</td></tr>' +
        '<tr><td><b>QRS width</b></td><td>ventricular depolarization</td><td>≤ {{100–110 ms}}</td><td>&lt; 120 ms; wider = slow ventricular conduction</td></tr>' +
        '<tr><td><b>QT interval</b></td><td>ventricles depolarize → finish repolarizing</td><td>QT ∝ RR ∝ 1/HR</td><td>shortens when the heart rate {{rises}}</td></tr>' +
        '<tr><td><b>QTc</b></td><td>QT corrected for heart rate: QT / √RR</td><td>{{330–440 ms}} (♀ up to {{450}})</td><td>QTc 500 ms = prolonged</td></tr>' +
        '</tbody></table></div>' +
        '<p class="note">Box count at 25 mm/s: 1 small box = 40 ms, so a normal PR = {{3–5}} small boxes and QRS ≤ 110 ms ≈ under 3 small boxes.</p>' +
        '<p class="trap">An AV-node conduction defect changes the {{P-to-QRS time}}, not the QT or ST.</p>' },
    { t: 'q', id: 'W4', src: 'i-RAT 266-66', core: true,
      q: 'Which of the following components in the EKG will be altered if there is a conduction defect of the atrioventricular node?',
      o: ['PR interval', 'QT interval', 'RR interval', 'ST segment'],
      a: 0,
      ex: 'The PR interval contains the AV nodal delay, so slower AV conduction lengthens it (PR > 200 ms = 1st-degree AV block). QT and ST belong to the ventricles; RR reflects the SA node rate.' },
    { t: 'q', id: 'W5', src: 'i-RAT 266-66', core: true,
      q: 'Regarding the EKG, which of the following findings is ABNORMAL?',
      o: ['QRS interval 100 msec', 'PR interval 100 msec', 'Heart rate 100 bpm with a sinus rhythm', 'Negative T wave in lead aVR'],
      a: 1,
      ex: 'PR 100 ms is shorter than 120 ms: the impulse reached the ventricles too early (pre-excitation). QRS 100 ms is normal, 100 bpm is the upper limit of normal sinus rate, and T is normally negative in aVR.' },

    { t: 'c', id: 'W-C3', title: 'Normal or not? The findings the exam checks', src: 'Peer – EKG p.2 · i-RAT 266-66 key · AC75–79',
      html: '<div class="two"><div class="tblwrap"><table class="tbl compact"><thead><tr><th>Finding</th><th>Normal</th><th>Abnormal example</th></tr></thead><tbody>' +
        '<tr><td>P wave polarity</td><td>{{upright in II}}, {{negative in aVR}}</td><td>negative P in II</td></tr>' +
        '<tr><td>T wave polarity</td><td>upright in V3–V6</td><td>—</td></tr>' +
        '<tr><td>ST segment</td><td>isoelectric, deviation within {{±1 mm}}</td><td>{{ST elevation 4 mm}}; depression 2 mm</td></tr>' +
        '<tr><td>Q wave</td><td>small q, width {{&lt; 40 ms}}</td><td>broad, deep Q: old {{myocardial infarction}}</td></tr>' +
        '<tr><td>PR · QRS · QT</td><td>PR 160 ms · QRS 100 ms · QTc 330–440</td><td>PR 240 · QRS 140 · QT 140 · QTc 500</td></tr>' +
        '<tr><td>RR interval</td><td>{{600–1000 ms}} (60–100 bpm)</td><td>RR 500 ms = {{120 bpm}}</td></tr>' +
        '<tr><td>QRS axis</td><td>−30° to +90°, so 30° is {{inside the range}}</td><td>see section A</td></tr>' +
        '</tbody></table></div>' +
        CVS.fig('peer-st-elev', 'ST segment elevation: the segment after the QRS sits well above the baseline (dashed lines).', 'ekg', 2) + '</div>' +
        '<p class="trap">Convert RR to rate before judging it: HR = 60 000 ÷ RR (ms). RR 800 ms = 75 bpm (normal).</p>' },
    { t: 'q', id: 'W6', src: 'i-RAT 266-66', core: true,
      q: 'Regarding the EKG, which of the following findings is normal?',
      o: ['Negative P wave in lead aVR', 'QTc interval 500 msec', 'RR interval 500 msec', 'ST segment depression 2 mm'],
      a: 0,
      ex: 'aVR looks at the heart from the right shoulder, so the normal P (and QRS and T) is negative there. QTc 500 ms is prolonged, RR 500 ms means 120 bpm, and ST depression of 2 mm is beyond ±1 mm.' },
    { t: 'q', id: 'W7', src: 'AC77',
      q: 'Which of the following is normal EKG?',
      o: ['PR interval 240 ms', 'QT interval 140 ms', 'Negative P wave in Lead II', 'Negative P wave in Lead VR', 'RR interval 500 ms'],
      a: 3,
      ex: 'A negative P in aVR is normal sinus rhythm. PR 240 ms is a 1st-degree AV block, QT 140 ms is far too short, a negative P in lead II means the impulse is not coming from the SA node, and RR 500 ms is 120 bpm.' },
    { t: 'q', id: 'W8', src: 'AC78',
      q: 'Which of the following is a normal EKG pattern?',
      o: ['PR Interval 240 msec', 'QRS wave 140 msec', 'Positive T wave in leadV3', 'RR interval 500 msec', 'Negative P wave in lead II'],
      a: 2,
      ex: 'T waves are normally upright in V3–V6. PR 240 ms is prolonged, QRS 140 ms is wide, RR 500 ms is tachycardia, and a negative P in lead II is not sinus.' },
    { t: 'q', id: 'W9', src: 'AC75', core: true,
      q: 'Abnormal EKG?',
      o: ['Positive P lead II (positive t?)', 'Negative P aVR', 'PR interval 120-200 msec', 'QRS width 60-110 msec', 'Broad Q & high altitude'],
      a: 4,
      ex: 'A broad (> 40 ms), deep Q wave marks an old myocardial infarction. The other four are the normal findings: P upright in II and negative in aVR, PR 120–200 ms, QRS up to 110 ms.',
      flag: 'Recall wording. "High altitude" most likely means high amplitude (a deep Q), and "(positive t?)" shows the writer was unsure whether option A said P or T; both are normal in lead II.' },
    { t: 'q', id: 'W10', src: 'AC79',
      q: 'What is abnormal EKG?',
      o: ['PR interval 160 msec', 'QRS 100 msec', 'ST segment elevated 4 mm', 'RR interval 800 msec', 'QRS axis 30 องศา <span class="muted">(30 degrees)</span>'],
      a: 2,
      ex: 'The ST segment should stay within ±1 mm of the baseline; 4 mm of elevation is abnormal (acute injury). PR 160 ms, QRS 100 ms, RR 800 ms (75 bpm) and an axis of 30° are all normal.' },
    { t: 'q', id: 'W11', src: 'AC79',
      q: 'Which of the following considered as an abnormal ECG finding',
      o: ['RR interval 800 msec', 'PR interval 160 msec', 'ST segment elevation 4 mm', 'QRS interval 100 msec', 'QRS axis 30'],
      a: 2,
      ex: 'Same item as W10 with the options reordered: only the 4 mm ST elevation is outside normal limits.' },

    { t: 'c', id: 'W-C4', title: 'The ECG on the cardiac cycle', src: 'Peer – Physiology of the Heart p.2 · t-RAT 2569 · t-RAT 2568 · AC75–77',
      html: '<div class="two"><div class="stack"><p>Electrical events come first; each wave {{precedes}} the contraction it triggers.</p>' +
        '<div class="flow col">' +
        '<div class="fbox start"><b>P wave</b> → {{atrial contraction}} (the atrial kick at the end of filling)</div><div class="farrow">↓</div>' +
        '<div class="fbox art"><b>QRS</b> → ventricles contract: AV valves close ({{S1}}), {{isovolumic contraction}}, then the aortic valve opens just after the QRS</div><div class="farrow">↓</div>' +
        '<div class="fbox art"><b>ST · T</b> → ejection (rapid, then reduced during T)</div><div class="farrow">↓</div>' +
        '<div class="fbox ven"><b>End of T</b> → aortic valve closes ({{S2}}) → {{isovolumic relaxation}}</div><div class="farrow">↓</div>' +
        '<div class="fbox ven"><b>Early TP segment</b> → mitral valve opens → {{rapid filling}}: the largest flow across the mitral valve</div>' +
        '</div></div>' +
        CVS.fig('peer-wiggers', 'Tutor’s Wiggers sketch: aortic, LV and LA pressure, LV volume and the ECG trace, with the phases labelled underneath.', 'heart', 2) + '</div>' },
    { t: 'q', id: 'W12', src: 'AC75, AC77', core: true,
      q: 'Which of the following occurred after P wave in EKG test?',
      o: ['Atrial contraction', 'Ventricular filling', 'Ventricular contraction', 'Isovolumic relaxation', 'Isovolumic contraction'],
      a: 0,
      ex: 'The P wave is atrial depolarization, and the atria contract right after it. Ventricular contraction and isovolumic contraction follow the QRS; isovolumic relaxation follows the T wave.' },
    { t: 'q', id: 'W13', src: 'AC76',
      q: 'Which of the following event occurs just after the T wave?',
      o: ['Atrial contraction', 'Decreased ventricular filling', 'Decreased ventricular ejection', 'Isovolumetric relaxation', 'Closure of mitral valve'],
      a: 3,
      ex: 'The T wave ends ventricular repolarization; the aortic valve closes (S2) and the ventricle relaxes with all valves shut: isovolumetric relaxation. Reduced ejection happens during the T wave; atrial contraction follows the next P; the mitral valve closes at the QRS.' },
    { t: 'q', id: 'W14', src: 't-RAT 2568',
      q: 'The opening of the aortic valve corresponds most closely to which component of the ECG?',
      o: ['P wave', 'QRS complex', 'PR interval', 'T wave'],
      a: 1,
      ex: 'The QRS starts ventricular contraction; once LV pressure passes aortic pressure (end of isovolumic contraction) the aortic valve opens, right at the end of the QRS. The T wave is near aortic valve closure.',
      flag: 'Strictly the valve opens just after the QRS, around the start of the ST segment. Among the options the QRS complex is the closest.' },
    { t: 'q', id: 'W15', src: 't-RAT 2569', core: true,
      q: 'ECG below is obtained from a 52-year-old healthy man. Blood flow across the mitral valve is largest around which indicated point on this ECG tracing?',
      fig: CVS.fig('t69-mitral', 't-RAT 2569 Q5: points A–D marked on one cardiac cycle.', 'ekg', 6),
      o: ['A', 'B', 'C', 'D'],
      a: 3,
      ex: 'Point D, just after the T wave, is early diastole: the mitral valve has opened and rapid ventricular filling carries the largest flow. B (the P wave) only leads to the smaller atrial kick; C is during ejection when the mitral valve is shut.' },

    { t: 'c', id: 'W-C5', title: 'Autonomic tone changes the timing', src: 'i-RAT 266-66 key · t-RAT 2569 · AC79',
      html: '<div class="cols2"><div class="mini art"><h4>Sympathetic up · or atropine (vagus blocked)</h4><ul>' +
        '<li>SA node fires faster → {{RR interval shortens}} (HR up)</li>' +
        '<li>AV node conducts faster → PR gets shorter</li>' +
        '<li>QT ∝ RR → QT {{shortens}}</li>' +
        '<li>QRS width {{unchanged}}: ventricular conduction is not autonomic</li></ul></div>' +
        '<div class="mini ven"><h4>Vagus up (acetylcholine on M₂)</h4><ul>' +
        '<li>SA node slower → RR {{lengthens}}</li>' +
        '<li>AV node slower → PR {{lengthens}}</li>' +
        '<li>Strong vagal effect → AV block or a pause</li></ul></div></div>' +
        '<p class="note">To see a drug act on the SA node, measure the {{RR interval}}, which is the heart rate.</p>' +
        '<p class="trap">ST elevation is not an autonomic effect: it means {{myocardial injury}}. QRS amplitude does not grow with sympathetic tone.</p>' },
    { t: 'q', id: 'W16', src: 'i-RAT 266-66',
      q: 'What would be the expected change to the EKG of a person with an increase in the sympathetic tone?',
      o: ['An increase in the R-R interval', 'An increase in the amplitude of the QRS complex', 'A shortened QT interval', 'A narrower QRS complex'],
      a: 2,
      ex: 'Sympathetic tone raises the heart rate, so RR falls, and QT shortens with it (QT ∝ RR). It does not make the QRS taller or narrower.' },
    { t: 'q', id: 'W17', src: 't-RAT 2569', core: true,
      q: 'Which of the following changes to the ECG does NOT occur in a person who is given a muscarinic antagonist?',
      o: ['Unchanged QRS interval', 'Decreased RR interval', 'Decreased QT interval', 'Elevated ST segment'],
      a: 3,
      ex: 'Blocking muscarinic receptors removes vagal brake: HR up (RR down), QT down with RR, QRS width unchanged. ST elevation is a sign of myocardial injury, not of a muscarinic blocker.' },
    { t: 'q', id: 'W18', src: 'AC79',
      q: 'ให้ atropine ไปที่ SA node check ผลที่ไหนของ EKG<br><span class="muted">Atropine is given to act on the SA node. Where on the EKG do you check its effect?</span>',
      o: ['RR interval', 'QT interval', 'ST segment', 'PR interval', 'QRS comple'],
      a: 0,
      ex: 'The SA node sets the heart rate, which the ECG shows as the RR interval: atropine shortens it. PR reflects the AV node, QT and ST the ventricles.' }
  ]
});
