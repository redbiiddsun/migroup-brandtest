function checkMatchCategory(str: string): string {
    let key = [
        "BrandPerception",
        "BrandValue",
        "MarketEngagement",
        "CustomerRelationship",
        "ProductExcellence",
    ];

    for (let i = 0; i < key.length; i++) {
        let spiltKey = str.split("-");

        if (spiltKey[0] === key[i]) {
            return key[i];
        } else {
            continue;
        }
    }
    return "";
}

export function totalPoint(json: SurveyJSResult, quiztype: string): result {
  
    let templateResult: result = {
        BrandPerception: 0,
        BrandValue: 0,
        MarketEngagement: 0,
        CustomerRelationship: 0,
        ProductExcellence: 0,
    };

    for (const [key, value] of Object.entries(json)) {
        let checkResult = checkMatchCategory(key) as keyof typeof templateResult;

        templateResult[checkResult] += value;
    }

    return avgResult(templateResult, quiztype);
}


const questionHighQuiz: result = {
    BrandPerception: 4,
    BrandValue: 3,
    MarketEngagement: 3,
    CustomerRelationship: 2,
    ProductExcellence: 2,
};

const questionLowQuiz: result = {
    BrandPerception: 4,
    BrandValue: 3,
    MarketEngagement: 2,
    CustomerRelationship: 2,
    ProductExcellence: 2,
};

function avgResult(obj1: result, questionType: string): result {
    let results: result = obj1;

    let obj2: result;

    if (questionType === "low") {
        obj2 = questionLowQuiz;
    } else if (questionType === "high") {
        obj2 = questionHighQuiz;
    } else {
        return null as any;
    }
    results = {
        BrandPerception: obj1["BrandPerception"] / obj2["BrandPerception"],
        BrandValue: obj1["BrandValue"] / obj2["BrandValue"],
        MarketEngagement: obj1["MarketEngagement"] / obj2["MarketEngagement"],
        CustomerRelationship: obj1["CustomerRelationship"] / obj2["CustomerRelationship"],
        ProductExcellence: obj1["ProductExcellence"] / obj2["ProductExcellence"],
    }
    
    return results;
}
