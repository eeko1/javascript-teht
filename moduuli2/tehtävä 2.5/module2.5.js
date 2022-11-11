"use strict";

let kohde = document.querySelector('#kohde')
let number_list = []

for(let i = 0; true ; i++){
    let number = parseInt(prompt("Type number that you haven't typen yet "))
    if (number_list.includes(number)){
        break
    }else{
        number_list[i] = number
    }
}
kohde.innerHTML = ('You already typed that number ')
let sorted_list = number_list.sort(function (a, b){return a-b});
console.log(sorted_list)