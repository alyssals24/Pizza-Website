// JavaScript source code
let pages = ["homeContent", "menuContent", "aboutContent"];
let pizzaNames = ["Cheese pizza", "Hawaiian pizza", "Pepperoni pizza", "Supreme pizza"];
let pizzaImages = ["cheese pizza.png", "hawaiian pizza.png", "pepperoni pizza.png", "supreme pizza.png"];
let pizzaDesc = ["A simple delicious cheese pizza with tomato sauce.", "Our most popular pizza topped with pineapple and ham.", 
				"A classic pizza topped with slices of pepperoni.", "A delicious pizza topped with pepperoni, capsicum, mushrooms and olives."]

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
    setTimeout(carousel, 3500);
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
	const section = document.getElementById('menuSection');
	element.removeAttribute("hidden", "hidden");
	for (let i = 0; i < pages.length; i++) {
		if (i != currentPage) {
			element = document.getElementById(pages[i]);
			element.setAttribute("hidden", "hidden");
		}
	}
	getPizzas(section);
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

function getPizzas(section) {
	while (section.firstChild) {
		section.removeChild(section.firstChild);
	}
	for (let i = 0; i < pizzaNames.length; i++) {
		showPizza(pizzaNames[i], pizzaImages[i], pizzaDesc[i]);
	}
}

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
	description.setAttribute('font-size', '96px');
	section.appendChild(pizzaSection);
	pizzaSection.appendChild(image);
	pizzaSection.appendChild(name);
	pizzaSection.appendChild(description);
}