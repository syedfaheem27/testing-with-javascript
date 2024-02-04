import { extractFormDataNumbers } from "./src/parser.js";
import { calculateResults } from "./src/math.js";
import { generateResultText, outputResult } from "./src/output.js";

const form = document.querySelector("form");
const output = document.getElementById("result");

function formSubmitHandler(event) {
  event.preventDefault();

  const numberInputs = extractFormDataNumbers(form);

  const result = calculateResults(numberInputs);

  const resultText = generateResultText(result);

  outputResult(output, resultText);
}

form.addEventListener("submit", formSubmitHandler);
