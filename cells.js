function createTable() {
    const rows = 10;
    const cols = 10;
    const CellsArray = [];

    var table = document.getElementById('my-table');
    for (let i = 0; i < rows; i++) {
      var row = document.createElement('tr');
      row.className = "aRow";

      CellsArray[i] = [];

      for (let j = 0; j < cols; j++) {
        CellsArray[i][j] = 0;
         var td = document.createElement('td');
         tdContent= document.createElement('div');
         tdContent.id = "circle";
         td.appendChild(tdContent);
         row.appendChild(td)
      }
      table.appendChild(row)
    }
}

var div = document.getElementById('content');
var p = document.createElement('p');
p.style.color = 'black';
p.textContent = 'I was appended to the div';
div.appendChild(p);

createTable();