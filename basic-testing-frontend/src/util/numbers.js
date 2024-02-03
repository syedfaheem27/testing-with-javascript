export function transformToNumber(value) {
  if (!value) throw new Error("No argument passed");
  return +value;
}
