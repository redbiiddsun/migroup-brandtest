import "jest";
import { extractKeys, extractValues } from "../src/utils/objExtract";

describe("objExtract Function Unit Test", () => {

    
    const testValue: result = {
        BrandPerception: 2,
        BrandValue: 4,
        MarketEngagement: 3,
        CustomerRelationship: 3,
        ProductExcellence: 3,
    };

    test("should return key of object", () => {
        const result = extractKeys(testValue);
        expect(result).toEqual(["BrandPerception", "BrandValue", "MarketEngagement", "CustomerRelationship", "ProductExcellence"]);
    });

    test("should return value of object", () => {
        const result = extractValues(testValue);
        expect(result).toEqual([2,4,3,3,3]);
    });
});
