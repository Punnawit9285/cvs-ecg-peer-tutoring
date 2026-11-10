/* Thai layers shared by the student deck, the tutor deck and print.js.
   THAI_Q[id]: 1–3 answer bullets per question (why the answer is right, why the traps are wrong).
   THAI_CONCEPT[id]: 1–3 key points per concept card. They sit above the cloze card, so they state principles without spelling out the blanks.
   THAI_SEC[id]: {big, traps} for each section card. */
window.THAI_SEC = {
  "C": {
    "big": "ECG คือการวัด <b>ความต่างศักย์บนผิวหนัง</b> ระหว่าง electrode สองจุด ซึ่งเกิดเฉพาะตอนที่คลื่น depolarization หรือ repolarization กำลังวิ่งผ่านกล้ามเนื้อหัวใจ ถ้าเข้าใจว่า electrode “เห็น” dipole ยังไง ก็จะอธิบายได้ทุกคลื่น",
    "traps": [
      "ผิวนอกของเซลล์ที่ depolarize แล้วเป็น <b>ลบ</b> ส่วนเซลล์ที่ยังพักเป็น <b>บวก</b> (ข้อที่สลับเครื่องหมายคือตัวหลอก)",
      "Atrial repolarization ไม่หายไปไหน แค่ <b>ถูก QRS บัง</b> เพราะเกิดพร้อมกัน",
      "T wave ปกติ <b>ไปทางเดียวกับ QRS</b> (concordant) เพราะ endocardium มี AP ยาวกว่า epicardium",
      "Phase 4 = <b>TP segment</b> ไม่ใช่ T wave; ST segment = plateau (phase 2)",
      "T wave เกิดจาก <b>K⁺ efflux ของ ventricle</b> ไม่ใช่ของ atrium"
    ]
  },
  "W": {
    "big": "อ่าน ECG ให้แยก <b>wave · segment · interval</b> ให้ออก แล้วจำค่าปกติไม่กี่ตัว (PR, QRS, QTc, ST) จากนั้นผูกแต่ละส่วนกับเหตุการณ์ทางกลของ cardiac cycle และผลของ autonomic",
    "traps": [
      "PR <b>interval</b> รวม P wave ด้วย ส่วน PR <b>segment</b> คือเวลาที่ไฟค้างอยู่ใน AV node อย่างเดียว",
      "P wave <b>ติดลบใน aVR เป็นเรื่องปกติ</b> แต่ P ติดลบใน lead II ผิดปกติ",
      "RR 500 ms = 120 bpm (tachycardia) ส่วน RR 800 ms = 75 bpm (ปกติ) ต้องแปลงเป็น rate ก่อนตัดสิน",
      "ST elevation ไม่ใช่ผลของยา autonomic แต่บอก <b>myocardial injury</b>",
      "หลัง T wave = isovolumetric relaxation; เลือดผ่าน mitral มากสุดช่วง rapid filling ต้น TP segment"
    ]
  },
  "L": {
    "big": "Limb lead 6 ตัวมาจาก electrode แค่ 3 จุด (RA, LA, LL; RL เป็น ground) จำขั้วของ I, II, III และมุมของทั้ง 6 lead บน hexaxial wheel ให้ได้ แล้วโจทย์สลับสายจะตอบได้ด้วยเหตุผลเดียว",
    "traps": [
      "Lead II: <b>+ ที่ขาซ้าย, − ที่แขนขวา</b> (ถามเรียง positive แล้ว negative ระวังสลับลำดับ)",
      "Lead III ใช้ <b>แขนซ้าย (−) กับขาซ้าย (+)</b>",
      "คู่ตั้งฉาก: <b>I–aVF, II–aVL, III–aVR</b>",
      "สลับสายแขน → aVF ไม่เปลี่ยน; สลับ RA–LL → aVL ไม่เปลี่ยน; สลับ LA–LL → aVR ไม่เปลี่ยน",
      "สลับ LL กับ RL แทบ <b>ไม่เปลี่ยนอะไร</b> เพราะ RL เป็นแค่ ground"
    ]
  },
  "R": {
    "big": "นับช่องระหว่าง R สองตัวแล้วใช้ <b>1500 ÷ ช่องเล็ก</b> (ที่ 25 mm/s) แต่ต้อง <b>ดูความเร็วกระดาษก่อนทุกครั้ง</b> และถ้าจังหวะไม่สม่ำเสมอให้นับ QRS ใน strip แทน",
    "traps": [
      "50 mm/s → คลื่นถูกยืดกว้างเป็น 2 เท่า ต้อง <b>คูณ 2</b> (i-RAT: 1500/18 = 83 ผิด, ที่ถูกคือ 168)",
      "12.5 mm/s → ต้อง <b>คูณ 0.5</b> (RR 15 mm → 50 bpm ไม่ใช่ 100)",
      "สูตรรวม: HR = 1500 ÷ ช่องเล็ก × (speed ÷ 25)",
      "AF (RR ไม่สม่ำเสมอ) → นับ QRS ใน rhythm strip 10 วินาที × 6"
    ]
  },
  "A": {
    "big": "Axis ปกติ −30° ถึง +90° ดูเร็วด้วย <b>lead I + aVF</b> แล้วใช้ <b>lead II</b> ตัดสินช่วง 0 ถึง −30° ส่วนการคำนวณองศาใช้หลักว่า lead ที่ <b>biphasic ตั้งฉาก</b> กับ axis และ lead ที่ขนานจะสูงสุด",
    "traps": [
      "I บวก + aVF ลบ <b>ยังไม่ใช่ LAD เสมอ</b> ต้องดู lead II ด้วย (II ลบ = LAD)",
      "Biphasic lead = ห่างจาก axis 90° เช่น axis +60° → aVL, −30° → II, +30° → III",
      "Lead ที่อยู่ <b>ตรงข้าม</b> axis (180°) ให้ deflection ลบลึกที่สุด",
      "มุมแหลม (&lt;90°) = บวกมากกว่าลบ, มุมป้าน (&gt;90°) = ลบมากกว่าบวก",
      "ข้อรวม rate + axis ต้องอ่าน paper speed ก่อนเสมอ"
    ]
  },
  "E": {
    "big": "แล็บ ECG คือการติด electrode 10 จุดให้ได้ 12 leads แล้วอ่านผลตามลำดับในใบแล็บ: rate → P → QRS → axis → T → ST → PR → QT โดยเริ่มจากถามว่าเป็น sinus rhythm หรือเปล่า",
    "traps": [
      "V1–V2 อยู่ <b>ICS 4</b> (ขวา/ซ้าย ข้าง sternum) ส่วน V4 อยู่ <b>ICS 5 midclavicular</b>, V5 anterior axillary, V6 midaxillary",
      "Sinus rhythm ไม่ต้องการ P หน้าตาเหมือนกัน <b>ทุก lead</b> แค่เหมือนกันใน lead เดียวกัน",
      "P <b>ลบใน aVR</b> คือปกติ ส่วน “P บวกทุก lead” ผิด",
      "Complete AV block: P กับ QRS <b>ไม่สัมพันธ์กัน</b>, atrial rate เร็วกว่า ventricular rate",
      "AF บน ECG: QRS <b>แคบ</b>, RR ไม่สม่ำเสมอ, ไม่มี P (pulse deficit ตรวจจากชีพจร ไม่ใช่ ECG)"
    ]
  }
};

window.THAI_CONCEPT = {
  "C-C1": [
    "ECG เห็นคลื่นไฟฟ้า <b>เฉพาะตอนที่มันกำลังวิ่ง</b> ผ่านกล้ามเนื้อหัวใจ",
    "ทิศของคลื่นเทียบกับขั้วบวก + ชนิดของคลื่น (depol/repol) เป็นตัวกำหนดว่า deflection ขึ้นหรือลง"
  ],
  "C-C2": [
    "แต่ละคลื่นบน ECG ผูกกับ <b>เหตุการณ์ไฟฟ้าของห้องหัวใจหนึ่งห้อง</b> และกระแสไอออนหนึ่งชนิด",
    "เหตุการณ์ที่ <b>เล็กเกินไป</b> หรือ <b>เกิดพร้อมคลื่นใหญ่</b> จะไม่เห็นเป็นคลื่นของตัวเอง"
  ],
  "C-C3": [
    "ลำดับ depolarization กับลำดับ repolarization ของผนัง ventricle <b>กลับทิศกัน</b>",
    "เมื่อทั้งทิศและเครื่องหมายกลับพร้อมกัน ผลบน ECG จึงหักล้างกันจนคลื่นชี้ทางเดียวกัน"
  ],
  "C-C4": [
    "แต่ละ phase ของ ventricular action potential มี <b>ตำแหน่งของตัวเองบน ECG</b>",
    "ช่วงที่ทุกเซลล์อยู่ในสถานะเดียวกัน (ไม่มีความต่างศักย์) จะเป็น <b>เส้นราบ</b>",
    "Refractory period ไล่ตามรูปร่าง AP: ช่วงต้นห้ามกระตุ้นเด็ดขาด ช่วงท้ายกระตุ้นได้ถ้าแรงพอ"
  ],
  "W-C1": [
    "แยกคำสามคำให้ออก: <b>wave, segment, interval</b> แล้วจะอ่านทุกโจทย์ได้",
    "ช่วงราบแต่ละช่วงบอกว่าไฟอยู่ตรงไหนของระบบนำไฟฟ้าในขณะนั้น"
  ],
  "W-C2": [
    "Interval แต่ละตัวคือ <b>เวลาการนำไฟฟ้า</b> ของส่วนหนึ่งในหัวใจ ถ้าสั้นหรือยาวผิดปกติจะชี้ตำแหน่งปัญหา",
    "QT ขึ้นกับ heart rate จึงต้องปรับเป็น QTc ก่อนตัดสิน"
  ],
  "W-C3": [
    "ตัดสินปกติ/ผิดปกติจาก <b>ทิศของคลื่น</b> (lead ไหนควรบวก/ลบ) และ <b>ค่าตัวเลข</b> (เวลา, ความสูง)",
    "ค่า RR ต้องแปลงเป็น heart rate ก่อนเสมอ"
  ],
  "W-C4": [
    "เหตุการณ์ไฟฟ้ากับเหตุการณ์ทางกลเกิด <b>ตามลำดับที่แน่นอน</b> ในทุกจังหวะ",
    "จับคู่ P, QRS, T กับ valve ที่เปิด/ปิดและช่วงของ cardiac cycle"
  ],
  "W-C5": [
    "Autonomic ปรับ <b>SA node กับ AV node</b> จึงเปลี่ยนเวลาที่เกี่ยวกับ rate และ AV conduction",
    "การนำไฟฟ้าภายใน ventricle ไม่ได้ถูกคุมด้วย autonomic"
  ],
  "L-C1": [
    "Bipolar limb lead แต่ละตัวใช้ electrode <b>สองแขนขา</b> หนึ่งเป็นบวก อีกหนึ่งเป็นลบ",
    "ทิศของ lead ชี้จากขั้วลบไปขั้วบวก"
  ],
  "L-C2": [
    "Augmented lead ใช้แขนขาเดียวเป็นขั้วบวกเทียบกับค่าเฉลี่ยของอีกสองข้าง",
    "รวม 6 lead บนวงกลมเดียวจะห่างกันทุก 30° และแต่ละ lead มีคู่ที่ตั้งฉากกับมัน"
  ],
  "L-C3": [
    "การสลับสายแต่ละคู่จะทิ้ง <b>lead ไว้หนึ่งตัวที่ยังถูก</b> หาให้เจอว่าตัวไหน",
    "สลับสายแขนขาเป็นสาเหตุที่พบบ่อยของ ECG “แปลก” ที่ไม่ใช่โรค"
  ],
  "R-C1": [
    "กระดาษ ECG มาตรฐานกำหนดทั้ง <b>ความเร็ว</b> (แกนเวลา) และ <b>gain</b> (แกนความสูง)",
    "Rate คำนวณจากจำนวนช่องระหว่าง R สองตัว ช่องยิ่งมาก rate ยิ่งช้า"
  ],
  "R-C2": [
    "สูตร 1500 ใช้ได้เฉพาะ <b>ความเร็วมาตรฐาน</b> ถ้าความเร็วเปลี่ยนต้องปรับสัดส่วนตาม",
    "ความเร็วกระดาษที่ต่างไปทำให้ rate ที่อ่านได้ <b>คลาดไปตามสัดส่วน</b>"
  ],
  "R-C3": [
    "ถ้า RR ไม่เท่ากัน การวัด RR ช่วงเดียวจะได้ rate ไม่แน่นอน",
    "ให้นับจำนวน QRS ในช่วงเวลาที่รู้ความยาวแน่นอนแล้วคูณให้เป็นต่อนาที"
  ],
  "A-C1": [
    "Axis แบ่งเป็น 4 โซนตามมุม และตัดสินคร่าวๆ ได้จาก <b>สอง lead ที่ตั้งฉากกัน</b>",
    "ช่วงก้ำกึ่งระหว่างปกติกับเบนซ้ายต้องใช้ lead ตัวที่สามช่วยตัดสิน"
  ],
  "A-C2": [
    "ขนาดและทิศของ QRS ในแต่ละ lead ขึ้นกับว่า lead ชี้ไป <b>ทางเดียวกับ vector เฉลี่ยแค่ไหน</b>",
    "มุมระหว่าง axis กับ lead บอกได้เลยว่า QRS จะบวก ลบ หรือสองข้างเท่ากัน"
  ],
  "A-C3": [
    "มีสองวิธี: <b>วิธีลัด</b> เริ่มจาก lead ตัวเดียว ส่วน <b>วิธีตรง</b> ใช้ทุก lead ที่บวกและลบ",
    "ตอบเสร็จให้เช็กกลับกับ quadrant (lead I + aVF) เสมอ"
  ],
  "A-C4": [
    "ข้อรวมให้แยกอ่านทีละอย่าง: rate → axis → ความกว้าง QRS แล้วค่อยจับคู่กับตัวเลือก",
    "Rate ต้องเริ่มจากการอ่าน paper speed"
  ],
  "E-C1": [
    "Electrode 10 จุดให้ 12 leads แบ่งเป็น <b>limb leads</b> กับ <b>chest leads</b>",
    "ตำแหน่ง chest lead อิง <b>ช่องซี่โครง</b> และ <b>เส้นแนวตั้งของทรวงอก</b>"
  ],
  "E-C2": [
    "Sinus rhythm ต้องผ่านเกณฑ์ทั้ง rate, จุดกำเนิด, ความสัมพันธ์ P–QRS และรูป/ทิศของ P",
    "ระวังตัวเลือกที่ฟังดูถูกแต่ <b>เกินกว่าเกณฑ์จริง</b>"
  ],
  "E-C3": [
    "ถ้าไม่ใช่ sinus ให้ถามว่า P หายไป, P ไม่สัมพันธ์กับ QRS หรือ PR ยาว แล้วใครเป็นตัวคุมจังหวะแทน",
    "ความกว้าง QRS บอกว่าตัวคุมจังหวะอยู่เหนือหรือใน ventricle"
  ],
  "E-C4": [
    "ใบแล็บกำหนด <b>ลำดับการอ่าน</b> ECG ทั้งฉบับ ทำซ้ำลำดับเดิมทุกครั้งจะไม่พลาดข้อไหน",
    "ข้อสอบแบบ “ตารางแปลผล” ให้เช็กทีละแถวกับ tracing จริง"
  ]
};

window.THAI_Q = {
  "C1": [
    "ผิวนอกเซลล์ที่ depolarize แล้วเป็น <b>ลบ</b> เทียบกับเซลล์ที่ยังพัก (บวก) คลื่นที่วิ่งเข้าหา electrode บันทึก (อยู่ฝั่งเซลล์พัก) จึงเป็นคลื่นบวก",
    "ตัวเลือกแรกสลับเครื่องหมาย ส่วนตัวเลือกเรื่อง repolarization บอกว่าบริเวณที่ repolarize แล้วเป็นลบ ซึ่งผิด เพราะกลับมาเป็นบวกแล้ว"
  ],
  "C2": [
    "Atrial repolarization เกิด <b>พร้อมกับ ventricular depolarization</b> จึงถูก QRS ที่ใหญ่กว่ามากบังไว้",
    "ไม่ได้เร็วหรือช้าเกินไป และจบไปนานก่อน T wave"
  ],
  "C3": [
    "T wave = ventricular repolarization (phase 3) เกิดจาก <b>K⁺ ไหลออกจาก ventricular myocyte</b>",
    "Na⁺ influx ของ ventricle คือ QRS; K⁺ efflux ของ atrium ถูก QRS บัง"
  ],
  "C4": [
    "Fast Na⁺ channel คือ phase 0 ของกล้ามเนื้อ ventricle ซึ่งบน ECG คือ <b>QRS</b>",
    "P wave (atria) กับ PR segment (AV node) ไม่ได้อาศัย fast Na⁺ ของ ventricle"
  ],
  "C5": [
    "Endocardium depolarize ก่อนแต่มี <b>AP ยาวกว่า</b> epicardium จึง repolarize ทีหลัง",
    "Repolarization เลยวิ่งจากนอกเข้าใน (กลับทิศ) และเครื่องหมายกลับด้วย → T ชี้ทางเดียวกับ QRS (concordant)",
    "ตัวเลือกที่บอกว่าปกติเป็น discordant ผิด"
  ],
  "C6": [
    "Phase 4 คือช่วงพักระหว่างจังหวะ ตรงกับ <b>TP segment</b>",
    "QRS = phase 0, ST = phase 2, T = phase 3"
  ],
  "C7": [
    "Phase 3 ของ atrium (atrial repolarization) เกิดพร้อม ventricular depolarization จึงอยู่ <b>ใน QRS complex</b>",
    "P wave คือ phase 0 ของ atrium ส่วน ST กับ T เป็นของ ventricle"
  ],
  "C8": [
    "Absolute refractory period ของ ventricle ครอบคลุม <b>QRS ต่อเนื่องถึง ST segment</b> จนถึงราวยอด T",
    "ในตัวเลือก มีแค่ ST segment ที่อยู่ใน ARP ทั้งช่วง ครึ่งหลังของ T เป็น relative refractory"
  ],
  "W1": [
    "A ชี้คลื่นเล็กก่อน QRS ใน lead II = <b>P wave</b>",
    "B ชี้ช่วงราบหลัง QRS ใน V2 = <b>ST segment</b>"
  ],
  "W2": [
    "X คือ <b>PR segment</b> (ท้าย P ถึงต้น QRS) = เวลาที่ไฟผ่าน AV node ที่นำช้า",
    "Atrial depolarization คือตัว P wave ส่วน ventricular depolarization คือ QRS"
  ],
  "W3": [
    "PR interval เริ่มตั้งแต่ต้น P จึงรวม <b>atrial depolarization + AV nodal delay</b>",
    "P ไม่ใช่ ventricular systole, QRS ไม่ใช่ repolarization, ST อยู่ในช่วง ejection ไม่ใช่ filling"
  ],
  "W4": [
    "AV node อยู่ใน <b>PR interval</b> ถ้านำช้าลง PR จะยาว (&gt; 200 ms = 1st-degree AV block)",
    "QT, ST เป็นเรื่องของ ventricle ส่วน RR บอก rate จาก SA node"
  ],
  "W5": [
    "PR ปกติ 120–200 ms; <b>PR 100 ms สั้นเกิน</b> → ไฟลัดไปถึง ventricle เร็ว (pre-excitation)",
    "QRS 100 ms ปกติ, HR 100 ยังอยู่ในเกณฑ์, T ลบใน aVR ปกติ"
  ],
  "W6": [
    "aVR มองหัวใจจากไหล่ขวา คลื่นปกติจึง <b>ลบใน aVR</b> รวมถึง P",
    "QTc 500 ยาวเกิน, RR 500 ms = 120 bpm, ST depression 2 mm เกิน ±1 mm"
  ],
  "W7": [
    "<b>P ลบใน aVR</b> คือ sinus ปกติ",
    "PR 240 = 1st-degree AV block, QT 140 สั้นเกินจริง, P ลบใน lead II ไม่ใช่ sinus, RR 500 = 120 bpm"
  ],
  "W8": [
    "T wave ปกติ <b>บวกใน V3–V6</b>",
    "PR 240 ยาว, QRS 140 กว้าง, RR 500 เร็ว, P ลบใน lead II ผิดปกติ"
  ],
  "W9": [
    "Q wave ที่ <b>กว้าง (&gt; 40 ms) และลึก</b> บอก old MI",
    "อีกสี่ตัวคือเกณฑ์ปกติ: P บวกใน II, P ลบใน aVR, PR 120–200, QRS ≤ 110"
  ],
  "W10": [
    "ST ควรอยู่บน isoelectric line ±1 mm; <b>ยก 4 mm</b> ผิดปกติ (acute injury)",
    "PR 160, QRS 100, RR 800 (75 bpm) และ axis 30° ล้วนปกติ"
  ],
  "W11": [
    "ข้อเดียวกับ W10 แค่สลับตัวเลือก: <b>ST elevation 4 mm</b> ผิดปกติข้อเดียว"
  ],
  "W12": [
    "P wave = atrial depolarization → ตามด้วย <b>atrial contraction</b>",
    "Ventricular contraction / isovolumic contraction ตามหลัง QRS; isovolumic relaxation ตามหลัง T"
  ],
  "W13": [
    "จบ T → aortic valve ปิด (S2) → <b>isovolumetric relaxation</b>",
    "Reduced ejection เกิดระหว่าง T; atrial contraction ตาม P ถัดไป; mitral ปิดตอน QRS"
  ],
  "W14": [
    "QRS เริ่ม ventricular contraction เมื่อความดัน LV เกิน aorta (ปลาย isovolumic contraction) aortic valve จึงเปิด → ใกล้ <b>QRS</b> ที่สุดในตัวเลือก",
    "T wave ใกล้จังหวะที่ aortic valve ปิด ไม่ใช่เปิด"
  ],
  "W15": [
    "จุด D อยู่หลัง T = ต้น diastole, mitral เปิด → <b>rapid filling</b> เลือดไหลผ่าน mitral มากสุด",
    "B (P wave) เป็นแค่ atrial kick ที่น้อยกว่า; C อยู่ในช่วง ejection ซึ่ง mitral ปิด"
  ],
  "W16": [
    "Sympathetic เพิ่ม HR → RR สั้น → <b>QT สั้นลง</b> (QT ∝ RR)",
    "ไม่ได้ทำให้ QRS สูงขึ้นหรือแคบลง; RR เพิ่มคือทิศตรงข้าม"
  ],
  "W17": [
    "Muscarinic antagonist ปลด vagal brake → HR ↑ (RR ↓), QT ↓, QRS ไม่เปลี่ยน",
    "<b>ST elevation</b> เป็นสัญญาณ myocardial injury ไม่ได้เกิดจากยานี้"
  ],
  "W18": [
    "SA node คุม heart rate ซึ่งบน ECG คือ <b>RR interval</b> (atropine → RR สั้นลง)",
    "PR บอก AV node; QT และ ST บอก ventricle"
  ],
  "L1": [
    "Lead II ต่อจาก <b>แขนขวา (−) ไปขาซ้าย (+)</b> ชี้ลงซ้าย +60°"
  ],
  "L2": [
    "ถามเรียง <b>positive ก่อน negative</b>: ขาซ้าย (+) กับแขนขวา (−)",
    "ตัวเลือก “Right arm and left leg” คู่ถูกแต่ลำดับกลับ"
  ],
  "L3": [
    "Lead III = <b>ขาซ้าย (+) เทียบแขนซ้าย (−)</b>",
    "Lead I ใช้สองแขน, lead II ใช้แขนขวากับขาซ้าย, aVL เป็น augmented lead"
  ],
  "L4": [
    "Lead III อยู่ระหว่าง <b>แขนซ้ายกับขาซ้าย</b> ขาขวาเป็นแค่ ground"
  ],
  "L5": [
    "ขั้วบวกที่ข้อมือซ้าย ขั้วลบที่นิ้วมือขวา = <b>lead I</b> (LA + เทียบ RA −) ชี้ 0°"
  ],
  "L6": [
    "aVR ชี้ −150° ตั้งฉากกับ +120° = <b>lead III</b>"
  ],
  "L7": [
    "aVL ชี้ −30° ตั้งฉากกับ +60° = <b>lead II</b>"
  ],
  "L8": [
    "aVF เป็น lead ของขาซ้าย ถ้า aVF ยังถูก แปลว่าขาซ้ายไม่ได้ย้าย → <b>สลับสองแขน</b>",
    "ผลที่เห็น: lead I กลับหัว, II ↔ III, aVR ↔ aVL"
  ],
  "L9": [
    "aVL เป็น lead ของแขนซ้าย ถ้า aVL ถูก แปลว่าแขนซ้ายไม่ได้ย้าย → <b>สลับแขนขวากับขาซ้าย</b> (ตาม AC81 short key)"
  ],
  "L10": [
    "สลับสองแขนไม่ได้แตะขาซ้าย <b>aVF จึงยังแสดงที่ aVF</b> เหมือนเดิม",
    "สิ่งที่เปลี่ยน: I กลับหัว (−I), II ↔ III, aVR ↔ aVL"
  ],
  "L11": [
    "RL เป็นแค่ <b>ground</b> และขาสองข้างมีศักย์ใกล้เคียงกัน สลับกันจึงแทบไม่เปลี่ยน → None of the above",
    "Lead I ไม่ได้ใช้ขาเลยจึงไม่กลับหัว"
  ],
  "L12": [
    "แขนขวาไม่ได้ย้าย → <b>aVR ไม่เปลี่ยน</b>",
    "Lead I กับ II สลับกัน, aVL ↔ aVF, lead III กลับหัว"
  ],
  "R1": [
    "15 mm = 15 ช่องเล็กที่ 25 mm/s → HR = 1500 ÷ 15 = <b>100 bpm</b>"
  ],
  "R2": [
    "R ห่างกัน 15 ช่องเล็ก (3 ช่องใหญ่) → 1500 ÷ 15 = <b>100 bpm</b>"
  ],
  "R3": [
    "R ห่างกันราว 3 ช่องใหญ่ (15 ช่องเล็ก) → 300 ÷ 3 = <b>100 bpm</b>"
  ],
  "R4": [
    "12.5 mm/s: 15 mm = 1.2 วินาที → 60 ÷ 1.2 = <b>50 bpm</b> (หรือ 750 ÷ 15)",
    "100 bpm คือคำตอบของคนที่ลืมปรับความเร็ว"
  ],
  "R5": [
    "ตัวเลขเดียวกับข้อก่อน: 15 ช่องเล็กที่ 12.5 mm/s → <b>50 bpm</b>"
  ],
  "R6": [
    "RR ≈ 18 ช่องเล็ก: 1500 ÷ 18 ≈ 83 คือ <b>กับดัก</b>",
    "กระดาษเร็วเป็น 2 เท่า ต้องคูณ 2 → ≈ <b>168 bpm</b> (3000 ÷ 18)"
  ],
  "R7": [
    "R ห่างกันราว 15 ช่องเล็ก → 100 ที่ความเร็วปกติ × 2 (50 mm/s) = <b>200 bpm</b>"
  ],
  "R8": [
    "AC81 short key = <b>200 bpm</b>: นับช่องเล็กระหว่าง R → 1500 ÷ ช่อง แล้ว ×2 เพราะ 50 mm/s"
  ],
  "R9": [
    "อ่านตามโจทย์: QRS 18 ตัวในกระดาษมาตรฐาน 250 mm ที่ 50 mm/s คือแค่ 5 วินาที → 18 × 12 ≈ 216 → ใกล้ <b>200 bpm</b>",
    "ถ้าจริงๆ คือ 18 ช่องเล็กระหว่าง R (แบบ i-RAT) จะได้ ≈ 167 → ใกล้ 150 ดู recall note"
  ],
  "R10": [
    "R ห่างกันราว 25 ช่องเล็ก: 1500 ÷ 25 = 60 ที่ 25 mm/s → × 30/25 = <b>72 bpm</b>"
  ],
  "R11": [
    "จังหวะไม่สม่ำเสมอ ไม่มี P = AF ใช้วิธีหาร RR ไม่ได้",
    "นับ QRS ใน strip 10 วินาทีได้ราว 22 ตัว × 6 = <b>132 bpm</b>"
  ],
  "A1": [
    "Lead I biphasic → axis อยู่ที่ ±90°; aVF บวก → <b>+90°</b>",
    "ตามช่วงของคอร์ส (−30° ถึง +90°) +90° ยังนับเป็น normal แต่เป็นขอบพอดี"
  ],
  "A2": [
    "Lead I ลบ + aVF บวก = quadrant ล่างขวา (+90° ถึง +180°) = <b>RAD</b>"
  ],
  "A3": [
    "RAD ชี้หนี lead I (0°) และชี้เข้าหา aVF (+90°) → <b>lead I ลบ, aVF บวก</b>"
  ],
  "A4": [
    "เหมือนข้อก่อน: RAD → <b>lead I ลบ, aVF บวก</b>",
    "I ลบ + aVF ลบ คือ extreme axis"
  ],
  "A5": [
    "LAD (−30° ถึง −90°) ชี้ขึ้นซ้าย → lead I บวก, II, III, aVF ลบ → ตรงกับ <b>lead I บวก, lead III ลบ</b>",
    "I บวก + II บวก คือ axis ปกติ"
  ],
  "A6": [
    "Biphasic lead ห่างจาก axis 90°: +30° + 90° = +120° = <b>lead III</b>"
  ],
  "A7": [
    "−30° + 90° = +60° = <b>lead II</b> จึงเป็น lead ที่ใช้ตัดสินขอบ −30°"
  ],
  "A8": [
    "+60° − 90° = −30° = <b>aVL</b> ส่วน lead II (+60°) จะสูงสุด"
  ],
  "A9": [
    "Lead III ชี้ +120° อยู่ <b>ตรงข้าม −60°</b> (ห่าง 180°) → deflection ลบลึกที่สุด",
    "aVR ห่าง 90° (biphasic), aVL ห่างแค่ 30° (บวก)"
  ],
  "A10": [
    "Lead III อยู่ที่ +120° ตรงกับ axis → <b>R สูงสุด</b>"
  ],
  "A11": [
    "aVL (−30°) ห่างจาก −60° แค่ 30° → <b>R สูงสุด</b>; lead III (+120°) ห่าง 180° → <b>S ลึกสุด</b>",
    "“highest amplitude” ตีความได้สองแบบ AC81 key จึงให้ทั้งสองข้อ"
  ],
  "A12": [
    "มุมแหลม (&lt;90°) → projection ตกฝั่งบวก → <b>บวกมากกว่าลบ</b>",
    "บวกสูงสุดต้องชี้ตรงกับ lead พอดี (0°)"
  ],
  "A13": [
    "มุมป้าน (90°–180°) → projection ตกฝั่งลบ → <b>ลบมากกว่าบวก</b>",
    "ลบลึกสุดต้องห่างพอดี 180°"
  ],
  "A14": [
    "I และ aVL บวก → axis ไม่เกิน +60°; III บวก → axis ไม่ต่ำกว่า +30° → อยู่ช่วง <b>+30° ถึง +60° = normal</b>"
  ],
  "A15": [
    "aVL แบนที่สุด → axis เป็น +60° หรือ −120°",
    "Lead II (+60°) สูงและบวก → <b>+60°</b>"
  ],
  "A16": [
    "I, II, III, aVF บวก, aVR ลบ, aVL เล็กเกือบ biphasic → axis ≈ +60° = <b>normal</b>"
  ],
  "A17": [
    "Lead I ลบสุทธิ (r เล็ก S ลึกกว่า), aVF และ III บวก, aVL ลบชัด → <b>RAD</b>",
    "ภาพในชุดข้อสอบความละเอียดต่ำ ดู recall note"
  ],
  "A18": [
    "I, II, III, aVF บวก; aVR, aVL ลบ → lead I + aVF บวกทั้งคู่ = <b>normal axis</b>"
  ],
  "A19": [
    "Lead I และ aVL บวก; II, III, aVF ลบลึก → I บวก + aVF ลบ + II ลบ = <b>LAD (−30° ถึง −90°)</b>"
  ],
  "A20": [
    "I, aVL, aVR บวก; II, III, aVF ลบ → axis ชี้ขึ้นซ้ายในช่วง <b>−30° ถึง −90°</b> (ตาม i-RAT key)"
  ],
  "A21": [
    "I, II, III, aVL, aVF บวก มีแค่ aVR ลบ → axis ราว +30° ถึง +60° = <b>normal</b>"
  ],
  "A22": [
    "RR ≈ 11 ช่องเล็ก → 1500 ÷ 11 ≈ 136 bpm = <b>tachycardia</b>",
    "I, aVL บวก; II, III, aVF ลบ = <b>LAD</b>"
  ],
  "A23": [
    "I และ aVL ลบ; II, III, aVF บวก = <b>RAD</b>",
    "QRS กว้างราว 3 ช่องเล็กขึ้นไป = <b>wide QRS</b>"
  ],
  "A24": [
    "RR ≈ 20 ช่องเล็ก → 75 ที่ 25 mm/s × 15/25 = <b>45 bpm (bradycardia)</b>",
    "I, aVL บวก; II, III, aVF ลบ = <b>LAD</b>"
  ],
  "E1": [
    "V2 = <b>ICS 4 ข้าง sternum ซ้าย</b>; ICS 4 ขวาคือ V1"
  ],
  "E2": [
    "V4 = <b>ICS 5 ที่ midclavicular line</b> (ฝั่งซ้าย)",
    "ตัวเลือกใน recall เขียน “right” ทุกข้อ ให้เลือกข้อที่เป็น ICS 5 + midclavicular"
  ],
  "E3": [
    "V4 = <b>ICS 5, midclavicular line</b> แล้ว V5 = anterior axillary, V6 = midaxillary ระดับเดียวกัน"
  ],
  "E4": [
    "V5 อยู่ที่ <b>anterior axillary line</b> ระดับเดียวกับ V4 (ICS 5)",
    "ICS 5 midclavicular คือ V4"
  ],
  "E5": [
    "V5 = <b>anterior axillary line</b> ระดับ V4",
    "midaxillary = V6, midclavicular = V4, ICS 4 ข้าง sternum = V2"
  ],
  "E6": [
    "<b>P ตามด้วย QRS ทุกตัว</b> คือเกณฑ์บน ECG ส่วน “มาจาก sinus” คือคำนิยามของ sinus rhythm",
    "Rate ปกติ 60–100 ไม่ใช่ 100–120; P ลบใน aVR ไม่ใช่ aVL"
  ],
  "E7": [
    "<b>QRS ทุกตัวมี P นำหน้า</b>",
    "P ลบใน aVR (จึงไม่บวกทุก lead), P เหมือนกันแค่ภายใน lead เดียว, rate ปกติ 60–100"
  ],
  "E8": [
    "<b>P ตามด้วย QRS แบบ 1:1</b> แสดงว่า atrium เป็นตัวขับ ventricle",
    "40–60 bpm คือ junctional escape; P กลับหัวใน II หรือ P บวกใน aVR แปลว่าไฟไม่ได้เริ่มจาก SA node"
  ],
  "E9": [
    "P <b>ต่างกันได้ในแต่ละ lead</b> ขอแค่รูปเหมือนกันใน lead เดียวกัน",
    "อีกสามข้อเป็นเกณฑ์ของ sinus rhythm"
  ],
  "E10": [
    "AC81 key = <b>sinus rhythm</b>: P นำหน้า QRS ทุกตัว บวกใน II",
    "13 QRS ใน 10 วินาที ≈ 78 bpm ไม่ใช่ brady; lead I ลบ aVF บวก axis จึงไม่ปกติ"
  ],
  "E11": [
    "P กับ QRS <b>ไม่สัมพันธ์กันเลย</b> และ atrial rate เร็วกว่า ventricular rate = <b>3rd-degree AV block</b>",
    "Escape pacemaker ใต้จุด block คุม ventricle ที่ 40 bpm"
  ],
  "E12": [
    "SA node เสีย → pacemaker ตัวถัดไปที่เร็วที่สุดคือ <b>AV node</b>",
    "QRS แคบแปลว่าไฟเริ่มเหนือ ventricle และใช้ His–Purkinje ตามปกติ"
  ],
  "E13": [
    "ใน AF ventricle ยังถูกกระตุ้นผ่านระบบนำไฟฟ้าปกติ → <b>QRS แคบ</b>",
    "จังหวะไม่สม่ำเสมอ ไม่มี P และ ventricular rate มักเร็ว; pulse deficit เป็นการตรวจชีพจร ไม่ใช่ ECG"
  ],
  "E14": [
    "Lead I ลบเป็นส่วนใหญ่ (S ลึก), aVF กับ III บวก, II แทบแบน → <b>RAD</b>",
    "RR ราว 4 ช่องใหญ่ ≈ 75–80 bpm จึงไม่ใช่ tachycardia; ภาพเป็นภาพแทนจากอินเทอร์เน็ต"
  ],
  "E15": [
    "I, II, III, aVF บวกหมด → axis <b>ปกติ</b> ไม่ใช่ LAD",
    "QRS กว้างไม่ถึง 3 ช่องเล็ก → <b>แคบ</b> ไม่ใช่ wide; แถวอื่น (75 bpm, sinus, PR 160, ST isoelectric) ถูก"
  ],
  "E16": [
    "อ่านตามลำดับใบแล็บ: rate → P → QRS height → axis → T → ST → PR → QT",
    "ค่าปกติ: 60–100 สม่ำเสมอ, axis −30° ถึง +90°, T บวก (ยกเว้น aVR), ST ±1 mm, PR 0.12–0.20 s"
  ]
};
