class ItoListView {

  constructor(element) {

    this._element = element;

  }

  template(ito) {
    return `<tr class="ito">
    <td>${ito.color}</td>
    <td>${ito.brand}</td>
    <td>${ito.hinban}</td>
    </tr>`;
  }

  _

  update(ito) {

    let a = this._element.innerHTML;

    this._element._innerHTML =a + this._template(ito);

    
  }
templateDocument(ito) {
  let tdColor = document.createElement("td");
  tdColor.textContent = ito.color;

  let tdBrand =document.createElement('td');
  tdBrand.textContent = ito.brand;

  let tdHinban =document.createElement('td');
  tdHinban.textContent = ito.hinban;

  let tr = document.createElement('tr');
  tr.appendChild(tdColor);
  tr.appendChild(tdBrand);
  tr.appendChild(tdHinban);

  this._element.appendChild(tr);
  }


  clear() {
    this._element.innerHTML = "";
  }

}