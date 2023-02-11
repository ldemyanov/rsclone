export default function getDesimalFromHex(hexadecimal: string) {
  const decimal = parseInt(hexadecimal, 16);
  console.log(decimal < 25 ? 25 : decimal);
  return decimal < 25 ? 25 : decimal;
}
