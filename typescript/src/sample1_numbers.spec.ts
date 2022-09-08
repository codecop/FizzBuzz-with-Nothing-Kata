export const Zero = (_) => (x) => x;
export const One = (f) => (x) => f(x);
export const Two = (f) => (x) => f(f(x));
export const Three = inc(Two);

export function inc(a) {
    return (f) => (x) => f(a(f)(x));
}

describe('Sample Numbers', () => {

    it("0,1,2", () => {
        expect(to_integer(Zero)).toEqual(0);
        expect(to_integer(One)).toEqual(1);
        expect(to_integer(Two)).toEqual(2);
    });
    it("Inc", () => {
        expect(to_integer(inc(Zero))).toEqual(1);
        expect(to_integer(inc(One))).toEqual(2);
    });
    it("Add", () => {
        expect(to_integer(add(One)(Two))).toEqual(3);
    });
    it("Mul", () => {
        expect(to_integer(mul(Two)(Three))).toEqual(6);
    });
    it("Pow", () => {
        expect(to_integer(pow(Two)(Three))).toEqual(8);
    });
    it("Hundred", () => {
        expect(to_integer(Hundred)).toEqual(100);
    });

});

export function to_integer(n): number {
    return n((x: number) => x + 1)(0);
}
