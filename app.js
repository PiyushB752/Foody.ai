const searchButton = document.getElementById("search")
searchButton.addEventListener("click",()=>{
    window.location.href = "./search.html"
})

function randomMealExtraction(){
    axios.get("https://www.themealdb.com/api/json/v1/1/random.php").then((info)=>{
    const food_list = info.data.meals
    food_list.forEach((items)=>{
        const randomImgMeal = document.getElementById("randomMealTime")
        randomImgMeal.setAttribute("src",items.strMealThumb)
        const mealName = document.getElementById("randomMealName")
        mealName.textContent = items.strMeal;   
    })
    })
}
randomMealExtraction()


function categoryDish1() {
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52771").then((data) => {
        const food_data1 = data.data.meals;
        food_data1.forEach((info) => {
            const category1 = document.getElementById("cn1");
            category1.textContent = info.strCategory;
            const imgCategory1 = document.getElementById("c1");
            imgCategory1.setAttribute("src", info.strMealThumb);
        });
    });
}
categoryDish1();

function categoryDish2() {
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52770").then((data) => {
        const food_data2 = data.data.meals;
        food_data2.forEach((info) => {
            const category2 = document.getElementById("cn2");
            category2.textContent = info.strCategory;
            const imgCategory2 = document.getElementById("c2");
            imgCategory2.setAttribute("src", info.strMealThumb);
        });
    });
}
categoryDish2();

function categoryDish3() {
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52769").then((data) => {
        const food_data3 = data.data.meals;
        food_data3.forEach((info) => {
            const category3 = document.getElementById("cn3");
            category3.textContent = info.strCategory;
            const imgCategory3 = document.getElementById("c3");
            imgCategory3.setAttribute("src", info.strMealThumb);
        });
    });
}
categoryDish3();

function categoryDish4() {
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52768").then((data) => {
        const food_data4 = data.data.meals;
        food_data4.forEach((info) => {
            const category4 = document.getElementById("cn4");
            category4.textContent = info.strCategory;
            const imgCategory4 = document.getElementById("c4");
            imgCategory4.setAttribute("src", info.strMealThumb);
        });
    });
}
categoryDish4();

function categoryDish5() {
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52765").then((data) => {
        const food_data5 = data.data.meals;
        food_data5.forEach((info) => {
            const category5 = document.getElementById("cn5");
            category5.textContent = info.strCategory;
            const imgCategory5 = document.getElementById("c5");
            imgCategory5.setAttribute("src", info.strMealThumb);
        });
    });
}
categoryDish5();

function categoryDish6() {
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52764").then((data) => {
        const food_data6 = data.data.meals;
        food_data6.forEach((info) => {
            const category6 = document.getElementById("cn6");
            category6.textContent = info.strCategory;
            const imgCategory6 = document.getElementById("c6");
            imgCategory6.setAttribute("src", info.strMealThumb);
        });
    });
}
categoryDish6()


function freshAdd1(){
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772").then((info)=>{
    const food_info1 = info.data.meals
    food_info1.forEach((info)=>{
        const mealName1 = document.getElementById("n1")
        mealName1.textContent = info.strMeal
        const mealImg1 = document.getElementById("g1")
        g1.setAttribute("src",info.strMealThumb)
    })
    })
}
freshAdd1()

function freshAdd2(){
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52773").then((info)=>{
    const food_info2 = info.data.meals
    food_info2.forEach((info)=>{
        const mealName2 = document.getElementById("n2")
        mealName2.textContent = info.strMeal
        const mealImg2 = document.getElementById("g2")
        g2.setAttribute("src",info.strMealThumb)
    })
    })
}
freshAdd2()

function freshAdd3(){
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52774").then((info)=>{
    const food_info3 = info.data.meals
    food_info3.forEach((info)=>{
        const mealName3 = document.getElementById("n3")
        mealName3.textContent = info.strMeal
        const mealImg3 = document.getElementById("g3")
        g3.setAttribute("src",info.strMealThumb)
    })
    })
}
freshAdd3()

function freshAdd4(){
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52775").then((info)=>{
    const food_info4 = info.data.meals
    food_info4.forEach((info)=>{
        const mealName4 = document.getElementById("n4")
        mealName4.textContent = info.strMeal
        const mealImg4 = document.getElementById("g4")
        g4.setAttribute("src",info.strMealThumb)
    })
    })
}
freshAdd4()

function freshAdd5(){
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52776").then((info)=>{
    const food_info5 = info.data.meals
    food_info5.forEach((info)=>{
        const mealName5 = document.getElementById("n5")
        mealName5.textContent = info.strMeal
        const mealImg5 = document.getElementById("g5")
        g5.setAttribute("src",info.strMealThumb)
    })
    })
}
freshAdd5()

function freshAdd6(){
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52779").then((info)=>{
    const food_info6 = info.data.meals
    food_info6.forEach((info)=>{
        const mealName5 = document.getElementById("n6")
        mealName5.textContent = info.strMeal
        const mealImg6 = document.getElementById("g6")
        g6.setAttribute("src",info.strMealThumb)
    })
    })
}
freshAdd6()


const img01 = document.getElementById("img01")
const img02 = document.getElementById("img02")
const img03 = document.getElementById("img03")
const img04 = document.getElementById("img04")
const img05 = document.getElementById("img05")
const img06 = document.getElementById("img06")

img01.addEventListener("click", () => {
    document.getElementById("ingredientsList").innerHTML = "";
    document.getElementById("modal").style.display = "inline";
    document.getElementById("maincontent").style.display = "inline";
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52771").then((data) => {
        const meal = data.data.meals[0];
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient || measure) {
                document.getElementById("ingredientsList").innerHTML += `<li>${measure} ${ingredient}</li>`;
            }
        }
        const imgval1 = document.getElementById("source");
        imgval1.setAttribute("src", meal.strMealThumb);
    });
    document.getElementById("modal").addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
        document.getElementById("maincontent").style.display = "none";
    });
});

img02.addEventListener("click", () => {
    document.getElementById("ingredientsList").innerHTML = "";
    document.getElementById("modal").style.display = "inline";
    document.getElementById("maincontent").style.display = "inline";
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52770").then((data) => {
        const meal = data.data.meals[0];
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient || measure) {
                document.getElementById("ingredientsList").innerHTML += `<li>${measure} ${ingredient}</li>`;
            }
        }
        const imgval1 = document.getElementById("source");
        imgval1.setAttribute("src", meal.strMealThumb);
    });
    document.getElementById("modal").addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
        document.getElementById("maincontent").style.display = "none";
    });
});

img03.addEventListener("click", () => {
    document.getElementById("ingredientsList").innerHTML = "";
    document.getElementById("modal").style.display = "inline";
    document.getElementById("maincontent").style.display = "inline";
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52769").then((data) => {
        const meal = data.data.meals[0];
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient || measure) {
                document.getElementById("ingredientsList").innerHTML += `<li>${measure} ${ingredient}</li>`;
            }
        }
        const imgval1 = document.getElementById("source");
        imgval1.setAttribute("src", meal.strMealThumb);
    });
    document.getElementById("modal").addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
        document.getElementById("maincontent").style.display = "none";
    });
});

img04.addEventListener("click", () => {
    document.getElementById("ingredientsList").innerHTML = "";
    document.getElementById("modal").style.display = "inline";
    document.getElementById("maincontent").style.display = "inline";
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52768").then((data) => {
        const meal = data.data.meals[0];
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient || measure) {
                document.getElementById("ingredientsList").innerHTML += `<li>${measure} ${ingredient}</li>`;
            }
        }
        const imgval1 = document.getElementById("source");
        imgval1.setAttribute("src", meal.strMealThumb);
    });
    document.getElementById("modal").addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
        document.getElementById("maincontent").style.display = "none";
    });
});

img05.addEventListener("click", () => {
    document.getElementById("ingredientsList").innerHTML = "";
    document.getElementById("modal").style.display = "inline";
    document.getElementById("maincontent").style.display = "inline";
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52765").then((data) => {
        const meal = data.data.meals[0];
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient || measure) {
                document.getElementById("ingredientsList").innerHTML += `<li>${measure} ${ingredient}</li>`;
            }
        }
        const imgval1 = document.getElementById("source");
        imgval1.setAttribute("src", meal.strMealThumb);
    });
    document.getElementById("modal").addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
        document.getElementById("maincontent").style.display = "none";
    });
});

img06.addEventListener("click", () => {
    document.getElementById("ingredientsList").innerHTML = "";
    document.getElementById("modal").style.display = "inline";
    document.getElementById("maincontent").style.display = "inline";
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52764").then((data) => {
        const meal = data.data.meals[0];
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient || measure) {
                document.getElementById("ingredientsList").innerHTML += `<li>${measure} ${ingredient}</li>`;
            }
        }
        const imgval1 = document.getElementById("source");
        imgval1.setAttribute("src", meal.strMealThumb);
    });
    document.getElementById("modal").addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
        document.getElementById("maincontent").style.display = "none";
    });
});


const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const img4 = document.getElementById("img4")
const img5 = document.getElementById("img5")
const img6 = document.getElementById("img6")

img1.addEventListener("click", () => {
    document.getElementById("ingredientsList").innerHTML = "";
    document.getElementById("modal").style.display = "inline";
    document.getElementById("maincontent").style.display = "inline";
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772").then((data) => {
        const meal = data.data.meals[0];
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient || measure) {
                document.getElementById("ingredientsList").innerHTML += `<li>${measure} ${ingredient}</li>`;
            }
        }
        const imgval1 = document.getElementById("source");
        imgval1.setAttribute("src", meal.strMealThumb);
    });
    document.getElementById("modal").addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
        document.getElementById("maincontent").style.display = "none";
    });
});

img2.addEventListener("click", () => {
    document.getElementById("ingredientsList").innerHTML = "";
    document.getElementById("modal").style.display = "inline";
    document.getElementById("maincontent").style.display = "inline";
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52773").then((data) => {
        const meal = data.data.meals[0];
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient || measure) {
                document.getElementById("ingredientsList").innerHTML += `<li>${measure} ${ingredient}</li>`;
            }
        }
        const imgval1 = document.getElementById("source");
        imgval1.setAttribute("src", meal.strMealThumb);
    });
    document.getElementById("modal").addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
        document.getElementById("maincontent").style.display = "none";
    });
});

img3.addEventListener("click", () => {
    document.getElementById("ingredientsList").innerHTML = "";
    document.getElementById("modal").style.display = "inline";
    document.getElementById("maincontent").style.display = "inline";
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52774").then((data) => {
        const meal = data.data.meals[0];
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient || measure) {
                document.getElementById("ingredientsList").innerHTML += `<li>${measure} ${ingredient}</li>`;
            }
        }
        const imgval1 = document.getElementById("source");
        imgval1.setAttribute("src", meal.strMealThumb);
    });
    document.getElementById("modal").addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
        document.getElementById("maincontent").style.display = "none";
    });
});

img4.addEventListener("click", () => {
    document.getElementById("ingredientsList").innerHTML = "";
    document.getElementById("modal").style.display = "inline";
    document.getElementById("maincontent").style.display = "inline";
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52775").then((data) => {
        const meal = data.data.meals[0];
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient || measure) {
                document.getElementById("ingredientsList").innerHTML += `<li>${measure} ${ingredient}</li>`;
            }
        }
        const imgval1 = document.getElementById("source");
        imgval1.setAttribute("src", meal.strMealThumb);
    });
    document.getElementById("modal").addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
        document.getElementById("maincontent").style.display = "none";
    });
});

img5.addEventListener("click", () => {
    document.getElementById("ingredientsList").innerHTML = "";
    document.getElementById("modal").style.display = "inline";
    document.getElementById("maincontent").style.display = "inline";
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52776").then((data) => {
        const meal = data.data.meals[0];
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient || measure) {
                document.getElementById("ingredientsList").innerHTML += `<li>${measure} ${ingredient}</li>`;
            }
        }
        const imgval1 = document.getElementById("source");
        imgval1.setAttribute("src", meal.strMealThumb);
    });
    document.getElementById("modal").addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
        document.getElementById("maincontent").style.display = "none";
    });
});

img6.addEventListener("click", () => {
    document.getElementById("ingredientsList").innerHTML = "";
    document.getElementById("modal").style.display = "inline";
    document.getElementById("maincontent").style.display = "inline";
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52779").then((data) => {
        const meal = data.data.meals[0];
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient || measure) {
                document.getElementById("ingredientsList").innerHTML += `<li>${measure} ${ingredient}</li>`;
            }
        }
        const imgval1 = document.getElementById("source");
        imgval1.setAttribute("src", meal.strMealThumb);
    });
    document.getElementById("modal").addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
        document.getElementById("maincontent").style.display = "none";
    });
});