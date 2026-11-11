/* Thai explanation of every concept card, shared by both decks and print.js.
   One short line per idea: a bold topic, then the cause → effect chain. 4 lines per card. */
window.THAI_EXPLAIN = {
  "C-C1": [
    "<b>ECG วัดอะไร</b> ความต่างศักย์บนผิวหนังระหว่างสองจุด ไม่ใช่ศักย์ในเซลล์เดียว",
    "<b>ประจุด้านนอก</b> เซลล์พัก = + · เซลล์ depolarize = −",
    "<b>ทิศ</b> depolarization วิ่งเข้าหาขั้ว + → กราฟขึ้น · วิ่งหนี → ลง · ตั้งฉาก → biphasic",
    "<b>Repolarization</b> ภาพกลับด้าน: ทิศเดียวกันแต่เครื่องหมายตรงข้าม · พักหมดหรือ depolarize หมด → เส้นราบ"
  ],
  "C-C2": [
    "<b>P wave</b> atrial depolarization",
    "<b>QRS</b> ventricular depolarization (fast Na⁺ เข้า) · <b>T</b> ventricular repolarization (K⁺ ออก)",
    "<b>Atrial repolarization</b> เกิดพร้อม QRS ที่ใหญ่กว่า → ถูกซ่อน มองไม่เห็น",
    "<b>ขนาดคลื่น</b> ตามมวลกล้ามเนื้อ → P เล็ก QRS ใหญ่ · SA, AV node เล็กเกินจะเห็น"
  ],
  "C-C3": [
    "<b>Depolarization</b> endocardium → epicardium",
    "<b>AP ของ endocardium ยาวกว่า</b> → epicardium repolarize ก่อน → repolarization วิ่ง epi → endo",
    "<b>ผล</b> ทิศตรงข้าม × เครื่องหมายตรงข้าม → T ชี้ทางเดียวกับ QRS (concordant)",
    "<b>T ปกติ</b> ตั้งใน II, V3–V6 · กลับหัวใน aVR · T สวน QRS = โรค"
  ],
  "C-C4": [
    "<b>Phase 0</b> Na⁺ เข้า → QRS",
    "<b>Phase 2</b> plateau ทุกเซลล์ depolarize → ST segment ราบ",
    "<b>Phase 3</b> K⁺ ออก → T wave · <b>Phase 4</b> พัก → TP segment",
    "<b>Refractory</b> absolute ≈ QRS ถึงยอด T · atrial phase 3 อยู่ใน QRS"
  ],
  "W-C1": [
    "<b>คำศัพท์</b> wave = คลื่น · segment = เส้นราบระหว่างคลื่น · interval = คลื่น + segment",
    "<b>PR segment</b> ไฟค้างที่ AV node",
    "<b>PR interval</b> เริ่ม P → เริ่ม QRS · <b>QT</b> เริ่ม QRS → จบ T",
    "<b>Baseline</b> ดูที่ TP segment ตอนหัวใจพักทั้งหมด"
  ],
  "W-C2": [
    "<b>PR</b> 120–200 ms · สั้นกว่า → ไฟลัด (pre-excitation) · ยาวกว่า → 1st-degree block",
    "<b>QRS</b> ≤ 100–110 ms · กว้าง → ventricle นำไฟช้า",
    "<b>QT</b> หัวใจเต้นเร็ว → QT สั้นลง · QTc 330–440 (หญิง ≤ 450)",
    "<b>AV node ผิดปกติ</b> → PR เปลี่ยน ไม่ใช่ QT หรือ ST"
  ],
  "W-C3": [
    "<b>P</b> ตั้งใน II · กลับหัวใน aVR (ปกติ)",
    "<b>T</b> ตั้งใน V3–V6 · <b>ST</b> ไม่เกิน ±1 mm",
    "<b>ผิดปกติ</b> ST ยก 4 mm · Q กว้างลึก (MI เก่า) · RR 500 ms = 120 bpm",
    "<b>แปลง RR</b> HR = 60 000 ÷ RR (ms) ก่อนตัดสิน"
  ],
  "W-C4": [
    "<b>ไฟมาก่อน</b> คลื่นไฟฟ้าเกิดก่อนการบีบตัวที่มันสั่ง",
    "<b>P</b> → atria บีบ · <b>QRS</b> → S1, isovolumic contraction → aortic valve เปิดหลัง QRS",
    "<b>ปลาย T</b> → S2 → isovolumic relaxation",
    "<b>ต้น TP</b> → mitral เปิด → เลือดเติมเร็ว (flow ผ่าน mitral มากสุด)"
  ],
  "W-C5": [
    "<b>Sympathetic ↑ หรือ atropine</b> SA เร็ว → RR สั้น · AV เร็ว → PR สั้น · QT สั้น",
    "<b>QRS กว้างเท่าเดิม</b> การนำไฟใน ventricle ไม่ขึ้นกับ autonomic",
    "<b>Vagus ↑</b> RR ยาว · PR ยาว → อาจ block",
    "<b>ดูยาที่ SA node</b> วัด RR · ST ยก = บาดเจ็บ ไม่เกี่ยว autonomic"
  ],
  "L-C1": [
    "<b>Lead I</b> + LA, − RA (0°) · <b>II</b> + LL, − RA (+60°) · <b>III</b> + LL, − LA (+120°)",
    "<b>Right leg</b> = ground ไม่อยู่ใน lead ใด",
    "<b>Einthoven</b> II = I + III",
    "<b>นาฬิกา</b> ข้อมือซ้าย + นิ้วขวา → lead I"
  ],
  "L-C2": [
    "<b>Augmented</b> aVR + แขนขวา · aVL + แขนซ้าย · aVF + เท้าซ้าย",
    "<b>มุม</b> aVL −30° · aVF +90° · aVR −150°",
    "<b>Hexaxial</b> 6 lead ห่างกันทุก 30° (frontal plane)",
    "<b>คู่ตั้งฉาก</b> I–aVF · II–aVL · III–aVR"
  ],
  "L-C3": [
    "<b>สลับ RA ↔ LA</b> (บ่อยสุด) lead I กลับหัว · II ↔ III · aVF ไม่เปลี่ยน",
    "<b>RA ↔ LL</b> aVL ไม่เปลี่ยน · <b>LA ↔ LL</b> aVR ไม่เปลี่ยน",
    "<b>LL ↔ RL</b> แทบไม่เปลี่ยน (RL เป็น ground)",
    "<b>จำ</b> lead ที่ไม่เปลี่ยน = augmented lead ของแขนขาที่ไม่ได้ย้าย"
  ],
  "R-C1": [
    "<b>กระดาษ</b> 25 mm/s · ช่องเล็ก 0.04 s · ช่องใหญ่ 0.2 s",
    "<b>สูตร</b> HR = 1500 ÷ ช่องเล็ก = 300 ÷ ช่องใหญ่",
    "<b>จำ</b> 1, 2, 3, 4, 5 ช่องใหญ่ → 300, 150, 100, 75, 60",
    "<b>ปกติ</b> sinus 60–100 bpm"
  ],
  "R-C2": [
    "<b>1500 ใช้ได้ที่ 25 mm/s เท่านั้น</b> ความเร็วอื่นต้องปรับ",
    "<b>12.5 mm/s</b> 750 ÷ ช่องเล็ก · <b>50 mm/s</b> 3000 ÷ ช่องเล็ก",
    "<b>กับดัก</b> กระดาษเร็ว → HR ปกติดูช้า · ใช้ 1500 ตรงๆ จะได้ค่าผิด",
    "<b>อ่านความเร็วใต้กราฟเสมอ</b>"
  ],
  "R-C3": [
    "<b>RR ไม่สม่ำเสมอ</b> หาร RR เดียวได้ค่าไม่คงที่ → นับแทน",
    "<b>Rhythm strip</b> 10 วินาที → จำนวน QRS × 6",
    "<b>AF</b> ไม่มี P · baseline เป็นคลื่น · RR ไม่สม่ำเสมอ · QRS แคบ",
    "<b>ใน AF</b> รายงาน ventricular rate (นับ QRS)"
  ],
  "A-C1": [
    "<b>ปกติ</b> −30° ถึง +90° · LAD −30° ถึง −90° · RAD +90° ถึง +180°",
    "<b>I +, aVF +</b> → ปกติ · <b>I −, aVF +</b> → RAD · <b>I −, aVF −</b> → extreme",
    "<b>I +, aVF −</b> → ดู lead II: บวก = ยังปกติ · ลบ = LAD",
    "<b>กับดัก</b> I + / aVF − ยังไม่ใช่ LAD เสมอ ต้องให้ II ลบ"
  ],
  "A-C2": [
    "<b>หลัก</b> แต่ละ lead เห็น QRS vector ที่ฉายลงบนแกนของตัวเอง",
    "<b>มุม 0°</b> บวกสูงสุด · &lt; 90° บวกมากกว่าลบ · 90° biphasic",
    "<b>มุม &gt; 90°</b> ลบมากกว่าบวก · 180° ลบลึกสุด",
    "<b>ตัวอย่าง</b> axis +30° → III แบน · −30° → II แบน · +60° → aVL แบน"
  ],
  "A-C3": [
    "<b>ทางลัด</b> หา lead ที่ biphasic ที่สุด → axis ตั้งฉาก ±90°",
    "<b>เลือกทาง</b> ดู lead ที่มุมนั้น: ตั้ง → ชี้ไปทางนั้น",
    "<b>วิธีตรง</b> axis ≈ กึ่งกลางของ lead บวกสองตัวที่ห่างกันที่สุด",
    "<b>เช็ก</b> lead I และ aVF ต้องสอดคล้องกับมุมที่ได้"
  ],
  "A-C4": [
    "<b>1 · Rate</b> อ่านความเร็วกระดาษก่อน → 1500 ÷ ช่อง → ปรับ",
    "<b>2 · Axis</b> lead I, aVF → ถ้า I + / aVF − ดู lead II",
    "<b>3 · QRS</b> กว้างไม่เกิน 3 ช่องเล็ก",
    "<b>เลือกคำตอบ</b> ที่ตรงทั้งสามข้อ"
  ],
  "E-C1": [
    "<b>10 electrode → 12 lead</b> limb = frontal plane · chest = horizontal plane",
    "<b>V1, V2</b> 4th ICS ขวาและซ้ายของ sternum",
    "<b>V4</b> 5th ICS แนว midclavicular · V3 อยู่กลาง V2–V4",
    "<b>V5</b> anterior axillary · <b>V6</b> mid-axillary (ระดับเดียวกับ V4)"
  ],
  "E-C2": [
    "<b>Rate</b> 60–100 · <b>origin</b> SA node",
    "<b>ทุก P ตามด้วย QRS</b> 1 : 1",
    "<b>P</b> ตั้งใน II กลับหัวใน aVR · รูปเหมือนกันภายใน lead เดียวกัน",
    "<b>กับดัก</b> P ต่างกันระหว่าง lead ได้ · ไม่ได้บวกทุก lead"
  ],
  "E-C3": [
    "<b>1st-degree</b> PR &gt; 200 ms แต่ผ่านทุกตัว · <b>2nd</b> P บางตัวไม่มี QRS ตาม",
    "<b>3rd-degree</b> P กับ QRS ไม่สัมพันธ์ · atria เร็วกว่า ventricle",
    "<b>SA node เสีย</b> AV node รับแทน → ช้า QRS แคบ",
    "<b>QRS แคบ</b> ventricle ยังใช้ His–Purkinje → ปัญหาอยู่เหนือ ventricle"
  ],
  "E-C4": [
    "<b>ลำดับอ่าน</b> rate → P → QRS → axis → T → ST → PR → QT",
    "<b>ค่าปกติ</b> axis −30° ถึง +90° · PR 0.12–0.20 s · ST บน baseline",
    "<b>รูปร่าง</b> P: notched, biphasic, peaked · T: กลับหัว, tent-shaped",
    "<b>ข้อ “แปลผลผิดข้อไหน”</b> เช็กทีละแถว · มักผิดสองแถว"
  ]
};
