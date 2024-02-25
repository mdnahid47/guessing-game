let totalAttempts = 5;
let attempts = 0;
let totalWon = 0;
let totalLost = 0;




const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = document.querySelector("#guessingNumber");
const checkButton = document.querySelector("#btn");
const resultText = document.querySelector(".resulttext");
const remainingAttempts = document.querySelector(".remainAttempts");
const lostWon = document.createElement("p");

form.addEventListener("submit",function(event){
    event.preventDefault();
    attempts++;
    if(attempts===6){
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }
    if(attempts<6){
        let guessNumber = Number(guessingNumber.value);
        checkResult(guessNumber);
        remainingAttempts.innerHTML = `Remaining Attempts: ${totalAttempts-attempts}`;
    }

    guessingNumber.value ="";
});

function checkResult(guessingNumber){
    const randomNumber = getrandomNumber(5);

    if(guessingNumber === randomNumber){
        resultText.innerHTML = `you have won`
        totalWon++;
    }
    else{
        resultText.innerHTML = `you have lost ; random number was: ${randomNumber}`;
        totalLost++;
    }
    lostWon.innerHTML = `Won : ${totalWon}.Lost : ${totalLost}`;
    lostWon.classList.add(".large-text");
    cardBody.appendChild(lostWon);
};

function getrandomNumber(limit){
    return Math.floor(Math.random()*limit) + 1;
};

