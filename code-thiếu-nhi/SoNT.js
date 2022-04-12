//bài 1: in ra 1 số ròi in ra các số nguyên tố nhân ra số cho trước
// Cách 1:
// function test(n) {
//   let arr = [];
//   if (n < 2) {
//     console.log(n);
//     return;
//   }
//   for (let i = 2; i <= n; i++) {
//     while (n % i == 0) {
//       arr.push(i);
//       n /= i;
//     }
//   }
//   let temp = arr.join(" ");
//   console.log(temp);
// }
// test(24);

// Cách 2:
// function test(n) {
//   if (n < 2) {
//     console.log(n);
//     return;
//   }
//   let temp = " ";
//   for (let i = 2; i <= n; i++) {
//     if (n % i == 0 && i != n) {
//       //arr.push(i);
//       n /= i;
//       temp += i + " ";
//     } else if (i == n) {
//       temp += n;
//       break;
//     } else {
//       i++;
//     }
//   }
//   //   let temp = arr.join(" ");
//   //   console.log(temp);
//   console.log(temp);
// }
// test(24);
/////////////////////////////////////
function test(n) {
  if (n < 2) {
    console.log(n);
    return;
  }

  let temp = " ";
  let p = 2;

  while (n > 1) {
    if (n % p == 0) {
      n /= p;
      temp += p + " ";
    } else {
      p++;
    }
  }
  console.log(temp);
}
test(100);
