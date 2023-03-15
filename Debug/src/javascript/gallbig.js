let selid = (getid) => {
    const id = document.getElementById("xbutton")
    const element = document.getElementById(getid);
    const blackout = document.getElementById("yay");
    const changebig = () => {
        element.classList.add("imgactive")
        blackout.classList.add("yactive")
        id.classList.add("xactive")
    }
    changebig()
    const changesmall = () => {
        element.classList.remove("imgactive")
        blackout.classList.remove("yactive")
        id.classList.remove("xactive")
    }
    id.onclick = function() {changesmall()}
}