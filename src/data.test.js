import { it, expect, describe, vi } from "vitest";

import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it("calls the logFn function if provided", () => {
    //an empty function that records whether the empty
    //function returned was called, how many times was it called
    //and with what arguments was it called
    const fn = vi.fn();

    // fn.mockImplementationOnce(someFn);when fn will be called only for the first time
    //the function that will get executed for the first time instead of fn will be someFn
    //and then it will roll back to the empty fn

    // fn.mockImplementation(someFn) when fn will be called
    //someFn will be executed all the time

    generateReportData(fn);

    expect(fn).toBeCalled();
    expect(fn).toBeCalledWith(a, b);
  });
});
