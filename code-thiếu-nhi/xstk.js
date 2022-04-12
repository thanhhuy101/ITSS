function convert(input) {
  let result = input;
  if (input == 0 || input == 1) {
    result = 1;
    return result;
  } else {
    while (input > 1) {
      input--;
      result *= input;
    }
    return result;
  }
}

function C(k, n) {
  let temp = 0;
  if (k >= 0 && n <= k) {
    temp = convert(k) / (convert(n) * convert(k - n));
    //  console.log(temp)
    return temp;
  }
}
function main(x, y) {
  let nCard = 52;
  let type = 4;

  let ramdom = 0;
  for (let i = y; i <= x; i++) {
    ramdom +=
      (C(nCard / type, i) * C(nCard - nCard / type, x - i)) / C(nCard, x);
  }
  console.log(Math.round(ramdom * 100) / 100);
}
main(2, 3);
module.exports = main;
