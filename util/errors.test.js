import { it, describe, expect } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("HttpError", () => {
  it("should return an object with statusCode, message and data as properties", () => {
    const testMessage = "hello";
    const testStatusCode = 400;
    const testData = "dummy data";

    const obj = new HttpError(testStatusCode, testMessage, testData);

    expect(obj).toEqual({
      statusCode: testStatusCode,
      message: testMessage,
      data: testData,
    });
  });
});

describe("ValidationError", () => {
  it("should return an object with message as a property", () => {
    const testMessage = "hello";

    const obj = new ValidationError(testMessage);

    expect(obj).toEqual({
      message: testMessage,
    });
  });
});
