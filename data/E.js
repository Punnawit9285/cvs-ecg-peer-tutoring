/* Section E: ECG lab, recording and reading a 12-lead.
   Sources: Lab Direction - ECG p.1-3, Peer - EKG p.1-2 (tutor notes), ECG TBL t-RAT 2569 / 2568, i-RAT 266-66 (key),
   AC75 (heart block lab items), AC76-81, AC77 (dog lab item). Past-paper stems and options keep their original wording and order. */
CVS.add({
  id: 'E', short: 'Lab', title: 'ECG lab: record and read a 12-lead', kind: 'Lab',
  blurb: 'Electrode positions for the 12 leads, the criteria for sinus rhythm, the rhythms that are not sinus, and the lab sheet’s order for reading a whole tracing.',
  items: [
    { t: 'c', id: 'E-C1', title: 'Recording a 12-lead in the lab', src: 'Lab Direction p.2–3 (Fig 10-2)',
      html: '<div class="two"><div class="stack"><p><b>10 electrodes → 12 leads.</b> Four limb electrodes (RA, LA, LL, and RL as ground) give I, II, III, aVR, aVL, aVF. Six chest electrodes give V1–V6.</p>' +
        '<div class="tblwrap"><table class="tbl compact"><thead><tr><th>Lead</th><th>Electrode position</th></tr></thead><tbody>' +
        '<tr><td>V1</td><td>{{4th ICS, right}} sternal border</td></tr>' +
        '<tr><td>V2</td><td>{{4th ICS, left}} sternal border</td></tr>' +
        '<tr><td>V3</td><td>{{midway between V2 and V4}}</td></tr>' +
        '<tr><td>V4</td><td>5th ICS, {{midclavicular line}}</td></tr>' +
        '<tr><td>V5</td><td>{{anterior axillary line}}, level with V4</td></tr>' +
        '<tr><td>V6</td><td>{{mid-axillary line}}, level with V4 and V5</td></tr></tbody></table></div>' +
        '<p class="note">The chest leads see the heart in the {{horizontal plane}}; the six limb leads see the frontal plane.</p></div>' +
        '<div class="stack">' + CVS.fig('lab-electrodes', 'Fig 10-2: limb electrodes RA, LA, RL, LL and chest electrodes V1–V6 with the mid-clavicular, anterior and mid-axillary lines.', 'lab', 2) +
        CVS.fig('lab-12leads', 'Fig 10-2 (lower part): the normal complex in each of the 12 leads; note the negative complex in aVR.', 'lab', 2) + '</div></div>' +
        '<p class="trap">V1 and V2 sit in the {{4th}} intercostal space; V4–V6 run outward along the 5th-space level, so V5 is not on the same vertical line as V4.</p>' },
    { t: 'q', id: 'E1', src: 'AC76',
      q: 'Which of the following is the correct position of lead V2 placement in 12-lead EKG?',
      o: ['4th left intercostal space - along margin of the sternum', '4th right intercostal space - along margin of the sternum', '5th right intercostal space - mid-clavicular line', '5th right intercostal space - mid-axillary line', '5th right intercostal space - anterior axillary line'],
      a: 0,
      ex: 'V2 sits in the 4th intercostal space at the left sternal border. The 4th right space is V1.' },
    { t: 'q', id: 'E2', src: 'AC77',
      q: 'Which of the following is the correct position of lead V4 placement in 12-lead EKG?',
      o: ['4th left intercostal space - along margin of the sternum', '4th right intercostal space - along margin of the sternum', '5th right intercostal space - mid-clavicular line', '5th right intercostal space - mid-axillary line', '5th right intercostal space - anterior axillary line'],
      a: 2,
      ex: 'V4 is in the 5th intercostal space on the (left) midclavicular line. Mid-axillary is V6; anterior axillary is V5.',
      flag: 'The recalled options repeat the V2 item and say “right” for every 5th-space choice. V4 is on the left; pick the 5th space + midclavicular line.' },
    { t: 'q', id: 'E3', src: 'i-RAT 266-66', core: true,
      q: 'Which of the following is the correct positioning of the EKG electrode for lead V4?',
      o: ['At the 5th intercostal space to the left of the sternum', 'At the 5th intercostal space at the midclavicular line', 'At the 5th intercostal space at the anterior axillary line', 'At the 5th intercostal space at the midaxillary line'],
      a: 1,
      ex: 'V4 = 5th intercostal space, midclavicular line. Then V5 is the anterior axillary line and V6 the mid-axillary line at the same level.' },
    { t: 'q', id: 'E4', src: 'AC78',
      q: 'What is the position of lead V5?',
      o: ['4th ICS and parasternal border', '5th ICS and parasternal border', '4th ICS and midclavicular line', '5th ICS and midclavicular line', '5th ICS and anterior axillary line'],
      a: 4,
      ex: 'V5 is on the anterior axillary line at the level of V4 (5th space). 5th space midclavicular is V4.' },
    { t: 'q', id: 'E5', src: 't-RAT 2568', core: true,
      q: 'A 62-year-old man presents to the emergency department with chest pain radiating to his left arm. An ECG is performed. During lead placement, the medical student assisting asks about the correct anatomical location for placing lead V5. Where should lead V5 be placed?',
      o: ['On the midaxillary line in the 5th intercostal space', 'On the midclavicular line in the 5th intercostal space', 'On the anterior axillary line in the 5th intercostal space', 'On the left side of the sternum in the 4th intercostal space'],
      a: 2,
      ex: 'V5 = anterior axillary line at the V4 level. Midaxillary is V6, midclavicular is V4, and the 4th space beside the sternum is V2.' },

    { t: 'c', id: 'E-C2', title: 'What makes a rhythm sinus', src: 'Peer – EKG p.1–2 (tutor notes) · TBL RATs · AC75 · AC81',
      html: '<div class="tblwrap"><table class="tbl"><thead><tr><th>Criterion</th><th>What you check on the tracing</th></tr></thead><tbody>' +
        '<tr><td>Rate</td><td>{{60–100}} bpm</td></tr>' +
        '<tr><td>Origin</td><td>the impulse comes from the {{SA node}}</td></tr>' +
        '<tr><td>Conduction</td><td>every P is followed by a QRS, {{1 : 1}}</td></tr>' +
        '<tr><td>P shape</td><td>{{monomorphic}}: the same shape beat after beat within one lead</td></tr>' +
        '<tr><td>P direction</td><td>upright in {{lead II}}, inverted in {{aVR}}</td></tr></tbody></table></div>' +
        '<p class="trap">“Uniform P morphology in every lead” is <b>not</b> a criterion: P waves differ {{from lead to lead}}; they only have to match within the same lead.</p>' +
        '<p class="trap">“Positive P waves in all leads” is wrong too, because the P is {{negative in aVR}}.</p>' },
    { t: 'q', id: 'E6', src: 'AC75',
      q: 'Which of the following is the character of sinus rhythm?',
      o: ['Normal 100-120 bpm', 'Negative P wave aVL', 'Each P wave followed by QRS complex', 'Originated from sinus'],
      a: [2, 3],
      ex: 'Sinus rhythm starts in the SA node and every P is followed by a QRS. The normal rate is 60–100 bpm, and the P is negative in aVR, not aVL.',
      flag: 'No key, and two options are true as recalled: “originated from sinus” is the definition and “each P followed by QRS” is the ECG criterion. If the real paper wanted one ECG feature, it is the P–QRS option.' },
    { t: 'q', id: 'E7', src: 't-RAT 2569', core: true,
      q: 'Which of the following statements is correct regarding the normal sinus rhythm?',
      o: ['Positive P waves in all leads', 'Monomorphic P waves in all leads', 'QRS complexes preceded by P waves in all leads', 'Normal rate between 50-100 bpm'],
      a: 2,
      ex: 'Every QRS is preceded by its P wave. P is negative in aVR, P waves only need to be monomorphic within each lead, and the normal rate is 60–100 bpm.' },
    { t: 'q', id: 'E8', src: 't-RAT 2568',
      q: 'Which of the following ECG findings would most strongly suggest that the rhythm is normal sinus origin?',
      o: ['QRS rate between 40–60 bpm', 'inverted P waves in lead II', 'P wave followed by QRS in 1:1 ratio', 'Positive P wave in lead aVR'],
      a: 2,
      ex: 'A P before every QRS in a 1:1 ratio shows the atria drive the ventricles. 40–60 bpm is a junctional escape rate; inverted P in II or upright P in aVR means the impulse starts away from the SA node.' },
    { t: 'q', id: 'E9', src: 'i-RAT 266-66', core: true,
      q: 'Which of the following is NOT required to determine a normal sinus rhythm?',
      o: ['A heart rate of 60-100 bpm', 'Primary pacemaker at the sinoatrial node', 'P wave precedes every QRS complex', 'Uniform P wave morphology in every lead'],
      a: 3,
      ex: 'P waves look different in different leads; they only need the same shape within one lead. The other three are sinus criteria.' },
    { t: 'q', id: 'E10', src: 'AC81', core: true,
      q: 'From the EKG, which of the following is correct? (Paper speed 25 mm/s)<br><span class="muted">(ภาพในข้อสอบมี 13 QRS complexes · the exam image had 13 QRS complexes)</span>',
      fig: CVS.fig('ac81-ecg', 'AC81 Q4: 12-lead at 25 mm/s.', 'ac81', 23),
      o: ['Bradycardia', 'Sinus rhythm', 'Prolonged PR interval', 'Abnormal ST segment elevation', 'Normal QRS axis'],
      a: 1,
      ex: 'AC81 short key: sinus rhythm. Each QRS has a P before it, upright in II. 13 QRS in the 10-second strip ≈ 78 bpm, so not bradycardia; PR and ST are normal; lead I is negative with aVF positive, so the axis is not normal.' },

    { t: 'c', id: 'E-C3', title: 'When the rhythm is not sinus', src: 'AC75 (heart block lab) · AC77 (dog lab) · i-RAT 266-66',
      html: '<div class="tblwrap"><table class="tbl"><thead><tr><th>Rhythm</th><th>ECG pattern</th></tr></thead><tbody>' +
        '<tr><td>1st-degree AV block</td><td>PR {{&gt; 200 ms}}; every P still conducted</td></tr>' +
        '<tr><td>2nd-degree AV block</td><td>some P waves are {{not followed by a QRS}}</td></tr>' +
        '<tr><td>3rd-degree (complete) AV block</td><td>P waves and QRS complexes {{dissociated}}: atria at the sinus rate, ventricles at a slower escape rate (e.g. 70 vs 40)</td></tr>' +
        '<tr><td>SA node failure</td><td>the next pacemaker, the {{AV node}} (junction), takes over: slow, narrow QRS, P absent or abnormal</td></tr>' +
        '<tr><td>Atrial fibrillation</td><td>no P waves, RR {{irregularly irregular}}, {{QRS still narrow}}</td></tr></tbody></table></div>' +
        '<p class="note">Narrow QRS = the ventricles are still activated through the {{His–Purkinje system}}, so the problem sits above the ventricles.</p>' +
        '<p class="trap">Pulse deficit (apex rate &gt; radial pulse) is real in AF, but it is found by {{feeling the pulse}}, not on the ECG.</p>' },
    { t: 'q', id: 'E11', src: 'AC75', core: true,
      q: 'An 80-year-old woman presents with syncope. The 12 EKG lead shows 70 bpm of atrial rate and 40bpm of ventricular rate. There is also no association between sinus p wave and QRS complex. Which of the following is most likely conduction abnormality?',
      o: ['1st degree av block', '2nd degree av block', '3rd degree av block', 'SA exit block', 'Right bundle branch block'],
      a: 2,
      ex: 'No relationship between P and QRS, with the atria faster than the ventricles, is complete (3rd-degree) AV block: an escape pacemaker below the block drives the ventricles at 40 bpm.' },
    { t: 'q', id: 'E12', src: 'AC75',
      q: 'A 70-year-old man presents with dyspnea on... An EKG shows 50 bpm with regular narrow Q wave. However, P wave is abnormally seen SA node abnormality is diagnosed. Which of the following structure is a pacemaker cell in this patient?',
      o: ['AV node', 'Bundle branch', 'Purkinje fiber', 'Atrium', 'Ventricle'],
      a: 0,
      ex: 'With the SA node failing, the next fastest pacemaker, the AV node (junction), takes over. A narrow QRS shows the impulse starts above the ventricles and uses the normal His–Purkinje route.',
      flag: 'Recall wording: “narrow Q wave” means a narrow QRS complex.' },
    { t: 'q', id: 'E13', src: 'AC77',
      q: 'What is an EKG finding during atrial defibrillation?',
      o: ['Regular rhythm', 'Pulse deficit', 'Tall P wave', 'Narrow QRS complexes', 'Slow ventricular rate'],
      a: 3,
      ex: 'In atrial fibrillation the ventricles are still activated through the normal conduction system, so the QRS stays narrow. The rhythm is irregular, there are no P waves, and the ventricular rate is usually fast.',
      flag: '“Atrial defibrillation” in the recall means atrial fibrillation. Pulse deficit is a bedside finding in AF, not an ECG finding.' },

    { t: 'c', id: 'E-C4', title: 'The lab sheet: read every tracing in this order', src: 'Lab Direction p.3–4 (items 2.2.2–2.2.9)',
      html: '<div class="two"><ol class="steps">' +
        '<li><b>Rate</b> (per minute) and whether it is {{regular}}.</li>' +
        '<li><b>P wave</b>: normal, {{notched}}, biphasic or tall-peaked.</li>' +
        '<li><b>QRS height</b> in V1, V5 and V6 (mm), normal or not.</li>' +
        '<li><b>QRS axis</b> in degrees: normal is {{−30° to +90°}}.</li>' +
        '<li><b>T wave</b>: normal, {{inverted}} or tent-shaped.</li>' +
        '<li><b>ST segment</b>: on the isoelectric line, {{elevated}} or depressed.</li>' +
        '<li><b>PR interval</b> in seconds: normal {{0.12–0.20 s}}.</li>' +
        '<li><b>QT interval</b> in seconds, judged against the heart rate.</li></ol>' +
        CVS.fig('lab-readout', 'Lab sheet items 2.2.3–2.2.7: the P-wave, T-wave and ST-segment shapes to tick.', 'lab', 3) + '</div>' +
        '<p class="trap">Combined “which interpretation is wrong?” items: check each row of the table against the tracing, one by one; usually {{two}} rows are wrong.</p>' },
    { t: 'q', id: 'E14', src: 'AC80', core: true,
      q: 'Interpret this ECG (รูปจากอินเทอร์เน็ตที่ใกล้เคียง)<br><span class="muted">(The picture is a similar ECG found online, not the exam image.)</span>',
      fig: CVS.fig('ac80-ecg', 'AC80 Q1: stand-in 12-lead found online by the AC80 writers.', 'ac80', 9),
      o: ['Tachycardia', 'ST elevation', 'Right axis deviation', 'Prolonged PR interval', 'Non-sinus rhythm'],
      a: 2,
      ex: 'Lead I is mostly negative (deep S), aVF and lead III are upright and lead II is nearly flat: right axis deviation. The RR is about 4 big boxes (≈ 75–80 bpm), so not tachycardia.',
      flag: 'No key, and the AC80 writers used a stand-in image. On this image right axis deviation is the clear finding; the real exam tracing may have differed.' },
    { t: 'q', id: 'E15', src: 't-RAT 2569', core: true,
      q: 'A 2nd-year medical student is working on an ECG assignment and has interpreted the tracing as shown in the table. Which of the following interpreted parameters is INCORRECT?',
      fig: CVS.fig('t69-table', 't-RAT 2569 Q14: tracing at 25 mm/s and the student’s interpretation table (pen marks removed).', 'ekg', 10),
      o: ['Rate and QRS axis', 'Rhythm and P wave', 'QRS axis and QRS complex', 'PR interval and ST segment'],
      a: 2,
      ex: 'Leads I, II, III and aVF are all upright, so the axis is normal, not left axis deviation. The QRS is under 3 small boxes, so it is narrow, not wide. Rate 75 bpm (RR 4 big boxes), sinus rhythm, PR 160 ms and an isoelectric ST are correct.' },
    { t: 'open', id: 'E16', src: 'Lab sheet', core: false,
      q: 'Lab sheet 2.2: you have printed your partner’s 12-lead. Read it in the order of the sheet and say what a normal result is for each item.',
      ans: 'Rate 60–100 per minute, regular. P wave upright in II, smooth (no notch, not biphasic, not tall-peaked). QRS height in V1, V5 and V6 within normal for your partner (V1 mostly negative, V5–V6 mostly positive). Axis −30° to +90°. T wave upright (not inverted, not tent-shaped) except aVR. ST segment on the isoelectric line (within ±1 mm). PR 0.12–0.20 s. QT judged against the rate (QTc 330–440 ms).' }
  ]
});
