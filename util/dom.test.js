import fs from "fs";
import path from "path";

import { it, expect, vi, beforeEach } from "vitest";
import { Window } from "happy-dom";

import { showError } from "./dom";

const filePath = path.join(process.cwd(), "index.html");
const htmlDoc = fs.readFileSync(filePath, "utf-8").toString();

const window = new Window();
const document = window.document;

beforeEach(() => {
  document.body.innerHTML = "";
  document.write(htmlDoc);
});

vi.stubGlobal("document", document);

it("should add a paragraph element to the element with id='errors'", () => {
  showError("test error");

  const errorEl = document.getElementById("errors");
  const errorPara = errorEl.firstElementChild;

  expect(errorPara).not.toBeNull();
});

it("should not contain an error element initially", () => {
  const errorEl = document.getElementById("errors");
  const errorPara = errorEl.firstElementChild;

  expect(errorPara).toBeNull();
});

it("should provide the error message in the error paragraph", () => {
  const testError = "test error";
  showError(testError);

  const errorEl = document.getElementById("errors");
  const errorPara = errorEl.firstElementChild;

  expect(errorPara.textContent).toBe(testError);
});
