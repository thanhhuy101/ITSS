// function KTSoNT(n) {
//   if (n == 2) {
//     return true;
//   }
//   for (let i = 2; i * i < n; i++) {
//     if (n % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function test(n) {
//   for (let i = 2; i < n; i++) {
//     if (KTSoNT(i)) {
//       console.log(i);
//     }
//   }
// }
// test(100000);

// let time = Date.now();
// test(21);

// let elapsed = Date.now() - time;
// console.log(elapsed + " ms");

////////////////////////////////////////////////////////////////////////

let arr = [];

function test(n) {
  for (let i = 2; i < n; i++) {
    arr.push(true);
  }
  for (let i = 2; i < n; i++) {
    if (arr[i]) {
      console.log(i);
      let j = 2;
      let p = i * j;
      while (p < n) {
        arr[p] = false;
        j++;
        p = i * j;
      }
    }
  }
}

let time = Date.now();
test(21);

let elapsed = Date.now() - time;
console.log(elapsed + " ms");
