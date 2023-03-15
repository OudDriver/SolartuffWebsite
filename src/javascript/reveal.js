function scrollReveal() {
	var revealPoint = 70;
	var revealElement = document.querySelectorAll(".demo");
	for (var i = 0; i < revealElement.length; i++) {
		var windowHeight = window.innerHeight;
		var revealTop = revealElement[i].getBoundingClientRect().top;
		if (revealTop < windowHeight - revealPoint) {
			revealElement[i].classList.add("active");
			console.log("active")
		} else {
			revealElement[i].classList.remove("active");
			console.log("nonactive")
		}
	}
}

window.addEventListener("scroll", scrollReveal);
scrollReveal();
