//her deklererer jeg et array som kommer fra alle elementer med classen dice
    let diceArr = [... document.querySelectorAll(".dice")];
//her deklererer jeg et array som kommer fra alle elementer med classen sum
    let sumArr = [... document.querySelectorAll(".sum")];
//her deklererer jeg et array som kommer fra alle elementer med classen btn
    let btnArr = [... document.querySelectorAll(".btn")];


//her deklererer jeg to variabler som er hver spillers knap.
    let playerOneButton = document.querySelector(".playerOneButton");
    let playerTwoButton = document.querySelector(".playerTwoButton");

playerOneButton.addEventListener("click", (e) => {
    for (let element of diceArr) {
        element.innerHTML = Math.floor(Math.random() * 6 + 1);
    };

    updateSum(0);
    toggleBtn();
    checkProgress();
});

playerTwoButton.addEventListener("click", (e) => {
    for (let element of diceArr) {
        element.innerHTML = Math.floor(Math.random() * 6 + 1);
    };

    updateSum(1);
    toggleBtn();
    checkProgress();
});

function updateSum(n) {
    let diceSum = parseInt(diceArr[0].innerHTML) + parseInt(diceArr[1].innerHTML);

    sumArr[n].innerHTML = parseInt(sumArr[n].innerHTML) + diceSum;
    console.log(diceSum);
    console.log(sumArr[n].innerHTML);

    if(sumArr[n].innerHTML >= 50) {
        sumArr[n].style.transform = "scale(1.5)";
        sumArr[n].style.color = "lightgreen";
        sumArr[n].innerHTML = 50;
        btnArr.classList.remove("ready");
    }
};

function toggleBtn() {
    playerOneButton.classList.toggle("ready");
    playerTwoButton.classList.toggle("ready");
}


