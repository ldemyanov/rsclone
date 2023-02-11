export default function getHexFromDecimal(decimal: number) {
  const number = decimal < 25 ? 25 : decimal;
  return number.toString(16);
}
