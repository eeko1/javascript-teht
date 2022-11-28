'use strict';
function hoveringPic() {
    img.src = 'img/picB.jpg';
}
function notHovering() {
    img.src = 'img/picA.jpg';
}
let hover = document.getElementById('trigger');
let img =  document.getElementById("target");
hover.addEventListener('mouseover', hoveringPic);
hover.addEventListener('mouseout', notHovering);