export const lowInvolvementProducts: Question = {
  locale: "en",
  type: "low",
  title: "Low-Involvement Products Test",
  description:
    "This test will take you through 5 topics to assess your brand performance in consumer’s view. It will only take you approximately 5 minutes to complete.",
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
          title:
            "How appealing and user-friendly do your customers find the brand's presentation?",
          description: "1 = Very Unappealing; 5 = Very Appealing",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
        },
        {
          type: "rating",
          name: "BrandPerception-2",
          title:
            "How innovative do your customers perceive the brand to be in its category?",
          description: "1 = Not at all Innovative; 5 = Extremely Innovative",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
        },
        {
          type: "rating",
          name: "BrandPerception-3",
          title: "How distinct or unique is the product compared to others?",
          description: "1 = Very Common; 5 = Very Unique",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
        },
        {
          type: "rating",
          name: "BrandPerception-4",
          title:
            "Does the brand resonate with current cultural moments or trends?",
          description: "1 = Not at all; 5 = Perfectly",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
        },
      ],
    },
    {
      name: "Brand Value",
      elements: [
        {
          type: "rating",
          name: "BrandValue-1",
          title: "How would your customers rate the brand's affordability?",
          description: "1 = Very Expensive; 5 = Very Affordable",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
        },
        {
          type: "rating",
          name: "BrandValue-2",
          title:
            "Does the brand's presentation or branding encourage spontaneous purchases?",
          description: "1 = Definitely Not; 5 = Definitely",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
        },
        {
          type: "rating",
          name: "BrandValue-3",
          title:
            "How environmentally friendly or ethical is the brand perceived?",
          description: "1 = Not at all; 5 = Completely",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
        },
      ],
    },
    {
      name: "Market Engagement",
      elements: [
        {
          type: "rating",
          name: "MarketEngagement-1",
          title:
            "How often do your customers see or hear about this brand in advertisements or media?",
          description: "1 = Very Rarely; 5 = All the Time",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
        },
        {
          type: "rating",
          name: "MarketEngagement-2",
          title:
            "How easy is it to find and purchase the brand's products in stores or online?",
          description: "1 = Very Difficult; 5 = Very Easy",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
        },
      ],
    },
    {
      name: "Customer Relationship",
      elements: [
        {
          type: "rating",
          name: "CustomerRelationship-1",
          title:
            "How often do your customers find yourself buying the product again?",
          description: "1 = Never; 5 = Always",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
        },
        {
          type: "rating",
          name: "CustomerRelationship-2",
          title:
            "For applicable products, how would your customers rate the taste or sensory experience?",
          description: "1 = Very Unsatisfactory; 5 = Very Satisfactory",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
        },
      ],
    },
    {
      name: "Product Excellence",
      elements: [
        {
          type: "rating",
          name: "ProductExcellence-1",
          title: "Does the brand offer a variety of product choices?",
          description: "1 = Very Limited Range; 5 = Very Diverse Range",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
        },
        {
          type: "rating",
          name: "ProductExcellence-2",
          title:
            "Do you feel the brand frequently updates its product line to stay culturally relevant?",
          description: "1 = Not at all; 5 = Always",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
        },
      ],
    },
  ],
};
