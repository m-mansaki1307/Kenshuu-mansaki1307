function checkNumber(number) {
  
  if(number % 2 !== 0) {
     console.log('奇数です');
  } else {
    console.log('偶数です')
  }
 
}
// コンソールに「奇数です」と表示させる
checkNumber(5);

// コンソールに「偶数です」と表示される
checkNumber(2);

//if..elseを使う場合は、ifの条件が満たされない場合elseの方が実行されるので
//Line10のelseの( (num % 2) != 0) が必要ないです。
/*
  こんな感じに書くといいですよ
  if((num % 2) == 0) {
    console.log('偶数です');
  } else {
    console.log('奇数');
  }

*/


// 問題8