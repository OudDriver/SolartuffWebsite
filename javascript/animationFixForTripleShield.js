// Function to add the "hover" class and start the hover animation
const trishElement = document.querySelector('.tripleShield');
const exitButton = document.getElementById('exitButton');

function noAnimationTrigger() {
    trishElement.classList.add('removeTransition');
    setTimeout(() => {
        trishElement.classList.remove('removeTransition');
    }, 1)
}

exitButton.addEventListener('click', noAnimationTrigger);
