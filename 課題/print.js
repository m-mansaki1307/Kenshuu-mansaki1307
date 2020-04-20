// // ステップ１

// console.log('ステップ１');
for (let i =1; i <=10; i++){
    var sum='';
    for(let i2 =1; i2<=10; i2++){
      sum +=' '+ i*i2;
    }
    console.log(sum);
  }


// console.log('ステップ２');
// for(let x=1; x<=10; x++) {
//    var sum='';
//   for (let y=1; y<=10; y++) {
//      let sum2 =(x*y).toString().padStart(3,'0');
//      sum += ' ' + sum2;

//   }
//    console.log(sum);
// }