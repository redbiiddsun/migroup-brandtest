export const lowInvolvementProductsTH  = {
    locale: 'th',
    type: "low",
    title: "แบบทดสอบ Low involvement",
    description:"แบบทดสอบนี้มีทั้งหมด 5 หัวข้อที่จะช่วยประเมินแบรนด์ของท่านจากมุมมองของผู้บริโภค โดยจะใช้เวลาประมาณ 5 นาทีในการตอบคำถามเท่านั้น",
    progressBarType: "pages",
    showProgressBar: "top",
    showQuestionNumbers: "off",
    pages: [
      {
        name: "Brand Perception",
        elements: [
          {
            type: "rating",
            name: "BrandPerception-1",
            title: "ผู้บริโภคหรือลูกค้ามองว่าแบรนด์ของท่านนั้นมีความน่าสนใจและใช้งานง่ายหรือไม่",
            description: "1 = ไม่น่าสนใจ/ เข้าถึงยาก; 5 = น่าสนใจมาก/ เข้าถึงได้ง่าย",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ],
          },
          {
            type: "rating",
            name: "BrandPerception-2",
            title: "ท่านคิดว่าผู้บริโภคหรือลูกค้ามองว่าแบรนด์ของท่านเป็นแบรนด์นวัตกรรมมีความแปลกใหม่หรือไม่",
            description: "1 = ไม่มีความเป็นนวัตกรรมเลย; 5 = มีความเป็นนวัตกรรมมากที่สุด",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ]
          },
          {
            type: "rating",
            name: "BrandPerception-3",
            title: "เมื่อเทียบกับแบรนด์คู่แข่ง ผลิตภัณฑ์ของแบรนด์ท่านมีความโดดเด่นหรือมีความเป็นเอกลักษณ์มากน้อยเพียงใด",
            description: "1 = ไม่มีเอกลักษณ์เลย; 5 = มีเอกลักษณ์มาก",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ]
          },
          {
            type: "rating",
            name: "BrandPerception-4",
            title: "ท่านคิดว่าแบรนด์ของท่านมีการปรับตัวให้สอดคล้องกับเทรนด์และค่านิยมในปัจจุบันมากน้อยเพียงใด",
            description: "1 = ไม่มีความสอดคล้องเลย; 5 = มีความสอดคล้องมากที่สุด",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ]
          },
        ]
      },
      {
        name: "Brand Value",
        elements: [
          {
            type: "rating",
            name: "BrandValue-1",
            title: "ผู้บริโภคหรือลูกค้าของท่านมองว่าแบรนด์มีราคาเหมาะสมถูกหรือแพงอย่างไร",
            description: "1 = แพงมาก; 5 = ราคาถูกมาก",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ]
          },
          {
            type: "rating",
            name: "BrandValue-2",
            title: "การนำเสนอแบรนดิ้งหรือการโปรโมทแบรนด์สามารถกระตุ้นให้ผู้บริโภคซื้อผลิตภัณฑ์หรือไม่",
            description: "1 = ไม่เลย; 5 = มากที่สุด",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ]
          },
          {
            type: "rating",
            name: "BrandValue-3",
            title: "ผู้บริโภคหรือลูกค้ามองว่าแบรนด์ของท่านมีความเป็นมิตรกับสิ่งแวดล้อมหรือมีจริยธรรมมากน้อยเพียงใด",
            description: "1 = ไม่มีเลย; 5 = มีมากที่สุด",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ]
          },
        ]
      },
      {
        name: "Market Engagement",
        elements: [
          {
            type: "rating",
            name: "MarketEngagement-1",
            title: "ผู้บริโภคหรือลูกค้าเห็น/ ได้ยินเกี่ยวกับแบรนด์ของท่านในโฆษณาหรือตามสื่อต่างๆบ่อยเพียงใด",
            description: "1 = แทบจะไม่เห็น/ ไม่ได้ยินเลย; 5 = เห็น/ ได้ยินตลอด",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ]
          },
          {
            type: "rating",
            name: "MarketEngagement-2",
            title: "ผลิตภัณฑ์ของแบรนด์ท่านสามารถหาซื้อได้ง่ายหรือไม่ ไม่ว่าจะเป็นการซื้อผ่านทางออนไลน์หรือการซื้อผ่านทางหน้าร้าน",
            description: "1 = ยากมาก; 5 = ง่ายมาก",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ]
          },
        ]
      },
      {
        name: "Customer Relationship",
        elements: [
          {
            type: "rating",
            name: "CustomerRelationship-1",
            title: "ลูกค้าของท่านซื้อผลิตภัณฑ์ของแบรนด์ท่านซ้ำบ่อยแค่ไหน",
            description: "1 = ไม่ซื้อซ้ำเลย; 5 = ซื้อซ้ำตลอดเวลา",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ]
          },
          {
            type: "rating",
            name: "CustomerRelationship-2",
            title: "ลูกค้าของท่านให้คะแนนรสชาติหรือประสบการณ์การใช้งานสินค้าอย่างไร",
            description: "1 = ไม่พึงพอใจมาก; 5 = พึงพอใจมาก",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ]
          },
        ]
      },
      {
        name: "Product Excellence",
        elements: [
          {
            type: "rating",
            name: "ProductExcellence-1",
            title: "แบรนด์ของท่านมีผลิตภัณฑ์หลากหลายรูปแบบให้เลือกหรือไม่",
            description: "1 = มีตัวเลือกจำกัดมาก; 5 = มีตัวเลือกหลากหลายมาก",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ]
          },
          {
            type: "rating",
            name: "ProductExcellence-2",
            title: "ท่านมีการปรับปรุงและพัฒนาผลิตภัณฑ์ให้สอดคล้องกับตลาดในปัจจุบันอย่างสม่ำเสมอหรือไม่",
            description: "1 = ไม่เลย; 5 = ตลอดเวลา",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ]
          }
        ]
      }
    ],
};