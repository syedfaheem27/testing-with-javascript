import { it, expect } from "vitest";
import writeData from "../src/util/io";

//Problem with this approach - it performs side effects rather than mocking them

it("should execute the writeFile method", () => {
  const testData = "Some Dummy data";
  const testFileName = "data.txt";

  expect(writeData(testData, testFileName)).resolves.toBeUndefined();
});
