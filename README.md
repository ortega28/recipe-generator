
https://pages.git.generalassemb.ly/ortegaa/recipe-generator/

# App Title: 

Recip-Ease Generator

file:///Users/alexortega/GA/project1/recipe-generator/index.html

# App Description: 

The user will have the option to input an ingredient of choice and the app will pull from an API of recipes and select then display all the recipes with that ingreident in it.
User will input an ingredient (chicken, steak, salmon, potatos, etc..) and the page will display all recipes with that main ingredient.

# API: 

https://www.themealdb.com/api.php


# API Snippet: 


https://www.themealdb.com/api/json/v1/1/filter.php?i=pork

https://www.themealdb.com/api/json/v1/1/lookup.php?i=52995

```
{
    "meals": [
        {
            "strMeal": "BBQ Pork Sloppy Joes with Pickled Onion & Sweet Potato Wedges",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/atd5sh1583188467.jpg",
            "idMeal": "52995"
        },
        {
            "strMeal": "Hot and Sour Soup",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/1529445893.jpg",
            "idMeal": "52954"
        },
        {
            "strMeal": "Pork Cassoulet",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/wxuvuv1511299147.jpg",
            "idMeal": "52847"
        },
        {
            "strMeal": "Skillet Apple Pork Chops with Roasted Sweet Potatoes & Zucchini",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/h3ijwo1581013377.jpg",
            "idMeal": "52994"
        },
        {
            "strMeal": "Snert (Dutch Split Pea Soup)",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/9ptx0a1565090843.jpg",
            "idMeal": "52981"
        },
        {
            "strMeal": "Sweet and Sour Pork",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/1529442316.jpg",
            "idMeal": "52949"
        },
        {
            "strMeal": "Vietnamese Grilled Pork (bun-thit-nuong)",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/qqwypw1504642429.jpg",
            "idMeal": "52828"
        },
        {
            "strMeal": "Wontons",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/1525876468.jpg",
            "idMeal": "52948"
        }
    ]
}
```


# Wireframes: 

## Desktop
<!-- https://app.diagrams.net/#G1cXtZlDyh2oefCTbe6kmqAu9uKeNs5DSI -->

https://imgur.com/a/zafkXao

## Mobile
<!-- https://wireframe.cc/pro/edit/330765 -->

https://imgur.com/a/NgbclGt

# MVP: 

1) Allow user to input into search
2) Find external API and use to find recipes
3) Render data on page below search


# Post-MVP: 

1) Have a "favorite" button or star image and saves the favorites in local storage
2) Add hover effects on recipes
3) Add picture transition effects / maybe change main image to change to recipe when recipe is clicked
4) Handle exception when the user inputs a value that does not exist

# Goals: 
|Day	       | Deliverable	                                        | Status     |
|--------------|:------------------------------------------------------:| ----------:|
|April 3rd	   | Project Prompt	                                        | Complete |
|April 4/5th   | Wireframes / Priority Matrix / Functional Components	| Complete |
|April 6th	   | Core Application Structure (HTML, CSS)	                | Complete |
|April 7th	   | Pseudocode / actual code (JS)                          | Complete |
|April 8th	   | Initial Clickable Model	 (retrieve from API/DOM)    | Complete |
|April 9th	   | MVP / Testing                                          | Complete |
|April 10th	   | Present	                                            | Complete |

# Priority Matrix: 

<!-- https://app.diagrams.net/#G1eahL1loI7Yy73Yxicmc9yj5gFxoKo2cn -->

https://imgur.com/a/nzGlxCZ

# Timeframes: 

| Component	        | Priority	| Estimated Time| Time Invested |  Actual Time  |
|-------------------|:---------:|:-------------:|:-------------:|--------------:|
| Project Prompt    |     M     |    3hrs       |    2.5hrs     |     2.5hrs    | 
| HTML              |     H     |    4hrs       |    2hrs       |     2hrs      |
| Design            |     M     |    2hrs       |    2hrs       |     2hrs      |
| Psuedocode        |     M     |    2hrs       |    3hrs       |     3hrs      |
| CSS               |     H     |    5hrs       |    5hrs       |     5hrs      |
| JS                |     H     |    4hrs       |    6hrs       |     6hrs      |
| Working with API	|     H	    |    4hrs       |    4hrs       |     4hrs      |
| Manipulate DOM    |     H     |    4hrs       |    5hrs       |     5hrs      |
| Testing           |     H     |    5hrs       |    5hrs       |     5hrs      |
| post MVP          |     L     |    ~~~~       |    ~~~~       |     ~~~~      |
| Total	            |     H	    |    33hrs      |	 34.5       |     34.5      |

# Code Snippet
```
let myImage = new Image(300, 300);
        
let recipeImage = recipeList.data.meals[i].strMealThumb;
myImage.src = recipeImage;
div.appendChild(myImage);
```
