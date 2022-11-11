'use strict'

let nimi = prompt( "What is your name?");
let kohde = document.querySelector(  "#kohde")

let result = Math.floor(Math.random() * 4) + 1;
{
if (result === 1)
    kohde.innerHTML = nimi + " you are Gryffindor!";

else if  (result === 2)
    kohde.innerHTML = nimi + " you are Slytherin!";

else if (result === 3)
    kohde.innerHTML = nimi + " you are Hufflepuff!";

else if (result === 4)
    kohde.innerHTML = nimi  + " you are Ravenclaw!";
}


