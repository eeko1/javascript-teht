'use strict'

let kohde = document.querySelector('#kohde')
let primenumber = true;
const number = parseInt(prompt("Type number:"));

if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            primenumber = false;
            break;
        }
    }

    if (primenumber) {
        kohde.innerHTML = "Number " + number + " is a prime number";
    } else {
        kohde.innerHTML = "Number " + number + " is not a prime number";
    }
}
else {
    kohde.innerHTML = "Number " + number + " is not a prime number";
}