const h = document.querySelectorAll('.hw')
const dots = document.getElementById('3dots');
const fillbackground = document.getElementById('fillbackground');

const hide = () => {
    for (var i = 0; i < h.length; i++) {
        h[i].remove();
    }
}

const show = () => {
    for (var i = 0; i < h.length; i++) {
        h[i].classList.remove('hidden');
    }
}

if (width < 734) {
    dots.classList.add('d3active');
    hide();
    dots.onclick = function(){
        fillbackgroundactivetoggle();
    };
} else {
    dots.classList.remove('d3active');
}

const fillbackgroundactivetoggle = () => {
    fillbackground.classList.toggle('fullscreensmallactive');
}