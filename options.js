const activeCellElement = document.getElementById("active-cell");
let activeCell = null;

function onCellFocus(e) {
  activeCell = e.target.id;
  activeCellElement.innerText = activeCell;
}
