import { luhnCheck } from "../components/card_validation/card_validation";

test("input text", () => {
  expect(luhnCheck("adadadad")).toBe(false);
});

test("input wrong card number", () => {
  expect(luhnCheck(123123123123123)).toBe(false);
});
