const rows = 20;
const cols = 20;

function createTable() {
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

function changeColor(row, column, state) {
    var cell = document.getElementById("circle" + row + column);
    if (state == "alive") {
        cell.className = "aliveCircle";
    } else {
        cell.className = "deadCircle";
    }
}

function getState(row, column) {
    var cell = document.getElementById("circle" + row + column);
    if (cell.className == "aliveCircle") {
        return "alive";
    } else {
        return "dead";
    }
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

function getAliveCellsForRowCol(row, column) {
    let neighbors = getNeighbors(row, column);
    return getAliveCells(neighbors);
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

//Any live cell with fewer than two live neighbours dies, as if by underpopulation.
//Any live cell with two or three live neighbours lives on to the next generation.
//Any live cell with more than three live neighbours dies, as if by overpopulation.
//Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

function decideStatus() {
    for (r = 0; r < rows; r++) {
        for (c = 0; c< cols; c++) {
            let currentState = getState(r, c);
            let aliveNeighbors = getAliveCellsForRowCol(r, c);
            if (currentState == "alive") {
                 if (aliveNeighbors < 2) {
                    changeColor(r, c, "dead");
                 } else if (aliveNeighbors > 3 ) {
                    changeColor(r, c, "dead");
                 }
            } else {
                if (aliveNeighbors == 3) {
                    changeColor(r, c, "alive");
                }
            }
        }
    }
}

var div = document.getElementById('content');
var p = document.createElement('p');
p.style.color = 'black';
p.textContent = 'I was appended to the div';
div.appendChild(p);

function initalize() {
    createTable();
    changeColor(6,6, "alive");
    changeColor(5,6, "alive");
    changeColor(5,7, "alive");
    changeColor(5,8, "alive");
    changeColor(5,10, "alive");
    changeColor(7,9, "alive");
    changeColor(7,10, "alive");
    changeColor(8,7, "alive");
    changeColor(8,8, "alive");
    changeColor(8,10, "alive");
    changeColor(9,6, "alive");
    changeColor(9,8, "alive");
    changeColor(9,10, "alive");
}

initalize();

let delay = 1000;

for(i = 0; i<1000; i++) {
    setTimeout(() => {
       decideStatus();
     }, delay);
     delay += 1000;
}

let nb = getNeighbors(5,5);
let aliveCells = getAliveCells(nb);
console.log("Alive Cells = "+ aliveCells);
//decideStatus();