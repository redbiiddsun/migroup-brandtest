export const highInvolvementProductsTH: Question = {
  locale: "th",
  type: "high",
  title: "แบบทดสอบ High involvement",
  description:
    "แบบทดสอบนี้มีทั้งหมด 5 หัวข้อที่จะช่วยประเมินแบรนด์ของท่านจากมุมมองของผู้บริโภค โดยจะใช้เวลาประมาณ 5 นาทีในการตอบคำถามเท่านั้น",
  progressBarType: "pages",
  showProgressBar: "top",
  showQuestionNumbers: "off",
  pages: [
    {
      name: "Brand Perception",
      title: "Brand Perception",
      description: "<b>Description:</b> เป็นการประเมินมุมมองของผู้บริโภคที่มีต่อแบรนด์ ว่าแบรนด์ถูกมองในแง่บวกหรือแง่ลบในความคิดของผู้บริโภค  โดยพิจารณาจากการรับรู้แบรนด์ ชื่อเสียงของแบรนด์ และความผูกพันทางอารมณ์ที่ผู้บริโภคมีต่อแบรนด์ <br><br><b>Rationale:</b> การรับรู้ถึงแบรนด์มีบทบาทสำคัญต่อการตัดสินใจซื้อ, ความภักดี, และการบอกต่อของผู้บริโภค",
      elements: [
        {
          type: "rating",
          name: "BrandPerception-1",
          title:
            "ท่านคิดว่าผู้บริโภคหรือลูกค้ามีความเชื่อถือต่อแบรนด์ของท่านอยู่ในระดับใด",
          description: "1 = ไม่น่าเชื่อถืออย่างมาก 5 = น่าเชื่อถืออย่างมาก",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: "BrandPerception-2",
          title:
            "ท่านคิดว่าผู้บริโภคหรือลูกค้ามองว่าแบรนด์ของท่านเป็นแบรนด์นวัตกรรมมีความแปลกใหม่อยู่เสมอหรือไม่",
          description:
            "1 = ไม่มีความเป็นนวัตกรรมเลย 5 = มีความเป็นนวัตกรรมมากที่สุด",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: "BrandPerception-3",
          title:
            "ท่านคิดว่าแบรนด์ของท่านมีชื่อเสียงหรือเป็นที่ยอมรับในตลาดมากน้อยเพียงใด",
          description:
            "1 = น้อยมาก/ ไม่มีใครรู้จักแบรนด์ 5 = มากที่สุด/ แบรนด์เป็นที่รู้จักของทุกคน",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: "BrandPerception-4",
          title:
            "ท่านคิดว่าแบรนด์ของท่านมีการปรับตัวให้สอดคล้องกับเทรนด์และค่านิยมในปัจจุบันมากน้อยเพียงใด",
          description: "1 = ไม่มีความสอดคล้องเลย 5 = มีความสอดคล้องมากที่สุด",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
          displayMode: "buttons"
        },
      ],
    },
    {
      name: "Brand Value",
      title: "Brand Value",
      description: "<b>Description:</b> เป็นการประเมินคุณค่าของแบรนด์ในตลาด โดยแสดงถึงทรัพย์สินทั้งที่เป็นรูปธรรมและไม่เป็นรูปธรรมที่เกี่ยวข้องกับแบรนด์ เช่น ข้อมูลทางการเงิน กลยุทธ์ทางการตลาด เป็นต้น <br><br><b>Rationale:</b> คุณค่าของแบรนด์มีความสำคัญอย่างยิ่งสำหรับการวางตำแหน่งของแบรนด์ในตลาด ทำให้เกิดการได้เปรียบในการแข่งขัน และทำให้เกิดการเติบโตของผลประกอบการ โดยแบรนด์ที่มีคุณค่าของแบรนด์สูงสามารถควบคุมราคาของสินค้าในตลาดได้และมีความได้เปรียบทางการแข่งขันที่สำคัญกว่าแบรนด์อื่นๆ",
      elements: [
        {
          type: "rating",
          name: "BrandValue-1",
          title:
            "ผู้บริโภคหรือลูกค้าประเมินคุณภาพของสินค้า/ บริการของแบรนด์อยู่ในระดับใด",
          description: "1 = ไม่มีคุณภาพ 5 = คุณภาพดีเลิศ",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: "BrandValue-2",
          title:
            "ผู้บริโภคหรือลูกค้าประเมินว่าผลิตภัณฑ์ของแบรนด์ท่านมีความคุ้มค่าต่อเงินที่จ่ายไป",
          description: "1 = ไม่เห็นด้วยอย่างมาก 5 = เห็นด้วยอย่างมาก",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: "BrandValue-3",
          title:
            "แบรนด์ของท่านมีความเป็นมิตรกับสิ่งแวดล้อมและมีความรับผิดชอบต่อสังคมมากน้อยเพียงใด",
          description: "1 = ไม่มีเลย  5 = มากที่สุด",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
          displayMode: "buttons"
        },
      ],
    },
    {
      name: "Market Engagement",
      title: "Market Engagement",
      description: "<b>Description:</b> เป็นการประเมินการตอบสนองและการมีปฏิสัมพันธ์ของแบรนด์ต่อกลุ่มผู้บริโภค โดยพิจารณาจากการตอบสนองผู้บริโภคบนดิจิทัล ความคิดเห็นของผู้บริโภค กิจกรรมที่ผู้บริโภคเข้าร่วม และอื่นๆ <br><br><b>Rationale:</b> การมีส่วนร่วมกับผู้บริโภคอย่างมีประสิทธิภาพช่วยให้แบรนด์ถูกจดจำทำให้ผู้บริโภคมีความภักดีต่อแบรนด์ และสามารถกระตุ้นยอดขายได้ โดยแบรนด์ที่มีปฏิสัมพันธ์ที่ดีกับผู้บริโภคมักจะเป็นแบรนด์ที่ผู้บริโภคนึกถึงเป็นแบรนด์แรกอยู่เสมอ",
      elements: [
        {
          type: "rating",
          name: "MarketEngagement-1",
          title:
            "ผู้บริโภคหรือลูกค้าเห็น/ ได้ยินเกี่ยวกับแบรนด์ของท่านในโฆษณาหรือตามสื่อต่างๆบ่อยเพียงใด",
          description: "1 = แทบจะไม่เห็น/ ไม่ได้ยินเลย 5 = เห็น/ ได้ยินตลอด",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: "MarketEngagement-2",
          title:
            "แบรนด์ของท่านได้มีการนำเสนอผลิตภัณฑ์อย่างเข้าใจผู้บริโภคหรือกำหนดเทรนด์ในอุตสาหกรรมอย่างต่อเนื่องหรือไม่",
          description: "1 = ไม่เคย 5 = ตลอดเวลา",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: "MarketEngagement-3",
          title:
            "ผู้บริโภคหรือลูกค้ามีความรู้สึกผูกพันกับแบรนด์ของท่านมากน้อยเพียงใด",
          description: "1 = ไม่ผูกพันเลย 5 = ผูกพันอย่างลึกซึ้ง",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
          displayMode: "buttons"
        },
      ],
    },
    {
      name: "Customer Relationship",
      title: "Customer Relationship",
      description: "<b>Description:</b> เป็นการประเมินถึงคุณภาพและความลึกซึ้งของความสัมพันธ์ระหว่างแบรนด์กับผู้บริโภคโดยพิจารณาจากความภักดีของผู้บริโภค, ประสิทธิภาพของแบรนด์ในการการสนับสนุนหรือช่วยเหลือผู้บริโภค, คุณค่าที่แบรนด์มอบให้แก่ผู้บริโภค และการที่แบรนด์เข้าใจรวมถึงตอบสนองต่อความต้องการของผู้บริโภค<br><br><b>Rationale:</b> การสร้างและรักษาความสัมพันธ์ที่แข็งแกร่งกับลูกค้าเป็นสิ่งสำคัญที่ช่วยเพิ่มความภักดีของผู้บริโภค ทำให้ผู้บริโภคกลับมาซื้อสินค้าหรือใช้บริการซ้ำ และช่วยสร้างให้เกิดการบอกต่อ โดยพบว่าแบรนด์ที่โดดเด่นในการสร้างความสัมพันธ์กับผู้บริโภคจะเป็นแบรนด์ที่ผู้บริโภคมีมูลค่าการใช้จ่ายสินค้าหรือบริการของแบรนด์สูง และมีคะแนนการบอกต่อที่ดี",
      elements: [
        {
          type: "rating",
          name: "CustomerRelationship-1",
          title: "บริการหลังการขายของแบรนด์ท่านมีประสิทธิภาพเพียงใด",
          description: "1 = ไม่มีประสิทธิภาพเลย 5 = มีประสิทธิภาพสูง",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: "CustomerRelationship-2",
          title:
            "ท่านคิดว่าลูกค้าของท่านจะพิจารณาซื้อผลิตภัณฑ์ของแบรนด์ท่านในระยะยาวหรือไม่",
          description: "1 = ไม่ซื้อแน่นอน 5 = ซื้อแน่นอน",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
          displayMode: "buttons"
        },
      ],
    },
    {
      name: "Product Excellence",
      title: "Product Excellence",
      description: "<b>Description:</b> เป็นการการประเมินถึงคุณภาพของผลิตภัณฑ์ <br><br> <b>Rationale:</b> การเสนอผลิตภัณฑ์ที่หลากหลายช่วยให้แบรนด์เข้าถึงกลุ่มลูกค้าที่กว้างขึ้น และทำให้แบรนด์สามารถรักษาความสำคัญในตลาดไว้ได้ เนื่องจากเป็นการสร้างชื่อเสียงของแบรนด์ให้แข็งแกร่ง รวมถึงเป็นการเพิ่มความพึงพอใจให้แก่ผู้บริโภค",
      elements: [
        {
          type: "rating",
          name: "ProductExcellence-1",
          title:
            "ผลิตภัณฑ์ของแบรนด์ท่านมีคุณสมบัติที่เป็นเลิศและเป็นประโยชน์หรือไม่",
          description: "1 = ไม่เลย 5 = มากที่สุด",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: "ProductExcellence-2",
          title:
            "เมื่อเทียบกับคู่แข่ง ผลิตภัณฑ์ของท่านนั้นมีความโดดเด่นและแปลกใหม่หรือไม่",
          description:
            "1 = ไม่โดดเด่นและไม่แปลกใหม่เเลย; 5 = โดดเด่นและแปลกใหม่ที่สุด",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
          displayMode: "buttons"
        },
      ],
    },
  ],
};
