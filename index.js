let ifYouClickOnLoc =  document.querySelector('.loc').addEventListener('click', fetchWeatherByCoords);

function fetchWeatherByCoords() {
    navigator.geolocation.getCurrentPosition(getWeatherWithCoords, handleLocationError);
}


async function getWeatherWithCoords(position) {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fcc8de7015bbb202209bbf0261babf4c&units=metric`);

        if(!response.ok){
            alert('Something Went Wrong!');
            return;
        }

        let data = await response.json();
        
        console.log(data);

        // sessionStorage.setItem("weather",data);
        sessionStorage.setItem("weather", JSON.stringify(data));

        alert(`Hey your latitude and longitude stored in sessionstorage`);

        window.location.href = "weather.html"

    } catch (error) {
        console.log(error);        
    }
}


function handleLocationError(error) {
        const errorMessages = {
            1: "You denied location access.",
            2: "Location unavailable.",
            3: "Request timed out."
        };
    
        alert(errorMessages[error.code] || "An unknown error occurred.");
}





// let ifYouClickOnbtn =  document.querySelector('.btn').addEventListener('click', fetchWeatherByCity);

let fetchWeatherByCity = async () => {
    try {
        const cityName = document.querySelector('.inpCity').value.trim();

        if(cityName ===""){
            alert('Hey Enter the City Name Here');
        }

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fcc8de7015bbb202209bbf0261babf4c&units=metric`);

        if (!response.ok) {
            event.preventDefault();
            alert("Something Went Wrong, retry the Proceess");
            return;
        }

        let data = await response.json();

        console.log(data);

        sessionStorage.setItem("weather",JSON.stringify(data));

        window.location.href = "weather.html"
    } 
    
    
    catch (error) {
        
    }
}

let ifYouClickOnbtn =  document.querySelector('.btn').addEventListener('click', fetchWeatherByCity);
