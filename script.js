
const DOMAIN = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
const DOMAINTEXT = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";


const input = document.getElementById("search-ingredient");
const searchButton = document.getElementById("search-button");
const addRecipeToDom = document.getElementsByClassName('rendered-data');


async function getRecipeData(ingredient) {
    //document.getElementsByClassName("rendered-data").innerHTML = "";
    document.querySelector(".rendered-data").innerHTML = "";
    let recipeList = await axios.get(`${DOMAIN}${ingredient}`);

    console.log(recipeList.data);

    for (let i = 0; i < recipeList.data.meals.length; i++) {
        console.log(recipeList.data.meals[i].strMeal);
        //console.log(recipeList.data.meals[i].idMeal);

        let recipeListText = await axios.get(`${DOMAINTEXT}${recipeList.data.meals[i].idMeal}`);
        //console.log(recipeListText.data.meals[0].strInstructions);

        let div = document.createElement('div');
        div.style.backgroundColor = "#ABE5F6";
        div.style.border = "2px solid black";
        //div.style.color = "white";
        //document.getElementsByClassName("rendered-data")[0].append(div);
        addRecipeToDom[0].append(div)

        let recipeName = recipeList.data.meals[i].strMeal;
        let showRecipeName = document.createElement('h3');
        showRecipeName.innerHTML = `${recipeName}`;
        div.append(showRecipeName);

        let myImage = new Image(300, 300);
        //myImage.src = 'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg';
        let recipeImage = recipeList.data.meals[i].strMealThumb;
        myImage.src = recipeImage;
        div.appendChild(myImage);

        let recipeInstructions = recipeListText.data.meals[0].strInstructions;
        let showRecipeInstructions = document.createElement('p');
        showRecipeInstructions.innerHTML = `${recipeInstructions}`;
        div.append(showRecipeInstructions);

    }
}

function searchAPI() {
    let recipe = input.value;
    getRecipeData(recipe);
}



searchButton.addEventListener("click", searchAPI);

