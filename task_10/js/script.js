function createElement(tag, className, innerText) {
    var newObject = document.createElement(tag);
    newObject.className = (className) ? className : false;
    newObject.innerHTML = (innerText) ? innerText : false;
    return newObject
}
const pirateOutcry = ['Land rat!', 
                      'Anchor me in the bay!', 
                      'Three thousand sharks in my throat!', 
                      'Old rascal!', 
                      'Release my fins!', 
                      'The curse of the jellyfish!', 
                      'Thunder and lightning!'
];
const messages = ["\nCongratulations!\nYou have found the treasure ", "\nThe treasure was in the chest ", "attempts were used."];

function getRandomInt(max) {
     return Math.floor(Math.random() * Math.floor(max));
} 

let computerBox = getRandomInt(18) + 1;
let clickCount = 0;
let attemptsCountCalc = 5;
const attemptsCount = 5;

function startPage() {
    let startMessage = document.querySelector(".wrapper-for-boxes");
    
    let divStartMessage = createElement("div", "start-message", "Congratulations to those on deck! A storm in the sails and a passing wind in the hats!");
    startMessage.appendChild(divStartMessage);

    let startBtn = createElement("a", "start-button", "Steer the course!");
    startBtn.setAttribute("href", "#");
    startMessage.appendChild(startBtn);

    return startBtn
}

function createBox(id, boxImageName) {
    return [
        `<div id="box`+id+`" class="box">`,
            `<a href="#"><img src="./images/`+boxImageName+`.png" width="120px"></a>`,
        `</div>`
    ].join('\n')
}

function displayClicks(clickCount){
    let clkCount = document.querySelector(".click-counter");
    clkCount.innerHTML = `<h2>Clicks: ${clickCount}</h2>`
}

function clickAreaResult() {
    let clkCount = document.querySelector(".wrapper-for-boxes");
    let clickCounter = createElement("div", "click-counter", "<!-- counter -->");
    clickCounter.innerHTML = `<h2>Clicks: ${clickCount}</h2>`
    clkCount.appendChild(clickCounter);
}

function reloadPageGameAgain() {
    location.reload();
    return false
}

function endGame(success) {
    let deleteSpeaksInEndGame = document.querySelector(".flint-speaks");
    deleteSpeaksInEndGame.innerText = "";

    let deleteRulesInEndGame = document.querySelector(".rules-game");
    deleteRulesInEndGame.innerText = "";
    
    let gameEnd = document.querySelector(".boxes");
    //gameEnd.style.visibility = 'hidden';
    gameEnd.innerHTML = "";

    gameEnd.classList.add("boxes-column-end-game");
    
    let endGameSuccess = "You lost!";
    if (success) {
        endGameSuccess = "Congratulations!"
    }
    let endMessage = createElement("h1", "end-game-message", endGameSuccess);
    gameEnd.appendChild(endMessage);

    let againGame  = createElement("a", "end-button", "Again?");
    againGame.setAttribute("href", "#");
    gameEnd.appendChild(againGame);

    againGame.addEventListener("click", reloadPageGameAgain);
}

function toСhooseBox(e) {
    let messageSuccess = pirateOutcry[getRandomInt(pirateOutcry.length)];
    clickCount += 1;
    displayClicks(clickCount);
    if (attemptsCountCalc > 1) {
        attemptsCountCalc -= 1;
        let userBox = parseInt(e.currentTarget.id.slice(3), 10);
        console.log(computerBox, parseInt(e.currentTarget.id.slice(3), 10));

        if (computerBox == userBox) {
            e.target.src = "./images/box_gold.png";
            console.log(messageSuccess + messages[0] + `for ${clickCount} attempts!`);
            alert(messageSuccess + messages[0] + `for ${clickCount} attempts!`);
            endGame(true);
        } else {
            e.target.src = "./images/box_opened.png";
            console.log("loser");
        }
    } else {
        e.target.src = "./images/box_opened.png";
        document.querySelector(`div#box${computerBox} a img`).src = "./images/box_gold.png";
        console.log(computerBox, e.currentTarget.id.slice(3));
        console.log(messageSuccess + `\n${attemptsCount} ` + messages[2] + messages[1] + `${computerBox}!`);
        alert(messageSuccess + `\n${attemptsCount} ` + messages[2] + messages[1] + `${computerBox}!`);
        endGame(false);
    }   
}            
    
function startGame() {
    
    let boxes = document.querySelector(".wrapper-for-boxes");
    boxes.innerHTML = "";
    boxes.setAttribute("style", "background-image: none;");
    
    let containerBoxes = document.createElement("div");
    containerBoxes.setAttribute("class", "boxes");
    boxes.appendChild(containerBoxes);

    clickAreaResult();

    for (let i = 0; i < 18; i++) {
        let box = createBox(i + 1, "box_closed");
        containerBoxes.innerHTML += box;
    }
    let speaks01Flint = document.querySelector(".flint-speaks");
    let h2 = createElement("h2", "flint-speaks-wrapper", '<span>Captain Flint:</span> "What freshwater mollusks brought here, thunder beat me! Choose a treasure chest soon!"');
    speaks01Flint.appendChild(h2);

    rulesGame();

    let boxesArray = document.querySelectorAll(".box");
    boxesArray.forEach(function(element) {
        element.addEventListener("click", toСhooseBox);
    });
}

function rulesGame() {
    let speaks02Flint = document.querySelector(".rules-game");
    let h3 = createElement("h3", "wrapper-rules", 'Find the treasure chest. Use as few attempts as possible.');
    speaks02Flint.appendChild(h3);
}

let startBtn = startPage();
startBtn.addEventListener("click", startGame);