/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Zach Sutherland";
let currentYear = "2024";
const profilePicture = "images/cse.jpg"

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFoods = ["Dumplings", "Chocolate", "Potatoes", "Birria"];
foodElement.textContent = favoriteFoods.join(", ");
let addedFood = "Mandarin Chicken";
favoriteFoods.push(addedFood);
foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;






