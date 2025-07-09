function init (){
//everything goes here
const gridElm = document.querySelector('.grid')

function createGrid(){
    //every cell i want - make a div
    //append this cell to my grid

    for (let i=0; i < 100; i++){
    const cell = document.createElement('div')
    gridElm.appendChild(cell)
    cell.textContent = i
    }
  }
  createGrid();
}
document.addEventListener('DOMContentLoaded', init) 