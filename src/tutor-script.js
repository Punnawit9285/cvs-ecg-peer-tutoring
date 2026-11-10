/* English recording script for the tutor deck: 5-video plan, per-section opening line and "Understand it: the 80%" summary,
   and a SAY line (1–2 spoken sentences) for every concept card and every core question. Keys match deck IDs. */
window.TUTOR_SCRIPT = {
  "plan": [
    ["Video 1", ["C", "W"], "How the ECG is made, then the parts of the tracing: waves, intervals, normal values, the cardiac cycle and autonomic effects.", "35&#8211;40 min"],
    ["Video 2", ["L"], "Bipolar and augmented limb leads, the hexaxial wheel, perpendicular pairs and swapped electrodes.", "20 min"],
    ["Video 3", ["R"], "Heart rate: the 1500 rule, other paper speeds, irregular rhythms.", "15&#8211;20 min"],
    ["Video 4", ["A"], "QRS axis: zones, quadrant check, projection, the two reading methods, combined items.", "35 min"],
    ["Video 5", ["E"], "ECG lab: electrode positions, sinus rhythm, rhythms that are not sinus, and reading a whole tracing with the lab sheet.", "25 min"]
  ],
  "sec": {
    "C": {
      "part": "Video 1", "time": "35&#8211;40 min (with W)",
      "open": "Before we read any ECG, we need one idea: the ECG only sees a wave while it is moving, and whether it goes up or down depends on which way it moves. Everything else in this course hangs on that.",
      "u": [
        "<b>Dipole.</b> Outside resting cells is +, outside depolarized cells is −. A moving wavefront is a dipole that skin electrodes can see.",
        "<b>Direction.</b> Depolarization toward the + electrode = upward; away = downward; at 90° = biphasic. Repolarization gives the opposite sign.",
        "<b>Waves.</b> P = atrial depolarization, QRS = ventricular depolarization (fast Na⁺), T = ventricular repolarization (K⁺ efflux). Atrial repolarization hides in the QRS.",
        "<b>Concordant T.</b> Endocardium depolarizes first but has the longer AP, so repolarization runs outside-in and the T follows the QRS.",
        "<b>Phases on paper.</b> Phase 0 = QRS, phase 2 = ST, phase 3 = T, phase 4 = TP. Atrial phase 3 sits in the QRS.",
        "<b>Refractory.</b> Absolute from the QRS through the ST to about the T peak; relative in the second half of T."
      ],
      "say": {
        "C-C1": "An electrode is like someone watching a parade: positive charge coming toward you is an upward wave, going away is downward, and passing sideways gives a little of both. Repolarization flips the sign.",
        "C1": "The depolarized area is outside-negative, so the recording electrode on resting tissue is the positive one.",
        "C-C2": "Each wave belongs to one chamber and one current: P for atria, QRS for ventricular depolarization with sodium, T for ventricular repolarization with potassium. Atrial repolarization is still there, just hidden.",
        "C2": "It overlaps with ventricular depolarization: the QRS covers it.",
        "C-C3": "Inside depolarizes first but stays depolarized longer, so the outside recovers first. Two flips cancel, and the T wave points the same way as the QRS.",
        "C5": "Endocardial action potentials are longer than epicardial ones.",
        "C-C4": "Lay the action potential over the ECG: upstroke is the QRS, the plateau is the flat ST, the fall is the T, and rest is the TP segment.",
        "C6": "Phase 4 is rest, so the TP segment."
      }
    },
    "W": {
      "part": "Video 1", "time": "35&#8211;40 min (with C)",
      "open": "Now we name the parts of the tracing, learn the handful of numbers the exam checks, and line each wave up with the cardiac cycle.",
      "u": [
        "<b>Words.</b> Wave = deflection, segment = flat part between waves, interval = wave plus segment. PR segment = AV nodal delay; ST = plateau; TP = baseline.",
        "<b>PR 120–200 ms.</b> Short = pre-excitation; long = 1st-degree AV block. An AV-node problem changes the PR.",
        "<b>QRS ≤ 100–110 ms</b>, under 3 small boxes. QT shortens as the rate rises; QTc = QT/√RR, 330–440 ms (women up to 450).",
        "<b>Polarity.</b> P upright in II, negative in aVR. T upright in II and V3–V6, negative in aVR. ST within ±1 mm. Broad deep Q = old MI.",
        "<b>RR to rate.</b> 60 000 ÷ RR (ms): 500 ms = 120 bpm, 800 ms = 75 bpm.",
        "<b>Cycle.</b> P → atrial kick; QRS → S1, isovolumic contraction, aortic valve opens; end of T → S2, isovolumic relaxation; early TP → rapid filling (largest mitral flow).",
        "<b>Autonomic.</b> Sympathetic or atropine: RR, PR and QT shorten; QRS unchanged. Vagus: the reverse. ST elevation is injury, not a drug effect."
      ],
      "say": {
        "W-C1": "Three words to keep apart: a wave is a bump, a segment is a flat stretch, an interval is a bump plus its flat stretch. The PR segment is the time the impulse waits in the AV node.",
        "W1": "A is the hump before the QRS, the P wave; B is the flat line just after the QRS, the ST segment.",
        "W2": "X is the flat bit between P and QRS, the PR segment, so it measures conduction through the AV node.",
        "W-C2": "Four numbers: PR 120 to 200, QRS up to about 110, QTc 330 to 440, ST within one millimetre. Short PR means a shortcut; long PR means AV block.",
        "W4": "AV node trouble shows up in the PR interval.",
        "W5": "PR 100 is too short; everything else is normal.",
        "W-C3": "Judge two things: direction and numbers. P and T are negative in aVR, and that is normal; a negative P in lead II is not.",
        "W6": "Negative P in aVR is the normal one.",
        "W9": "A broad, deep Q wave is the abnormal finding: an old infarct.",
        "W-C4": "Electrical first, mechanical second. P, then the atria squeeze; QRS, then the ventricles; end of T, the aortic valve shuts and the ventricle relaxes.",
        "W12": "After the P wave the atria contract.",
        "W15": "Point D, right after the T wave: rapid filling, the biggest flow through the mitral valve.",
        "W-C5": "Autonomic nerves work on the nodes, not on the ventricular wiring. Speed the nodes up and RR, PR and QT shorten; the QRS stays the same.",
        "W17": "ST elevation is the one that does not happen; that is injury, not atropine."
      }
    },
    "L": {
      "part": "Video 2", "time": "20 min",
      "open": "Six limb leads come from only three electrodes. Learn which electrode is positive in each lead and where each lead points, and every swap question becomes one rule.",
      "u": [
        "<b>Bipolar leads.</b> I: LA + / RA −, 0°. II: LL + / RA −, +60°. III: LL + / LA −, +120°. RL is the ground.",
        "<b>Einthoven.</b> II = I + III. A lead points from its − to its + electrode.",
        "<b>Augmented leads.</b> aVR right arm (−150°), aVL left arm (−30°), aVF left foot (+90°). Six leads every 30° make the hexaxial wheel.",
        "<b>Perpendicular pairs.</b> I–aVF, II–aVL, III–aVR.",
        "<b>Swaps.</b> RA↔LA: I inverted, II↔III, aVR↔aVL, aVF unchanged. RA↔LL: aVL unchanged. LA↔LL: aVR unchanged. LL↔RL: almost nothing.",
        "<b>Smartwatch.</b> + on the left wrist, − on the right finger = lead I."
      ],
      "say": {
        "L-C1": "Lead one goes right arm to left arm, lead two right arm to left leg, lead three left arm to left leg. The positive end is always the left or lower limb.",
        "L3": "Left arm and left leg together: lead three.",
        "L5": "Positive on the left wrist, negative on the right hand: that is lead one.",
        "L-C2": "aVR, aVL and aVF each put the positive pole on one limb. With the three bipolar leads they make a wheel with a lead every thirty degrees.",
        "L6": "aVR points to minus 150, so the lead at 90 degrees from it is lead three.",
        "L-C3": "One rule covers every swap: the augmented lead of the limb you did not touch stays correct.",
        "L8": "aVF is fine, so the left leg was not moved: the two arms were swapped.",
        "L9": "aVL is fine, so the left arm stayed: right arm and left leg were swapped.",
        "L10": "Swapping the arms leaves aVF exactly where it was.",
        "L12": "The right arm did not move, so aVR is unchanged."
      }
    },
    "R": {
      "part": "Video 3", "time": "15&#8211;20 min",
      "open": "Heart rate is the easiest point on the paper, and the easiest to lose: the trap is almost always the paper speed.",
      "u": [
        "<b>Standard paper.</b> 25 mm/s and 10 mm/mV. Small box 0.04 s, big box 0.2 s.",
        "<b>Rules.</b> HR = 1500 ÷ small boxes = 300 ÷ big boxes = 60 ÷ RR in seconds. 1-2-3-4-5-6 big boxes = 300-150-100-75-60-50.",
        "<b>Other speeds.</b> Multiply by speed ÷ 25: 12.5 → 750 ÷ n, 30 → 1800 ÷ n, 50 → 3000 ÷ n.",
        "<b>Classic traps.</b> 50 mm/s with 18 boxes is 168, not 83; 12.5 mm/s with 15 mm is 50, not 100.",
        "<b>Irregular rhythm.</b> Count QRS in the 10-second strip and multiply by 6 (AF example: 22 × 6 = 132)."
      ],
      "say": {
        "R-C1": "At 25 millimetres per second, divide 1500 by the small boxes between two R waves. Or remember 300, 150, 100, 75, 60, 50 for one to six big boxes.",
        "R1": "Fifteen small boxes: 1500 divided by 15 is 100.",
        "R-C2": "Count the boxes as if the speed were normal, then correct: twice as fast paper, double the rate; half speed, halve it.",
        "R4": "Fifteen millimetres at 12.5 is 1.2 seconds: 50 a minute.",
        "R6": "Eighteen boxes gives 83 at normal speed, but this paper runs at 50, so double it: 168.",
        "R8": "Same idea at 50 millimetres per second: the key is 200.",
        "R10": "Twenty-five small boxes gives 60, then times 30 over 25: about 72.",
        "R-C3": "When the beats are irregular, stop dividing and start counting: QRS complexes in the ten-second strip, times six.",
        "R11": "This is AF; about 22 beats in ten seconds, so 132."
      }
    },
    "A": {
      "part": "Video 4", "time": "35 min",
      "open": "Axis looks like geometry, but you only need two leads to get the zone and one rule to get the angle: the flattest lead is at right angles to the axis.",
      "u": [
        "<b>Zones.</b> Normal −30° to +90°; LAD −30° to −90°; RAD +90° to +180°; extreme the rest.",
        "<b>Quadrant.</b> Lead I and aVF: ++ normal, −+ RAD, −− extreme, +− check lead II (II + normal, II − LAD).",
        "<b>Projection.</b> Along the lead = tallest R; acute = mostly +; 90° = biphasic; obtuse = mostly −; opposite = deepest S.",
        "<b>Biphasic lead</b> is 90° from the axis: −30° → II, +30° → III, +60° → aVL, −60° → aVR.",
        "<b>Shortcut method.</b> Flattest limb lead → ±90° → pick the side where that lead is positive.",
        "<b>Direct method.</b> Farthest-apart pair of positive leads → midpoint ±15°.",
        "<b>Combined items.</b> Rate (speed first), then axis, then QRS width, then match the option."
      ],
      "say": {
        "A-C1": "Look at lead one and aVF. Both up: normal. Lead one down, aVF up: right. Both down: extreme. Lead one up, aVF down: ask lead two.",
        "A3": "Right axis deviation: lead one negative, aVF positive.",
        "A5": "Left axis deviation points up and left: lead one positive, lead three negative.",
        "A-C2": "Each lead shows the axis as a shadow on its own line. Same direction, tallest; right angles, flat; opposite, deepest.",
        "A6": "Plus thirty plus ninety is plus 120: lead three is the flat one.",
        "A8": "Plus sixty: the lead at right angles is aVL.",
        "A9": "Minus sixty points straight away from lead three, so lead three is the most negative.",
        "A11": "Tallest R is aVL, deepest S is lead three; the key accepts both.",
        "A-C3": "Find the flattest limb lead, go ninety degrees either way, and keep the side where that lead is positive. Then check it against lead one and aVF.",
        "A15": "aVL is flat, lead two is tall: plus sixty.",
        "A19": "Lead one up, two, three and aVF down: left axis deviation.",
        "A20": "Positive in one, aVL and aVR, negative in the inferior leads: minus thirty to minus ninety.",
        "A-C4": "Three readings in a row: rate, axis, width. Only then look at the options.",
        "A22": "About 136 a minute with a left axis: tachycardia with left axis deviation.",
        "A24": "Fifteen millimetres per second makes it look like 75; corrected it is 45, with a left axis."
      }
    },
    "E": {
      "part": "Video 5", "time": "25 min",
      "open": "In the lab you put on ten electrodes and get twelve leads. Then you read the tracing in the same order every time, starting with: is this sinus rhythm?",
      "u": [
        "<b>Chest leads.</b> V1, V2: 4th ICS right and left of the sternum. V3 between. V4: 5th ICS midclavicular. V5 anterior axillary, V6 mid-axillary, level with V4.",
        "<b>Planes.</b> Limb leads = frontal plane; chest leads = horizontal plane.",
        "<b>Sinus rhythm.</b> 60–100 bpm, from the SA node, every P followed by a QRS, monomorphic P within each lead, P upright in II and negative in aVR.",
        "<b>Not sinus.</b> PR > 200 = 1st-degree block; some P without QRS = 2nd-degree; P and QRS dissociated = complete block; SA failure → AV node takes over; AF = no P, irregular, narrow QRS.",
        "<b>Lab sheet order.</b> Rate → P → QRS height → axis → T → ST → PR → QT.",
        "<b>Table items.</b> Check every row against the tracing; usually two rows are wrong."
      ],
      "say": {
        "E-C1": "V1 and V2 go in the fourth space either side of the sternum; V4 is fifth space midclavicular; V5 and V6 slide out to the axillary lines at the same level.",
        "E3": "V4: fifth intercostal space, midclavicular line.",
        "E5": "V5 is the anterior axillary line at the V4 level.",
        "E-C2": "Sinus means the SA node is in charge: normal rate, a P before every QRS, the same P shape within each lead, upright in two and negative in aVR.",
        "E7": "Every QRS has a P in front of it; the other options each break one rule.",
        "E9": "P waves do not have to look the same in every lead, only within one lead.",
        "E10": "The key says sinus rhythm: a P before every QRS at about 78 a minute.",
        "E-C3": "If it is not sinus, ask where the P went, whether it still talks to the QRS, and who is pacing the ventricles now.",
        "E11": "P and QRS have nothing to do with each other, atria faster than ventricles: complete heart block.",
        "E-C4": "Use the lab sheet as your checklist and never skip a step: rate, P, QRS, axis, T, ST, PR, QT.",
        "E14": "Lead one is mostly negative and aVF positive: right axis deviation.",
        "E15": "The axis is normal and the QRS is narrow, so those two rows are wrong."
      }
    }
  }
};
