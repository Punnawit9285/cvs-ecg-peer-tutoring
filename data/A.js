/* Section A: QRS axis.
   Sources: Peer - EKG p.1-2 (tutor notes: axis wheel, quadrant check, shortcut and direct methods), ECG TBL t-RAT 2569 / 2568, i-RAT 266-66 (key),
   AC75-81. Past-paper stems and options keep their original wording and order. */
CVS.add({
  id: 'A', short: 'Axis', title: 'QRS axis', kind: 'Lecture',
  blurb: 'Axis zones, the lead I + aVF quadrant check, how big each lead’s QRS should be, two ways to read the axis off a 12-lead, and combined rate-axis items.',
  items: [
    { t: 'c', id: 'A-C1', title: 'Axis zones and the quadrant check', src: 'Peer – EKG p.1–2 (tutor notes) · i-RAT 266-66 key',
      html: '<div class="two"><div class="stack"><div class="tblwrap"><table class="tbl compact"><thead><tr><th>Zone</th><th>Range</th></tr></thead><tbody>' +
        '<tr><td>Normal</td><td>{{−30° to +90°}}</td></tr><tr><td>Left axis deviation</td><td>{{−30° to −90°}}</td></tr>' +
        '<tr><td>Right axis deviation</td><td>{{+90° to +180°}}</td></tr><tr><td>Extreme (northwest)</td><td>−90° to ±180°</td></tr></tbody></table></div>' +
        '<div class="tblwrap"><table class="tbl compact"><thead><tr><th>Lead I</th><th>aVF</th><th>Axis</th></tr></thead><tbody>' +
        '<tr><td>+</td><td>+</td><td>{{normal axis}} (0° to +90°)</td></tr>' +
        '<tr><td>−</td><td>+</td><td>{{RAD}}</td></tr>' +
        '<tr><td>−</td><td>−</td><td>{{extreme axis}}</td></tr>' +
        '<tr><td>+</td><td>−</td><td>look at {{lead II}}: + → still normal (0° to −30°); − → {{LAD}}</td></tr>' +
        '</tbody></table></div></div>' +
        CVS.fig('peer-axis-wheel', 'Axis wheel: normal −30° to 90° (green), left axis deviation (purple), right (blue), extreme (red).', 'ekg', 1) + '</div>' +
        '<p class="trap">LAD and “lead I +, aVF −” are not the same thing: 0° to −30° also gives I + / aVF −, and it is normal. Lead {{II negative}} is what proves LAD.</p>' },
    { t: 'q', id: 'A1', src: 'AC75',
      q: 'QRS axis เป็นยังไง ให้ Lead 1 - biphasic, Lead aVF positive, Lead 3 – positive?<br><span class="muted">What is the QRS axis when lead I is biphasic, aVF positive and lead III positive?</span>',
      o: ['Unidentified', 'Right deviation', 'Left deviation', 'Normal axis', 'Extreme …'],
      a: 3,
      ex: 'Lead I biphasic puts the axis at ±90°; aVF positive picks +90°. With the course range −30° to +90°, +90° is the edge of normal.',
      flag: 'Recall item with no key. The answer sits exactly on the border (+90°). The course range counts +90° as normal; some books call anything past +90° right axis deviation.' },
    { t: 'q', id: 'A2', src: 'AC79',
      q: '(ให้ภาพ EKG มา) Lead I negative, Lead aVF positive ถาม QRS axis<br><span class="muted">(An ECG was shown.) Lead I negative, lead aVF positive: what is the QRS axis?</span>',
      o: ['Normal axis', 'Left axis deviation', 'Right axis deviation', 'Extreme axis deviation'],
      a: 2,
      ex: 'Lead I negative means the axis points right of +90° or above; aVF positive keeps it in the lower half. Together: +90° to +180°, right axis deviation.' },
    { t: 'q', id: 'A3', src: 'i-RAT 266-66', core: true,
      q: 'What will be seen in a person with right axis deviation?',
      o: ['Lead I will be positive and lead II will be positive.', 'Lead II will be negative and lead aVF will be positive.', 'Lead I will be negative and lead II will be negative.', 'Lead I will be negative and the lead aVF will be positive.'],
      a: 3,
      ex: 'Right axis deviation (+90° to +180°) points away from lead I (0°) and toward aVF (+90°): lead I negative, aVF positive.' },
    { t: 'q', id: 'A4', src: 't-RAT 2569',
      q: 'A 43-year-old woman with chronic pulmonary hypertension presents to the emergency department with dyspnea lasting 2 hours. Her ECG shows right axis deviation. What ECG findings would you expect?',
      o: ['Lead I positive and Lead II positive', 'Lead aVL positive and Lead aVF positive', 'Lead I negative and Lead aVF negative', 'Lead I negative and Lead aVF positive'],
      a: 3,
      ex: 'Same pattern as A3: right axis deviation gives lead I negative with aVF positive. Lead I and aVF both negative is the extreme axis.' },
    { t: 'q', id: 'A5', src: 't-RAT 2568', core: true,
      q: 'A 43-year-old woman with long-standing hypertension presents to the emergency department with chest pain lasting 2 hours. Her ECG shows left axis deviation. What ECG findings would you expect?',
      o: ['Lead I positive and Lead II positive', 'Lead aVL positive and Lead aVF positive', 'Lead I negative and Lead aVF negative', 'Lead I positive and Lead III negative'],
      a: 3,
      ex: 'Left axis deviation (−30° to −90°) points up-left: lead I positive, and leads II, III and aVF negative. Lead I and II both positive is a normal axis.' },

    { t: 'c', id: 'A-C2', title: 'How big should each lead’s QRS be?', src: 'Peer – EKG p.2 (tutor notes) · TBL RATs · AC77–81',
      html: '<p>Each lead shows the mean QRS vector {{projected onto its own axis}}.</p>' +
        '<div class="tblwrap"><table class="tbl"><thead><tr><th>Angle between axis and lead</th><th>QRS in that lead</th></tr></thead><tbody>' +
        '<tr><td>0° (pointing at the lead)</td><td>{{tallest positive}}</td></tr>' +
        '<tr><td>acute, &lt; 90°</td><td>{{more positive than negative}}</td></tr>' +
        '<tr><td>90° (perpendicular)</td><td>{{biphasic}}: R ≈ S</td></tr>' +
        '<tr><td>obtuse, &gt; 90°</td><td>{{more negative than positive}}</td></tr>' +
        '<tr><td>180° (pointing away)</td><td>{{deepest negative}}</td></tr>' +
        '</tbody></table></div>' +
        '<div class="tblwrap"><table class="tbl compact"><thead><tr><th>Axis</th><th>−60°</th><th>−30°</th><th>+30°</th><th>+60°</th><th>+120°</th></tr></thead><tbody>' +
        '<tr><td>Equiphasic lead</td><td>aVR</td><td>{{II}}</td><td>{{III}}</td><td>{{aVL}}</td><td>aVR</td></tr>' +
        '<tr><td>Tallest R</td><td>aVL</td><td>aVL</td><td>I ≈ II</td><td>II</td><td>{{III}}</td></tr></tbody></table></div>' +
        '<p class="trap">“Highest amplitude” can mean the tallest R or the deepest S. For −60° the AC81 key accepted both aVL (tallest R) and lead III (deepest S).</p>' },
    { t: 'q', id: 'A6', src: 't-RAT 2569', core: true,
      q: 'Which ECG lead will be biphasic in a person whose QRS axis is +30 degrees?',
      o: ['Lead II', 'Lead III', 'Lead aVL', 'Lead aVR'],
      a: 1,
      ex: 'The biphasic lead is 90° away from the axis: +30° + 90° = +120°, which is lead III.' },
    { t: 'q', id: 'A7', src: 't-RAT 2568',
      q: 'Which ECG lead is most likely to appear biphasic in a patient whose QRS axis is approximately -30 degrees?',
      o: ['Lead I', 'Lead II', 'Lead aVL', 'Lead aVF'],
      a: 1,
      ex: '−30° + 90° = +60°, lead II. That is why lead II decides normal versus left axis deviation at the −30° border.' },
    { t: 'q', id: 'A8', src: 'i-RAT 266-66', core: true,
      q: 'Which EKG lead will be biphasic in a person whose cardiac axis is positive 60 degrees?',
      o: ['Lead I', 'Lead II', 'Lead III', 'Lead aVL'],
      a: 3,
      ex: '+60° − 90° = −30°, which is aVL. Lead II (+60°) would show the tallest R.' },
    { t: 'q', id: 'A9', src: 't-RAT 2569', core: true,
      q: 'A ventricular depolarization wave, when traveling −60 degrees in the frontal plane, will cause a large negative deflection in which lead?',
      o: ['aVR', 'aVL', 'Lead II', 'Lead III'],
      a: 3,
      ex: 'Lead III points to +120°, exactly opposite −60° (180° apart), so it records the largest negative deflection. aVR (−150°) is 90° away and biphasic; aVL (−30°) is positive.' },
    { t: 'q', id: 'A10', src: 'AC80',
      q: 'QRS axis is +120 degrees. Which leads show the highest amplitude of R?',
      o: ['II', 'III', 'aVL', 'aVF', 'aVR'],
      a: 1,
      ex: 'Lead III sits at +120°, the same direction as the axis, so its R wave is the tallest.' },
    { t: 'q', id: 'A11', src: 'AC81', core: true,
      q: 'EKG shows the QRS axis is approximately -60 degrees. Which lead will show the highest amplitude?',
      o: ['Lead aVL', 'Lead aVR', 'Lead II', 'Lead III', 'Lead aVF'],
      a: [0, 3],
      ex: 'aVL (−30°) is only 30° from −60°, so it has the tallest R. Lead III (+120°) is 180° away, so it has the deepest S. The AC81 short key highlights both.' },
    { t: 'q', id: 'A12', src: 'AC77',
      q: 'Acute angle with lead<br>What is the characteristic of P wave?',
      o: ['Biphasic wave', 'Tallest positive wave', 'Tallest negative wave', 'Postive wave taller than negative wave', 'Negative wave taller than positive wave'],
      a: 3,
      ex: 'A vector less than 90° from a lead projects onto its positive half, so the wave is more positive than negative. Tallest positive needs the vector exactly along the lead (0°).',
      flag: 'Garbled recall: it probably asked about the wave (QRS or P) in a lead that makes an acute angle with the vector. The principle is the same for any wave.' },
    { t: 'q', id: 'A13', src: 'AC78',
      q: 'Evaluated QRS axis and lead II axis create an obtuse angle. Which of the following correctly describes the characteristic of QRS waves in lead II?',
      o: ['Highest positive wave', 'Highest negative wave', 'More positive than negative', 'More negative than positive', 'Biphasic'],
      a: 3,
      ex: 'An obtuse angle (90°–180°) projects onto the negative half of lead II, so its QRS is more negative than positive. Highest negative needs exactly 180°.' },

    { t: 'c', id: 'A-C3', title: 'Reading the axis off a 12-lead: two methods', src: 'Peer – EKG p.2 (tutor notes) · TBL RATs · AC76–78',
      html: '<div class="cols2"><div class="mini art"><h4>Shortcut: start from the flattest lead</h4><ol class="steps tight">' +
        '<li>Look only at the six {{limb leads}} (frontal plane).</li>' +
        '<li>Find the most {{biphasic}} one (R ≈ S).</li>' +
        '<li>The axis is {{±90°}} from it: two candidate directions.</li>' +
        '<li>Check the lead lying at one candidate: {{upright}} → the axis points there; negative → the other one.</li></ol></div>' +
        '<div class="mini ven"><h4>Direct: the farthest pair</h4><ol class="steps tight">' +
        '<li>Mark each limb lead + or −.</li>' +
        '<li>Take the two + leads that lie {{farthest apart}}, and the two − leads.</li>' +
        '<li>The axis is the {{midpoint}} of the + pair, give or take {{15°}}.</li></ol></div></div>' +
        '<div class="tblwrap"><table class="tbl compact"><thead><tr><th>Worked: t-RAT 2569 Q11</th><th>Reading</th></tr></thead><tbody>' +
        '<tr><td>Equiphasic limb lead</td><td>{{aVL}} (−30°)</td></tr>' +
        '<tr><td>Two candidates</td><td>{{+60° or −120°}}</td></tr>' +
        '<tr><td>Lead at that angle (II)</td><td>tall R → axis = {{plus 60°}}</td></tr></tbody></table></div>' +
        '<p class="note">Check the answer against the quadrant (A-C1): lead I and aVF must agree with the angle you found.</p>' },
    { t: 'q', id: 'A14', src: 'AC77',
      q: 'ให้กราฟแปลผลได้ว่า ใน Lead I, II, III, VL, VF Positive wave ใหญ่กว่า Negative wave ส่วนใน Lead VR Positive wave เล็กกว่า Negative wave ถาม Axis<br><span class="muted">From the tracing: in leads I, II, III, aVL and aVF the positive wave is larger than the negative wave; in aVR the positive wave is smaller. What is the axis?</span>',
      o: ['Normal axis', 'Left axis deviation', 'Right axis deviation', 'Extreme axis deviation'],
      a: 0,
      ex: 'Lead I and aVL positive keep the axis left of +60°; lead III positive keeps it below +30°. The axis is +30° to +60°, inside the normal range.' },
    { t: 'q', id: 'A15', src: 't-RAT 2569', core: true,
      q: 'According to this ECG, what is the calculated QRS axis?',
      fig: CVS.fig('t69-axis60', 't-RAT 2569 Q11: 12-lead (pen marks removed).', 'ekg', 8),
      o: ['0 degrees', '30 degrees', '60 degrees', '90 degrees'],
      a: 2,
      ex: 'aVL is the most biphasic limb lead, so the axis is +60° or −120°. Lead II (+60°) is tall and positive, so the axis is +60°.' },
    { t: 'q', id: 'A16', src: 'AC78',
      q: 'Please interpret the axis of this ECG',
      fig: CVS.fig('ac78-axis', 'AC78 Q23: 12-lead.', 'ac75', 20),
      o: ['Normal axis', 'Right axis deviation', 'Left axis deviation', 'Extreme axis deviation'],
      a: 0,
      ex: 'Leads I, II, III and aVF are upright, aVR is negative and aVL is small and near-biphasic: the axis is about +60°, normal.' },
    { t: 'q', id: 'A17', src: 'AC76',
      q: 'From the EKG below, what is the most likely axis deviation?',
      fig: CVS.fig('ac76-axis', 'AC76 Q9: 12-lead at 25 mm/s.', 'ac75', 18),
      o: ['Normal axis', 'Right axis deviation', 'Left axis deviation', 'Extreme axis deviation'],
      a: 1,
      ex: 'Lead I is net negative (small r, deeper S) while aVF and lead III are upright, and aVL is clearly negative: the axis is beyond +90°, right axis deviation.',
      flag: 'No key, and the copy is low resolution. Lead I looks net negative; if the original shows it equiphasic, the axis is about +90° (border of normal).' },
    { t: 'q', id: 'A18', src: 't-RAT 2568',
      q: 'A 50-year-old man presents to his primary care physician for a routine medical check-up. His ECG, recorded at a paper speed of 25 mm/s, is shown below. What is the QRS axis?',
      fig: CVS.fig('t68-axisnormal', 't-RAT 2568 Q11: 12-lead at 25 mm/s.', 'ekg', 39),
      o: ['Normal axis', 'Right axis deviation', 'Left axis deviation', 'Extreme axis deviation'],
      a: 0,
      ex: 'Leads I, II, III and aVF are positive; aVR and aVL are negative. Lead I and aVF both positive put the axis between 0° and +90°: normal.' },
    { t: 'q', id: 'A19', src: 't-RAT 2568', core: true,
      q: 'A 35-year-old man presents to the Emergency Department with progressive dyspnea. A 12-lead ECG is obtained, revealing the findings shown. What is the QRS axis?',
      fig: CVS.fig('t68-dyspnea', 't-RAT 2568 Q12–13: 12-lead, paper speed 30 mm/s.', 'ekg', 40),
      o: ['-30 to 90 degrees', '-30 to -90 degrees', '90 to 180 degrees', '-90 to 180 degrees'],
      a: 1,
      ex: 'Lead I and aVL are positive; leads II, III and aVF are deeply negative. Lead I + with aVF − and lead II − means left axis deviation, −30° to −90°.' },
    { t: 'q', id: 'A20', src: 'i-RAT 266-66', core: true,
      q: 'According to this EKG, what is the calculated QRS axis?',
      fig: CVS.fig('ir-axis-lad', 'i-RAT Q16: 12-lead.', 'ekg', 48),
      o: ['(-90) – (-120) degrees', '(-30) – (-90) degrees', '(30) – (90) degrees', '(90) – (120) degrees'],
      a: 1,
      ex: 'Lead I, aVL and aVR are positive; II, III and aVF are negative. The axis lies up and to the left, in the −30° to −90° band.' },
    { t: 'q', id: 'A21', src: 'i-RAT 266-66',
      q: 'According to this EKG, what is the interpretation of the QRS axis?',
      fig: CVS.fig('ir-axis-normal', 'i-RAT Q17: 12-lead.', 'ekg', 49),
      o: ['Normal axis', 'Left axis deviation', 'Right axis deviation', 'Extreme axis deviation'],
      a: 0,
      ex: 'I, II, III, aVL and aVF are positive and only aVR is negative: the axis is about +30° to +60°, normal.' },

    { t: 'c', id: 'A-C4', title: 'Rate, axis and QRS width in one item', src: 'i-RAT 266-66 key · t-RAT 2569',
      html: '<p>Combined items test three separate readings. Do them one at a time, then pick the option that matches all three.</p>' +
        '<div class="flow"><div class="fbox start"><b>1 · Rate</b><br>read the {{paper speed}} first; 1500 ÷ small boxes, then correct</div><div class="farrow">→</div>' +
        '<div class="fbox art"><b>2 · Axis</b><br>lead I and aVF, then {{lead II}} if I + / aVF −</div><div class="farrow">→</div>' +
        '<div class="fbox ven"><b>3 · QRS width</b><br>normal ≤ 100–110 ms, i.e. under {{3 small boxes}}</div></div>' +
        '<div class="tblwrap"><table class="tbl compact"><thead><tr><th>Item</th><th>Rate</th><th>Axis</th><th>Answer</th></tr></thead><tbody>' +
        '<tr><td>i-RAT Q18 · 25 mm/s</td><td>RR 11 small boxes → {{136 bpm}}</td><td>I +, II −, aVF −</td><td>{{tachycardia}} with LAD</td></tr>' +
        '<tr><td>i-RAT Q19</td><td>—</td><td>I −, aVF +</td><td>RAD with {{wide QRS}}</td></tr>' +
        '<tr><td>t-RAT 2569 Q13 · 15 mm/s</td><td>RR ≈ 20 small boxes → {{45 bpm}}</td><td>I +, II −, aVF −</td><td>{{bradycardia}} with LAD</td></tr>' +
        '</tbody></table></div>' },
    { t: 'q', id: 'A22', src: 'i-RAT 266-66', core: true,
      q: 'In this EKG, which runs at a speed of 25 mm/s, which of the following is true?',
      fig: CVS.fig('ir-tachy-lad', 'i-RAT Q18: 12-lead at 25 mm/s.', 'ekg', 49),
      o: ['Normal heart rate with left axis deviation', 'Tachycardia with left axis deviation', 'Normal heart rate with right axis deviation', 'Tachycardia with right axis deviation'],
      a: 1,
      ex: 'RR ≈ 11 small boxes: 1500 ÷ 11 ≈ 136 bpm, tachycardia. Lead I and aVL positive with II, III and aVF negative: left axis deviation.' },
    { t: 'q', id: 'A23', src: 'i-RAT 266-66',
      q: 'According to this ECG, which of the following is true?',
      fig: CVS.fig('ir-rad-wide', 'i-RAT Q19: 12-lead at 25 mm/s.', 'ekg', 50),
      o: ['Left axis deviation with wide QRS complex', 'Right axis deviation with wide QRS complex', 'Left axis deviation with normal QRS complex', 'Right axis deviation with normal QRS complex'],
      a: 1,
      ex: 'Lead I and aVL are negative while II, III and aVF are positive: right axis deviation. The QRS spans about 3 small boxes or more, so it is wide.' },
    { t: 'q', id: 'A24', src: 't-RAT 2569', core: true,
      q: 'A 32-year-old man presents to his primary physician for a routine medical check-up. His ECG, which runs at a speed of 15 mm/s, is shown below. What are his heart rate and QRS axis?',
      fig: CVS.fig('t69-brady', 't-RAT 2569 Q13: 12-lead, paper speed 15 mm/s (pen marks removed).', 'ekg', 9),
      o: ['Normal heart rate and normal axis', 'Bradycardia and right axis deviation', 'Bradycardia and left axis deviation', 'Tachycardia and superior axis deviation'],
      a: 2,
      ex: 'RR ≈ 20 small boxes: 1500 ÷ 20 = 75 at 25 mm/s, × 15/25 = 45 bpm, bradycardia. Lead I and aVL positive, II, III and aVF negative: left axis deviation.' }
  ]
});
