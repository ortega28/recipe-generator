// const DOMAIN = 'https://www.themealdb.com/api.php';
// const API_KEY = "pork" /* Your API key goes here */
// const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;

// const input = document.querySelector(".search-ingredient");
// const searchButton = document.querySelector(".search-button");

// // async function getMovieData(movieTitle) {
// //     let movies = await axios.get(`${BASE_URL}s=${movieTitle}`);
// //     console.log(movies.data);
// //     renderList(movies);
// //     //return movies;
// // }

// async function getRecipeData(recipe) {
//     let recipeList = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`);
//     console.log(recipeList.data);
// }

// function getRecipe() {
//     let recipe = input.value;
//     getRecipeData(recipe);
// }

// searchButton.addEventListener("click", getRecipe);


// function renderList(movieObjects) {
//     console.log(movieObjects);

//     // let movies = movieObjects

//     // movieObjects.forEach(element => {
//     //     let movie = document.createElement('p');
//     //     movie.className = 'movie-list';
//     //     document.body.appendChild(movie);
//     // });

// }

const DOMAIN = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
let API_KEY;

const input = document.getElementById("search-ingredient");
const searchButton = document.getElementById("search-button");
const addRecipeToDom = document.querySelector('.rendered-data');

async function getRecipeData(ingredient) {
    let recipeList = await axios.get(`${DOMAIN}${ingredient}`);
    let i = 0;
    console.log(recipeList.data);
    //console.log(recipeList.data.meals[i]);

    for (let i = 0; i < recipeList.data.meals.length; i++) {
        // console.log(recipeList.data.meals[i]);
        console.log(recipeList.data.meals[i].strMeal);
        //console.log(recipeList.data.meals[i].idMeal);
        console.log(`${DOMAIN}` + (recipeList.data.meals[i].idMeal));
    }


    // recipeList.forEach(i => {

    //     const div = document.createElement('div');
    //     div.style.border = "2px solid black";
    //     addRecipeToDom.append(div);


    // });


    // for (let i = 0; i < 5; i++) {
    //     // let newRecipe = document.createElement("p");
    //     // newRecipe.innerHTML = 

    //     document.querySelector(".rendered-list").appendChild()
    // }
}

function searchAPI() {
    let recipe = input.value;
    getRecipeData(recipe);
}

searchButton.addEventListener("click", searchAPI);

//getRecipeData("chicken_breast");