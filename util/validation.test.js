import { it, expect } from "vitest";
import { validateNotEmpty } from "./validation";

it("shouldn't return or throw anything if provided with a non-empty text", () => {
  const testText = "error text";
  const errorMessage = "error message";

  let obj = validateNotEmpty(testText);
  const returnFn = () => validateNotEmpty(testText);

  expect(obj).toBeUndefined();
  expect(returnFn).not.toThrow();
});

it("should throw a validation error if provided with an empty text or a text with only blanks", () => {
  const testText = "";
  const testTextI = "      ";

  const returnFn = () => validateNotEmpty(testText);
  const returnFnI = () => validateNotEmpty(testTextI);

  expect(returnFn).toThrow();
  expect(returnFnI).toThrow();
});

it("should throw an error with a message property", () => {
  const testText = "";
  const errorMessage = "test error";

  const returnFn = () => validateNotEmpty(testText, errorMessage);

  expect(returnFn).toThrow(errorMessage);
});
