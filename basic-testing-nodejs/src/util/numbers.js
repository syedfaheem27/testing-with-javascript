function transformToNumber(value) {
  if (!value) throw new Error("No argument passed");
  return +value;
}

exports.transformToNumber = transformToNumber;
