var face = document.getElementsByClassName('face');


face[0].onmouseenter = function (){
    console.log('xxx')
    var hair = document.getElementsByClassName('hair')
    var eye = document.getElementsByClassName('eye-wrap')
    var nose = document.getElementsByClassName('nose')
    var mouth = document.getElementsByClassName('mouth-wrap')
    var ear = document.getElementsByClassName('ear-wrap')
    var earleft = document.getElementsByClassName('ear left')
    var earright = document.getElementsByClassName('ear right')
    var eyebottom = document.getElementsByClassName('eye-bottom')
    var facered = document.getElementsByClassName('face-red')
    var eyecore = document.getElementsByClassName('eye-core')
    var mouthleft = document.getElementsByClassName('mouth left')
    var mouthright = document.getElementsByClassName('mouth right')
    eyebottom[0].classList.add('translate-top')
    eyebottom[1].classList.add('translate-top')
    facered[0].classList.add('opac')
    facered[1].classList.add('opac')
    earleft[0].classList.add('rolateleft')
    earright[0].classList.add('rolateright')
    eyecore[0].classList.add('scale')
    eyecore[1].classList.add('scale')
    mouthleft[0].classList.add('mscalel')
    mouthright[0].classList.add('mscaler')
}
face[0].onmouseleave = function (){
    var hair = document.getElementsByClassName('hair')
    var eye = document.getElementsByClassName('eye-wrap')
    var nose = document.getElementsByClassName('nose')
    var mouth = document.getElementsByClassName('mouth-wrap')
    var ear = document.getElementsByClassName('ear-wrap')
    var earleft = document.getElementsByClassName('ear left')
    var earright = document.getElementsByClassName('ear right')
    var eyebottom = document.getElementsByClassName('eye-bottom')
    var facered = document.getElementsByClassName('face-red')
    var eyecore = document.getElementsByClassName('eye-core')
    var mouthleft = document.getElementsByClassName('mouth left')
    var mouthright = document.getElementsByClassName('mouth right')
    eyebottom[0].classList.remove('translate-top')
    eyebottom[1].classList.remove('translate-top')
    facered[0].classList.remove('opac')
    facered[1].classList.remove('opac')
    earleft[0].classList.remove('rolateleft')
    earright[0].classList.remove('rolateright')
    eyecore[0].classList.remove('scale')
    eyecore[1].classList.remove('scale')
    mouthleft[0].classList.remove('mscalel')
    mouthright[0].classList.remove('mscaler')
}