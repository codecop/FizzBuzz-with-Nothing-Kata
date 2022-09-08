import { One, to_integer, Two, Zero } from "./sample1_numbers.spec";

export const ListNull = (_) => Zero;

describe('Sample Pairs', () => {

    it("Pair", () => {
        const p = makePair(One)(Two);
        expect(to_integer(pairFirst(p))).toEqual(1);
        expect(to_integer(pairSecond(p))).toEqual(2);

        expect(to_tuple(p)).toEqual([1, 2]);
    });

});

export function to_tuple(p): [any, any] {
    return [pairFirst(p), pairSecond(p)];
}
