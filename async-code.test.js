import { it, expect } from "vitest";
import { generateTokenPromise } from "./async-code";

it("should return a valid token", async () => {
  const testEmail = "test@test.com";

  //1 way
  // return expect(generateTokenPromise(testEmail, "mysecret123")).resolves.toBeDefined();

  //other way
  const token = await generateTokenPromise(testEmail, "mysecret123");

  expect(token).toBeDefined();
});
