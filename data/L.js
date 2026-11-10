/* Section L: Leads, the hexaxial reference system and swapped electrodes.
   Sources: Lab Direction - ECG p.2, Peer - EKG p.1-2 (tutor notes), ECG TBL t-RAT 2569 / 2568, i-RAT 266-66, AC78-81.
   Past-paper stems and options keep their original wording and order. */
CVS.add({
  id: 'L', short: 'Leads', title: 'Limb leads, the hexaxial wheel and swapped electrodes', kind: 'Lecture',
  blurb: 'Which electrodes make leads I, II and III, where aVR, aVL and aVF point, which leads are perpendicular, and what each electrode swap does.',
  items: [
    { t: 'c', id: 'L-C1', title: 'Bipolar limb leads (Einthoven)', src: 'Lab Direction p.2 · Peer – EKG p.1',
      html: '<div class="two"><div class="stack"><div class="tblwrap"><table class="tbl"><thead><tr><th>Lead</th><th>+ electrode</th><th>− electrode</th><th>Angle</th></tr></thead><tbody>' +
        '<tr><td><b>I</b></td><td>{{LA}}</td><td>{{RA}}</td><td>0°</td></tr>' +
        '<tr><td><b>II</b></td><td>{{LL}}</td><td>RA</td><td>{{+60°}}</td></tr>' +
        '<tr><td><b>III</b></td><td>LL</td><td>{{LA}}</td><td>{{+120°}}</td></tr>' +
        '</tbody></table></div>' +
        '<ul class="pts"><li>Each bipolar lead uses {{two limb electrodes}}; the right leg (RL) electrode is the {{ground}} and is in no lead.</li>' +
        '<li>Leads I, II and III form Einthoven’s triangle: {{II = I + III}}.</li>' +
        '<li>A lead points from its − electrode toward its + electrode: lead I points {{horizontally to the left}}, II down-left, III down-right.</li></ul></div>' +
        CVS.fig('peer-bipolar', 'Tutor sketch: lead I at 0°, with leads II and III each 60° below it.', 'ekg', 1) + '</div>' +
        '<p class="trap">Only one bipolar lead uses the left arm as its <i>negative</i> pole: “left arm and left leg” = {{lead III}}.</p>' },
    { t: 'q', id: 'L1', src: 't-RAT 2569',
      q: 'When recording lead II on an ECG, where is the positive electrode placed?',
      o: ['Left arm', 'Right arm', 'Left leg', 'Right leg'],
      a: 2,
      ex: 'Lead II runs from the right arm (−) to the left leg (+), pointing down-left at +60°.' },
    { t: 'q', id: 'L2', src: 't-RAT 2568',
      q: 'When recording Lead II on a standard 12-lead ECG, where are the positive and negative electrodes placed, respectively?',
      o: ['Right arm and left arm', 'Right arm and left leg', 'Left arm and left leg', 'Left leg and right arm'],
      a: 3,
      ex: 'Positive first: left leg (+), right arm (−). The second option has the right pair in the wrong order.' },
    { t: 'q', id: 'L3', src: 'i-RAT 266-66', core: true,
      q: 'Which of the following leads requires electrode placements at the left arm and the left foot?',
      o: ['Lead I', 'Lead II', 'Lead III', 'Lead aVL'],
      a: 2,
      ex: 'Lead III = left leg (+) versus left arm (−). Lead I uses both arms, lead II right arm and left leg; aVL is an augmented lead with its + pole on the left arm.' },
    { t: 'q', id: 'L4', src: 'AC79',
      q: 'what is the location of lead III?',
      o: ['Right arm and right leg', 'Right arm and left arm', 'Left arm and left leg', 'Right arm and left leg', 'Left arm and right leg'],
      a: 2,
      ex: 'Lead III joins the left arm (−) and the left leg (+). The right leg is only the ground.' },
    { t: 'q', id: 'L5', src: 't-RAT 2568', core: true,
      q: 'A medical student wears a smart watch on the left wrist and activates the ECG feature by placing the right index finger on the digital crown, as shown in the figure below. The watch contains a positive electrode on the back that contacts the left wrist, and the crown functions as a negative electrode. Which standard ECG lead is most closely represented by this configuration?',
      fig: CVS.fig('t68-watch', 't-RAT 2568 Q4: watch on the left wrist, right index finger on the crown.', 'ekg', 37),
      o: ['Lead I', 'Lead II', 'Lead III', 'Lead aVR'],
      a: 0,
      ex: 'Positive on the left arm, negative on the right arm: that is lead I, pointing at 0°.' },

    { t: 'c', id: 'L-C2', title: 'Augmented leads and the hexaxial wheel', src: 'Peer – EKG p.1–2 · i-RAT 266-66 · AC78',
      html: '<div class="two"><div class="stack"><ul class="pts">' +
        '<li><b>Augmented (unipolar) limb leads</b>: one limb is +, compared with the average of the other two. aVR: + on the {{right arm}}. aVL: + on the {{left arm}}. aVF: + on the {{left foot}}.</li>' +
        '<li>Angles: aVL {{−30°}}, aVF {{+90°}}, aVR {{−150°}}.</li>' +
        '<li>Put the six limb leads on one wheel and they sit every <b>30°</b>: the hexaxial reference system (frontal plane only; chest leads are the horizontal plane).</li></ul>' +
        '<div class="tblwrap"><table class="tbl compact"><thead><tr><th>Lead</th><th>Perpendicular partner (90° apart)</th></tr></thead><tbody>' +
        '<tr><td>I (0°)</td><td>{{aVF (+90°)}}</td></tr><tr><td>II (+60°)</td><td>{{aVL (−30°)}}</td></tr><tr><td>III (+120°)</td><td>{{aVR (−150°)}}</td></tr></tbody></table></div></div>' +
        '<div class="stack">' + CVS.fig('peer-augmented', 'Tutor sketch: aVR and aVL 30° above the horizontal, aVF straight down.', 'ekg', 1) +
        CVS.fig('peer-hex3d', 'The six frontal-plane leads around the chest: aVR, aVL, I, II, aVF and III.', 'ekg', 2) + '</div></div>' +
        '<p class="trap">Perpendicular pairs pair a bipolar lead with an augmented lead: memorise I–aVF, II–aVL, III–aVR.</p>' },
    { t: 'q', id: 'L6', src: 'i-RAT 266-66', core: true,
      q: 'The electrical vector of which lead is perpendicular to the vector of lead aVR in the frontal plane axis?',
      o: ['Lead I', 'Lead II', 'Lead III', 'Lead aVL'],
      a: 2,
      ex: 'aVR points to −150°; 90° from it is +120° (or −60°), which is lead III.' },
    { t: 'q', id: 'L7', src: 'AC78',
      q: 'Which lead is perpendicular to lead aVL?',
      o: ['Lead I', 'Lead II', 'Lead III', 'Lead aVR', 'Lead aVF'],
      a: 1,
      ex: 'aVL points to −30°; 90° away is +60°, which is lead II.' },

    { t: 'c', id: 'L-C3', title: 'Swapped limb electrodes', src: 'Peer – EKG p.1–2 · AC80 · AC81 · TBL RATs',
      html: '<div class="two"><div class="tblwrap"><table class="tbl compact"><thead><tr><th>Swap</th><th>What the tracing does</th><th>Lead left unchanged</th></tr></thead><tbody>' +
        '<tr><td><b>RA ↔ LA</b> (commonest)</td><td>lead I {{upside down (−I)}}; II ↔ III; aVR ↔ aVL</td><td>{{aVF}}</td></tr>' +
        '<tr><td><b>RA ↔ LL</b></td><td>II inverted; I and III swap and invert; aVR ↔ aVF</td><td>{{aVL}}</td></tr>' +
        '<tr><td><b>LA ↔ LL</b></td><td>III inverted; I ↔ II; aVL ↔ aVF</td><td>{{aVR}}</td></tr>' +
        '<tr><td><b>LL ↔ RL</b></td><td>{{almost no change}}: RL is only the ground and both legs sit at nearly the same potential</td><td>all</td></tr>' +
        '</tbody></table></div>' +
        CVS.fig('peer-swap', 'Tutor sketch: swapping the arm electrodes turns lead I upside down (I becomes −I).', 'ekg', 1) + '</div>' +
        '<p class="note">Rule of thumb: the unchanged lead is the augmented lead of the {{limb that was not moved}}.</p>' +
        '<p class="trap">“Where does the aVF tracing show up after an arm swap?” Still in {{aVF}}: nothing touched the left leg.</p>' },
    { t: 'q', id: 'L8', src: 'AC80', core: true,
      q: 'During an ECG test on a patient, the physician accidentally swaps a pair of leads. However, the aVF waveform is not affected by this mistake, while the rest of the waveforms are incorrect. The leads of which extremities have been swapped?',
      o: ['Left arm and left leg', 'Left arm and right leg', 'Right arm and left arm', 'Right arm and left leg', 'Right arm and right leg'],
      a: 2,
      ex: 'aVF is the left-leg lead, so it stays correct only if the left leg was not moved: the two arms were swapped. That also inverts lead I and swaps II with III and aVR with aVL.' },
    { t: 'q', id: 'L9', src: 'AC81', core: true,
      q: 'During an electrocardiography procedure, an extreme lead reversal occurs. Only lead aVL is normal, while other leads are mixed up. Which leads are reversed?',
      o: ['Left arm, left leg', 'Right arm, left leg', 'Right leg, left leg', 'Left arm, right arm', 'Left leg, right leg'],
      a: 1,
      ex: 'aVL is the left-arm lead, so the left arm stayed put and the other two active electrodes swapped: right arm and left leg. AC81 short key: right arm, left leg.' },
    { t: 'q', id: 'L10', src: 't-RAT 2569', core: true,
      q: 'When the electrode on the left arm is mistakenly reversed with the electrode on the right arm, the ECG tracing that would normally show up on Lead aVF will be shown on which of the following leads instead?',
      o: ['Lead I', 'Lead II', 'Lead aVL', 'Lead aVF'],
      a: 3,
      ex: 'An arm swap leaves the left-leg electrode alone, so aVF still shows the true aVF tracing. Lead I becomes inverted (−I), II and III trade places, aVR and aVL trade places.' },
    { t: 'q', id: 'L11', src: 't-RAT 2568',
      q: 'Which of the following changes would occur if the left leg (LL) and right leg (RL) electrodes are switched?',
      o: ['Lead I is inverted', 'Lead II is inverted', 'Lead V1 is inverted', 'None of the above'],
      a: 3,
      ex: 'The right-leg electrode is the ground and the two legs sit at almost the same potential, so swapping them changes essentially nothing. Lead I does not use either leg.' },
    { t: 'q', id: 'L12', src: 'i-RAT 266-66', core: true,
      q: 'Which of the following leads is NOT affected when the electrodes at the left arm and the left leg are reversed?',
      o: ['Lead I', 'Lead II', 'Lead aVL', 'Lead aVR'],
      a: 3,
      ex: 'The right arm was not moved, so aVR (right-arm +) is unchanged. Lead I and II trade places (I uses LA, II uses LL), aVL and aVF trade places, lead III inverts.' }
  ]
});
