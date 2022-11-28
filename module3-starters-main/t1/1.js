'use strict';
let target = document.querySelector('#target')
let items = []

for(let i = 0; i<3; i++){
    items[i] = prompt('Item: ');
}

let html = '<ul class="my-list">';
html += '<ol>';
for(let i = 0; i<3; i++){
    html += '<li>';
    html += items[i];
    html += '</li>';
}
html += '</ol></ul>';
target.innerHTML = html