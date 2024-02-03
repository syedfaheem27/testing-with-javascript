import { it, expect } from "vitest";
import { validateStringNotEmpty, validateNumber } from "./validation";

//Validate String

it("throws an Error if empty string is passed", () => {
  const returnFn = () => validateStringNotEmpty("");

  expect(returnFn).toThrow(/must not be empty/);
});

it("throws an Error if empty argument is passed", () => {
  const returnFn = () => validateStringNotEmpty();

  expect(returnFn).toThrow(/read properties of undefined/);
});

it("throws an Error if argument other than a string is passed", () => {
  const num1 = 1;
  const num2 = {};

  const resultFn1 = () => validateStringNotEmpty(num1);
  const resultFn2 = () => validateStringNotEmpty(num2);

  expect(resultFn1).toThrow(/.trim is not a function/);
  expect(resultFn2).toThrow(/.trim is not a function/);
});

//Validate Number
