import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

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
