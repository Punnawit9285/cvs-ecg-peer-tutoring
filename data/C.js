/* Section C: Cardiophysiology, how the ECG is made.
   Sources: Peer - EKG p.1-2 (tutor notes), Lab Direction - ECG p.1, ECG TBL t-RAT 2569 / 2568, i-RAT 266-66, AC77, AC80.
   {{text}} = cloze blank on concept cards. Past-paper stems and options keep their original wording and order. */
CVS.add({
  id: 'C', short: 'Cardiophysiology', title: 'Cardiophysiology: how the ECG is made', kind: 'Lecture',
  blurb: 'Dipoles and skin electrodes, which cells make which wave, why the T wave is upright, and where each action-potential phase sits on the tracing.',
  items: [
    { t: 'c', id: 'C-C1', title: 'What a skin electrode sees: the moving dipole', src: 'Peer – EKG p.1–2 · i-RAT 266-66',
      html: '<div class="two"><div class="stack">' +
        '<ul class="pts">' +
        '<li>A lead compares a <b>+ electrode</b> with a reference, so the ECG records a {{potential difference}} on the skin, never the voltage inside one cell.</li>' +
        '<li>Outside resting (polarized) myocytes the charge is <b>{{+}}</b>; outside depolarized myocytes it turns <b>{{−}}</b>.</li>' +
        '<li>While a wave travels, the border between the two zones is a <b>dipole</b>: the electrode over the depolarized zone is relatively {{negative}}, the one over still-resting tissue relatively + .</li>' +
        '<li>Muscle all at rest, or all depolarized: no difference, so the line stays {{flat (isoelectric)}}.</li>' +
        '</ul>' +
        '<div class="tblwrap"><table class="tbl compact"><thead><tr><th>Wave moving&#8230;</th><th>Depolarization</th><th>Repolarization</th></tr></thead><tbody>' +
        '<tr><td>toward the + electrode</td><td>{{upward}}</td><td>{{downward}}</td></tr>' +
        '<tr><td>away from the + electrode</td><td>{{downward (−)}}</td><td>{{upward (+)}}</td></tr>' +
        '<tr><td>at 90° to the lead</td><td colspan="2">{{biphasic}}: equal up and down</td></tr>' +
        '</tbody></table></div></div>' +
        CVS.fig('peer-electrode', 'Tutor sketch: electrodes over a strip of muscle; the depolarized part (−) on the left, resting part (+) on the right.', 'ekg', 1) + '</div>' +
        '<p class="note">Repolarization is the mirror image of depolarization: same direction of travel, opposite sign of the deflection.</p>' },
    { t: 'q', id: 'C1', src: 'i-RAT 266-66', core: true,
      q: 'Which of the following statements is true regarding the electrical vector of the ventricular action potential recorded by the potential difference between two electrodes?',
      o: ['During depolarization, the depolarization wave is a positive wave because the electrode placed in the depolarized area is relatively positive compared to the recording electrode in the polarized area.',
        'During depolarization, the depolarization wave is a positive wave because the electrode placed in the depolarized area is relatively negative compared to the recording electrode in the polarized area.',
        'During repolarization, the repolarization wave is a positive wave because the electrode placed in the repolarized area is relatively positive compared to the recording electrode in the depolarized area.',
        'During repolarization, the repolarization wave is a negative wave because the electrode placed in the repolarized area is relatively negative compared to the recording electrode in the depolarized area.'],
      a: 1,
      ex: 'The outside of depolarized cells is negative and the outside of resting cells is positive, so the electrode over the depolarized area is relatively negative. A depolarization wave heading toward the recording (+) electrode in resting tissue gives a positive wave. Repolarized tissue is outside-positive again, not negative, so the last two statements have the signs wrong.' },

    { t: 'c', id: 'C-C2', title: 'Which wave comes from which cells', src: 'Lab Direction p.1 · t-RAT 2569 · t-RAT 2568',
      html: '<div class="tblwrap"><table class="tbl"><thead><tr><th>Electrical event</th><th>Main current</th><th>What the ECG shows</th></tr></thead><tbody>' +
        '<tr><td>Atrial depolarization</td><td>phase 0 of atrial muscle</td><td>{{P wave}}</td></tr>' +
        '<tr><td>Ventricular depolarization (septum → apex → free walls)</td><td>{{fast Na⁺ influx}} (phase 0)</td><td>{{QRS complex}}</td></tr>' +
        '<tr><td>Ventricular repolarization</td><td>{{K⁺ efflux}} from ventricular myocytes (phase 3)</td><td>{{T wave}}</td></tr>' +
        '<tr><td>Atrial repolarization</td><td>K⁺ leaving atrial cells</td><td>no wave of its own: it {{overlaps the ventricular depolarization}}</td></tr>' +
        '</tbody></table></div>' +
        '<div class="cols2"><div class="mini art"><h4>Why atrial repolarization is invisible</h4><p>It is small and happens at the {{same time}} as the large ventricular complex, so the QRS hides it.</p></div>' +
        '<div class="mini ven"><h4>Size follows muscle mass</h4><p>The thin atria give a small P; the {{thick ventricles}} give the big QRS.</p></div></div>' +
        '<p class="trap">The SA node and AV node fire too: their tiny currents make {{no visible wave}}. The PR segment is the time the impulse spends crossing the AV node.</p>' },
    { t: 'q', id: 'C2', src: 't-RAT 2569', core: true,
      q: 'Why is the atrial repolarization wave not visible on the ECG?',
      o: ['Because it occurs too gradually to be detectable', 'Because it occurs too rapidly to be detectable', 'Because it overlaps with the ventricular depolarization wave', 'Because it overlaps with the ventricular repolarization wave'],
      a: 2,
      ex: 'Atrial repolarization happens while the ventricles depolarize, so the big QRS complex hides it. It is not too fast or too slow, and it is over long before the T wave.' },
    { t: 'q', id: 'C3', src: 't-RAT 2568',
      q: 'Which of the following ion movements is primarily responsible for the T wave observed on the ECG?',
      o: ['Na⁺ influx into ventricular myocytes', 'Na⁺ influx into atrial myocytes', 'K⁺ efflux from ventricular myocytes', 'K⁺ efflux from atrial myocytes'],
      a: 2,
      ex: 'The T wave is ventricular repolarization, phase 3, carried by K⁺ leaving ventricular myocytes. Na⁺ influx into ventricles makes the QRS; atrial K⁺ efflux is hidden in the QRS.' },
    { t: 'q', id: 'C4', src: 'AC77',
      q: 'Inhibiting fast Na Channel at ventricle, what is absent from EKG?',
      o: ['P wave', 'PR segment', 'QRS wave', 'ST segment', 'T wave'],
      a: 2,
      ex: 'Fast Na⁺ channels carry phase 0 of working ventricular muscle, which is the QRS. The P wave (atria) and the PR segment (AV node) do not depend on ventricular Na⁺ channels.',
      flag: 'The recall says "absent". Blocking ventricular fast Na⁺ channels in reality slows and widens the QRS rather than erasing it; the item tests the link phase 0 of ventricular muscle = QRS.' },

    { t: 'c', id: 'C-C3', title: 'Why the T wave points the same way as the QRS', src: 'Peer – EKG p.1–2 · i-RAT 266-66',
      html: '<div class="two"><div class="stack"><ol class="steps">' +
        '<li>Depolarization spreads from {{endocardium → epicardium}} (inside out).</li>' +
        '<li>Endocardial cells have the {{longer action potential}}; epicardial cells are activated later but finish first.</li>' +
        '<li>So repolarization runs the opposite way, {{epicardium → endocardium}} (outside in).</li>' +
        '<li>Opposite direction × opposite sign (C-C1 table) = the T wave has the {{same polarity}} as the QRS. This is called <b>{{concordant}}</b>.</li>' +
        '</ol>' +
        '<div class="tblwrap"><table class="tbl compact"><thead><tr><th>Normal T wave</th><th>Leads</th></tr></thead><tbody>' +
        '<tr><td>Upright</td><td>{{II, V3–V6}}</td></tr><tr><td>Inverted</td><td>{{aVR}}</td></tr></tbody></table></div></div>' +
        CVS.fig('peer-endoepi', 'Tutor sketch: endocardium is activated first (filled dots) but its action potential lasts longer than the epicardium’s.', 'ekg', 1) + '</div>' +
        '<p class="trap">"Repolarization is normally discordant" is the wrong option: a healthy T wave follows its QRS. A T wave that goes against the QRS points to disease.</p>' },
    { t: 'q', id: 'C5', src: 'i-RAT 266-66', core: true,
      q: 'Normally, the ventricular repolarization wave is concordant with the ventricular depolarization wave because of which of the following cardiac properties?',
      o: ['The action potential duration of the endocardial cells is longer than that of the epicardial cells.', 'The action potential duration of the epicardial cells is longer than that of the endocardial cells.', 'The action potential duration is similar in both the endocardial and the epicardial cells.', 'The repolarization wave is normally discordant with the depolarization wave because depolarization and repolarization occur in the same direction towards or away from the electrode.'],
      a: 0,
      ex: 'Endocardium depolarizes first but keeps a longer action potential, so epicardium repolarizes first. Repolarization therefore travels outside to inside, the reverse of depolarization, and the two reversals cancel: the T wave has the same polarity as the QRS.' },

    { t: 'c', id: 'C-C4', title: 'Action-potential phases on the tracing', src: 'Peer – EKG p.2 · t-RAT 2569 · i-RAT 266-66 · AC80',
      html: '<div class="tblwrap"><table class="tbl"><thead><tr><th>Ventricular action potential</th><th>Ion current</th><th>Where it sits on the ECG</th></tr></thead><tbody>' +
        '<tr><td>Phase 0, upstroke</td><td>fast Na⁺ in</td><td>{{QRS complex}}</td></tr>' +
        '<tr><td>Phase 2, plateau</td><td>Ca²⁺ in ≈ K⁺ out</td><td>{{ST segment}}: every ventricular cell is depolarized, so the line is isoelectric</td></tr>' +
        '<tr><td>Phase 3, repolarization</td><td>K⁺ out</td><td>{{T wave}}</td></tr>' +
        '<tr><td>Phase 4, rest</td><td>K⁺ leak (I<sub>K1</sub>)</td><td>{{TP segment}}</td></tr>' +
        '</tbody></table></div>' +
        '<div class="cols2"><div class="mini art"><h4>Atria run earlier</h4><p>Atrial phase 0 = P wave. Atrial phase 3 falls {{inside the QRS}}.</p></div>' +
        '<div class="mini ven"><h4>Refractory periods</h4><p>Absolute refractory period ≈ from the QRS through the {{whole plateau}} to about the peak of T. The second half of T is the {{relative}} refractory period.</p></div></div>' +
        '<p class="trap">Phase 4 is <b>not</b> the downslope after the plateau: that downslope is phase 3. Rest comes after it.</p>' },
    { t: 'q', id: 'C6', src: 't-RAT 2569', core: true,
      q: 'Which component of the ECG most likely corresponds to phase 4 of the action potential in ventricular muscle cells?',
      o: ['QRS complex', 'ST segment', 'T wave', 'TP segment'],
      a: 3,
      ex: 'Phase 4 is the resting potential between beats: the flat TP segment. QRS = phase 0, ST segment = phase 2 plateau, T wave = phase 3.' },
    { t: 'q', id: 'C7', src: 'i-RAT 266-66',
      q: 'Which of the following segments in the EKG most likely contains Phase 3 of the action potential in atrial muscles?',
      o: ['P wave', 'QRS complex', 'T wave', 'ST segment'],
      a: 1,
      ex: 'Atrial repolarization (atrial phase 3) happens while the ventricles depolarize, so it is buried in the QRS complex. The P wave is atrial phase 0; the T wave and ST segment belong to the ventricles.' },
    { t: 'q', id: 'C8', src: 'AC80',
      q: 'Which part of ECG wave is the absolute refractory period in a cardiac cycle?',
      o: ['P wave', 'PR interval', 'ST segment', 'T wave', 'RR interval'],
      a: 2,
      ex: 'The ventricular absolute refractory period lasts from phase 0 through the plateau into early phase 3. On the ECG that is the QRS and ST segment up to about the peak of T. The ST segment lies wholly inside it.',
      flag: 'Only the ST segment lies entirely within the absolute refractory period; the T wave is partly relative refractory. Teach the span (QRS → mid-T) rather than a single label.' }
  ]
});
