function sumMatrix(m1, m2) {
  for (let i = 0; i < m1.length; i++) {
    let row = [];
    let temp = 0;
    for (let j = 0; j < m1[0].length; j++) {
      temp = m1[i][j] + m2[i][j];
      row.push(temp);
    }
    rerul.push(row);
  }
  return rerul;
}

sumMatrix();