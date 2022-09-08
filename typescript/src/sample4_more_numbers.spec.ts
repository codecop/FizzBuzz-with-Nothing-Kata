import { One, to_integer, Two, Zero } from "./sample1_numbers.spec";
import { to_boolean } from "./sample2_booleans.spec";

describe('Sample More Numbers', () => {

    it("Dec", () => {
        expect(to_integer(dec(One))).toEqual(0);
        expect(to_integer(dec(Two))).toEqual(1);
        // underflow is still Zero
        expect(to_integer(dec(Zero))).toEqual(0);
    });
    it("Sub", () => {
        expect(to_integer(sub(Two)(One))).toEqual(1);
        expect(to_integer(sub(Two)(Two))).toEqual(0);
    });
    it("isLessOrEqual", () => {
        expect(to_boolean(isLessOrEqual(Zero)((One)))).toEqual(true);
        expect(to_boolean(isLessOrEqual(One)((One)))).toEqual(true);
        expect(to_boolean(isLessOrEqual(One)((Two)))).toEqual(true);
        expect(to_boolean(isLessOrEqual(Two)((One)))).toEqual(false);
    });
    it("Mod", () => {
        expect(to_integer(mod(Two)(Three))).toEqual(2);
        expect(to_integer(mod(Three)(Three))).toEqual(0);
        expect(to_integer(mod(Hundred)(Three))).toEqual(1);
    });
    it("Div", () => {
        expect(to_integer(div(Two)(Two))).toEqual(1);
        expect(to_integer(div(Two)(Three))).toEqual(0);
        expect(to_integer(div(Hundred)(Three))).toEqual(33);
    });

});
