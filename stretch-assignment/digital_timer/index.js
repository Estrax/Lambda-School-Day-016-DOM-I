let startBtn = document.createElement("button");
startBtn.textContent = "Start";

let resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";

const digits = document.querySelector(".digits");

let stopFlag = true;

let startDate;
let now;
let distance;
let seconds;
let miliseconds;

let secondTens = document.getElementById("secondTens");
let secondOnes = document.getElementById("secondOnes");
let msHundreds = document.getElementById("msHundreds");
let msTens = document.getElementById("msTens");

function makeDigitsRed(){
    secondTens.classList.add("redDigit");
    secondOnes.classList.add("redDigit");
    msHundreds.classList.add("redDigit");
    msTens.classList.add("redDigit");
}

function removeDigitsRed(){
    secondTens.classList.remove("redDigit");
    secondOnes.classList.remove("redDigit");
    msHundreds.classList.remove("redDigit");
    msTens.classList.remove("redDigit");
}

function resetTimerDigits(){
    secondTens.textContent = 0;
    secondOnes.textContent = 0;
    msHundreds.textContent = 0;
    msTens.textContent = 0;
};

function blockButton(){
    startBtn.disabled = true;
    startBtn.style.opacity = .3;
}

function unblockButton(){
    startBtn.disabled = false;
    startBtn.style.opacity = 1;
}

function colorTimer(seconds){
    if(seconds === 0) digits.style.background = "none";
    if(seconds >= 0) digits.style.background = "rgb(0, 0, 0, .1)";
    if(seconds >= 1) digits.style.background = "rgb(85, 85, 0, .2)";
    if(seconds >= 2) digits.style.background = "rgb(170, 170, 0, .3)";
    if(seconds >= 3) digits.style.background = "rgb(255, 255, 0, .2)";
    if(seconds >= 4) digits.style.background = "rgb(255, 255, 0, .3)";
    if(seconds >= 5) digits.style.background = "rgb(255, 255, 0, .5)";
    if(seconds >= 6) digits.style.background = "rgb(127, 255, 0, .6)";
    if(seconds >= 7) digits.style.background = "rgb(0, 255, 0, .4)";
    if(seconds >= 8) digits.style.background = "rgb(0, 255, 0, .6)";
    if(seconds >= 9) digits.style.background = "rgb(0, 255, 0, .8)";
    if(seconds === 10) digits.style.background = "rgb(0, 255, 0, 1)";
}

function timer(){
    startDate = new Date();
    resetTimerDigits();

    setInterval(function() {
        if(stopFlag) return;
        colorTimer(seconds);
        now = new Date().getTime();
        distance = now - startDate;
    
        miliseconds = Math.floor((distance % (10 * 100)) / 10);
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        secondTens.textContent = Math.floor(seconds/10);
        secondOnes.textContent = seconds%10;
        msHundreds.textContent = Math.floor((miliseconds/10));
        msTens.textContent = miliseconds%10;
    
        if(seconds >= 10){
            clearInterval(timer);
            unblockButton();

            secondTens.textContent = 1;
            secondOnes.textContent = 0;
            msHundreds.textContent = 0;
            msTens.textContent = 0;
            
            makeDigitsRed();
        }
    }, 10);
} 

// styles

digits.style.padding = "20px";
digits.style.border = "5px solid black";

startBtn.style.fontSize = "32px";
startBtn.style.color = "white";
startBtn.style.background = "black";
startBtn.style.padding = "20px 40px";
startBtn.style.borderRadius = "15px";
startBtn.style.display = "block";
startBtn.style.marginRight = "50px";

resetBtn.style.fontSize = "32px";
resetBtn.style.color = "white";
resetBtn.style.background = "black";
resetBtn.style.padding = "20px 40px";
resetBtn.style.borderRadius = "15px";
resetBtn.style.display = "block";
resetBtn.style.marginLeft = "50px";

// button appends
document.querySelector("body").prepend(startBtn);
document.querySelector("body").appendChild(resetBtn);

startBtn.addEventListener("click", (event) => {
    event.preventDefault();
    stopFlag = false;

    blockButton();
    removeDigitsRed();

    timer();
});


resetBtn.addEventListener("click", (event) => {
    event.preventDefault();
    stopFlag = true;
    clearInterval(timer);

    digits.style.background = "none";

    unblockButton();
    removeDigitsRed();
    resetTimerDigits();
});

resetTimerDigits();