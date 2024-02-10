import { vi, it, expect, beforeEach } from "vitest";
import { sendDataRequest } from "./http";
import { HttpError } from "./errors";

/* 
sendDataRequest => sends a POST request to an endpoint
While testing this function, we wouldn't want to fire off these
POST requests to the backend in order to reduce bandwidth usage
and not to overburden the backend.

So, we will mock the fetch function and since it's not a function provided 
by a third party library(it's a global object baked into Node). So we'll
have to use a different approach

*/
let testData;

const testResponseData = { key: "1", data: "hello" };

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== "string") return reject("Not a string");

    const testResponse = {
      ok: true,
      json: () => {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };

    resolve(testResponse);
  });
});

vi.stubGlobal("fetch", testFetch);

beforeEach(() => {
  testData = { data: "test" };
});

it("should return any available response", () => {
  return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});

it("should convert the data to JSON before sending it", async () => {
  let errorMessage;

  try {
    //   return expect(sendDataRequest(testData)).not.rejects;
    const response = await sendDataRequest(testData);
  } catch (err) {
    errorMessage = err;
  }

  expect(errorMessage).not.toBe("Not a string");
});

it("should throw an httpError in case of non ok responses", () => {
  testFetch.mockImplementationOnce((url, options) => {
    return new Promise((resolve, reject) => {
      const testResponse = {
        ok: false,
        json: () => {
          return new Promise((resolve, reject) => {
            resolve(testResponseData);
          });
        },
      };

      resolve(testResponse);
    });
  });

  expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
});
