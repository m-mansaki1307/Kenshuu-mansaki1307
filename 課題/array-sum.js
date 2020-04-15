let numbers = [1,2,3,4,5];
 
//For を使ってarray の合計を計算してください。
function arraySumWithFor(array) {
    let sum = 0;

    //for文の書き方が違っているので見直してください。
   //for文はカウンターの初期化、ループ条件、カウンターの更新です。
    for(let i=0 ; i < array.length; i++) {
        sum += array[i];
    }
    return sum
}

//While を使ってarray の合計を計算してください。
function arraySumWithWhile(array) {
   //Whileループの書き方が少し違うので見直しをしてください。
   //While文は
   //カウンターの初期化
   //while(ループ条件){
   //   ループ処理
   //　　カウンターの更新
   //}
 
   let sum = 0;
    
   
   while(){
     
   }
    return sum
}

 //Do While を使ってarray の合計を計算してください。
function arraySumWithDoWhile(array) {
    //do..whileの書き方が少し違うので見直しをしてください。
    //do..whileは
 　 //カウンターの初期化
    //do {
    // ループする処理
    //} while(ループの条件)
  
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
