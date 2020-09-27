const fizzbuzz = require("../index");

describe("fizzbuzz", () => {
    it("returns FizzBuzz when value is divisible by 15", () => {
        expect(fizzbuzz(30)).toStrictEqual("FizzBuzz");
    });

    if("returns Fizz when value is divisible by 3", () => {
        expect(fizzbuzz(9)).toStrictEqual("Fizz");
    });

    if("returns Buzz when value is divixible by 5", () => {
        expect(fizzbuzz(10)).toStrictEqual("Buzz");
    });

    it("returns the value when value is not divisible by 3 or 5", () => {
        expect(fizzbuzz(7)).toStrictEqual("7");
    });
});
