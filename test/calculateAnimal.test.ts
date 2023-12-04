import "jest";
import { calculateAnimal } from "../src/utils/calculateAnimal";

describe("calculateAnimal Function Unit Test", () => {
    const testValue = {
        Elephant: [4, 4, 4, 4, 3],
        Cheetah: [4, 3, 4, 3, 3],
        Hawk: [4, 3, 3, 3, 4],
        Labrador: [3, 4, 3, 4, 3],
        Turtle: [3, 4, 3, 3, 4],
        Lion: [4, 4, 3, 3, 3],
        Dolphin: [3, 3, 4, 3, 4],
        Butterfly: [3, 3, 4, 4, 3],
        Swan: [4, 3, 3, 4, 3],
        Horse: [3, 4, 4, 3, 3],
        Panda: [3, 3, 3, 4, 4],
        Fox: [3, 3, 3, 3, 3],
    };

    for (let i = 0; i < Object.keys(testValue).length; i++) {
        test(`should return ${Object.keys(testValue)[i]}`, () => {
            const result = calculateAnimal(Object.values(testValue)[i]);

            expect(result).toEqual(Object.keys(testValue)[i]);
        });
    }

    // Special Test Case
    test("should return Elephant (Special)", () => {
        const result = calculateAnimal([4, 4, 4, 3, 3]);
        expect(result).toEqual("Elephant");
    });

    test("should return Lion (Special)", () => {
        const result = calculateAnimal([4.5, 4.4, 4.3, 3, 3]);
        expect(result).toEqual("Lion");
    });
});
