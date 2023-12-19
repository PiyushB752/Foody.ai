const backButton = document.getElementById("back")
backButton.addEventListener("click",()=>{
    window.location.href = "./index.html"
})


const searchButton = document.getElementById("search");
searchButton.addEventListener("click", () => {
    searchFunc();
});

function searchFunc() {
    const resultArea = document.getElementById("resultArea");
    resultArea.textContent = "";
    const searchBar = document.getElementById("searchBar").value;
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBar}`).then((info) => {
        const food_info = info.data.meals;
        food_info.forEach((meal) => {
            const food_data = document.createElement("div");
            food_data.style.color = "#EDF756";
            const food_img = document.createElement("img");
            food_img.setAttribute("src", meal.strMealThumb);
            food_img.style.height = "150px";
            food_img.style.width = "78%";
            const mealName = document.createElement("p");
            mealName.style.fontSize = "15px";
            mealName.textContent = meal.strMeal;
            food_data.append(food_img);
            food_data.append(mealName);
            resultArea.append(food_data);

            food_data.addEventListener("click", () => {
                Modal(meal);
            });
        });
    });
}

function Modal(meal) {
    document.getElementById("ingredientsList").innerHTML = ""
    const modal = document.getElementById("modal");
    const maincontent = document.getElementById("maincontent");
    const source = document.getElementById("source");
    modal.style.display = "inline";
    maincontent.style.display = "inline";
    source.setAttribute("src", meal.strMealThumb);
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient || measure) {
            document.getElementById("ingredientsList").innerHTML += `<li>${measure} ${ingredient}</li>`;
        }
    }
    modal.addEventListener("click",()=>{
        modal.style.display="none"
        maincontent.style.display="none"
    })
}





