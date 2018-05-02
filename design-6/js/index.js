var control = document.getElementsByClassName('control')

control[0].addEventListener('click', function(e) {
    // console.log(e.target)
    var list = document.getElementsByClassName('radio')
    list = Array.prototype.slice.call(list)
    list.forEach(function(item) {
        item.classList.remove('checked')
    });
    var wheel = document.getElementsByClassName('wheel')
    wheel = Array.prototype.slice.call(wheel)
    wheel.forEach(function(item) {
        item.classList.remove('clicked')
    });
    e.target.classList.add('checked')
    // document.getElementById(e.)
    document.getElementsByClassName('wheel')[e.target.id - 1].classList.add('clicked')
    // wheel = Array.prototype.slice.call(wheel)
})
