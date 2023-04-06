const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountries()

const displayCountries = (countries) => {
    // console.log(countries);
    const countryDiv = document.getElementById('countries')
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');

        div.classList.add('country');
        div.innerHTML = `
<h3>${country.name.common}</h3>
<p>${country.capital}</p>
<button onclick="loadCountryDetails('${country.name.common}')">Show more</button>
`
        countryDiv.appendChild(div);

    });
}


const loadCountryDetails = (name) => {

    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = (country) => {
    console.log(country);
    const detailDiv = document.getElementById('country-details');
    detailDiv.classList.add('details')

    detailDiv.innerHTML = `
<h3>${country.name.common}</h3>
<p>${country.capital}</p>
<p>${country.population}</p>
<img src="${country.flags.png}" alt="">
`



}


