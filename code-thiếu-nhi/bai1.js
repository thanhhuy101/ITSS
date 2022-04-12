//Bài 1: chọn 3 số trong mảng cộng lại thành 10

//Cách 1

// let arr=[7,5,1,3,4,5,2,8,1];

// function test(s)
// {
//     for(let i=0; i< arr.length; i++){
//         let a=arr[i];
//         for(let j=i+1; j<arr.length; j++){
//             let b=arr[j];
//             for(let k=j+1; k<arr.length; k++){
//                 let c=arr[k];

//                 if(a+b+c == s){
//                     console.log(`${a}+${b}+${c}=${s}`);
//                 }
//             }
//         }
//     }
// }
// test(10);

////////////////////////////////////////////////////////////////////////////////////////////////

// let arr = [7, 5, 1, 3, 4, 5, 2, 8, 1];

// function test(s) {
//   for (let i = 0; i < arr.length; i++) {
//     let a = arr[i];
//     let b = arr[i + 1];
//     for (let j = i; j < arr.length; j++) {
//       //   let b = arr[j];
//       let c = arr[j];
//       if (a + b + c == s) {
//         console.log(`${a}+${b}+${c}=${s}`);
//       }
//     }
//   }
// }
// test(10);

//////////////////////////////////////////////////////////////////////////////

let arr = [7, 5, 1, 3, 4, 5, 2, 8, 1];
let temp;

function test(s) {
  arr.sort();
  console.log(arr);

  for (let i = 0; i < arr.length - 2; i++) {
    let j = i + 1;
    let k = arr.length - 1;
    while (j < k) {
      if (arr[i] + arr[j] + arr[k] == s) {
        console.log(arr[i], arr[j], arr[k]);
        k--;
      } else if (arr[i] + arr[j] + arr[k] > s) {
        k--;
      } else {
        j++;
      }
    }
  }
}
test(10);
