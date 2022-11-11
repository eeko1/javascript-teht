'use strict';

let kohde =  document.querySelector('#kohde')


let eka = parseInt(prompt("First number"));
let toka = parseInt(prompt("Second number"));
let kolmas = parseInt(prompt("Third number"));

let summa = eka + toka + kolmas
let tulo = eka * toka * kolmas
let keskiarvo = summa / 3

kohde.innerHTML = "summa = " + summa + " tulo = " + tulo + " keskiarvo = " + keskiarvo;