window.onload = function () {

    let weatherData = sessionStorage.getItem("weather");

    if (!weatherData) {
        alert("No weather Data found!");
    }

    weatherData = JSON.parse(weatherData);


    document.querySelector('.tempInCelcius').textContent = `${weatherData.main.temp} °C`;
    document.querySelector('.locInfo').textContent = weatherData.name.toUpperCase();
    document.querySelector('.cloudInfo').textContent = weatherData.weather[0].description.toUpperCase();
    document.querySelector('.feels').innerHTML = `${weatherData.main.feels_like}<br>feels Like`;
    document.querySelector('.realHumid').innerHTML = `${weatherData.main.humidity} %<br>Humidity`


    // let temperature = weatherData.main.temp;

    // if (temperature > 30) {
    //     document.querySelector(".weatherImg").src = "./imgs/clear-sky.png";  // Hot weather ☀
    // } else if (temperature >= 15 && temperature <= 30) {
    //     document.querySelector(".weatherImg").src = "./imgs/wind.png";  // Moderate weather 🌥
    // } else {
    //     document.querySelector(".weatherImg").src = "./imgs/rain.png";  // Cold weather 🌧
    // }

    let temperature = Number(weatherData.main.temp);
    let weatherImg = document.querySelector(".weatherImg");

   
        if (temperature > 30) {
            weatherImg.style.backgroundImage = "url('./imgs/clear-sky.png')";
        } else if (temperature >= 15 && temperature <= 30) {
            weatherImg.style.backgroundImage = "url('./imgs/wind.png')";
        } else {
            weatherImg.style.backgroundImage = "url('./imgs/rain.png')";
        }
    
    



    let goBack = document.querySelector('.backBtn');
    goBack.addEventListener('click',goToPrevious);

    function goToPrevious(){
        window.history.back();
    }
}

