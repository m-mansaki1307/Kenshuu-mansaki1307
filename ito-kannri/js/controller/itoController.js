class ItoController {

     constructor() {

      let $ =document.querySelector.bind(document);

       this._inputColor = $('#color');
       this._inputBrand = $('#brand');
       this._inputHinban = $('#hinban');
       this._itoTable = $('.ito-table');

       this._itoList = new ItoList();
       this._itoListView = new ItoListView($('.ito-table')); 
      //  イベントの実行を監視する
       this._itoTable.addEventListener('dblclick',function(enent){
          //ダブルクリックされた 
          // イベント=>ターゲット=>ペアレントノード
        let clickRow = event.target.parentNode ;       

          // 糸消去の呼び出し
          this.deletIto(clickRow);
        
         }.bind(this));
    }

  //  リストを追加する
    addIto(event) {

      event.preventDefault();

      // 入力チェック
      // true 処理を実行
      // false 処理を中断
      this._isValidInput()

      if(this._isValidInput() == true) {
        let ito = new Ito(
          this._inputColor.value,
          this._inputBrand.value,
          this._inputHinban.value
         );
          
    
          this._itoList.addItem(ito);
    
          console.log(this._itoList);
    
          this._itoListView.templateDocument(ito);
    
          this._formSetDefault();
    
      } 
    }

    // リストを消す
    clearIto(event) {
       event.preventDefault();

       this._itoList.clear();

       this._itoListView.clear();

      this._formSetDefault();
    }

    // 糸を一つ削除する
    deletIto(clickRow) {
      //  クリックされた行から糸オブジェクトを作成する。
      let sakujoSuruIto = new Ito(
        // 色セルのデータ
        clickRow.children[0].textContent,
        // メーカーセルのデータ
        clickRow.children[1].textContent,
        // 品番セルのデータ
        clickRow.children[2].textContent
       );



         // 糸リストから消す
         this._itoList.selectClear(sakujoSuruIto);

         //画面から消す
         clickRow.remove();
      }

    // 入力欄を初期値に戻す処理
   _formSetDefault() {
     
    // 色を黒くする
    this._inputColor.value = '#000000';

    // メーカー名を空文字にする
    this._inputBrand.value = '';

    // 品番を空文字にする
    this._inputHinban.value = '';
   } 

  //  糸のバリデーションをする
  // 入力が不正の場合　false 正しい場合　ｔｒｕｅ
  // true になる条件 メーカー名＆＆品番が空文字ではない
  // falseにな条件　メーカー名｜｜品番が空文字
  _isValidInput() {
    // 結果
    let valid = false;
    // メーカー名が空文字ではない
    // 品番が定かではない
    if(this._inputBrand.value !== ''&&this._inputHinban.value !== ''){
      valid = true;
    } 

    // 結果を教える
    return valid;
  }


}


