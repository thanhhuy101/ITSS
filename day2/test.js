// function giaithua(num){
//     if (num == 0)
//     {
//         return 1;
//     }
//     else
//     {
//         return num * giaithua( num - 1 );
//     }
// }
// console.log(giaithua());
//-----------------------------------
// function giaiThua(num) {
//   var sum = 1;
//   var i = 1;
//   while (i <= num) {
//     sum = sum * i;
//     i++;
//   }
//   return sum;
// }
// console.log(giaiThua(5));
//------------------------------------------------
function giaiThua2(num) {
  var sum = 1;
  for (let i = 1; i <= num; i++) {
    sum = sum * i;
  }
  return sum;
}
console.log(giaiThua2(5));
//-----------------------------------------------------------
// function giaiThua3(num)
// {
//     var sum=1;
//     for(let i=5; num>=i; i--)
//     {
//         sum=sum*i;
//     }
//     return sum;
// }
// console.log(giaiThua3(5));
//--------------------------------------
// let chuoi = "xuong dong thi dung \\n";
// console.log(chuoi);
//-----------------------------------------------
// let a=10;
// b=5;
// let chuoi = "hieu cua 2 so a va b";
//-----------------------------------------
// let temp = true || false;
// console.log(temp);
//--------------------------------
// let test = function(a,b){
//     let sum = () => a+b;
// }
// console.log(test(5,10));
