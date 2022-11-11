"use strict";
let kohde = document.querySelector("#kohde");

// Kysytään osallistujien määrä
let people_amount = parseInt(prompt("How many participants?"));
let participants = [];


// Kirjoitetaan osallistujien nimet
for (let i = 0; i < people_amount; i++)
{
    participants[i] = prompt("Write participant name ");
}

// Generoidaan mhtl-lista osallistujien nimistä
let html = "<ol>";
for (let i = 0; i < people_amount; i++)
{
    html += "<li>";
    html += participants[i];
    html += "</li>"
}
html += "</ol>"
console.log(html)
kohde.innerHTML = html