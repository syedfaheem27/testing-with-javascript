import { it, expect, describe } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
  it("converts a numeiric string to a value of type number", () => {
    //Arrange
    const num = "3";

    //Act
    const result = transformToNumber(num);

    //Assert
    expect(result).toBeTypeOf("number");
    expect(result).toBe(+num);
  });

  it("returns NaN for an argument that cannot be converted to a numeric value", () => {
    const num1 = "invalid";
    const num2 = {};

    const result1 = transformToNumber(num1);
    const result2 = transformToNumber(num2);

    expect(result1).toBeNaN();
    expect(result2).toBeNaN();
  });

  it("throws an Error if no argument is passed", () => {
    const resultFn = () => transformToNumber();

    expect(resultFn).toThrow(/No argument passed/);
  });
});

describe("cleanNumbers()", () => {
  it("should return an array of numbers when provided with an array of numeric strings", () => {
    const inputValues = ["1", "2"];

    const result = cleanNumbers(inputValues);

    expect(result[0]).toBeTypeOf("number");
  });

  it("should throw an Error when there is atleast a single invalid element in the input array", () => {
    const inputValues1 = ["", "1"];
    const inputValues2 = ["invalid", 2];

    const cleanFn1 = () => cleanNumbers(inputValues1);
    const cleanFn2 = () => cleanNumbers(inputValues2);

    expect(cleanFn1).toThrow();
    expect(cleanFn2).toThrow();
  });
});
