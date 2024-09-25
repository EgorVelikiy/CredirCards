export function luhnCheck(input) {
  if (!input) {
    return false;
  }
  if (input.length < 13 || input.length > 19) {
    return false;
  }
  const number = input.toString();
  const digits = number.replace(/\D/g, "").split("").map(Number);
  let sum = 0;
  let isSecond = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i];
    if (isSecond) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    isSecond = !isSecond;
  }
  return sum % 10 === 0;
}
