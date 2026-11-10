/* Tutor-only teaching notes for each concept card, in Thai: knowledge beyond the slide that helps explain it.
   b = short bullets (HTML allowed; write < as &lt;), d = optional plain-text diagram (kept in English/ASCII so the columns line up).
   Items marked "อาจเป็นเพราะ" are candidate explanations, not settled answers. Textbook-level facts only. */
window.TUTOR_NOTES = {
  "C-C1": {
    b: [
      "เปรียบ: electrode เหมือนคนยืนดูขบวนพาเหรด ขบวน “บวก” เดินเข้าหา → เห็นยกขึ้น เดินหนี → เห็นลง",
      "ECG วัดแค่ <b>ผิวนอกเซลล์ (extracellular)</b> จึงเห็นเครื่องหมายกลับกับ membrane potential ในเซลล์",
      "Amplitude ขึ้นกับ <b>มวลกล้ามเนื้อ</b> และ <b>ระยะจาก electrode</b> (V3–V4 ใกล้หัวใจสุดจึงมักสูง)",
      "วิธีสอน: วาดแถบกล้ามเนื้อ เติม +/− ทีละช่องให้น้องดูว่า deflection เกิดเฉพาะตอนมีรอยต่อ"
    ],
    d: [
      " resting    | depolarized",
      " + + + + +  | - - - - -      <- outside of the cells",
      "   wave front moves  <---- toward (+) electrode on the left",
      " (+)E =========================== E(-)",
      " depol. toward (+)  -> upward     repol. toward (+) -> downward"
    ]
  },
  "C-C2": {
    b: [
      "Ventricle depolarize ตามลำดับ: <b>septum (ซ้าย→ขวา) → apex → free wall → base</b> ทำให้ QRS มีทั้ง q, R, s",
      "Atrial repolarization (Ta wave) บางครั้งเห็นได้ใน <b>complete AV block</b> เพราะ P กับ QRS แยกกัน",
      "Na⁺ channel blocker (เช่น class I antiarrhythmic) ทำให้ <b>QRS กว้างขึ้น</b> ไม่ได้หายไปทั้งหมด",
      "Hyperkalemia → T สูงแหลม; hypokalemia → T แบน มี U wave (ลิงก์กับ K⁺ efflux ของ phase 3)"
    ]
  },
  "C-C3": {
    b: [
      "เหตุที่ epicardium AP สั้นกว่า: มี <b>I<sub>to</sub> (transient outward K⁺)</b> มากกว่า → phase 1 notch ชัดและ repolarize เร็ว",
      "ถ้า endocardium ขาดเลือด (subendocardial ischemia) ลำดับนี้เปลี่ยน → <b>T กลับหัว</b> หรือ ST depression",
      "จำง่าย: “เข้าก่อน ออกทีหลัง” = endocardium; “เข้าทีหลัง ออกก่อน” = epicardium",
      "เชื่อม C-C1: ทิศกลับ × เครื่องหมายกลับ = ไม่กลับ"
    ],
    d: [
      " depolarization :  endo ----> epi    (+ deflection in a lead facing the epicardium)",
      " repolarization :  endo <---- epi    (opposite direction AND opposite sign)",
      " result         :  T wave same polarity as QRS = concordant"
    ]
  },
  "C-C4": {
    b: [
      "ST segment แบนเพราะ <b>ทุกเซลล์อยู่ใน plateau พร้อมกัน</b> → ไม่มีความต่างศักย์ ถ้าบางส่วนบาดเจ็บ (injury current) ST จะยก/กด",
      "ช่วง <b>vulnerable period</b> ใกล้ยอด T: กระตุ้นตรงนี้ (R-on-T) เสี่ยง VF",
      "Refractory ยาวเพราะ plateau → หัวใจ <b>tetanize ไม่ได้</b> (ลิงก์กับแล็บ extrasystole)",
      "Phase 4 ของ pacemaker cell (SA node) มี slope; ของ ventricle เป็นเส้นราบ (I<sub>K1</sub>)"
    ],
    d: [
      " AP phase :  0     1-2 plateau     3        4",
      " ECG      :  QRS   ST segment      T wave   TP segment",
      " refract. :  |---- absolute ----|-relative-|"
    ]
  },
  "W-C1": {
    b: [
      "การตั้งชื่อ QRS: Q = ลบตัวแรก, R = บวกตัวแรก, S = ลบหลัง R (ตัวพิมพ์ใหญ่/เล็กตามขนาด)",
      "J point = จุดที่ QRS จบและ ST เริ่ม ใช้วัด ST deviation เทียบกับ TP/PR baseline",
      "U wave (ใน Fig 10-1) อาจเป็นเพราะ repolarization ช้าของ Purkinje/M cells ยังถกเถียงกันอยู่ เด่นใน hypokalemia",
      "วิธีสอน: ให้น้องใช้ปากกาสามสี แยก wave (คลื่น), segment (ราบ), interval (คลื่น+ราบ) บนภาพเดียว"
    ],
    d: [
      "  |<----- PR interval ----->|",
      "  |<- P ->|<- PR segment ->|<-QRS->|<- ST seg ->|<- T ->|",
      "          (AV node delay)          (plateau)",
      "                                  |<--------- QT interval ------->|"
    ]
  },
  "W-C2": {
    b: [
      "PR สั้น &lt;120 ms: ตัวอย่างคลาสสิกคือ <b>WPW</b> (accessory pathway) มี delta wave และ QRS กว้างเล็กน้อย",
      "1st-degree AV block: PR &gt;200 ms ทุกจังหวะ แต่ทุก P ยังมี QRS ตาม (ไม่มี beat หาย)",
      "QTc สูตร <b>Bazett</b> = QT/√RR (RR เป็นวินาที) QT ยาวเสี่ยง <b>torsades de pointes</b>; ยาที่ยืด QT เช่น macrolides, antipsychotics",
      "QRS ≥120 ms: bundle branch block หรือจังหวะที่เกิดจาก ventricle เอง"
    ]
  },
  "W-C3": {
    b: [
      "P ลบใน lead II: อาจเป็น ectopic atrial / junctional rhythm หรือ <b>ติดสายแขนสลับ</b> (ถ้า lead I กลับหัวด้วย)",
      "Pathologic Q: กว้าง &gt;40 ms หรือลึก &gt;1/4 ของ R → แผลเป็นจาก transmural MI",
      "ST elevation ในหลาย lead ต่อเนื่อง (contiguous) → STEMI; ST depression → ischemia",
      "RR 500 ms → 120 bpm คิดเร็ว: 60 000 ÷ 500"
    ]
  },
  "W-C4": {
    b: [
      "ใช้ภาพ Wiggers: <b>ไฟฟ้านำกลไกราว 20–40 ms</b> (electromechanical delay)",
      "S1 ตรงกับ QRS ช่วงต้น, S2 ตรงกับปลาย T → ใช้คลำ carotid คู่กับฟังเสียงได้",
      "Mitral flow บน Doppler มีสองยอด: <b>E wave</b> (rapid filling, ใหญ่) กับ <b>A wave</b> (atrial kick, เล็ก) → ตรงกับคำถามจุด D",
      "AF ไม่มี atrial kick → เสีย LV filling ราว 20% (ลิงก์ E-C3)"
    ],
    d: [
      " ECG     :  P      QRS          ST    T        TP",
      " mechanic:  atrial  isovol.     eject  ->       rapid filling -> diastasis",
      "            kick    contraction        S2 close (largest mitral flow)",
      " valves  :      S1 (AV close)  AoV open ... AoV close   MV open"
    ]
  },
  "W-C5": {
    b: [
      "Sympathetic (β₁): เพิ่ม I<sub>f</sub> และ I<sub>Ca,L</sub> ที่ SA node → phase 4 ชันขึ้น; ที่ AV node → นำไฟเร็วขึ้น (dromotropy)",
      "Vagus (M₂): เปิด I<sub>K,ACh</sub> → hyperpolarize, ลด slope → HR ช้า PR ยาว",
      "Atropine: HR เพิ่มชัดในคนหนุ่มที่ vagal tone สูง; QRS ไม่เปลี่ยนเพราะ ventricle แทบไม่มี vagal innervation",
      "ลิงก์ยา: β-blocker ยืด PR, ลด HR; digoxin เพิ่ม vagal tone ที่ AV node"
    ]
  },
  "L-C1": {
    b: [
      "Einthoven’s law: I + III = II (ใช้ตรวจว่าติดสายผิดหรือไม่ได้)",
      "RL electrode = ground ลด noise ไม่ได้เป็นขั้วของ lead ไหน",
      "จำขั้ว: “<b>ขั้วบวกอยู่ล่างหรือซ้ายเสมอ</b>” (I: LA, II: LL, III: LL)",
      "Smartwatch ECG = lead I ใช้คัดกรอง AF ได้ แต่ไม่ใช่ 12 lead"
    ],
    d: [
      "        RA (-) ------ I ------> (+) LA",
      "          \\                     /  (-)",
      "           II                III",
      "             \\               /",
      "              v (+) LL (+) v"
    ]
  },
  "L-C2": {
    b: [
      "Augmented = ขยายสัญญาณขึ้นราว 50% เทียบกับ unipolar เดิม (VR, VL, VF) จึงมีตัว “a”",
      "aVR มอง <b>จากไหล่ขวาเข้าหาหัวใจ</b> คลื่นปกติจึงลบหมด",
      "Hexaxial = รวม triaxial ของ I, II, III กับ aVR, aVL, aVF แบ่งวงกลมทุก 30°",
      "คู่ตั้งฉากใช้ในวิธีลัดหา axis (A-C3)"
    ],
    d: [
      "              -90",
      "      aVR -150   -30 aVL",
      "   180 --------+-------- 0  I",
      "      III +120   +60 II",
      "              +90 aVF"
    ]
  },
  "L-C3": {
    b: [
      "สงสัยสลับสายแขน: <b>lead I กลับหัวทั้ง P, QRS, T</b> และ aVR ดูบวก (ต่างจาก dextrocardia ที่ chest lead ก็ผิดปกติด้วย)",
      "หลักเดียวตอบได้ทุกข้อ: augmented lead ของแขนขาที่ “ไม่ถูกย้าย” ไม่เปลี่ยน",
      "สลับ LL–RL แทบไม่เห็นผล เพราะขาสองข้างเป็นจุดที่ศักย์ใกล้กัน",
      "Lead swap เป็นสาเหตุ ECG “ประหลาด” ที่ต้องตัดก่อนวินิจฉัยโรค"
    ]
  },
  "R-C1": {
    b: [
      "ตาราง 300-150-100-75-60-50 ท่องเป็นเพลงได้; ถ้า R ตกระหว่างเส้นให้ประมาณ",
      "Gain 10 mm/mV ถ้าเปลี่ยนเป็น 5 mm/mV คลื่นเตี้ยลงครึ่งหนึ่ง ต้องดู calibration box ทุกครั้ง",
      "60 ÷ RR (วินาที) คือวิธีที่ไม่ขึ้นกับความเร็วกระดาษ ถ้ารู้ RR เป็นเวลา",
      "Rate &lt;60 = bradycardia, &gt;100 = tachycardia (ของ sinus)"
    ]
  },
  "R-C2": {
    b: [
      "คิดเป็นสัดส่วน: ความเร็ว ×2 → ช่องระหว่าง R ×2 → ต้องคูณ rate ที่คำนวณได้ ×2 กลับ",
      "เครื่องบางเครื่องตั้ง 50 mm/s เพื่อดูคลื่นเร็ว (เด็ก, tachycardia)",
      "วิธีเช็กคำตอบ: rate ที่ได้ควรสมเหตุสมผลกับเรื่องผู้ป่วย (dyspnea, ตรวจสุขภาพ)",
      "ใช้สูตรเดียว: HR = 60 × v ÷ RR(mm) ไม่ต้องจำหลายตัวเลข"
    ],
    d: [
      " speed (mm/s) :  12.5    25     30     50",
      " rule         :  750/n   1500/n 1800/n 3000/n    (n = small boxes)"
    ]
  },
  "R-C3": {
    b: [
      "6-second method: นับ QRS ใน 6 วินาที × 10 (เส้นกำกับบนกระดาษบางชนิด)",
      "AF: atrial rate 350–600/min แต่ AV node กรองลงมา ventricular rate จึงเร็วและไม่สม่ำเสมอ",
      "Pulse deficit: นับจากฟังหัวใจ (apex) มากกว่าคลำ radial เพราะบางจังหวะ SV น้อยเกินจะคลำได้",
      "AF เพิ่มเสี่ยง stroke จาก thrombus ใน left atrial appendage"
    ]
  },
  "A-C1": {
    b: [
      "LAD ที่พบบ่อย: <b>left anterior fascicular block</b>, LVH, inferior MI",
      "RAD ที่พบบ่อย: <b>RVH</b> (pulmonary hypertension, COPD), left posterior fascicular block, ผอมสูง, เด็ก",
      "ลิงก์โจทย์: t-RAT ใช้ pulmonary hypertension → RAD และ hypertension → LAD",
      "บางตำราใช้ normal −30° ถึง +100° ให้ยึดตามคอร์สคือ −30° ถึง +90°"
    ],
    d: [
      "            lead I +        lead I -",
      " aVF +   normal 0..+90      RAD +90..180",
      " aVF -   check lead II      extreme",
      "         II+ normal / II- LAD"
    ]
  },
  "A-C2": {
    b: [
      "คณิต: amplitude ∝ |vector| × cos θ (θ = มุมระหว่าง axis กับ lead)",
      "cos 30° ≈ 0.87, cos 60° = 0.5, cos 90° = 0 → บอกว่าทำไม lead ห่าง 30° ยังสูงเกือบเท่า lead ที่ขนาน",
      "“Biphasic” = ผลรวมบวกลบเท่ากัน (equiphasic) ไม่จำเป็นต้องเล็ก",
      "วิธีสอน: ใช้ไฟฉายส่องเงาไม้บรรทัดลงบนแกน lead"
    ],
    d: [
      " angle to lead :  0     <90        90         >90        180",
      " QRS in lead   :  max+  mostly +   R = S      mostly -   max-"
    ]
  },
  "A-C3": {
    b: [
      "วิธีลัด (จากโน้ตผู้สอน p.2): Step 1 หา biphasic lead → Step 2 ±90° → Step 3 ดู lead ทิศนั้นบวกหรือลบ",
      "วิธีตรง: หาคู่ lead ที่ห่างกันมากที่สุดแต่บวกทั้งคู่ (และคู่ที่ลบทั้งคู่) แล้วใช้จุดกึ่งกลาง ±15°",
      "ถ้าไม่มี lead ไหน biphasic ชัด ให้ใช้วิธีตรงหรือ quadrant ช่วย",
      "ตัวอย่างในโน้ต p.2 (i-RAT Q16): + I, aVR, aVL / − II, III, aVF → axis ช่วง −30° ถึง −90°"
    ]
  },
  "A-C4": {
    b: [
      "ข้อรวมเป็นการ “กรองตัวเลือก”: ตัด rate ก่อนจะเหลือครึ่งเดียว แล้วค่อยดู axis",
      "QRS กว้าง + RAD อาจเป็นเพราะ RBBB หรือจังหวะจาก ventricle (ในชุดข้อสอบไม่ได้ถามสาเหตุ)",
      "t-RAT 2569 Q13 ใช้ 15 mm/s: rate ที่ดูเหมือนปกติต้อง × 15/25",
      "ฝึกพูดเป็นประโยค: “rate … , axis … , QRS …” ก่อนดูตัวเลือก"
    ]
  },
  "E-C1": {
    b: [
      "หา ICS: คลำ <b>sternal angle (angle of Louis)</b> = ซี่โครงที่ 2 แล้วไล่ลง ICS 2 → 3 → 4",
      "ผู้หญิง: วาง V4–V6 <b>ใต้เต้านม</b> ไม่ใช่บนเนื้อเต้านม",
      "ติด V1–V2 สูงเกินไปเป็นความผิดพลาดที่พบบ่อย ทำให้ดูเหมือน RBBB หรือ Q ผิดปกติ",
      "Right-sided lead (V4R) ใช้ดู RV infarction (นอกเนื้อหา แต่ช่วยอธิบายว่าตำแหน่งสำคัญ)"
    ],
    d: [
      " V1: 4th ICS R sternal   V2: 4th ICS L sternal   V3: between V2-V4",
      " V4: 5th ICS MCL   V5: AAL (V4 level)   V6: MAL (V4 level)"
    ]
  },
  "E-C2": {
    b: [
      "P บวกใน II = ไฟวิ่งจากขวาบนลงซ้ายล่าง ตรงกับทิศจาก SA node",
      "Sinus arrhythmia: RR เปลี่ยนตามการหายใจ (เร็วขึ้นตอนหายใจเข้า) ยังนับเป็น sinus",
      "Rate 60–100 คือ normal sinus rhythm; &lt;60 sinus bradycardia, &gt;100 sinus tachycardia",
      "P หลายรูปใน lead เดียว (≥3 รูป) → multifocal atrial rhythm"
    ]
  },
  "E-C3": {
    b: [
      "Escape rate: AV junction ราว 40–60, ventricle ราว 20–40 bpm (ยิ่งลึก ยิ่งช้า QRS ยิ่งกว้าง)",
      "2nd-degree: Mobitz I (PR ยาวขึ้นเรื่อยๆ จน drop) กับ Mobitz II (PR คงที่แล้ว drop ทันที)",
      "ลิงก์แล็บเต่า: Stannius/Gaskell clamp ทำ heart block ให้ดูได้ (atria กับ ventricle เต้นคนละจังหวะ)",
      "Complete heart block ในผู้สูงอายุ + syncope → ต้องใส่ pacemaker"
    ]
  },
  "E-C4": {
    b: [
      "QRS height ใน V1 กับ V5/V6 ใช้ดู ventricular hypertrophy (เช่น S V1 + R V5 สูงมาก → LVH)",
      "T แหลมสูงแบบเต็นท์ → hyperkalemia; T กลับหัว → ischemia หรือ strain",
      "P notched (M-shaped) → left atrial enlargement; P สูงแหลม → right atrial enlargement",
      "AC80 Q1 เป็นภาพแทน: บอกน้องให้ใช้ลำดับนี้มากกว่าจำภาพ"
    ]
  }
};
