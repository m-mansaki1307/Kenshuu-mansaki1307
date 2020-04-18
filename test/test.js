const year = 2020;

let name = 'mansaki';

let birthyear = 1997;

function helloWorld() {

  console.log('Hello World');
}

function aisatu(name) {
  
  result = 'こんにちは' +name+ 'です！';
  console.log(result);
}
// やり直し
helloWorld();
aisatu(name);


let nenrei = year - birthyear;

if(nenrei>=18) {
  console.log(nenrei);
}

let  i = 100; 

for(let i=100; i>=50; i-=10) {
  console.log(i);
}