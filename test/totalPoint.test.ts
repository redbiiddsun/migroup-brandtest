import "jest";
import { totalPoint } from "../src/utils/result";

describe("totalPoint Function Unit Test", () => {
    const testData: SurveyJSResult = {
        "BrandPerception-1": 4,
        "BrandPerception-2": 5,
        "BrandPerception-3": 3,
        "BrandPerception-4": 5, //17
        "BrandValue-1": 1,
        "BrandValue-2": 5,
        "BrandValue-3": 2, //8
        "MarketEngagement-1": 1,
        "MarketEngagement-2": 4,
        "MarketEngagement-3": 5, //10
        "CustomerRelationship-1": 5,
        "CustomerRelationship-2": 4, //9
        "ProductExcellence-1": 3,
        "ProductExcellence-2": 3, //6
    };

    test("should return average result of high-products", () => {
        const result = totalPoint(testData, "high");

        expect(result.BrandPerception).toBeCloseTo(4.25);
        expect(result.BrandValue).toBeCloseTo(2.66666666666666);
        expect(result.MarketEngagement).toBeCloseTo(3.333333333333333);
        expect(result.CustomerRelationship).toBeCloseTo(4.5);
        expect(result.ProductExcellence).toBeCloseTo(3);
    });

    test("should return value of object", () => {
        const result = totalPoint(testData, "low");

        expect(result.BrandPerception).toBeCloseTo(4.25);
        expect(result.BrandValue).toBeCloseTo(2.66666666666666);
        expect(result.MarketEngagement).toBeCloseTo(5);
        expect(result.CustomerRelationship).toBeCloseTo(4.5);
        expect(result.ProductExcellence).toBeCloseTo(3);
    });
});
