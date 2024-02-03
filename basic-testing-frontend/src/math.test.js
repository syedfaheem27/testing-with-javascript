import { expect, it } from "vitest";
import { add } from "./math";

it("sum all the numbers in array and return the result", () => {
  const result = add([1, 2, 10, 20, -10]);

  expect(result).toBe(23);
});
