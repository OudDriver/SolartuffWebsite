window.onscroll = function() {scrolltohide()};
const width = window.innerWidth
const solartuffTitle = document.getElementById("homeButton")
const translateButton = document.getElementById('translateButton')
const header = document.querySelector('header')

function changeFontSmallBS() {
    for (var i = 0; i < h.length; i++) {
        h[i].classList.add("activatedHeaderBS");
    }
    solartuffTitle.classList.add("activatedHeaderBS")
    translateButton.classList.add("activatedHeaderBS")
    header.classList.add("headerActivatedHeaderBS")
}

function changeFontBigBS() {
    for (var i = 0; i < h.length; i++) {
        h[i].classList.remove("activatedHeaderBS")
    }
    translateButton.classList.remove("activatedHeaderBS")
    solartuffTitle.classList.remove("activatedHeaderBS")
    header.classList.remove("headerActivatedHeaderBS")
}

function changeFontSmallSS() {
    for (var i = 0; i < h.length; i++) {
        h[i].classList.add("activatedHeaderSS");
    }
    solartuffTitle.classList.add("activatedHeaderSS")
    translateButton.classList.add("activatedHeaderSS")
    header.classList.add("headerActivatedHeaderSS")
}


function changeFontBigSS() {
    for (var i = 0; i < h.length; i++) {
        h[i].classList.remove("activatedHeaderSS")
    }
    translateButton.classList.remove("activatedHeaderSS")
    solartuffTitle.classList.remove("activatedHeaderSS")
    header.classList.remove("headerActivatedHeaderSS")
}

function scrolltohide() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        if (width < 734) {changeFontSmallSS()} else {changeFontSmallBS()}
    } else {
        if (width < 734) {changeFontBigSS()} else {changeFontBigBS()}
    }
}

