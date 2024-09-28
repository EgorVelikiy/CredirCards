import { cardTypes } from "../components/card_types/types_validator";

test("input visa card", () => {
  expect(cardTypes("4556340649830767")).toBe("visa");
});

test("input master card", () => {
  expect(cardTypes("5240890122530218")).toBe("master");
});

test("input amex card", () => {
  expect(cardTypes("346133093655001")).toBe("amex");
});

test("input discover card", () => {
  expect(cardTypes("6011040600419154")).toBe("discover");
});

test("input mir card", () => {
  expect(cardTypes("2202200223948454")).toBe("mir");
});

test("input diners_club card", () => {
  expect(cardTypes("30368278660308")).toBe("diners_club");
});

test("input visa card with more digits", () => {
  expect(cardTypes("45563406498307670000000")).toBe(undefined);
});

test("input master card with more digits", () => {
  expect(cardTypes("524089012253021800")).toBe(undefined);
});

test("input amex card with more digits", () => {
  expect(cardTypes("3461330936550010")).toBe(undefined);
});

test("input discover card with more digits", () => {
  expect(cardTypes("601104060041915400000")).toBe(undefined);
});

test("input mir card with more digits", () => {
  expect(cardTypes("220220022394845400")).toBe(undefined);
});

test("input diners_club card with more digits", () => {
  expect(cardTypes("3036827866030800")).toBe(undefined);
});
