// Add new functions, variables here
// const UNITS = ["", "nghìn", "triệu", "tỷ", "nghìn"];
// const DIGITS = [
//   "không",
//   "một",
//   "hai",
//   "ba",
//   "bốn",
//   "năm",
//   "sáu",
//   "bảy",
//   "tám",
//   "chín",
// ];

// function readTwo(b, c, hasHundred) {
//   const output = [];
//   switch (b) {
//     case 0: {
//       // Nếu có đọc hàng trăm (đọc rồi) và b = 0, c = 0
//       // thì không đọc nữa
//       if (hasHundred && c == 0) break;
//       if (hasHundred) output.push("linh");
//       if (c == 4) {
//         output.push("tư");
//       } else {
//         output.push(DIGITS[c]);
//       }
//       break;
//     }
//     case 1: {
//       // Trường hợp số hàng chục là 10
//       output.push("mười");
//       if (c == 5) output.push("lăm");
//       // Mười lăm
//       else if (c != 0) output.push(DIGITS[c]);
//       // Trường hợp c = 0 không xét vì đã đọc "mười" rồi
//       break;
//     }

//     default: {
//       output.push(DIGITS[b], "mươi"); // b mươi
//       if (c == 1) output.push("mốt");
//       else if (c == 4) output.push("tư");
//       else if (c == 5) output.push("lăm");
//       else if (c != 0) output.push(DIGITS[c]);
//       // Không đọc c = 0 vì đã đọc "b mươi" rồi
//       break;
//     }
//   }
//   // Trả về mảng output, xem lại phần trước nhé
//   return output;
// }
// function readThree(a, b, c, readZeroHundred) {
//   const output = [];

//   // Đọc phần trăm (a) trước
//   if (a != 0 || readZeroHundred) {
//     // if(a != 0){
//     output.push(DIGITS[a], "trăm"); // Đọc là "a trăm"
//     // }
//   }
//   // Nối thêm phần sau (b, c)
//   // Ở đây dùng spread syntax để nối output
//   output.push(...readTwo(b, c, a != 0 || readZeroHundred));

//   return output;
// } // Đọc từng phần

// function main(input) {
//   // console.log(input);
//   if (Number(input) >= 0 && Number(input) < 1000000000000000) {
//     if (Number(input) == 0) {
//       console.log("không");
//     } else {
//       let needZeroCount = input.length % 3;
//       // console.log(needZeroCount);
//       if (needZeroCount != 0) {
//         needZeroCount = 3 - needZeroCount;
//         input = "0".repeat(needZeroCount) + input;
//       }
//       //doc tung phan
//       const output = [];
//       for (let i = 0; i < input.length / 3; i++) {
//         let [a, b, c] = input.substr(i * 3, 3);
//         a = parseInt(a);
//         b = parseInt(b);
//         c = parseInt(c);
//         if (a != 0 || b != 0 || c != 0) {
//           const isFirstGroup = i == 0;
//           output.push(...readThree(a, b, c, !isFirstGroup)); // Dùng spread operator
//           // console.log(readThree(a, b, c, !isFirstGroup));
//           // Đọc phần đơn vị của nhóm
//           output.push(UNITS[input.length / 3 - 1 - i]);
//         }
//       }
//       console.log(output.join(" "));
//     }
//   }
// }
// main("59792985925");

// module.exports = main;

/////////////////////////////////////////////////////////////////////////////////
let arr = [
  "không",
  "một",
  "hai",
  "ba",
  "bốn",
  "năm",
  "sáu",
  "bảy",
  "tám",
  "chín",
];
let donVi = ["", "chục", "trăm", "nghìn", "triệu", "tỷ"];

function docDonVi(motSo) {
  console.log(arr[motSo]);
}

function docHangChuc(haiSo) {
  let result = [];
  let hangDonVi = haiSo[1];
  let hangChuc = haiSo[0];

  switch (hangChuc) {
    case 0:
      result.push(arr[hangDonVi]);
      break;
    case 1:
      result.push("mười");
      if (hangDonVi == 1) {
        result.push("một");
      }
      result.push(arr[hangDonVi]);
      break;
    case 2:
      result.push();
    default:
      result.push(arr[hangChuc]);
      result.push("mươi");
      if (hangDonVi == 1) {
        result.push("mốt");
      } else if (hangDonVi == 4) {
        result.push("tư");
      }

      break;
  }
  console.log(result);
}
