var bt = document.getElementById('changeStyle');
var text = document.getElementsByClassName('line')
var title = document.getElementsByClassName('label')

console.log(bt)
var count = 0;
bt.onclick = function (){
    console.log(text[0])
    if (count === 0) {
        text[0].classList.add('trans');
        title[0].classList.add('title');
        count = 1
    } else {
        text[0].classList.remove('trans');
        title[0].classList.remove('title');
        count = 0
    }

}