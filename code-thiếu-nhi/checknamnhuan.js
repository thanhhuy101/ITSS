const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Đây có phải năm nhuận khum?`, (a) => namNhuan(a));
{
  function namNhuan(a) {
    if ((a % 4 == 0) && (a % 100 != 0) || a % 400 == 0) {
      console.log("Đây là năm nhuận");
    } else {
      console.log("Đây ko là năm nhuận");
    }
  }
}
