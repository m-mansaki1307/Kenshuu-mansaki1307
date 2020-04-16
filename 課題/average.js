let num = [1,2,3,4,5];

// function average(num) {
//   return (num[0]+num[1]+num[2]+num[3]+num[4])/num.length
// }
// console.log('平均点は'+average(num));

let sum = 0;

num.forEach(function(a) {
  
  sum += a;

});

console.log(sum / num.length);