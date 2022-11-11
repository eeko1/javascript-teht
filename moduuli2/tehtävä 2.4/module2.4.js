"use strict";

let kohde = document.querySelector('#kohde')
let number_list = []
let number = parseInt(prompt("Insert number. (Writing number 0 will close the program)"))
for(let i = 0; number != 0; i++){
    number = parseInt(prompt("Insert number. (Writing number 0 will close the program.)"))
    if(number != 0){
    number_list[i] = number
    }
}
let sorted_numbers = number_list.sort()
let r_sorted_numbers = sorted_numbers.reverse()
console.log(r_sorted_numbers)

