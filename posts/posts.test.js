import { it, expect, describe, beforeEach } from "vitest";
import { extractPostData } from "./posts";

const testTitle = "test file";
const testContent = "test content";

let testForm;

describe("extractPostData", () => {
  beforeEach(() => {
    testForm = {
      title: testTitle,
      content: testContent,
      get(identifier) {
        return this[identifier];
      },
    };
  });

  it("returns an object with title and content", () => {
    const resultObj = extractPostData(testForm);

    expect(resultObj.title).toBe(testTitle);
    expect(resultObj.content).toBe(testContent);
  });
});
