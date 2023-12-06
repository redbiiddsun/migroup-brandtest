export const lowInvolvementProductsTH: Question = {
  locale: "th",
  type: "low",
  title: "แบบทดสอบ Low involvement",
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
            "ผู้บริโภคหรือลูกค้ามองว่าแบรนด์ของท่านนั้นมีความน่าสนใจและใช้งานง่ายหรือไม่",
          description:
            "1 = ไม่น่าสนใจ/ เข้าถึงยาก; 5 = น่าสนใจมาก/ เข้าถึงได้ง่าย",
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
            "ท่านคิดว่าผู้บริโภคหรือลูกค้ามองว่าแบรนด์ของท่านเป็นแบรนด์นวัตกรรมมีความแปลกใหม่หรือไม่",
          description:
            "1 = ไม่มีความเป็นนวัตกรรมเลย; 5 = มีความเป็นนวัตกรรมมากที่สุด",
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
            "เมื่อเทียบกับแบรนด์คู่แข่ง ผลิตภัณฑ์ของแบรนด์ท่านมีความโดดเด่นหรือมีความเป็นเอกลักษณ์มากน้อยเพียงใด",
          description: "1 = ไม่มีเอกลักษณ์เลย; 5 = มีเอกลักษณ์มาก",
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
          description: "1 = ไม่มีความสอดคล้องเลย; 5 = มีความสอดคล้องมากที่สุด",
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
            "ผู้บริโภคหรือลูกค้าของท่านมองว่าแบรนด์มีราคาเหมาะสมถูกหรือแพงอย่างไร",
          description: "1 = แพงมาก; 5 = ราคาถูกมาก",
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
            "การนำเสนอแบรนดิ้งหรือการโปรโมทแบรนด์สามารถกระตุ้นให้ผู้บริโภคซื้อผลิตภัณฑ์หรือไม่",
          description: "1 = ไม่เลย; 5 = มากที่สุด",
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
            "ผู้บริโภคหรือลูกค้ามองว่าแบรนด์ของท่านมีความเป็นมิตรกับสิ่งแวดล้อมหรือมีจริยธรรมมากน้อยเพียงใด",
          description: "1 = ไม่มีเลย; 5 = มีมากที่สุด",
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
          description: "1 = แทบจะไม่เห็น/ ไม่ได้ยินเลย; 5 = เห็น/ ได้ยินตลอด",
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
            "ผลิตภัณฑ์ของแบรนด์ท่านสามารถหาซื้อได้ง่ายหรือไม่ ไม่ว่าจะเป็นการซื้อผ่านทางออนไลน์หรือการซื้อผ่านทางหน้าร้าน",
          description: "1 = ยากมาก; 5 = ง่ายมาก",
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
          title: "ลูกค้าของท่านซื้อผลิตภัณฑ์ของแบรนด์ท่านซ้ำบ่อยแค่ไหน",
          description: "1 = ไม่ซื้อซ้ำเลย; 5 = ซื้อซ้ำตลอดเวลา",
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
            "ลูกค้าของท่านให้คะแนนรสชาติหรือประสบการณ์การใช้งานสินค้าอย่างไร",
          description: "1 = ไม่พึงพอใจมาก; 5 = พึงพอใจมาก",
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
          title: "แบรนด์ของท่านมีผลิตภัณฑ์หลากหลายรูปแบบให้เลือกหรือไม่",
          description: "1 = มีตัวเลือกจำกัดมาก; 5 = มีตัวเลือกหลากหลายมาก",
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
            "ท่านมีการปรับปรุงและพัฒนาผลิตภัณฑ์ให้สอดคล้องกับตลาดในปัจจุบันอย่างสม่ำเสมอหรือไม่",
          description: "1 = ไม่เลย; 5 = ตลอดเวลา",
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
