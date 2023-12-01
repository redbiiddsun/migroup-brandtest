export const highInvolvementProducts = {
    locale: 'en',
    type: "high",
    title: "High-Involvement Products Test",
    description:"This test will take you through 5 topics to assess your brand performance in consumer’s view. It will only take you approximately 5 minutes to complete.",
    progressBarType: "pages",
    showProgressBar: "top",
    showQuestionNumbers: "off",
    pages: [
      {
        name: "Brand Perception",
        title: "Brand Perception",
        elements: [
          {
            type: "rating",
            name: "BrandPerception-1",
            title: "How would your customers rate the trustworthiness of the brand?",
            description: "1 = Very Unreliable; 5 = Very Reliable",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ]
          },
          {
            type: "rating",
            name: "BrandPerception-2",
            title: "How innovative do your customers perceive the brand to be?",
            description: "1 = Not at all Innovative; 5 = Extremely Innovative",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ]
          },
          {
            type: "rating",
            name: "BrandPerception-3",
            title: "How well-regarded is the brand in its industry?",
            description: "1 = Very Poor Reputation; 5 = Outstanding Reputation",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ]
          },
          {
            type: "rating",
            name: "BrandPerception-4",
            title: "Does the brand align with current cultural trends and values?",
            description: "1 = Not at all; 5 = Perfectly",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ]
          },
        ]
      },
      {
        name: "Brand Value",
        title: "Brand Value",
        elements: [
          {
            type: "rating",
            name: "BrandValue-1",
            title: "How would your customers rate the quality of the brand's products/services?",
            description: "1 = Very Low Quality; 5 = Excellent Quality",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ]
          },
          {
            type: "rating",
            name: "BrandValue-2",
            title: "Do your customers believe the brand offers value for money?",
            description: "1 = Strongly Disagree; 5 = Strongly Agree",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ]
          },
          {
            type: "rating",
            name: "BrandValue-3",
            title: "How eco-friendly and socially responsible is the brand?",
            description: "1 = Not at all; 5 = Completely",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ]
          },
        ]
      },
      {
        name: "Market Engagement",
        title: "Market Engagement",
        elements: [
          {
            type: "rating",
            name: "MarketEngagement-1",
            title: "How often do your customers see or hear about this brand in advertisements or media?",
            description: "1 = Very Rarely; 5 = All the Time",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ]
          },
          {
            type: "rating",
            name: "MarketEngagement-2",
            title: "Does the brand consistently offer insights or set industry trends?",
            description: "1 = Never; 5 = Always",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ]
          },
          {
            type: "rating",
            name: "MarketEngagement-3",
            title: "How emotionally connected do your customers feel to the brand?",
            description: "1 = Not Connected at all; 5 = Deeply Connected",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ]
          },
        ]
      },
      {
        name: "Customer Relationship",
        title: "Customer Relationship",
        elements: [
          {
            type: "rating",
            name: "CustomerRelationship-1",
            title: "How effective is the brand's after-sales service?",
            description: "1 = Very Ineffective; 5 = Highly Effective",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ]
          },
          {
            type: "rating",
            name: "CustomerRelationship-2",
            title: "Would your customers consider sticking with this brand for your long-term purchases?",
            description: "1 = Definitely Not; 5 = Definitely",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ]
          },
        ]
      },
      {
        name: "Product Excellence",
        title: "Product Excellence",
        elements: [
          {
            type: "rating",
            name: "ProductExcellence-1",
            title: "Are the features of the brand's product considered advanced and beneficial?",
            description: "1 = Not at all; 5 = Extremely",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ]
          },
          {
            type: "rating",
            name: "ProductExcellence-2",
            title: "Does the brand resonate with current cultural trends? (eliminate redundancy)",
            description: "1 = Not at all; 5 = Perfectly",
            autoGenerate: true,
            rateCount: 5,
            isRequired: true,
            rateValues: [ 1, 2, 3, 4, 5 ]
          }
        ]
      }
    ],
};