function createTable() {
    const rows = 20;
    const cols = 20;
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
         tdContent.className = "circle";
         tdContent.id = "circle" + i + j;
         td.appendChild(tdContent);
         row.appendChild(td)
      }
      table.appendChild(row)
    }
}

function changeColor(row, column) {
    var cell = document.getElementById("circle" + row + column);
    cell.className = "whiteCircle";
}

var div = document.getElementById('content');
var p = document.createElement('p');
p.style.color = 'black';
p.textContent = 'I was appended to the div';
div.appendChild(p);

createTable();

changeColor(0,0);