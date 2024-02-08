import { promises as fs } from "fs";
import { it, expect, vi } from "vitest";
import writeData from "./io";

//replaces all the functions in the fs module with empty spy functions
vi.mock("fs");

vi.mock("path");

it("should execute the writeFile method and with the right arguments", () => {
  const testData = "Some Dummy data";
  const testFileName = "data.txt";

  writeData(testData, testFileName);

  expect(fs.writeFile).toBeCalled();

  expect(fs.writeFile).toBeCalledWith(testFileName, testData);
});

it("should return a promise that resolves to no value if called correctly", () => {
  const testData = "Dummy data";
  const testFileName = "data.txt";

  return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
});
