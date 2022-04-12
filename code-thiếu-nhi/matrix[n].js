// function taoMT(n) {
//   let matrix = [];
//   for (let i = 0; i < n; i++) {
//     let row = [];
//     for (let j = 0; j < n; j++) {
//       row.push(0);
//     }
//     matrix.push(row);
//   }

//   let num = n * n;
//   let i = 0,
//     j = 0;

//   let dir = "down";
//   while (num >= 1) {
//     if (dir == "down") {
//       if (matrix[i][j] == 0) {
//         matrix[i][j] == num;
//         num--;
//         if (matrix[i + 1] == undefined || matrix[i + 1][j] != 0) {
//           dir = "right";
//           j++;
//           continue;
//         }
//         i++;
//       }
//     } else if (dir == "right") {
//       if (matrix[i][j] == 0) {
//         matrix[i][j] == num;
//         num--;
//         if (matrix[j + 1] == undefined || matrix[i - 1][j] != 0) {
//           dir = "up";
//           i--;
//           continue;
//         }
//         j++;
//       }
//     } else if (dir == "up") {
//       if (matrix[i][j] == 0) {
//         matrix[i][j] == num;
//         num--;
//         if (matrix[i - 1] == undefined || matrix[i][j + 1] != 0) {
//           dir = "left";
//           j--;
//           break;
//         }
//         i--;
//       }
//     } else if (dir == "left") {
//       if (matrix[i][j] == 0) {
//         matrix[i][j] == num;
//         num--;
//         if (matrix[j - 1] == undefined || matrix[i][j - 1] != 0) {
//           dir = "down";
//           i--;
//           break;
//         }
//         j--;
//       }
//     }
//   }

//   console.log(matrix);
// }
// taoMT(5);

////////////////////////////////////////////////
/////////////// từ 25 đến 1
function taoMT(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    matrix.push(row);
  }

  let num = n * n;
  let i = 0,
    j = 0;

  let dir = "right";
  while (num >= 1) {
    if (dir == "right") {
      if (matrix[i][j] == 0) {
        matrix[i][j] = num;
        num--;
      }
      if (matrix[j + 1] == undefined || matrix[i][j + 1] != 0) {
        dir = "down";
        i++;
        continue;
      }
      j++;
    } else if (dir == "down") {
      if (matrix[i][j] == 0) {
        matrix[i][j] = num;
        num--;
      }
      if (matrix[i + 1] == undefined || matrix[i + 1][j] != 0) {
        dir = "left";
        j--;
        continue;
      }
      i++;
    } else if (dir == "left") {
      if (matrix[i][j] == 0) {
        matrix[i][j] = num;
        num--;
      }
      if (matrix[j - 1] == undefined || matrix[i][j - 1] != 0) {
        dir = "up";
        i--;
        continue;
      }
      j--;
    } else if (dir == "up") {
      if (matrix[i][j] == 0) {
        matrix[i][j] = num;
        num--;
      }
      if (matrix[i - 1] == undefined || matrix[i - 1][j] != 0) {
        dir = "right";
        j++;
        continue;
      }
      i--;
    }
  }
  console.log(matrix);
}
taoMT(5);
///////////////////////////////////////////////////
//////////////////// từ 1 đến 25

function taoMT(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    matrix.push(row);
  }

  let num = 1;
  let i = 0,
    j = 0;

  let dir = "right";
  while (num <= n * n) {
    if (dir == "right") {
      if (matrix[i][j] == 0) {
        matrix[i][j] = num;
        num++;
      }
      if (matrix[j + 1] == undefined || matrix[i][j + 1] != 0) {
        dir = "down";
        i++;
        continue;
      }
      j++;
    } else if (dir == "down") {
      if (matrix[i][j] == 0) {
        matrix[i][j] = num;
        num++;
      }
      if (matrix[i + 1] == undefined || matrix[i + 1][j] != 0) {
        dir = "left";
        j--;
        continue;
      }
      i++;
    } else if (dir == "left") {
      if (matrix[i][j] == 0) {
        matrix[i][j] = num;
        num++;
      }
      if (matrix[j - 1] == undefined || matrix[i][j - 1] != 0) {
        dir = "up";
        i--;
        continue;
      }
      j--;
    } else if (dir == "up") {
      if (matrix[i][j] == 0) {
        matrix[i][j] = num;
        num++;
      }
      if (matrix[i - 1] == undefined || matrix[i - 1][j] != 0) {
        dir = "right";
        j++;
        continue;
      }
      i--;
    }
  }
  console.log(matrix);
}
taoMT(5);
