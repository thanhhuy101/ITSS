function test() {
  let str = "1234567890123456789012345678 + 9234567891234567890098765432";
  let substr = str.split(/([+])/);
  console.log(substr);
  let a = substr.shift(0);
  let h = parseInt(a);
  let b = substr.shift(1);
  let c = substr.shift(2);
  let k = parseInt(c);
  console.log(a + b + c);
  let d = h + k;
  console.log(BigInt(d));
}
test();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
