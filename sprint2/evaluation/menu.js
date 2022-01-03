let menu_div = document.getElementById("foodMenu");

let mealsData = JSON.parse(localStorage.getItem("mealItems")) || [];

var cartItems =JSON.parse(localStorage.getItem("cartItems")) || [];
// console.log(cartItems.length);57
document.getElementById("count").textContent = cartItems.length;

let url = "https://www.themealdb.com/api/json/v1/1/categories.php";

async function getmeal()
{
    try{

      let res = await fetch(url);

      let data = await res.json();
      let meals = data.categories;
      addMeals(meals);
    //   console.log(meals)

      mealsData.push(meals);
      localStorage.setItem("mealItems",JSON.stringify(meals));
    //   console.log(mealsData)

    }
    catch (err){
        console.log("err:",err);
    }
}

getmeal();


function addMeals(arr)
{
    arr.map(function (meal){

        let div = document.createElement("div")
        div.className ="items";



        let img = document.createElement("img");
        img.src = meal.strCategoryThumb;

        let price = document.createElement("p");
        price.textContent = Math.round(Math.random()*(500 - 100)+ 100);

        let button = document.createElement("button");
        button.textContent = "Add to Cart";
        button.addEventListener("click",function(){

            // console.log(meal);
            addToCart(meal);

        })

        div.append(img, price, button);

        document.getElementById("foodMenu").append(div);

    })
};

function addToCart(meal)
{
    // cartItems.push(meal);
    localStorage.setItem("cartItems",JSON.stringify(meal));
    console.log(meal);
}