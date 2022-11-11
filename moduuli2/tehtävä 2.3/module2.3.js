"use strict";


let kohde = document.querySelector('#kohde')
let amount_of_dogs = 6
let list = []
for(let i = 0; i < amount_of_dogs; i++){
    list[i]= prompt("Insert dog name")

}
let sorted_dogs = list.sort()
let r_sorted_dogs = sorted_dogs.reverse()

let html = '<ol>';
for(let i = 0; i < 6; i++){
    html += '<li>';
    html += r_sorted_dogs[i];
    html += '</li>';
}
html += '</ol>';
kohde.innerHTML = html