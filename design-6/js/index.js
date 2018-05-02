var control = document.getElementsByClassName('control')

control[0].addEventListener('click', function(e) {
    console.log(e.target)
    var list = document.getElementsByClassName('radio')
    list = Array.prototype.slice.call(list)
    list.forEach(function(item) {
        item.classList.remove('clicked')
    });
    e.target.classList.add('clicked')
})
