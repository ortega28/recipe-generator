
const DOMAIN = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
const DOMAINTEXT = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";


const input = document.getElementById("search-ingredient");
const searchButton = document.getElementById("search-button");
const addRecipeToDom = document.getElementsByClassName('rendered-data');


async function getRecipeData(ingredient) {
    let recipeList = await axios.get(`${DOMAIN}${ingredient}`);

    console.log(recipeList.data);

    for (let i = 0; i < recipeList.data.meals.length; i++) {
        console.log(recipeList.data.meals[i].strMeal);
        //console.log(recipeList.data.meals[i].idMeal);

        let recipeListText = await axios.get(`${DOMAINTEXT}${recipeList.data.meals[i].idMeal}`);
        //console.log(recipeListText.data.meals[0].strInstructions);

        let div = document.createElement('div');
        //div.style.border = "2px solid black";
        div.style.backgroundColor = "#ABE5F6";
        div.style.border = "2px solid black";
        div.style.color = "white";
        //document.getElementsByClassName("rendered-data")[0].append(div);
        addRecipeToDom[0].append(div)

        let recipeName = recipeList.data.meals[i].strMeal;
        let showRecipeName = document.createElement('h2');
        showRecipeName.innerHTML = `Recipe Name: ${recipeName}`;
        div.append(showRecipeName);








        // const div = document.createElement('div');
        // div.style.border = "2px solid black";
        // document.getElementsByClassName('.rendered-data').append(div);
        //document.getElementsByClassName('.rendered-data').appendChild(div);

        // let recipeName = recipeList.data.meals[i].strMeal;
        // console.log(`${recipeName}-------------`);
        // let showRecipe = document.createElement('h2');
        // showRecipe.innerHTML = `Recipe: ${recipeName}`
        // div.append(showRecipe)
    }
}

function searchAPI() {
    let recipe = input.value;
    getRecipeData(recipe);
}

searchButton.addEventListener("click", searchAPI);

