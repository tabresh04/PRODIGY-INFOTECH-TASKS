let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let mili = document.querySelector(".mili");
let start = document.querySelector(".start");
let pause = document.querySelector(".pause");
let reset = document.querySelector(".reset");
let num = document.querySelectorAll(".num");

let s = 0;
let h = 0;
let m = 0;
let mil = 0;
let timer;

start.addEventListener("click",function(){
    timer = true;
    stopWatch();
});

pause.addEventListener("click", function () {
    timer = false;
});

reset.addEventListener("click", function () {
    timer = false;
    num.forEach((btn) => {
        btn.innerHTML = "00";
    });
    mil = 0;
    s = 0;
    m = 0;
    h = 0;
});

function stopWatch(){
    if(timer){
        if(mil < 10){
            mil++;
            mili.innerHTML ="0" + mil;
        }
        if(mil >= 10){
            mil++;
            mili.innerHTML = mil;
        }
        if(mil === 100){
            s++;
            sec.innerHTML = s;
            mil = 0;
        }
        if(s === 60){
            m++;
            min.innerHTML = m;
            s = 0;
            mil = 0;
        }
        if(m === 60){
            h++;
            hour.innerHTML = h;
            m = 0;
            s = 0;
            mil = 0;
        }
        setTimeout(stopWatch,10);
    }
}