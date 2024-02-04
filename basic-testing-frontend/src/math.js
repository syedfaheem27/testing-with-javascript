import { cleanNumbers } from "./util/numbers.js";

export function add(numbers) {
  if (!Array.isArray(numbers))
    throw new Error("The argument passed is not an array!");

  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}

export function calculateResults(numberInputs) {
  let result;
  try {
    const numbers = cleanNumbers(numberInputs);

    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  } finally {
    return result;
  }
}
