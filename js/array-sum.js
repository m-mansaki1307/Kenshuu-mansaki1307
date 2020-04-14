let numbers = [1,2,3,4,5];
 
//For を使ってarray の合計を計算してください。
function arraySumWithFor(array) {
    let sum = 0;

    for(let i=0, len=array. length; i<len; ++i) {
        sum += array[i];
    }
    return sum
}

//While を使ってarray の合計を計算してください。
function arraySumWithWhile(array) {
    let sum = 0;
    
   while(sum<15) {
     
     
   }
    return sum
}

 //Do While を使ってarray の合計を計算してください。
function arraySumWithDoWhile(array) {
    let sum = 0;
    let i = 1;
   do {
       i++
   } while(sum<15) {
      sum = sum + i;
   }
    return sum
}

function arraySumWithForEach(array) {
    let sum = 0;

    //ForEach を使ってarray の合計を計算してください。

    return sum
}

let forSum = arraySumWithFor(numbers);
let whileSum = arraySumWithWhile(numbers);
let doWhileSum = arraySumWithDoWhile(numbers);
let forEachSum = arraySumWithForEach(numbers);

console.log(`For文での合計: ${forSum}`);
console.log(`While文での合計: ${whileSum}`);
console.log(`doWhile文での合計: ${doWhileSum}`);
console.log(`ForEach文での合計: ${forEachSum}`);