

class Product {

  constructor(name,cost,category,stock) {

    this._name = name;
    this._cost = cost;
    this._category = category;
    this._stock = stock;
  }

  get name() {
    return this._name;
  }

  get cost() {
    return this._cost;
  }

  get category() {
    return this._category;
  }

  get stock() {
    return this._stock;
  }
}

class Baket extends Product {

  constructor() {
    this._productList = [];
  }

  get _productList() {
    return this._productList;
  }

 //商品を追加する
 addProduct(product,count) {

   }

 //商品をすべて消す
  emptyCart() {
   }

//商品を取り出す
}

// let cart =new Cart ();

//買い物かごを表すクラス
class CartItem {
  constructor(product) {
    this._product= product;

  }
  get product() {
    return this._puroduct;
  }

  get count () {
    return this._count;
  }
  set count(value) {
    this._count = value;
  }
 //かごに入れた商品の計算　一つの計算
  getUnitPrise() {
    return this._product.price;
  }

  //合計の値段
  getPrice() {
    return this.getUnitPrice() * this._count;

  }
}

class Receipt {
  constructor() {
    //買い物の日付
    this.date = new Date();
    //買ったリストの商品
    this.productList = [];    
  }

  //買った商品を追加する
  addProduct(item) {
    

  }
  //合計を書き出す
  _sumCart() {

  }
  //出力する
  createRecept() {
    //addProduct,sumCartを使う
    //logに出す
       //日付
       console.log(this.date);
       //productLIst 商品名（一つの値段unitprice＊数）・合計の値段getprice
       for(let i=0; i<this.productList.length; i++) {
         let price = CartItem.getPrice();
        console.log(`商品${this.productList[i]}`,`商品ごとの合計金額${price}`);
       }
       
       //合計 sumCartの戻り値
       let sumPrice= this._sumCart();
       console.log(`合計${sumPrice}`);
    //書き出したタイミングでオブジェクトを空にする
    this.date = '';
    this.product = [];
    
  }
}




var pro = new Product('鉛筆',100,'文房具',300);