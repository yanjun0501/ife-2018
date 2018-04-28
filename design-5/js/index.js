
var box = document.getElementsByClassName('box');

box[0].onmouseenter = function (){
    box[0].classList.add('change')
}
box[0].onmouseleave = function (){
    box[0].classList.remove('change')
}