import { add, One, pow, Six, to_integer, Two } from "./sample1_numbers.spec";

export const LetterA = add(pow(Two)(Six))(One); // 65 = 2^6+1

describe('Strings', () => {

    it("Letters", () => {
        expect(to_char(LetterA)).toEqual('A');
        expect(to_char(LetterF)).toEqual('F');
        expect(to_char(LetterI)).toEqual('I');
        expect(to_char(LetterZ)).toEqual('Z');
    });

});

function to_char(l): string {
    const ascii = to_integer(l);
    return String.fromCharCode(ascii);
}
