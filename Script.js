// JavaScript source code
let pages = ["homeContent", "menuContent", "aboutContent"]

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 7000);
}

function changeToHome() {
	//document.getElementById("sectionHeader").innerHTML = "Papa's Pizzeria";
	let currentPage = pages.indexOf("homeContent");
	let element = document.getElementById("homeContent");
	element.removeAttribute("hidden", "hidden");
	for (let i = 0; i < pages.length; i++) {
		if (i != currentPage) {
			element = document.getElementById(pages[i]);
			element.setAttribute("hidden", "hidden");
		}
	}
}

function changeToMenu() {
	//document.getElementById("sectionHeader").innerHTML = "Menu";
	let currentPage = pages.indexOf("menuContent");
	let element = document.getElementById("menuContent");
	element.removeAttribute("hidden", "hidden");
	for (let i = 0; i < pages.length; i++) {
		if (i != currentPage) {
			element = document.getElementById(pages[i]);
			element.setAttribute("hidden", "hidden");
		}
	}
}

function changeToAbout() {
	//document.getElementById("sectionHeader").innerHTML = "About Us";
	let currentPage = pages.indexOf("aboutContent");
	let element = document.getElementById("aboutContent");
	element.removeAttribute("hidden", "hidden");
	for (let i = 0; i < pages.length; i++) {
		if (i != currentPage) {
			element = document.getElementById(pages[i]);
			element.setAttribute("hidden", "hidden");
		}
	}
}