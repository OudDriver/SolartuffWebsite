window.onscroll = function() {scrolltohide()};
const width = window.innerWidth

const header = document.getElementById("h1")
const kiwibird = document.getElementById('3dots')
const hw2 = document.getElementById('hw2')
const translatebutton = document.getElementById('translatebutton')


function changefontsmall() {
    
    for (var i = 0; i < h.length; i++) {
        h[i].style.fontSize = "15px";
    }
    header.style.fontSize = "18px";
    hw2.style.fontSize = "18px";
}

function changefontsmallsmall() {
    header.style.fontSize = "10px";
    kiwibird.style.width = "10px";
}

function changefontbig() {
    for (var i = 0; i < h.length; i++) {
        h[i].style.fontSize = "30px";
    }
    hw2.style.fontSize = "30px";
    header.style.fontSize = "32px";
}

function changefontbigsmall() {
    header.style.fontSize = "13px";
    kiwibird.style.width = "20px";
}

function scrolltohide() {
     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        if (width < 725) {
            changefontsmallsmall()
        } else {
            changefontsmall()
        }
     } else {
         if (width < 725) {
             changefontbigsmall()
         } else {
            changefontbig()
         }
     }
}

