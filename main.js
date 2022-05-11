const body = document.querySelector("body");
const nav = document.querySelector(".main-nav");
const hamburger = document.querySelector(".hamburger");
const closeButton = document.querySelector(".close-button");

let isOpen = false;

const setIsOpen = (bool) => (isOpen = bool);

const toggleScroll = () => {
	isOpen
		? body.classList.remove("disable-scroll")
		: body.classList.add("disable-scroll");
};

const toggleOpenState = () => {
	const scrollOffset = window.scrollY;

	nav.style.transform = isOpen
		? `translateY(0)`
		: `translateY(calc(100vh + ${scrollOffset}px))`;
};

const toggleNav = () => {
	toggleScroll();
	toggleOpenState();
	setIsOpen(!isOpen);
};

const init = () => {
	hamburger.addEventListener("click", toggleNav);
	closeButton.addEventListener("click", toggleNav);
};

init();
