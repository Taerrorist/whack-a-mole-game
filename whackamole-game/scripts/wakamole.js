function init (){
//everything goes here
const gridElm = document.querySelector('.grid')
const cells =[]
const gridWidth = 10
const numberOfCells = gridWidth * gridWidth
const scoreElm = document.querySelector('#score-display')
let duckPos = 47
let score = 0
function addDuck(){
  cells[duckPos].classList.add('duck')
}

function removeDuck(){
  cells[duckPos].classList.remove('duck')
}
function play(){
  //writing an arrow func 
  setInterval(()=>{
    removeDuck()
    duckPos = Math.floor(Math.random()* numberOfCells)
    addDuck()
    //3000ms is 3s
  }, 3000)
}
function handleClick(event){
  if (event.target.classList.contains('duck')){
    score += 10
    scoreElm.textContent =`Your score is ${score}`
    console.log(score)
  }
}
function createGrid(){
    //every cell i want - make a div
    //append this cell to my grid

    for (let i=0; i < numberOfCells; i++){
    const cell = document.createElement('div')
    //cell.classList.add('duck')
    cell.textContent = i
    cell.addEventListener('click', handleClick)
    cells.push(cell)
    gridElm.appendChild(cell)
    }
    console.log(cells)
  }
  createGrid();
  play()


}

document.addEventListener('DOMContentLoaded', init) 