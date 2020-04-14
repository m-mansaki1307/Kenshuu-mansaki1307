// パターン1
// let num1 = 1; let num2 = 2; let num3 = 3;
// let num4 = 4; let num5 = 5; let num6 = 6;
// let num7 = 7; let num8 = 8; let num9 = 9; let num10 = 10;


// let resalt1 = num1*4*3*2;
// consolelog(resalt1)

// let resalt2 = num2*4*3*2;
// consolelog(resalt2)

// let resalt3 = num3*4*3*2;
// consolelog(resalt3)

// let resalt4 = num4*4*3*2;
// consolelog(resalt4)

// let resalt5 = num5*4*3*2;
// consolelog(resalt5)

// let resalt6 = num6*4*3*2;
// consolelog(resalt6)

// let resalt7 = num7*4*3*2;
// consolelog(resalt7)

// let resalt8 = num8*4*3*2;
// consolelog(resalt8)

// let resalt9 = num9*4*3*2;
// consolelog(resalt9)

// let resalt10 = num10*4*3*2;
// consolelog(resalt10)


// パターン2 for
var sum =0

for (var i=1; i<11; ++i) {
    var resalt = i *4 *3 *2 *1;
    console.log(resalt);
  }
 
//僕の日本語での説明が少しダメでしたね。　階乗を計算する問題だったんですよ。
//なので、パターン１ 4*3*2　とやっている時点で違うんですけど、指定された数字毎に変数を作るのは効率が悪いですし、スマートではないです。
//ループがあるのでそれを活用しましょう。
//パターン２が一番惜しいです。
//階乗をグーグルで検索すると　特定の数字までの数字の積ということなので、
//一度外にsumを置いておくのはばっちりです、あとはforの上限を指定した数字まで行くようにするのと、計算の合計を　sumに入れて、やればばっちりだと思います。
//例としてhttps://github.com/nsc-g-inagaki/dev-example/blob/master/js/factorial.jsを見てください、わからないことがあればどんどん聞いてください。

