let tripleShieldExpand = (getElementID) => {
    const id = document.getElementById("exitButton")
    const element = document.getElementById(getElementID);
    const blackout = document.getElementById("yay");
    const changebig = () => {
        element.classList.add("imgActive")
        element.classList.remove("tripleShield")
        blackout.classList.add("foregroundFocusActive")
        id.classList.add("exitButtonActive")
    }
    changebig()
    const changesmall = () => {
        element.classList.remove("imgActive")
        element.classList.add("tripleShield")
        blackout.classList.remove("foregroundFocusActive")
        id.classList.remove("exitButtonActive")
    }
    id.onclick = function() {changesmall()}
}