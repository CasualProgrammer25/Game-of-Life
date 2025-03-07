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

function getNeighbors(row, column) {
    var returnArr = [];
    if ((row-1) >= 0) {
         var upDiv = "circle" + (row-1) + column;
         returnArr.push(upDiv);
         console.log("------upDiv: " + upDiv);
    }
    if ((row+1) <= 19 ) {
        var downDiv = "circle" + (row+1) + column;
        returnArr.push(downDiv);
        console.log("------downDiv: " + downDiv);
    }
    if ((column-1) >= 0) {
        var leftDiv = "circle" + row + (column-1);
        returnArr.push(leftDiv);
        console.log("------leftDiv: " + leftDiv)
    }
    if ((column+1) <= 19 ) {
        var rightDiv = "circle" + row + (column+1);
        returnArr.push("------rightDiv: " + rightDiv);
    }
    if ((row-1) >= 0 && (column+1) <= 19) {
         var northEastDiv = "circle" + (row-1) + (column+1);
        returnArr.push("northEastDiv: " + northEastDiv);
    }
    if ((row-1) >= 0 && (column-1) >= 0) {
        var northWestDiv = "circle" + (row-1) + (column-1);
        returnArr.push("northWestDiv: "+northWestDiv);
    }
    if ((row+1) <= 19 &&  (column+1) <= 19) {
        var southEastDiv = "circle" + (row+1) + (column+1);
        returnArr.push("southEastDiv: "+southEastDiv);
    }
    if ((row+1) <= 19 &&  (column-1) >= 0) {
        var southWestDiv = "circle" + (row+1) + (column-1);
        returnArr.push("southWestDiv: "+southWestDiv);
    }

    return returnArr;
}

var div = document.getElementById('content');
var p = document.createElement('p');
p.style.color = 'black';
p.textContent = 'I was appended to the div';
div.appendChild(p);

createTable();

changeColor(0,0);