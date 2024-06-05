
let boxes = document.querySelectorAll(".box");
let turnX = true;
let countForDraw = 0;
let h4count = document.querySelector(".count")
let countX=0,countO=0;
let reset = document.querySelector(".reset");
let newGame= document.querySelector(".new");

let winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle a turn
function turn(box) {
    if (turnX) {
        box.innerText = "X";
    } else {
        box.innerText = "O";
    }
    turnX = !turnX; // Toggle turn
    countForDraw++;
    checkWin();
}

// Add click event listener to each box
boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (!box.innerText) { // Check if the box is empty
            turn(box);
        }
    });
});

   function checkWin()    
    {   
       //Checking winning condition
for(let arr of winning)
    {
        let pos1=arr[0];
        let pos2=arr[1];
        let pos3=arr[2];

         if(boxes[pos1].innerText===boxes[pos2].innerText && boxes[pos2].innerText===boxes[pos3].innerText && boxes[pos1].innerText!=="")
            {
                boxes.forEach( (box)=> {box.disabled=true;} )
                document.querySelector(".heading2").classList.remove("hide");
                document.querySelector(".heading2").innerText=`Congratulations!! ${boxes[pos1].innerText} wins`;
                document.querySelector("#heading1").classList.add("hide");
                if(boxes[pos1].innerText ==="X")
                   countX++;
                else 
                    countO++;
                
                h4count.innerText=`X: ${countX} and O: ${countO}`;
                h4count.classList.remove("hide");
                break;
            }
            else if (countForDraw==9){
                document.querySelector(".heading2").innerText= "Draw";
                document.querySelector(".heading2").classList.remove("hide");
                document.querySelector("#heading1").classList.add("hide");
                h4count.innerText=`X: ${countX} and O: ${countO}`;
                h4count.classList.remove("hide");
            }
        }
    }

reset.addEventListener("click", ()=>
{
    boxes.forEach((box)=>{ box.disabled=false;  box.innerText=""; })
    document.querySelector("#heading1").classList.remove("hide");
    h4count.classList.add("hide");
    document.querySelector(".heading2").classList.add("hide");
    countX=0;countO=0;countForDraw=0;
});

newGame.addEventListener("click", ()=>
    {
        boxes.forEach((box)=>{ box.disabled=false;  box.innerText=""; })
        document.querySelector("#heading1").classList.remove("hide");
        h4count.classList.add("hide");
        document.querySelector(".heading2").classList.add("hide");
        countForDraw=0;
    });
