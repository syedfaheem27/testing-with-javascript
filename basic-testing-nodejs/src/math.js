function add(numbers) {
  if (!Array.isArray(numbers))
    throw new Error("The argument passed is not an array!");

  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}

exports.add = add;
