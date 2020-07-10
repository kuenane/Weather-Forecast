let appId = 'e34cfbc6ea4a583d03deb56428517ec6';
let units = 'metric';
let searchMethod = 'zip';

function searchWeather(searchTerm) {
    fetch(`http://api.openweathermap.org/data/2.5/weather? ${searchMethod} = ${searchTerm} & APPID=${appId} & units=${units}`).then(result => {
        console.log(result);
        return result.json();
    }).then(result => {
        init(result);
    })

}

function init(resultFromServer) {
    console.log(resultFromServer);

}

document.getElementById('searchBtn').addEventListener('click', () => {
    let searchTerm = document.getElementById('searchInput').value;
    if (searchTerm)
        searchWeather(searchTerm);
})