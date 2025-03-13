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
         tdContent.className = "deadCircle";
         tdContent.id = "circle" + i + j;
         td.appendChild(tdContent);
         row.appendChild(td)
      }
      table.appendChild(row)
    }
}

function changeColor(row, column) {
    var cell = document.getElementById("circle" + row + column);
    cell.className = "aliveCircle";
}

function getNeighbors(row, column) {
    var returnArr = [];
    if ((row-1) >= 0) {
         var upDiv = "circle" + (row-1) + column;
         returnArr.push(document.getElementById(upDiv));
    }
    if ((row+1) <= 19 ) {
        var downDiv = "circle" + (row+1) + column;
        returnArr.push(document.getElementById(downDiv));
    }
    if ((column-1) >= 0) {
        var leftDiv = "circle" + row + (column-1);
        returnArr.push(document.getElementById(leftDiv));
    }
    if ((column+1) <= 19 ) {
        var rightDiv = "circle" + row + (column+1);
        returnArr.push(document.getElementById(rightDiv));
    }
    if ((row-1) >= 0 && (column+1) <= 19) {
         var northEastDiv = "circle" + (row-1) + (column+1);
        returnArr.push(document.getElementById(northEastDiv));
    }
    if ((row-1) >= 0 && (column-1) >= 0) {
        var northWestDiv = "circle" + (row-1) + (column-1);
        returnArr.push(document.getElementById(northWestDiv));
    }
    if ((row+1) <= 19 &&  (column+1) <= 19) {
        var southEastDiv = "circle" + (row+1) + (column+1);
        returnArr.push(document.getElementById(southEastDiv));
    }
    if ((row+1) <= 19 &&  (column-1) >= 0) {
        var southWestDiv = "circle" + (row+1) + (column-1);
        returnArr.push(document.getElementById(southWestDiv));
    }

    return returnArr;
}

function getAliveCells(neighbors) {
  let totalAlive = 0;
  for(i = 0; i < neighbors.length; i++) {
    if (neighbors[i].className == 'aliveCircle') {
      totalAlive++;
    }
  }
  return totalAlive;
}

var div = document.getElementById('content');
var p = document.createElement('p');
p.style.color = 'black';
p.textContent = 'I was appended to the div';
div.appendChild(p);

createTable();

changeColor(0,0);

let nb = getNeighbors(5,5);
let aliveCells = getAliveCells(nb);
console.log("Alive Cells = "+ aliveCells);