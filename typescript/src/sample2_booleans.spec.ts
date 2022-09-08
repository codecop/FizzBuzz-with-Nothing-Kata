import { One, to_integer, Two, Zero } from "./sample1_numbers.spec";

describe('Sample Booleans', () => {

    it("True", () => {
        expect(to_integer(True(One)(Two))).toEqual(1);
    });
    it("False", () => {
        expect(to_integer(False(One)(Two))).toEqual(2);
    });
    it("And", () => {
        expect(to_boolean(and(True)(True))).toEqual(true);
        expect(to_boolean(and(True)(False))).toEqual(false);
        expect(to_boolean(and(False)(True))).toEqual(false);
    });
    it("Not", () => {
        expect(to_boolean(not(True))).toEqual(false);
        expect(to_boolean(not(False))).toEqual(true);
    });
    it("isZero", () => {
        expect(to_boolean(isZero(Zero))).toEqual(true);
        expect(to_boolean(isZero(One))).toEqual(false);
    });
    it("If", () => {
        expect(to_integer(If(True)(One)(Two))).toEqual(1);
        expect(to_integer(If(False)(One)(Two))).toEqual(2);
    });

});

export function to_boolean(b): boolean {
    return b(true)(false);
}
