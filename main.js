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
	console.log("wut", isOpen, nav.classList);
	isOpen ? nav.classList.remove("open") : nav.classList.add("open");
};

const toggleNav = () => {
	console.log("toggle", isOpen);
	toggleScroll();
	toggleOpenState();
	setIsOpen(!isOpen);
};

const init = () => {
	console.log("hi");
	hamburger.addEventListener("click", toggleNav);
	closeButton.addEventListener("click", toggleNav);
};

init();
