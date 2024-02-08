import { promises as fs } from "fs";
import { it, expect, vi } from "vitest";
import writeData from "./io";

//replaces all the functions in the fs module with empty spy functions
vi.mock("fs");

vi.mock("path", () => {
  return {
    default: {
      join: (...args) => args[args.length - 1],
    },
  };
});

it("should execute the writeFile method and with the right arguments", () => {
  const testData = "Some Dummy data";
  const testFileName = "data.txt";

  writeData(testData, testFileName);
  //   return expect(writeData(testData, testFileName)).resolves.toBeUndefined();

  expect(fs.writeFile).toBeCalled();

  //now in the io.js file, you can see that the storage path as returned
  //by path.join will be the filename as we mocked the join method by creating a
  //custom join

  //so,fs.writeFile should be called with testFileName and testData as the arguments
  expect(fs.writeFile).toBeCalledWith(testFileName, testData);
});
