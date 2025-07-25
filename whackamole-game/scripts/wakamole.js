function init (){
//everything goes here
const gridElm = document.querySelector('.grid')
const cells =[]
const gridWidth = 10
const numberOfCells = gridWidth * gridWidth
const audioElem= document.querySelector('#quack')
const scoreElm = document.querySelector('#score-display')


let duckPos = 47
let score = 0
let totalDucks = 0

function addDuck(){
  cells[duckPos].classList.add('duck')
  totalDucks++

}

function removeDuck(){
  cells[duckPos].classList.remove('duck')
}

function placeRandomDuck(){
  removeDuck()
    duckPos = Math.floor(Math.random()* numberOfCells)
    addDuck()
}


function play(){
  //writing an arrow func 
  setInterval(()=>{

    if (totalDucks >  10){
    placeRandomDuck()
    } else {
      endGame()
    }
    //3000ms is 3s
  }, 3000)
}

function endGame(){
  alert('stop endangering the wildlife, darn! Score is ' + score)
  score = 0
  totalDucks = 0
  scoreElm.textContent = 'Game end. score is 0'
}


//in case of error, trace back and check spelling
function handleClick(event){
  if (event.target.classList.contains('duck')){
    audioElem.pause()
    audioElem.currentTime = 0
    score += 10
    scoreElm.textContent =`Your score is ${score}`
    audioElem.play()
    placeRandomDuck()
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