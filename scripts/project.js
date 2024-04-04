// ----------------------------------------------------------------------------------------
// Project must be a JavaScript application that is hosted and rendered by GitHub Pages. 
// Use an array method. -- .push, .pop, forEach, and .length are used in the program
// ----------------------------------------------------------------------------------------

var ingredient;
var formattedIngredient;
const recipesElement = document.getElementById('recipes');
let recipeList = [];

document.getElementById("ingredientForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const articles = recipesElement.querySelectorAll('article');
    articles.forEach(article => {
        article.remove();
    });
    recipeList = [];

    ingredient = document.getElementById("ingredient1").value;
    formattedIngredient = formatInput(ingredient);
    
    console.log(formattedIngredient);

    getRecipes()
});

function formatInput(inputString) {
    return inputString.toLowerCase().replace(/\s+/g, '_');
}

// -----------------------------------------------------------
// The project must consume external data using Fetch and where the data is delivered in JSON format be that through a third-party API or your own data source.
// Exclusively use template literals when building strings.
// -----------------------------------------------------------

const getRecipes = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${formattedIngredient}`);
    const ingredientData = await response.json();
    ingredientData.meals.forEach(recipe => {
        recipeList.push(recipe)
    });

    console.log(recipeList);
    const filter = document.getElementById('filtered').value;
    
    switch (filter) {
        case '1':
        while (recipeList.length > 1) {
            recipeList.pop();
        }
        displayRecipes(recipeList);
        break;

        case '2':
        while (recipeList.length > 2) {
            recipeList.pop();
        }
        displayRecipes(recipeList);
        break;

        case '3':
        while (recipeList.length > 3) {
            recipeList.pop();
        }
        displayRecipes(recipeList);
        break;
    
        case '4':
        while (recipeList.length > 4) {
            recipeList.pop();
        }
        displayRecipes(recipeList);
        break;
    
        case 'all':
        default:
        displayRecipes(recipeList);
        break;
    }
};

// -----------------------------------------------------
// Must interact with the DOM of an HTML document.
// -----------------------------------------------------

const displayRecipes = (recipes) => {
    recipes.forEach(recipe => {
        const articleElement = document.createElement('article');
  
        const h3Element = document.createElement('h3');
        h3Element.textContent = recipe.strMeal;
  
        const imgElement = document.createElement('img');
        imgElement.src = recipe.strMealThumb;
        imgElement.alt = recipe.idMeal;
  
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
  
        recipesElement.appendChild(articleElement);
    });
};
