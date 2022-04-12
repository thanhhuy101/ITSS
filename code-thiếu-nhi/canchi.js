let can = [
  "Nhâm",
  "Quý",
  "Giáp",
  "Ất",
  "Bính",
  "Đinh",
  "Mậu",
  "Kỷ",
  "Canh",
  "Tân",
];
let chi = [
  "Dần",
  "Mão",
  "Thìn",
  "Tỵ",
  "Ngọ",
  "Mùi",
  "Thân",
  "Dậu",
  "Tuất",
  "Hợi",
  "Tý",
  "Sửu",
];
let currentYear = 2022;
function test(year) {
  let i = year - currentYear;
  if (i < 0) {
    console.log(can[10 - (-i % 10)]);
    console.log(chi[12 - (-i % 12)]);
  } else {
    console.log(can[i % 10]);
    console.log(chi[i % 12]);
  }
}
test(2000);
