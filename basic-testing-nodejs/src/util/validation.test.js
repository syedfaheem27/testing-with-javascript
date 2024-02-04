import { it, expect, describe } from "vitest";
import { validateStringNotEmpty, validateNumber } from "./validation";

describe("validateStringNotEmpty()", () => {
  it("throws an Error if empty string is passed", () => {
    const returnFn = () => validateStringNotEmpty("");

    expect(returnFn).toThrow(/must not be empty/);
  });

  it("throws an Error if no argument is passed", () => {
    const returnFn = () => validateStringNotEmpty();

    expect(returnFn).toThrow(/read properties of undefined/);
  });

  it("throws an Error if argument other than a string is passed", () => {
    const num1 = 1;
    const num2 = {};
    const num3 = true;

    const resultFn1 = () => validateStringNotEmpty(num1);
    const resultFn2 = () => validateStringNotEmpty(num2);
    const resultFn3 = () => validateStringNotEmpty(num3);

    expect(resultFn1).toThrow(/.trim is not a function/);
    expect(resultFn2).toThrow(/.trim is not a function/);
    expect(resultFn3).toThrow(/.trim is not a function/);
  });
});

describe("validateNumber()", () => {
  it("throws an Error if a value other than the type number is provided", () => {
    const num1 = "1";
    const num2 = "invalid";
    const num3 = true;
    const num4 = {};
    const num5 = [];

    const returnfn1 = () => validateNumber(num1);
    const returnfn2 = () => validateNumber(num2);
    const returnfn3 = () => validateNumber(num3);
    const returnfn4 = () => validateNumber(num4);
    const returnfn5 = () => validateNumber(num5);

    expect(returnfn1).toThrow();
    expect(returnfn2).toThrow();
    expect(returnfn3).toThrow();
    expect(returnfn4).toThrow();
    expect(returnfn5).toThrow();
  });

  it("does not throw any error if a valid number is passed", () => {
    const num = 2;

    const returnFn = () => validateNumber(num);

    expect(returnFn).not.toThrow();
  });
});
