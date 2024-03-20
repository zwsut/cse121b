/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Zachariah Sutherland",
    photo: "images/cse.jpg",
    favoriteFoods: [
        'Dumplings',
        'Chocolate',
        'Birria',
        'Potatoes',
        'Mandarin Chicken'
    ],
    hobbies: [
        'Board Games',
        'Cooking',
        'Puzzles',
        'Reading'
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "New Hampshire",
        length: "1 Year"
    }
);
myProfile.placesLived.push(
    {
        place: "Connecticut",
        length: "25 Years"
    }
);
myProfile.placesLived.push(
    {
        place: "Massachusetts",
        length: "2 Years"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
const photo = document.getElementById('photo');
photo.src = myProfile.photo;
photo.alt = "Zach Sutherland"

/* Favorite Foods List*/
const ulFood = document.getElementById('favorite-foods');

myProfile.favoriteFoods.forEach(element => {
    const item = document.createElement('li');
    item.textContent = element;
    ulFood.appendChild(item);
});

/* Hobbies List */
const ulHobby = document.getElementById('hobbies');

myProfile.hobbies.forEach(element => {
    const item = document.createElement('li');
    item.textContent = element;
    ulHobby.appendChild(item);
});

/* Places Lived DataList */
const placesLived = document.getElementById('places-lived');

myProfile.placesLived.forEach(element => {
    const dt = document.createElement('dt');
    dt.textContent = element.place;

    const dd = document.createElement('dd');
    dd.textContent = element.length;

    placesLived.appendChild(dt);
    placesLived.appendChild(dd);
})