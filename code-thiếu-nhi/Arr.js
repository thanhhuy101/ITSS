//Bài 2: in ra các số bị lặp có trong mảng
//Cách 1: O(n^2)
// let arr = [2, 3, 5, 1, 4, 7, 6, 5, 9, 7, 6, 8];
// //let repeat = "";
// function test() {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] == arr[j]) {
//         //repeat += arr[i] + " ";
//         console.log(arr[i]);
//       }
//     }
//   }
//   //console.log(repeat);
// }
// test();

//Cách 2:

// let arr = [2, 3, 5, 1, 4, 7, 6, 5, 9, 7, 6, 8];

// function test() {
//   for (let i = 0; i < arr.length; i++) {
//     let j = i + 1;
//     let k = arr.length - 1;
//     while (j < k) {
//       if (arr[i] == arr[j]) {
//         console.log(arr[i]);
//       }
//       j++;
//     }
//   }
// }
// test();

//Cách 3: tối ưu hơn với O(n)

// let brr = [];
// brr.length = 1000;
// brr.fill(0);
// function test() {
//   let arr = [2, 3, 5, 1, 4, 7, 6, 5, 9, 7, 6, 8];
//   for (let i = 0; i < arr.length; i++) {
//     if (brr[arr[i]] == 0) {
//       brr[arr[i]]++;
//     } else if (brr[arr[i]] == 1) {
//       brr[arr[i]]++;
//       console.log(arr[i]);
//     }
//   }
// }
// test();
/////////////////////////////////////////////////////////////
// function num() {
//   let arr = [2, 3, 5, 1, 4, 7, 6, 5, 9, 7, 6, 8];
//   for (let i = 0; i < arr.length; i++) {
//     if (brr[arr[i]] == 0) {
//       brr[arr[i]]++;
//       console.log(arr[i]);
//     }
//   }
// }
// num();
//==> in ra các số ko lặp trong mảng + số lặp chỉ lấy 1 lần
