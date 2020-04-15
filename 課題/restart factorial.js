// step 1
// function factorial(num) {
//   if(num ==0 || num == 1){
//     return 1;
//   } 

//   let result = 1;

//   for (let counter = num; counter > 0; counter--) {
//     result = result * counter;
//   }
//   return result
// }
// console.log(factorial(5));


// step2
function whileFactioral(num) {
  var result = num;

  if(num == 0 || num == 1)
  return 1;

  while(num > 1) {
    num--; 
    result = result * num;

  }

  return result;
}
console.log(whileFactioral(5));