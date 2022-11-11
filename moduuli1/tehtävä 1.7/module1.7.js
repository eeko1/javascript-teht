'use strict'
let kohde = document.querySelector("#kohde")


let diceamount = parseInt(prompt("How many dice you wanna throw?"))
let result = 0
for (let v = 0; v != diceamount; v++)
{
    let dicesum = Math.floor(Math.random()*6 ) + 1
    result = result + dicesum
}
kohde.innerHTML = "Dice throw result is: " + result;