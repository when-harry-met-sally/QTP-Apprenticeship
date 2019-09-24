
const width = 20;
const length = 20;
let grid = Array();

class Cord {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.life = false;
    }
}

function generateGrid(){
    for (let y = 0; y < width; y++){
        let row = Array();
        for (let x = 0; x < length; x++){
            let c = new Cord(x,y);
            row.push(c);
        }
        grid.push(row);
    }
    console.log(grid);
}

function displayGrid(){
    let gridElement= document.getElementById("grid");
    gridElement.innerHTML = "";
    for (let y = 0; y < grid.length; y++){
        console.log("test");
        let row = document.createElement("div");
        for (let x = 0; x < grid[y].length; x++){
            let c = document.createElement("div");
            c.classList.add("cord");
            c.addEventListener('click', function toggleLife(){
                if (grid[y][x].life == false){
                    grid[y][x].life = true;
                    c.classList.add("live");
                } else {
                    grid[y][x].life = false;
                    c.classList.remove("live");
                }
            })
            if (grid[y][x].life == true){
                c.classList.add("live");
            } else {
                c.classList.remove("live");
            }
            row.appendChild(c);
        }
        gridElement.appendChild(row);
    }
}

function getNeighbors(x, y, d){
    let neighbors = 0;
    let direction = Array();
    for (let i = -d; i <= d; i++){
        direction.push(i);
    }
    for (let i in direction){
        for (let j in direction){
            if (direction[i] != 0 || direction[j] != 0){
                let newY = parseInt(direction[i]) + parseInt(y);
                let newX = parseInt(direction[j]) + parseInt(x);
                try {
                    if (grid[newY][newX].life == true){
                        neighbors++;
                    }
                } catch {

                }
            }
        }
    }
    return neighbors;
}

function generateSeed(){

}

function main(){
    generateGrid();
    displayGrid();
}

function start(){
    checkLife();
    displayGrid();
}

function checkLife(){
    for (let y = 0; y < width; y++){
        for (let x = 0; x < length; x++){
            let cord = grid[y][x];
            let neighbors = getNeighbors(x, y, 1);
            if (cord.life == true){
                if (neighbors < 2){
                    cord.life = false;
                } else if (neighbors == 2 || neighbors == 3){

                } else if (neighbors >= 4){
                    cord.life = false;
                }
            } else {
                if (neighbors == 3){
                    cord.life = true;
                }
            }
        }
    }
}

main();