console.log("Microphone test 1 2 3")

/* alert ("Watch out! Fluffy red goats are on their way!")

document.write(" I'm printing a fluffy red goat... <br>")
document.write(" I'm printing a fluffy red goat... <br>")
document.write(" I'm printing a fluffy red goat... <br>")
document.write(" I'm printing a fluffy red goat... <br>") */

var kaisa = "Heebahoobahoo <br><br><br>"
document.write(kaisa)

var num1 = 4
var num2 = 2;
num1++

console.log(num1 + num2)


/* function Congrats (){
    console.log("Starting alert!")
    alert("Welcome to the website!")
    console.log("Ending alert!")
}

Congrats() */


/* Alerts under button click */

function ShowCurtain(CurtainNumber, prize) {

    alert("You opened curtain number " + CurtainNumber + ". You won " + prize)

}

/* Basic addition function */

function BasicAddition(num3, num4) {
    return num3 + num4
}
const result = BasicAddition(1, 2)
console.log(result)

/* Functions within a function */

function GoodNight() {
    console.log("Good Night!")
}

function GoodMorning() {
    console.log("Good Morning!")
}

function Start() {
    GoodMorning()
    GoodNight()
}

Start()
 

/* IF CONDITION
if(CONDITION){
     CODE TO EXECUTE 
} */

const num5 = 3
const num6 = 2

if (num5 >= num6){
    console.log("Oehh... -.-*")
}

/* ELSE IF */
function ChoppingBanana (){
    console.log("I'm chopping a bananannana...")
}
function ChoppingCherry (){
    console.log("I'm chopping a cherry...")
}
function ChoppingPineapple (){
    console.log("I'm chopping a pineapple...")
}
const fruit = "cherry"


if ( fruit == "banana" ){
    ChoppingBanana()
} else if( fruit == "cherry"){
    ChoppingCherry()
} else if(fruit == "pineapple"){
    ChoppingPineapple()
}else{
    console.log("I'm chopping nothing!")
}


/* SWITCH - The Vending Pending Machine*/

function VendingPendingMachine (pendingTime) {
    switch(pendingTime) {
        case 1:
            // case for #1
            PendingMessage(pendingTime)
        break;
        case 2:
            // case for #2
            PendingMessage(pendingTime)
        break;
        case 3:
            // case for #3
            PendingMessage(pendingTime)
        break;
        case 4:
            // case for #4
            PendingMessage(pendingTime)
        break;
        default:
            // case for the rest of the buttons
            PendingMessage(pendingTime)
        break;
        
    }
}

function PendingMessage(time){
    alert("The Vending Pending Machine says you have to wait " + time + " minutes!")
}


/* FOR LOOP */

/* for (RESET COUNTER;WHILE ITS TRUE;COUNTER INCREMENT) */

const loopNum = 6
const text = "I will do my homework each and every time! <br>"
function WriteLineMachine(lineText){
    for(i=0;i<loopNum;i++){
        Write(lineText)
    }
}

function Write(lineText){
    document.write(lineText)
}

function StartMachine(lineText){
    WriteLineMachine(lineText)
}

StartMachine(text)

/* ARRAYS */
/* array(0, 1, 2, 3) */
const names = new Array("Kaisa", "Kati", "Liilia", "Odin")

console.log(names)
names[3] = "Shiva"
console.log(names)

/* Add to the end */
names.push("Feral", "Mari")
console.log(names)

names.sort()
console.log(names)

names.reverse()
console.log(names)

/* PASSWORD CHECK */

function checkValidation() {
    const password = document.getElementById("password").value
    if(password != "1234"){
        alert("Caution! Password is Incorrect!")
    }else {
        /* SUCCESS */

        let y = document.getElementById("sendItem")
        y.className += "leftTrans"

    }
}