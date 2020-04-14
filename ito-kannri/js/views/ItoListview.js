class ItoListView {

  constructor(element) {

    this._element = element;

  }

  _template(ito) {
    return `<tr class="ito">
    <td>${ito.color}</td>
    <td>${ito.brand}</td>
    <td>${ito.hinban}</td>
    </tr>`;
  }

  _template(ito) {
     let _template = document.createElement("tr");
    tdColor.textContent = ito.color;

     let tdcolor =document.createElement('td');
     tdBrand.textContent = ito.brand;

     let tdhinban =document.createElement('td');
     tdHinban.textContent = ito.hinban;

     tr.appendCHILD(tdColor);
     tr.appendCHILD(tdBrand);
     tr.appendCHILD(tdHinban);

     this._element/appendCHILD(tr);
  }

  update(ito) {

    let a = this._element.innerHTML;

    this._element._innerHTML =a + this._template(ito);

    
  }
}
