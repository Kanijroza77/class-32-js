
// https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
document.getElementById('error').style.display = 'none'


const searchFood = () => {
    const searchField = document.getElementById('inputField');
    const searchText = searchField.value;
    // console.log(searchText);

    searchField.value = ''
    document.getElementById('error').style.display = 'none'
    if (searchText.value == '') {
        document.getElementById('error').style.display = 'block'

    } else {
        const url = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))
    }



}


const displaySearchResult = (meals) => {

    // console.log(meals);

    const searchResult = document.getElementById('search-result');
    // searchResult.innerHTML = '';
    searchResult.textContent = '';
    meals.forEach(meal => {

        // console.log(meal);

        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
<div onclick='loadMealDetails(${meal?.idMeal})' class="card">
<img src="${meal?.strMealThumb}" class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">${meal?.strMeal}</h5>
    <p class="card-text">${meal?.strInstructions.slice(0, 100)}</p>

 <a class='btn btn-primary' target="_blank" href="${meal?.strYoutube}"> Meal Video </a>

 
</div>
</div>
`
        searchResult.appendChild(div)
    });
}


const loadMealDetails = (mealId) => {
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))

}

const displayMealDetails = (meal) => {
    // console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    const div = document.createElement('div');
    div.classList.add('card')
    div.innerHTML = `

<img src="${meal?.strMealThumb}" class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">${meal?.strMeal}</h5>
    <h5 class="card-title">${meal?.IdMeal}</h5>
    <p class="card-text">${meal?.strInstructions.slice(0, 150)}</p>
    <p class="card-text">${meal?.strCategory.slice(0, 150)}</p>
    <p class="card-text">${meal?.strTags.slice(0, 150)}</p>
</div>
`

    mealDetails.appendChild(div)



}













