import { describe, it, expect } from "vitest";
import { generateResultText } from "./output";

describe("generateResultText()", () => {
  it("should return a string, no matter what kind of argument is passed", () => {
    const num1 = 1;
    const num2 = "1";
    const num3 = true;
    const num4 = {};
    const num5 = [];

    const result1 = generateResultText(num1);
    const result2 = generateResultText(num2);
    const result3 = generateResultText(num3);
    const result4 = generateResultText(num4);
    const result5 = generateResultText(num5);

    expect(result1).toBeTypeOf("string");
    expect(result2).toBeTypeOf("string");
    expect(result3).toBeTypeOf("string");
    expect(result4).toBeTypeOf("string");
    expect(result5).toBeTypeOf("string");
  });

  it("should return a string that contains the calculation result if a number is passed", () => {
    const num = 1;

    const result = generateResultText(num);

    expect(result).toContain(num.toString());
  });

  it("should return an empty string if no-calc is passed in as an argument", () => {
    const input = "no-calc";

    const result = generateResultText(input);

    expect(result).toBe("");
  });

  it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
    const result = "invalid";

    const resultText = generateResultText(result);

    expect(resultText).toContain("Invalid");
  });
});
