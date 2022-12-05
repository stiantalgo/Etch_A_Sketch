const container = document.querySelector('#container');
const ClearBtN = document.querySelector('#clear');
const RainbowBtn = document.querySelector('#rainbowBtn');
const createDiv = document.createElement("div");

const slider = document.getElementById("myRange");
const output = document.getElementById("demo");

output.innerHTML = (slider.value *4);



let rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo"];
let colorLen = rainbowColors.length;
let canvasBG = "darkslategrey";

let containerSize = 640;
let gridSize = 64;
let divSize = Math.sqrt;
let rainbow = false;
// container.style.setProperty("--n", gridSize);


createGrid(gridSize, gridSize);



ClearBtN.addEventListener("click", () => {
    clearGrid(container);
})

RainbowBtn.addEventListener("click", () => {
    rainbowz();
})


slider.addEventListener("mouseup", () => {
    slider.oninput = function() {
        var sliderValue = (this.value * 4);
        output.innerHTML = sliderValue;
        gridSize = sliderValue;
        clearGrid(container);
    }
    createGrid(gridSize, gridSize);
    
})

function rainbowz(){
    const grids = document.querySelectorAll('.gridBox');
    
    grids.forEach(p => {    
        let ranNum = getRandomInt(colorLen);  
        //p.style.backgroundColor = ;

        p.addEventListener("mouseover", (e) =>{
            e.target.style.backgroundColor = `${rainbowColors[ranNum]}`;
        })
    });
}

function createGrid(rows, cols, rainbow){
    let divNum = rows*cols;
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(let i = 0; i < divNum; i++){

        let cell = document.createElement('div');
        cell.addEventListener("mouseover", (e) =>{
            e.target.style.backgroundColor = "black";
        })
        container.appendChild(cell).className ="gridBox";
    };
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function clearGrid(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    rainbow = false;
    createGrid(gridSize, gridSize);
}



