/* Thai explanation of every concept card, shared by the student deck, the tutor deck and print.js.
   One array of paragraphs per concept-card ID; each paragraph opens with a bold lead.
   Faithful to the English card: it explains the same content and adds no new exam facts. */
window.THAI_EXPLAIN = {
  /* ---------------- C · Cardiophysiology ---------------- */
  "C-C1": [
    "<b>ECG วัดอะไร</b> Electrode บนผิววัด <b>ความต่างศักย์ระหว่างสองจุด</b> (lead = ขั้วบวกเทียบกับขั้วอ้างอิง) ไม่ได้วัดศักย์ในเซลล์ตัวใดตัวหนึ่ง",
    "<b>ประจุที่ผิวนอกเซลล์</b> เซลล์ที่พัก (polarized) ผิวนอกเป็นบวก เมื่อ depolarize แล้วผิวนอกกลายเป็นลบ ตรงรอยต่อระหว่างสองโซนนี้จึงเกิด dipole: ฝั่งที่ depolarize แล้วเป็นลบ ฝั่งที่ยังพักเป็นบวก",
    "<b>เส้นราบ</b> ถ้ากล้ามเนื้อพักทั้งหมดหรือ depolarize ทั้งหมด จะไม่มีความต่างศักย์ ECG เลยเป็นเส้นราบ (isoelectric)",
    "<b>ทิศของคลื่น</b> คลื่น depolarization ที่วิ่งเข้าหาขั้วบวกให้ deflection ขึ้น วิ่งหนีให้ลง ถ้าวิ่งตั้งฉากกับ lead จะได้คลื่นขึ้นลงเท่ากัน (biphasic)",
    "<b>Repolarization เป็นภาพสะท้อน</b> คลื่น repolarization ที่วิ่งไปทางเดียวกันจะให้ deflection เครื่องหมายตรงข้ามกับ depolarization เสมอ",
    "<b>ผูกกับ i-RAT Q1</b> Electrode ที่อยู่บนส่วนที่ depolarize แล้วจะลบกว่า electrode ที่อยู่บนส่วนที่ยังพัก คลื่นที่วิ่งเข้าหา electrode บันทึกจึงเป็นคลื่นบวก"
  ],
  "C-C2": [
    "<b>หนึ่งคลื่นหนึ่งเหตุการณ์</b> P wave = atrial depolarization, QRS = ventricular depolarization (septum → apex → free walls), T wave = ventricular repolarization",
    "<b>กระแสไอออน</b> QRS มาจาก fast Na⁺ เข้าเซลล์ (phase 0) ของ ventricle ส่วน T wave มาจาก K⁺ ไหลออกจาก ventricular myocyte (phase 3)",
    "<b>Atrial repolarization หายไปไหน</b> มันเล็กและเกิดพร้อมกับ ventricular depolarization ซึ่งใหญ่กว่ามาก จึงถูก QRS บังมิด ไม่ใช่เพราะเร็วหรือช้าเกินไป",
    "<b>ขนาดตามมวลกล้ามเนื้อ</b> atria ผนังบางจึงได้ P เล็ก ventricle ผนังหนาจึงได้ QRS ใหญ่",
    "<b>Node ไม่มีคลื่นของตัวเอง</b> SA node กับ AV node ก็ยิงไฟ แต่กระแสเล็กเกินจะเห็นบนผิว ช่วงราบ PR segment คือเวลาที่ไฟข้าม AV node"
  ],
  "C-C3": [
    "<b>ลำดับ depolarization</b> ไฟเข้าผนัง ventricle จากด้านใน (endocardium) ออกไปด้านนอก (epicardium)",
    "<b>AP ยาวไม่เท่ากัน</b> เซลล์ endocardium มี action potential ยาวกว่า epicardium เซลล์ด้านนอกโดนกระตุ้นทีหลังแต่ repolarize เสร็จก่อน",
    "<b>ลำดับ repolarization</b> repolarization จึงวิ่งกลับทิศ คือจากนอกเข้าใน",
    "<b>สองกลับเท่ากับไม่กลับ</b> ทิศกลับ (นอก→ใน) และเครื่องหมายก็กลับ (repolarization) ผลรวมคือ T ชี้ทางเดียวกับ QRS เรียกว่า concordant",
    "<b>T ปกติอยู่ทางไหน</b> บวกใน II และ V3–V6 ลบใน aVR ถ้า T สวนทางกับ QRS ให้คิดถึงโรค ตัวเลือก “ปกติเป็น discordant” จึงผิด"
  ],
  "C-C4": [
    "<b>Phase 0 → QRS</b> upstroke จาก fast Na⁺ ของกล้ามเนื้อ ventricle คือ QRS complex",
    "<b>Phase 2 → ST segment</b> ช่วง plateau (Ca²⁺ เข้า ≈ K⁺ ออก) ทุกเซลล์ของ ventricle depolarize อยู่พร้อมกัน ไม่มีความต่างศักย์ ST จึงอยู่บน isoelectric line",
    "<b>Phase 3 → T wave, Phase 4 → TP segment</b> ช่วงลงของ AP (K⁺ ออก) คือ T wave ส่วนช่วงพักระหว่างจังหวะ (I<sub>K1</sub>) คือ TP segment",
    "<b>Atrium มาก่อน</b> phase 0 ของ atrium คือ P wave ส่วน phase 3 ของ atrium ตกอยู่ใน QRS",
    "<b>Refractory period</b> absolute refractory ครอบตั้งแต่ QRS ผ่าน plateau ทั้งช่วงไปจนราวยอด T ครึ่งหลังของ T เป็น relative refractory"
  ],
  /* ---------------- W · Waves & intervals ---------------- */
  "W-C1": [
    "<b>สามคำที่ต้องแยก</b> wave คือคลื่นที่เบี่ยงจาก baseline (P, Q, R, S, T, U) segment คือช่วงราบระหว่างสองคลื่น interval คือคลื่นรวมกับ segment ที่ตามมา",
    "<b>Interval หลัก</b> PR interval = ต้น P ถึงต้น QRS ส่วน QT interval = ต้น QRS ถึงปลาย T",
    "<b>PR segment</b> ปลาย P ถึง QRS คือช่วงที่ไฟค้างใน AV node ความยาวของมันจึงบอก AV nodal delay (t-RAT 2569 Q8 ที่ทำเครื่องหมาย X)",
    "<b>ST segment</b> ventricle depolarize ครบ (plateau) จึงอยู่บน isoelectric line",
    "<b>Baseline</b> ให้ดูที่ TP segment ซึ่งทั้งหัวใจพักอยู่",
    "<b>กับดัก</b> PR interval รวม P wave (atrial depolarization) กับ AV delay ส่วน PR segment มีแค่ AV delay"
  ],
  "W-C2": [
    "<b>PR interval 120–200 ms</b> วัดตั้งแต่ atrium เริ่มถึง ventricle เริ่ม (รวม AV node) ถ้าสั้นกว่า 120 ไฟลัดข้าม AV node (pre-excitation) ถ้ายาวกว่า 200 คือ 1st-degree AV block",
    "<b>QRS width ≤ 100–110 ms</b> เวลา ventricular depolarization ปกติแคบกว่า 120 ms ถ้ากว้างกว่าแปลว่า ventricle นำไฟช้า",
    "<b>QT ขึ้นกับ rate</b> QT ∝ RR ∝ 1/HR หัวใจเต้นเร็ว QT สั้นลง",
    "<b>QTc</b> ปรับด้วย QT/√RR ให้เทียบกันได้ ค่าปกติ 330–440 ms (ผู้หญิงถึง 450) QTc 500 ms ยาวเกิน",
    "<b>นับช่อง</b> ที่ 25 mm/s ช่องเล็ก = 40 ms ดังนั้น PR ปกติ 3–5 ช่องเล็ก QRS ไม่ถึง 3 ช่อง",
    "<b>ข้อสอบ AV node</b> ความผิดปกติที่ AV node เปลี่ยน PR ไม่ใช่ QT หรือ ST"
  ],
  "W-C3": [
    "<b>ทิศของ P</b> P บวกใน lead II และลบใน aVR คือปกติ P ลบใน lead II ผิดปกติ",
    "<b>T และ ST</b> T บวกใน V3–V6 ST ต้องอยู่บนเส้น baseline คลาดได้ไม่เกิน ±1 mm ST ยก 4 mm หรือกด 2 mm ผิดปกติ",
    "<b>Q wave</b> q ปกติแคบกว่า 40 ms Q ที่กว้างและลึกบอก old myocardial infarction",
    "<b>ตัวเลข</b> PR 160, QRS 100, QTc 330–440 ปกติ ส่วน PR 240, QRS 140, QT 140, QTc 500 ผิดปกติ",
    "<b>RR ต้องแปลงก่อน</b> HR = 60 000 ÷ RR (ms) RR 600–1000 ms = 60–100 bpm RR 500 = 120 bpm RR 800 = 75 bpm",
    "<b>Axis</b> ช่วงปกติ −30° ถึง +90° axis 30° จึงอยู่ในช่วงปกติ"
  ],
  "W-C4": [
    "<b>ไฟมาก่อนเสมอ</b> แต่ละคลื่นนำหน้าการบีบหรือคลายที่มันสั่ง",
    "<b>P → atrial contraction</b> หลัง P คือ atrial kick ช่วงท้ายของการเติมเลือด",
    "<b>QRS → ventricle บีบ</b> AV valve ปิด (S1) เข้าสู่ isovolumic contraction แล้ว aortic valve เปิดหลัง QRS เล็กน้อย",
    "<b>ST, T → ejection</b> rapid ejection ตามด้วย reduced ejection ระหว่าง T",
    "<b>ปลาย T → S2</b> aortic valve ปิด ตามด้วย isovolumic relaxation",
    "<b>ต้น TP → rapid filling</b> mitral valve เปิด เลือดไหลผ่าน mitral มากที่สุดช่วงนี้ (จุด D ใน t-RAT 2569 Q5)"
  ],
  "W-C5": [
    "<b>Autonomic คุม node</b> sympathetic และ vagus ปรับ SA node กับ AV node เป็นหลัก",
    "<b>Sympathetic หรือ atropine</b> SA node เร็วขึ้น RR สั้น (HR เพิ่ม) AV node นำเร็วขึ้น PR สั้น QT สั้นตาม RR",
    "<b>QRS ไม่เปลี่ยน</b> การนำไฟฟ้าใน ventricle ไม่ได้ขึ้นกับ autonomic QRS กว้างเท่าเดิม และไม่ได้สูงขึ้น",
    "<b>Vagus (ACh ที่ M₂)</b> ทิศตรงข้าม RR ยาว PR ยาว ถ้าแรงมากเกิด AV block หรือหยุดเต้นชั่วคราว",
    "<b>ดูผลยาที่ SA node</b> ให้วัด RR interval ซึ่งก็คือ heart rate",
    "<b>ST elevation</b> ไม่ใช่ผลของ autonomic แต่บอก myocardial injury"
  ],
  /* ---------------- L · Leads & swaps ---------------- */
  "L-C1": [
    "<b>Bipolar limb lead</b> แต่ละ lead ใช้ electrode สองแขนขา ขั้วหนึ่งบวก อีกขั้วลบ",
    "<b>ขั้วของแต่ละ lead</b> lead I: LA บวก RA ลบ (0°) lead II: LL บวก RA ลบ (+60°) lead III: LL บวก LA ลบ (+120°)",
    "<b>RL ไม่อยู่ใน lead ไหน</b> electrode ที่ขาขวาเป็น ground",
    "<b>สามเหลี่ยม Einthoven</b> สาม lead ต่อกันเป็นสามเหลี่ยม II = I + III",
    "<b>ทิศ</b> lead ชี้จากขั้วลบไปขั้วบวก lead I ชี้ไปซ้ายแนวนอน II ชี้ลงซ้าย III ชี้ลงขวา",
    "<b>นาฬิกา smartwatch</b> ขั้วบวกที่ข้อมือซ้าย ขั้วลบที่นิ้วขวา = lead I"
  ],
  "L-C2": [
    "<b>Augmented lead</b> ใช้แขนขาเดียวเป็นขั้วบวก เทียบกับค่าเฉลี่ยของอีกสองข้าง aVR บวกที่แขนขวา aVL บวกที่แขนซ้าย aVF บวกที่เท้าซ้าย",
    "<b>มุม</b> aVL −30° aVF +90° aVR −150°",
    "<b>Hexaxial wheel</b> รวม limb lead ทั้ง 6 บนวงกลมเดียวจะห่างกันทุก 30° ทั้งหมดอยู่ใน frontal plane ส่วน chest lead อยู่ใน horizontal plane",
    "<b>คู่ตั้งฉาก</b> I ⊥ aVF, II ⊥ aVL, III ⊥ aVR (bipolar หนึ่งตัวจับคู่กับ augmented หนึ่งตัวเสมอ)",
    "<b>ใช้ทำอะไร</b> คู่ตั้งฉากคือหัวใจของการหา axis: lead ที่ biphasic บอกว่า axis ตั้งฉากกับมัน"
  ],
  "L-C3": [
    "<b>สลับสองแขน (RA ↔ LA)</b> พบบ่อยสุด lead I กลับหัว (−I) II กับ III สลับกัน aVR กับ aVL สลับกัน aVF ไม่เปลี่ยน",
    "<b>RA ↔ LL</b> lead II กลับหัว I กับ III สลับกันและกลับหัว aVR กับ aVF สลับกัน aVL ไม่เปลี่ยน",
    "<b>LA ↔ LL</b> lead III กลับหัว I กับ II สลับกัน aVL กับ aVF สลับกัน aVR ไม่เปลี่ยน",
    "<b>LL ↔ RL</b> แทบไม่เปลี่ยนอะไร เพราะ RL เป็นแค่ ground และขาสองข้างมีศักย์ใกล้เคียงกัน",
    "<b>หลักจำ</b> lead ที่ไม่เปลี่ยนคือ augmented lead ของแขนขาที่ไม่ได้ถูกย้าย",
    "<b>โจทย์ “aVF ไปโผล่ที่ไหน”</b> สลับแขนไม่ได้แตะขาซ้าย aVF จึงยังอยู่ที่ aVF"
  ],
  /* ---------------- R · Heart rate ---------------- */
  "R-C1": [
    "<b>มาตรฐานกระดาษ</b> ความเร็ว 25 mm/s gain 10 mm/mV (กล่อง calibration ต้นแถว)",
    "<b>ขนาดช่อง</b> ช่องเล็ก 1 mm = 0.04 s ช่องใหญ่ 5 ช่องเล็ก = 0.2 s",
    "<b>สูตร</b> HR = 1500 ÷ จำนวนช่องเล็กระหว่าง R สองตัว หรือ 300 ÷ จำนวนช่องใหญ่ หรือ 60 ÷ RR (วินาที) เช่น RR 0.8 s = 75 bpm",
    "<b>ตารางลัด</b> R ห่าง 1, 2, 3, 4, 5, 6 ช่องใหญ่ = 300, 150, 100, 75, 60, 50 bpm",
    "<b>ทำไมสูตรได้ผล</b> ในหนึ่งนาทีกระดาษเลื่อน (ความเร็ว × 60) มิลลิเมตร และช่องเล็กยาว 1 mm Sinus rate ปกติ 60–100"
  ],
  "R-C2": [
    "<b>นับช่องก่อน ปรับทีหลัง</b> สูตร 1500 ใช้กับ 25 mm/s เท่านั้น ความเร็วอื่นให้คูณด้วย (ความเร็ว ÷ 25)",
    "<b>สูตรรวม</b> HR = 1500 ÷ ช่องเล็ก × (speed ÷ 25) = 60 × speed ÷ RR (mm)",
    "<b>แต่ละความเร็ว</b> 12.5 mm/s ใช้ 750 ÷ ช่อง, 30 mm/s ใช้ 1800 ÷ ช่อง, 50 mm/s คลื่นถูกยืดกว้าง 2 เท่า ใช้ 3000 ÷ ช่อง",
    "<b>ตัวอย่าง i-RAT Q14</b> 50 mm/s RR 18 ช่อง 1500 ÷ 18 = 83 คือกับดัก ต้อง × 2 = 168 bpm",
    "<b>ตัวอย่าง AC76 Q7</b> 12.5 mm/s RR 15 mm 1500 ÷ 15 = 100 × 0.5 = 50 bpm",
    "<b>กับดัก</b> กระดาษเร็วทำให้ rate ปกติดูช้าเกินไป กระดาษช้าทำให้ดูเร็ว อ่านความเร็วใต้ tracing ทุกครั้ง"
  ],
  "R-C3": [
    "<b>RR ไม่เท่ากัน</b> ถ้าวัด RR ช่วงเดียวจะได้ rate ต่างกันทุกครั้ง",
    "<b>นับแทนหาร</b> rhythm strip ใต้ 12-lead ยาว 10 วินาทีที่ 25 mm/s (250 mm) นับ QRS ทั้ง strip แล้ว × 6",
    "<b>ตัวอย่าง t-RAT 2568 Q14</b> นับได้ 22 QRS → 132 bpm",
    "<b>AF บน strip</b> ไม่มี P เห็นเป็น baseline หยักๆ RR ไม่สม่ำเสมอแบบไม่มีแบบแผน QRS แคบเพราะ ventricle ยังนำไฟปกติ",
    "<b>นับอะไร</b> ใน AF ให้นับ ventricular rate (QRS) atria เต้นเร็วเกินกว่าจะนับได้"
  ],
  /* ---------------- A · QRS axis ---------------- */
  "A-C1": [
    "<b>สี่โซน</b> normal −30° ถึง +90°, LAD −30° ถึง −90°, RAD +90° ถึง +180°, extreme (northwest) −90° ถึง ±180°",
    "<b>Quadrant check</b> ดู lead I กับ aVF (ตั้งฉากกัน): บวก/บวก = normal (0° ถึง +90°), I ลบ aVF บวก = RAD, ลบ/ลบ = extreme",
    "<b>กรณี I บวก aVF ลบ</b> axis อยู่ระหว่าง 0° ถึง −90° ต้องดู lead II ต่อ: II บวก ยังเป็น normal (0° ถึง −30°) II ลบ จึงเป็น LAD",
    "<b>กับดัก</b> I บวก + aVF ลบ ยังไม่ใช่ LAD เสมอ lead II ที่ลบคือตัวพิสูจน์ LAD",
    "<b>ขอบ +90°</b> ตามช่วงของคอร์ส +90° ยังนับเป็นปกติ (โจทย์ AC75 Q4)"
  ],
  "A-C2": [
    "<b>Projection</b> QRS ในแต่ละ lead คือเงาของ vector เฉลี่ยบนแกนของ lead นั้น",
    "<b>ตามมุม</b> 0° (ชี้ตรง lead) = บวกสูงสุด มุมแหลม = บวกมากกว่าลบ 90° = biphasic (R ≈ S) มุมป้าน = ลบมากกว่าบวก 180° = ลบลึกสุด",
    "<b>Lead ที่ biphasic</b> ห่างจาก axis 90° เช่น axis −30° → II, +30° → III, +60° → aVL, −60° หรือ +120° → aVR",
    "<b>Lead ที่ R สูงสุด</b> axis −60° และ −30° → aVL, +30° → I กับ II พอกัน, +60° → II, +120° → III",
    "<b>Highest amplitude</b> ตีความได้ทั้ง R สูงสุดและ S ลึกสุด ที่ −60° AC81 key จึงให้ทั้ง aVL (R สูงสุด) และ lead III (S ลึกสุด)"
  ],
  "A-C3": [
    "<b>วิธีลัด เริ่มจาก lead ที่แบนที่สุด</b> ดูเฉพาะ limb lead 6 ตัว (frontal plane) หา lead ที่ R ≈ S มากที่สุด",
    "<b>สองตัวเลือก</b> axis อยู่ห่างจาก lead นั้น ±90° ได้สองทิศ ดู lead ที่อยู่ทิศหนึ่ง ถ้าบวก axis ชี้ทางนั้น ถ้าลบ axis ชี้อีกทาง",
    "<b>วิธีตรง หาคู่ที่ห่างกันที่สุด</b> ทำเครื่องหมายบวก/ลบให้ทั้ง 6 lead แล้วหา lead บวกสองตัวที่ห่างกันมากที่สุด (และคู่ที่ลบ) axis อยู่ที่จุดกึ่งกลาง ±15°",
    "<b>ตัวอย่าง t-RAT 2569 Q11</b> aVL แบนที่สุด → +60° หรือ −120° lead II ที่ +60° มี R สูง → axis +60°",
    "<b>ตรวจซ้ำเสมอ</b> เทียบคำตอบกับ quadrant ของ lead I และ aVF (axis +60° ต้องได้ I บวก aVF บวก)"
  ],
  "A-C4": [
    "<b>แยกอ่านทีละเรื่อง</b> ข้อรวมทดสอบสามอย่าง อ่านทีละอย่างแล้วค่อยเลือกตัวเลือกที่ตรงทั้งหมด",
    "<b>1 Rate</b> อ่าน paper speed ก่อน แล้วใช้ 1500 ÷ ช่องเล็ก แล้วปรับตามความเร็ว",
    "<b>2 Axis</b> lead I กับ aVF ก่อน ถ้า I บวก aVF ลบ ให้ดู lead II",
    "<b>3 QRS width</b> ปกติ ≤ 100–110 ms คือไม่ถึง 3 ช่องเล็ก",
    "<b>ตัวอย่างในชุดข้อสอบ</b> i-RAT Q18: RR 11 ช่อง ≈ 136 bpm กับ LAD → tachycardia with LAD; i-RAT Q19: RAD กับ QRS กว้าง; t-RAT 2569 Q13 (15 mm/s): RR ≈ 20 ช่อง ≈ 45 bpm กับ LAD → bradycardia with LAD"
  ],
  /* ---------------- E · ECG lab ---------------- */
  "E-C1": [
    "<b>10 electrode ได้ 12 lead</b> limb electrode 4 ตัว (RA, LA, LL และ RL เป็น ground) ให้ I, II, III, aVR, aVL, aVF chest electrode 6 ตัวให้ V1–V6",
    "<b>V1, V2</b> ICS 4 ชิด sternum ขวาและซ้ายตามลำดับ",
    "<b>V3, V4</b> V3 อยู่กึ่งกลางระหว่าง V2 กับ V4 ส่วน V4 อยู่ ICS 5 ที่ midclavicular line",
    "<b>V5, V6</b> ไล่ออกไปด้านข้างในระดับเดียวกับ V4: V5 ที่ anterior axillary line, V6 ที่ mid-axillary line",
    "<b>สองระนาบ</b> chest lead มองหัวใจในแนว horizontal ส่วน limb lead มองในแนว frontal",
    "<b>กับดัก</b> V1–V2 อยู่ ICS 4 ไม่ใช่ 5 และ V5 ไม่ได้อยู่แนวเดียวกับ V4"
  ],
  "E-C2": [
    "<b>เกณฑ์ sinus rhythm</b> rate 60–100 bpm ไฟเริ่มจาก SA node P ตามด้วย QRS ทุกตัว (1:1)",
    "<b>รูปของ P</b> P ต้องเหมือนกันทุกจังหวะ <i>ภายใน lead เดียวกัน</i> (monomorphic) ไม่จำเป็นต้องเหมือนกันข้าม lead",
    "<b>ทิศของ P</b> บวกใน lead II ลบใน aVR",
    "<b>กับดักที่ 1</b> “P หน้าตาเหมือนกันทุก lead” ไม่ใช่เกณฑ์ เพราะ P ต่างกันได้ในแต่ละ lead",
    "<b>กับดักที่ 2</b> “P บวกทุก lead” ผิด เพราะ P ลบใน aVR"
  ],
  "E-C3": [
    "<b>1st-degree AV block</b> PR นานกว่า 200 ms แต่ P ทุกตัวยังผ่านลงไปได้",
    "<b>2nd-degree AV block</b> P บางตัวไม่มี QRS ตาม",
    "<b>3rd-degree (complete) AV block</b> P กับ QRS ไม่สัมพันธ์กัน atria เต้นตาม sinus ventricle ใช้ escape rhythm ที่ช้ากว่า (เช่น 70 กับ 40)",
    "<b>SA node เสีย</b> pacemaker ตัวถัดไปคือ AV node (junction) ได้จังหวะช้า QRS แคบ P หายหรือผิดรูป",
    "<b>Atrial fibrillation</b> ไม่มี P RR ไม่สม่ำเสมอแบบไม่มีแบบแผน QRS ยังแคบ",
    "<b>QRS แคบบอกอะไร</b> ventricle ยังถูกกระตุ้นผ่าน His–Purkinje ปัญหาจึงอยู่เหนือ ventricle ส่วน pulse deficit ใน AF ตรวจจากการคลำชีพจร ไม่ใช่ ECG"
  ],
  "E-C4": [
    "<b>ลำดับในใบแล็บ</b> rate และความสม่ำเสมอ → รูป P → ความสูง QRS ใน V1, V5, V6 → QRS axis → รูป T → ST segment → PR → QT",
    "<b>P wave</b> ติ๊กว่าปกติ มีรอยหยัก (notched) biphasic หรือสูงแหลม",
    "<b>Axis, T, ST</b> axis ปกติ −30° ถึง +90° T ปกติ กลับหัว หรือแหลมสูงแบบเต็นท์ ST อยู่บนเส้น ยก หรือกด",
    "<b>PR และ QT</b> PR ปกติ 0.12–0.20 วินาที QT ต้องตัดสินเทียบกับ heart rate",
    "<b>ข้อแบบตารางแปลผล</b> เช็กแต่ละแถวกับ tracing ทีละแถว ส่วนใหญ่จะผิดสองแถว (t-RAT 2569 Q14: axis กับความกว้าง QRS)"
  ]
};
