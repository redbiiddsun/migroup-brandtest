export const highInvolvementProducts: Question = {
  locale: "en",
  type: "high",
  title: "High-Involvement Products Test",
  description: "This test will take you through 5 topics to assess your brand performance in consumer’s view. It will only take you approximately 5 minutes to complete.",
  progressBarType: "pages",
  showProgressBar: "top",
  showQuestionNumbers: "off",
  pages: [
    {
      name: "Brand Perception",
      title: "Brand Perception",
      description: "<b>Description:</b> Measures how positively or negatively the brand is viewed in the minds of the consumers. It\'s a combination of brand recognition, reputation, and the emotional connection consumers have with the brand <br><br> <b>Rationale:</b> Brand perception plays a vital role in influencing buying decisions, loyalty, and advocacy. It\'s the culmination of all brand touchpoints over time.",
      elements: [
        {
          type: "rating",
          name: "BrandPerception-1",
          title:
            "How would your customers rate the trustworthiness of the brand?",
          description: "1 = Very Unreliable; 5 = Very Reliable",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: "BrandPerception-2",
          title: "How innovative do your customers perceive the brand to be?",
          description: "1 = Not at all Innovative; 5 = Extremely Innovative",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: "BrandPerception-3",
          title: "How well-regarded is the brand in its industry?",
          description: "1 = Very Poor Reputation; 5 = Outstanding Reputation",
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
            "Does the brand align with current cultural trends and values?",
          description: "1 = Not at all; 5 = Perfectly",
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
      description: "<b>Description:</b> Represents the tangible and intangible assets associated with the brand. It's an assessment of how much value (financial, strategic, or equity) the brand brings to the market and its stakeholders. <br><br> <b>Rationale:</b> Brand value is crucial for market positioning, competitive advantage, and financial growth. A brand with high value can command higher prices and has a significant competitive edge.",
      elements: [
        {
          type: "rating",
          name: "BrandValue-1",
          title:
            "How would your customers rate the quality of the brand's products/services?",
          description: "1 = Very Low Quality; 5 = Excellent Quality",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: "BrandValue-2",
          title: "Do your customers believe the brand offers value for money?",
          description: "1 = Strongly Disagree; 5 = Strongly Agree",
          autoGenerate: true,
          rateCount: 5,
          isRequired: true,
          rateValues: [1, 2, 3, 4, 5],
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: "BrandValue-3",
          title: "How eco-friendly and socially responsible is the brand?",
          description: "1 = Not at all; 5 = Completely",
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
      description: "<b>Description:</b> Evaluates the level of interaction and engagement the brand has with its target audience. This encompasses digital interactions, customer feedback, loyalty programs, and more. <br><br> <b>Rationale:</b> Engaging effectively with the market ensures brand recall, loyalty, and can drive sales. Brands that actively engage are often top-of-mind for consumers.",
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
          displayMode: "buttons"
        },
        {
          type: "rating",
          name: "MarketEngagement-2",
          title:
            "Does the brand consistently offer insights or set industry trends?",
          description: "1 = Never; 5 = Always",
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
            "How emotionally connected do your customers feel to the brand?",
          description: "1 = Not Connected at all; 5 = Deeply Connected",
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
      description: "<b>Description:</b> Assesses the depth and quality of the brand's relationship with its customers. This involves understanding the strength of customer loyalty, the effectiveness of customer support, the value provided to the customers, and how well the brand understands and caters to its customers' needs. <br><br> <b>Rationale:</b> Building and maintaining strong relationships with customers is essential for brand loyalty, repeat business, and word-of-mouth marketing. Brands that excel in customer relationships often see higher customer lifetime values and better advocacy rates.",
      elements: [
        {
          type: "rating",
          name: "CustomerRelationship-1",
          title: "How effective is the brand's after-sales service?",
          description: "1 = Very Ineffective; 5 = Highly Effective",
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
            "Would your customers consider sticking with this brand for your long-term purchases?",
          description: "1 = Definitely Not; 5 = Definitely",
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
      description: "<b>Description:</b> Assesses the range of products offered by the brand and/or the excellence in the quality of these products. <br><br> <b>Rationale:</b> Diverse product offerings cater to a broader audience and ensure that the brand remains relevant in varying market conditions. Alternatively, product excellence ensures a strong reputation and customer satisfaction.",
      elements: [
        {
          type: "rating",
          name: "ProductExcellence-1",
          title:
            "Are the features of the brand's product considered advanced and beneficial?",
          description: "1 = Not at all; 5 = Extremely",
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
            "Does the brand resonate with current cultural trends? (eliminate redundancy)",
          description: "1 = Not at all; 5 = Perfectly",
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
