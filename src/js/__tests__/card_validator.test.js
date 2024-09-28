import { luhnCheck } from "../components/card_validation/card_validation.js";

test("input text", () => {
  const check = luhnCheck("adadadadad");
  expect(check).toBe(false);
});

test("input wrong card number", () => {
  const check = luhnCheck(123123123123123);
  expect(check).toBe(false);
});

test("input valid card number as a number", () => {
  expect(luhnCheck(4556340649830767)).toBe(true);
});

test("input valid card number as a string", () => {
  expect(luhnCheck("4556340649830767")).toBe(true);
});

test("input nothing", () => {
  expect(luhnCheck()).toBe(false);
});

test("input too much digits", () => {
  expect(luhnCheck("111111111111111111111111111111")).toBe(false);
});
