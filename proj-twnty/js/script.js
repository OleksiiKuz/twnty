let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})


const scrollMenu = function (e) {
	let element = document.querySelector(".header");
	let scrollTop = window.scrollY;

	if (scrollTop > 200) {
		element.classList.add("active");
	} else {
		element.classList.remove("active");
	}
};

document.addEventListener("scroll", scrollMenu);