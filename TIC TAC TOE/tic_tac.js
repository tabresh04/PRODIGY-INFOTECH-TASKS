let game = document.querySelector(".game");

let boxs = document.querySelectorAll(".box");

let msg = document.querySelector(".msg");

let hide = document.querySelector(".hide");

let restart = document.querySelector(".restart");

let newgame = document.querySelector(".newgame");

var turn = true;  

const arr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxs.forEach((box) =>{
  box.addEventListener("click",() =>{
   if(turn === true){
      box.innerText = "O";
      turn = false;  
   }
   else{
      box.innerText = "X";
      turn = true;
   }
   box.disabled = true;
   checkWinner();
  });
});

const checkWinner = () =>{
    for(pattern of arr){
        let val1 = boxs[pattern[0]].innerText;
        let val2 = boxs[pattern[1]].innerText;
        let val3 = boxs[pattern[2]].innerText;

        if(val1 !== "" && val2 !== "" && val3 !== ""){
            if(val1 === val2 && val2 === val3){
                console.log("Winner is",val1);
                for(btn of boxs){
                    btn.disabled = true;
                }
                hide.classList.remove("hide");
                msg.innerText = `Congratulation player ${val1} you won`;
            }
        }
    }
}

const restartgame = () =>{
    for(btn of boxs){
        btn.disabled = false;
        btn.innerText = "";
    }
    hide.classList.add("hide");

}
restart.addEventListener("click",restartgame);

const newgamee = () =>{
    for(btn of boxs){
        btn.disabled = false;
        btn.innerText = "";
    }
    hide.classList.add("hide");

}
newgame.addEventListener("click",newgamee);


let clear = document.querySelector(".clr");
let div = document.querySelector(".div");
let mul = document.querySelectorAll(".mul");
let cut = document.querySelectorAll(".cut");
let seven = document.querySelectorAll(".seven");
let eight = document.querySelectorAll(".eight");
let nine = document.querySelectorAll(".nine");
let minus = document.querySelectorAll(".min");
let four = document.querySelectorAll(".four");
let five = document.querySelectorAll(".five");
let six = document.querySelectorAll(".six");
let plus = document.querySelectorAll(".plus");
let one = document.querySelectorAll(".one");
let two = document.querySelectorAll(".two");
let three = document.querySelectorAll(".three");
let zero2 = document.querySelectorAll(".zero2");
let zero1 = document.querySelectorAll(".zero1");
let dot = document.querySelectorAll(".dot");
let equal = document.querySelectorAll(".equal");