// JavaScript source code
let pages = ["homeContent", "menuContent", "aboutContent"];
let pizzaNames = ["Cheese pizza", "Hawaiian pizza", "Pepperoni pizza", "Supreme pizza"];
let pizzaImages = ["cheese pizza.png", "hawaiian pizza.png", "pepperoni pizza.png", "supreme pizza.png"];
let pizzaDesc = ["A simple delicious cheese pizza with tomato sauce.", "Our most popular pizza topped with pineapple and ham.", 
				"A classic pizza topped with slices of pepperoni.", "A delicious pizza topped with pepperoni, capsicum, mushrooms and olives."]

// Rotates the pizza images
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
    setTimeout(carousel, 3500); // timer on ~3.5 seconds
}

// Changes the current page to the home page
function changeToHome() {
	let currentPage = pages.indexOf("homeContent");
	let element = document.getElementById("homeContent");
	element.removeAttribute("hidden", "hidden"); // removes the hidden attribute from home content so that its visible
	for (let i = 0; i < pages.length; i++) { // runs through pages list and hides everything that is not on the home page content
		if (i != currentPage) {
			element = document.getElementById(pages[i]);
			element.setAttribute("hidden", "hidden");
		}
	}
}

// Changes the current page to the menu page
function changeToMenu() {
	let currentPage = pages.indexOf("menuContent");
	let element = document.getElementById("menuContent");
	const section = document.getElementById('menuSection');
	element.removeAttribute("hidden", "hidden");
	for (let i = 0; i < pages.length; i++) {
		if (i != currentPage) {
			element = document.getElementById(pages[i]);
			element.setAttribute("hidden", "hidden");
		}
	}
	getPizzas(section); // gets pizza content for menu page to display
}

// Changes the current page to the about page
function changeToAbout() {
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

// Gets the pizza names, descriptions and images to display on menu page
function getPizzas(section) {
	while (section.firstChild) { // removes all pizza content if the menu page has been opened before. prevents duplicates
		section.removeChild(section.firstChild);
	}
	for (let i = 0; i < pizzaNames.length; i++) {
		showPizza(pizzaNames[i], pizzaImages[i], pizzaDesc[i]); // sets up the pizza content
	}
}

// Uses the given variables to create a section about a pizza and displays it on the menu page
function showPizza(pizzaName, pizzaImage, pizzaDesc) {
	const name = document.createElement('p');
	const image = document.createElement('img');
	const description = document.createElement('p');
	const pizzaSection = document.createElement('section');
	const section = document.getElementById('menuSection');
	name.textContent = pizzaName;
	image.src = pizzaImage;
	image.setAttribute('width', '170');
	image.setAttribute('height', '150');
	description.textContent = pizzaDesc;
	section.appendChild(pizzaSection); // appends pizza content to the main menu page body
	pizzaSection.appendChild(image);
	pizzaSection.appendChild(name);
	pizzaSection.appendChild(description);
}