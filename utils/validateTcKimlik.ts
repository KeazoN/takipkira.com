export const validateTcKimlik = (tc: string): boolean => {
  if (!/^\d{11}$/.test(tc)) return false;
  if (tc[0] === "0") return false;

  const digits = tc.split("").map(Number);
  const oddSum = digits[0] + digits[2] + digits[4] + digits[6] + digits[8];
  const evenSum = digits[1] + digits[3] + digits[5] + digits[7];
  const tenthDigit = (((oddSum * 7 - evenSum) % 10) + 10) % 10;
  const eleventhDigit =
    digits.slice(0, 10).reduce((acc, val) => acc + val, 0) % 10;

  return digits[9] === tenthDigit && digits[10] === eleventhDigit;
};
