// 指定した数字までのフィボナッチの数字を比較する。

// 指定する数字 

// function fibonatchi(n,count){
 
//   for (let i=0; i<count; i++) {
//     result =(n-1)+(n-2); //フィボナッチがよくわからない
//     console.log(result);
//   } 
// }
// fibonatchi(1,10);

// 入力した数字が素数かどうかチェックする。

function sosuu(num) {
  if(num == 2) {
    console.log('素数です');

  } else if(num == 1) {
    console.log('素数ではない');
   
  } else {
      for(i=2; i<num; i++){
       if(num % i == 0) {
          console.log('素数ではない');
          break;
    
       } else if(i + 1 == num) {
          console.log('素数です');
          break;
       }
    }
  }
}
sosuu(1)

// 配列の中の値を昇順にする
var array = [19,36,7];


array.sort(
  function(a,b)  {
    return(a > b ? -1 : 1);
  }
);
console.log(array);

// 配列の中の値を降順にする
var array = [100,24,321];

array.sort(
  function(a,b)  {
    return(a < b ? -1 : 1);
  }
);
console.log(array);

