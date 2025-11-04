import { gsap } from "gsap";

const tabIndicator = document.querySelector(".indicator");
const tabs = document.querySelectorAll(".tab");
const activeTab = document.querySelector(".active");

tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		activeTab.classList.remove("active");
		tab.classList.add("active");
		gsap.to(tabIndicator, {
			x: tab.offsetLeft,
			width: tab.offsetWidth,
			duration: 0.5,
			ease: "back.out",
		});
	});
});