'use strict'

let kohde = document.querySelector(  "#kohde")

let v = parseInt(prompt("Anna vuosiluku"));

if ((v % 4 == 0 && v % 100 != 0) || (v % 400 == 0))
{
    kohde.innerHTML = "vuosi on karkausvuosi";
}
else
{
    kohde.innerHTML = "vuosi ei ole karkausvuosi";
}