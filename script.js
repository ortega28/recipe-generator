
const DOMAIN = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
const DOMAINTEXT = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";


const input = document.getElementById("search-ingredient");
const searchButton = document.getElementById("search-button");

async function getRecipeData(ingredient) {
    let recipeList = await axios.get(`${DOMAIN}${ingredient}`);

    console.log(recipeList.data);

    for (let i = 0; i < recipeList.data.meals.length; i++) {
        console.log(recipeList.data.meals[i].strMeal);
        //console.log(recipeList.data.meals[i].idMeal);

        let recipeListText = await axios.get(`${DOMAINTEXT}${recipeList.data.meals[i].idMeal}`);
        console.log(recipeListText.data.meals[0].strInstructions);

    }
}

function searchAPI() {
    let recipe = input.value;
    getRecipeData(recipe);
}

searchButton.addEventListener("click", searchAPI);

