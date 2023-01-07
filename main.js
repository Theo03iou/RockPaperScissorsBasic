let choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
        let compChoice = choices[randomNum];
        return compChoice;

}


const myForm = document.querySelector('#my-form')
const userchoice = document.querySelector('#userText')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)


function onSubmit(e) {
    e.preventDefault();
    const li = document.createElement('li');

    if (userchoice.value.toLowerCase() == compChoice) {
        console.log("TIE")
        li.appendChild(document.createTextNode("TIE"));
        userList.appendChild(li);

    } else if (userchoice.value.toLowerCase() === "rock" && compChoice == "scissors"){
        console.log("Player wins!");
        li.appendChild(document.createTextNode("PLAYER WINS"));
        userList.appendChild(li);

    } else if (userchoice.value.toLowerCase() === "paper" && compChoice == "rock"){
        console.log("Player wins!");
        li.appendChild(document.createTextNode("PLAYER WINS"));
        userList.appendChild(li);

    } else if (userchoice.value.toLowerCase() === "scissors" && compChoice == "paper"){
        console.log("Player wins!");
        li.appendChild(document.createTextNode("PLAYER WINS"));
        userList.appendChild(li);
        
    } else {
        console.log("Computer wins!")
        li.appendChild(document.createTextNode("COMPUTER WINS"));
        userList.appendChild(li);
    }

}

// function getUserChoice() {
//     let userChoice = prompt("Pick between Rock, Paper or Scissors")
//     return userChoice.toLowerCase();
// }

let compChoice = getComputerChoice();
console.log(compChoice);

// let userChoice = getUserChoice();
// console.log(userChoice)



// function compare() {
//     if (userChoice === compChoice) {
//         console.log("TIE")
//     } else if (userChoice === "rock" && compChoice == "scissors"){
//         console.log("Player wins!");
//     } else if (userChoice === "paper" && compChoice == "rock"){
//         console.log("Player wins!");
//     } else if (userChoice === "scissors" && compChoice == "paper"){
//         console.log("Player wins!");
//     } else {
//         console.log("Computer wins!")
//     }
// }


// compare()

// // for (let i = 0; i < 1; i++) {
//     let randomNum = Math.floor(Math.random() * 2);
//     let compChoice = choices[randomNum];
//     return compChoice;
// }