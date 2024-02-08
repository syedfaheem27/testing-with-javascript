import { promises as fs } from "fs";
import { it, expect, vi } from "vitest";
import writeData from "./io";

//replaces all the functions in the fs module with empty spy functions
vi.mock("fs");

it("should execute the writeFile method", () => {
  const testData = "Some Dummy data";
  const testFileName = "data.txt";

  writeData(testData, testFileName);
  //   return expect(writeData(testData, testFileName)).resolves.toBeUndefined();

  expect(fs.writeFile).toBeCalled();
});
