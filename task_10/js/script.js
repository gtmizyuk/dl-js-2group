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
const messages = ["\nCongratulations!\nYou have found the treasure ", "\nThe treasure was in the case ", "attempts were used."];

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
    if (success == 1) {
        endGameSuccess = "Congratulations!";
    }
    let endMessage = createElement("h1", "end-game-message", endGameSuccess);
    gameEnd.appendChild(endMessage);

    if (success == 1) {
        let endMessage2 = createElement("h3", "end-game-message-2", "You found Captain Flint's treasure!");        
        gameEnd.appendChild(endMessage2);
        console.log("You found Captain Flint's treasure!");
    } else {
        let endMessage2 = createElement("h3", "end-game-message-2", "This time luck was not on your side!");        
        gameEnd.appendChild(endMessage2);
        console.log("This time luck was not on your side!");
    }

    let againGame  = createElement("a", "end-button", "Again?");
    againGame.setAttribute("href", "#");
    gameEnd.appendChild(againGame);

    againGame.addEventListener("click", reloadPageGameAgain);
}

// remove in elements by class any class
function removeInElementsByClassAnyClass(toСhooseElementClass, nameClassForRemove) {
    let allElements = Array.from(document.querySelectorAll(`.${toСhooseElementClass}`));
    allElements.forEach(node => {
        node.classList.remove(nameClassForRemove);
    });
}

function showDistanceToGold(distance) {
    let messageDistance = "";
    switch (distance) {
        case 0:
            messageDistance = "Touch the treasure!";
            console.log("Touch the treasure!");
            break;
        case 1:
        case 2:
            messageDistance = "The treasure is very close!";
            console.log("The treasure is very close!");
            break;
        case 3:
        case 4:
            messageDistance = "Treasure near!";
            console.log("Treasure near!");
            break;
        case 5:
        case 6:
            messageDistance = "Treasure close!";
            console.log("Treasure close!");
            break;
        case 7:
        case 8:
        case 9:
            messageDistance = "Treasure not far away!";
            console.log("Treasure not far away!");
            break;
        case 10:
        case 11:
        case 12:
        case 13:
            messageDistance = "Treasure far away!";
            console.log("Treasure far away!");
            break;    
        default:
            messageDistance = "Where is my rum?";
            console.log("Where is my rum?");
    }
    return messageDistance
}

function toСhooseBox(e) {

    let spanDistance = document.querySelector(".wrapper-rules span.distance");
    if (spanDistance) {
        spanDistance.textContent = "";
    }
    
    let goldBox = document.querySelector(`#box${computerBox}`);
    goldBox.classList.add("gold"); 

    let flagTreasure = -1;
    let flagLostTreasure = -2;
    
    let messageSuccess = pirateOutcry[getRandomInt(pirateOutcry.length)];
    let userBox = parseInt(e.currentTarget.id.slice(3), 10);
 
    if (attemptsCountCalc > 0) {
        clickCount += 1;
    }

    let clickCurrentCount = clickCount;
   
    displayClicks(clickCurrentCount);
  
    if (attemptsCountCalc > 1) {
        attemptsCountCalc -= 1;
        if (computerBox == userBox) {
            e.target.src = "./images/box_gold.png";
            console.log(computerBox, parseInt(e.currentTarget.id.slice(3), 10));
            console.log(messageSuccess + messages[0] + `for ${clickCurrentCount} attempts!`);
            flagTreasure = 1;
            attemptsCountCalc = -100;
        } else {
            e.target.src = "./images/box_opened.png";
            console.log(computerBox, parseInt(e.currentTarget.id.slice(3), 10));
            console.log("loser");

            let distance = Math.abs(computerBox - userBox);
            let distanceText = "";
            if (attemptsCountCalc > 0) {
                distanceText = showDistanceToGold(distance);
            }
            spanDistance.textContent = distanceText;
        }
    } else if (attemptsCountCalc == 1) {
        attemptsCountCalc = -101;
        if (computerBox == userBox) {
            e.target.src = "./images/box_gold.png";
            console.log(computerBox, parseInt(e.currentTarget.id.slice(3), 10));
            console.log(messageSuccess + messages[0] + `for ${clickCurrentCount} attempts!`);
            flagTreasure = 1;
        } else {
            e.target.src = "./images/box_opened.png";
            document.querySelector(`#box${computerBox} a img`).src = "./images/box_gold.png";
            console.log(computerBox, parseInt(e.currentTarget.id.slice(3), 10));
            console.log(messageSuccess + `\n${attemptsCount} ` + messages[2] + messages[1] + `${computerBox}!`);
            flagLostTreasure = 2;  
        }      
    }

    let result = document.querySelector(".rules-game");
    if (flagTreasure == 1){
        result.innerText = messageSuccess + messages[0] + `for ${clickCurrentCount} attempts!`;
        distanceCompleted();
    } else if (flagLostTreasure == 2) {
        result.innerText = messageSuccess + `\n${attemptsCount} ` + messages[2] + messages[1] + `${computerBox}!`;
        distanceCompleted();
    } 

    function distanceCompleted() {
        let addDistanceCompleted = document.querySelector(".rules-game");
        let spanDistanceCompleted = createElement("span", "distance-completed", "<!-- distance completed -->");
        addDistanceCompleted.appendChild(spanDistanceCompleted);
        spanDistanceCompleted.textContent = ` ${showDistanceToGold(0)}`;
    }

    function goToResultPage() {
        if (flagTreasure == 1){
            endGame(flagTreasure);
        } else if (flagLostTreasure == 2) {
            endGame(flagLostTreasure);
        }
    }

    let clickGoldBox = document.querySelector(".gold");
    clickGoldBox.addEventListener("click", goToResultPage);
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
    let h2 = createElement("h2", "flint-speaks-wrapper", '<span>Captain Flint:</span> "What freshwater mollusks brought here, thunder beat me! Choose a treasure case soon!"');
    speaks01Flint.appendChild(h2);

    rulesGame();

    let addDistance = document.querySelector(".wrapper-rules");
    let spanDistance = createElement("span", "distance", "<!-- distance -->");
    addDistance.appendChild(spanDistance);
    spanDistance.classList.add("distance");
    spanDistance.textContent = "";

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