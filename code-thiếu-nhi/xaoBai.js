let chat = [1, 2, 3, 4];
let la = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
function taoBai() {
  let boBai = [];
  for (let i = 0; i < chat.length; i++) {
    for (let j = 0; j < la.length; j++) {
      boBai.push([chat[i], la[j]]);
    }
  }
  return boBai;
}

function swap(a, b) {
  let temp;
  temp = a;
  a = b;
  b = temp;
}

function xaoBai2(boBai) {
  for (let i = boBai.length; i > 0; i--) {
    let viTriRandom = Math.round(Math.random() * 51);
    [boBai[i], boBai[viTriRandom]] = [boBai[viTriRandom], boBai[i]];
  }
  return boBai;
}

// function xaoBai(boBai) {
//   boBai.sort(() => Math.round() - 0, 5);
//   return boBai;
// }

function check(bocBai, n) {
  let arrayChat = [];
  console.log(bocBai);
  arrayChat.length = 4;
  arrayChat.fill(0);
  for (let i = 0; i < bocBai.length; i++) {
    // arrayChat[bocBai[i][0] - 1]++;
  }
  if (arrayChat[0] >= n) {
    return true;
  }
  return false;
}

function main(n, x) {
  let boBai = taoBai();
  let soLanThuNghiem = 1000000;
  let soLanXuatHien = 0;

  let time = Date.now();
  for (let i = 0; i < soLanThuNghiem; i++) {
    boBai = xaoBai2(boBai);
    let bocBai = boBai.slice(0, n);
    if (check(bocBai, x)) {
      soLanXuatHien++;
    }
  }
  console.log(Date.now() - time);
  let result = soLanThuNghiem / soLanXuatHien;
  console.log(result == 0 ? 0 : result.toFixed(2));
}
main(5, 2);
