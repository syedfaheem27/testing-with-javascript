import { expect, it } from "vitest";
import { add } from "./math";

//Always try to write more tests to test various features of the same unit
//If invalid inputs passed

it("returns sum of all the numbers in array ", () => {
  //Arrange
  const numbers = [1, 2, 3];
  const expected_result = numbers.reduce((prev, curr) => prev + curr, 0);

  //Act
  const result = add(numbers);

  //Assert
  expect(result).toBe(expected_result);
});

it("returns NaN if one of the numbers in the array is an invalid number", () => {
  //Arrange
  const numbers = ["invalid", 2];

  //Act
  const result = add(numbers);

  //Assert
  expect(result).toBeNaN();
});

it("returns sum of all numbers in an array of numeric strings", () => {
  //Arrange
  const numbers = ["1", "2"];
  const expected_result = numbers.reduce((prev, curr) => +prev + +curr, 0);

  //Act
  const result = add(numbers);

  //Assert
  expect(result).toBe(expected_result);
});

it("yields 0 if an empty array is passed", () => {
  //Arrange
  const numbers = [];

  //Act
  const result = add(numbers);

  //Assert
  expect(result).toBe(0);
});

//1 way with try catch
// it("throws an Error if no argument is passed", () => {
//   try {
//     //No arrange phase

//     //Act
//     add();
//   } catch (err) {
//Assert
//     expect(err).toBeDefined();
//   }
// });

//Better way
it("throws an Error if no argument is passed", () => {
  //Arrange
  const returnFn = () => add();

  //No act

  //Assert
  expect(returnFn).toThrow(/argument passed is not an array/);
});

it("throws an Error if an argument of type other than array is passed", () => {
  const returFn1 = () => add("1234");
  const returFn2 = () => add({ num1: 1, num2: 2 });
  const returFn3 = () => add(2);

  expect(returFn1).toThrow(/argument passed is not an array/);
  expect(returFn2).toThrow(/argument passed is not an array/);
  expect(returFn3).toThrow(/argument passed is not an array/);
});

it("throws an Error if multiple arguments are passed instead of an array", () => {
  const num1 = 1;
  const num2 = 2;

  const returnFn = () => add(num1, num2);

  expect(returnFn).toThrow();
});
