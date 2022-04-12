function binaryToDecimal(n) {
  let num = n;
  let dec_value = 0;

  let base = 1;

  let temp = num;
  while (temp) {
    let last_digit = temp % 10;
    temp = Math.floor(temp / 10);
    dec_value += last_digit * base;
    base = base * 2;
  }
  return dec_value;
}
let num = 1010;
console.log(binaryToDecimal(num));
/////////////////////////////////////////////////////////

// hệ 10 sang 2
function numToBit(num) {
  let number = num;
  let result = [];
  while (number >= 1) {
    result.unshift(Math.floor(number % 2));
    number = number / 2;
  }
  console.log(result.join());
}

// hệ 2 sang 10
function bitToDemacial(a) {
  let arr = [];
  arr = a.split("");
  console.log(arr);
  let x = arr.reverse();
  // console.log(arr);
  let result = 0;
  for (let i = 0; i < x.length; i++) {
    let temp = x[i] * Math.pow(2, i);
    result += temp;
  }
  console.log(result);
}
