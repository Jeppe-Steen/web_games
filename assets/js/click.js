let btn = document.querySelector(".btn");
let score = document.querySelector(".score");
let timeLeft = 100;
let waterHeight = 0;

document.querySelector(".timer").innerHTML = timeLeft + " milliseconds";
document.querySelector(".score").innerHTML = 0 + " clicks";

function test() {
    if (btn.innerHTML == "start") {
        btn.innerHTML = "click";
        setInterval(function() {
        if(timeLeft <= 0) {
            openScore();
            clearInterval();
            document.querySelector(".timer").innerHTML = 0 + " milliseconds";
        } else {
            document.querySelector(".water-container").style.height = waterHeight + "vh";
            document.querySelector(".timer").innerHTML = timeLeft + " milliseconds";
        }
        waterHeight += 1;
        timeLeft -= 1;

    }, 100);
    } else {
        score.innerHTML = parseInt(score.innerHTML) + 1 + " clicks";
    };
};

function openScore() {
    document.querySelector(".finalScore").style.display = "flex";
    document.querySelector(".finalScoreText strong").innerHTML = score.innerHTML;
}

document.querySelector(".retry").addEventListener("click", () => {
    location.reload();
})