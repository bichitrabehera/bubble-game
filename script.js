var timer = 30;
var score = 0;
var hitrn = 0;


const incScore = () => {
    score += 10;
    document.querySelector("#scoreval").textContent = score
}

const getNewHit = () => {
    hitrn = Math.floor(Math.random() * 9 + 1)
    document.querySelector("#hitval").textContent = hitrn;
}

const makeBubble = () => {
    var clutter = "";
    for (let i = 0; i <= 170; i++) {
        let rnum = Math.floor(Math.random() * 9 + 1)
        clutter += `<div class="bubble">${rnum}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

const runTimer = () => {
    var timerint = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer
        }
        else {
            document.querySelector("#pbtm").innerHTML = ` 
            <div style="margin:0 auto;display:flex;flex-direction:column;justify-content:center;align-items:center;">
            <h1 style="color:#000000;">Game Over</h1>
            <h1 style="color:#000000;">Score : ${score}</h1>
            </div>
            `;
            
            clearInterval(timerint)
        }
    }, 1000)
}

document.querySelector("#pbtm").addEventListener("click", (dets) => {
    var clickNum = Number(dets.target.textContent)
    if (clickNum === hitrn) {
        incScore();
        makeBubble();
        getNewHit();
    }
})

makeBubble();
runTimer();
getNewHit();
