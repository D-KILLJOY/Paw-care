const navBtn = document.querySelector(".nav-btn");
const nav = document.querySelector(".navigation");
const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");

navBtn.addEventListener("click", () => {
	nav.classList.toggle("show-nav");
	document.body.classList.toggle("lock-scroll");

	if (nav.classList.contains("show-nav")) {
		menuBtn.style.display = "none";
		closeBtn.style.display = "block";
	} else {
		menuBtn.style.display = "block";
		closeBtn.style.display = "none";
	}
});

document.addEventListener("click", (e) => {
	if (e.target.classList.contains("nv")) {
		nav.classList.remove("show-nav");
		document.body.classList.remove("lock-scroll");

		menuBtn.style.display = "block";
		closeBtn.style.display = "none";
	}
});
