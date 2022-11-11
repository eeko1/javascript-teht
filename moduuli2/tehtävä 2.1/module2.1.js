"use strict";

let kohde = document.querySelector(  "#kohde")

let numbers = [];

for (let i = 0; i < 5; i++)
{
    numbers[i] = (prompt("Type number: " + (i + 1)));
}

for (let i = 0; i < 5; i++)
{
    console.log(numbers[4 - i]);
}
/*
for (let i = 4; i >= 0; i--)
{
    console.log(numbers);
}
 */


