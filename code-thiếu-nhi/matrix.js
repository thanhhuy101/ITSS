function taoMT(row, col, arr) {
  let matrix = [];
  for (let i = 0; i < row; i++) {
    let temp = [];
    for (let j = 0; j < col; j++) {
      temp.push(0);
    }
    matrix.push(arr);
  }
  console.log(matrix);
}

function main(input) {
  let key = input.split("");
  let op = key[0];
  let row1 = key[1];
  let col1 = key[2];
  let row2 = key[3];
  let col2 = key[4];

  let matrix1 = [];
  let matrix2 = [];

  let arr1 = [];
  let arr2 = [];

  let num1 = row1 * col1;
  let num2 = row2 * col2;

  arr1 = key.slice(5, 5 + num1);
  arr2 = key.slice(5 + num1, 5 + num1 + num2);

  matrix1 = taoMT(col1, row1, arr1);
  matrix2 = taoMT(row2, col2, arr2);
  // console.log(mt1, mt2);

  if (op == "+") {
    for (let i = 0; i < row1; i++) {
      for (let j = 0; j < col1; j++) {
        mt1[i][j] = Number(matrix1[i][j]) + Number(matrix2[i][j]);
      }
    }
  } else if (op == "*") {
    let matrix = taoMT(row1, col2);
    for (let i = 0; i < row2; i++) {
      for (let j = 0; j < col2; j++) {
        for (let k = 0; k < row2; k++) {
          matrix[i][j] = Number(matrix1[i][k]) + Number(matrix2[k][j]);
        }
      }
    }
    console.log(matrix);
  }
  console.log(mt1);
}
