let btnVal = document.getElementById('clk');
    btnVal.addEventListener('click', fetchData)



async function fetchData() {

        try {
            // window.location.href = 'weather.html';
            let docCityName = document.getElementById('inp').value.trim();
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${docCityName}&appid=fcc8de7015bbb202209bbf0261babf4c`);
            let data = await response.json();
            console.log(data);

            const { coord: { lon, lat }, weather: [{ description }], main: { temp, humidity } } = data;


            // let tempInCelsius = (temp-)

            let sendData = document.querySelector('.insertTheData');
            sendData.textContent=`Weather Of ${docCityName}`.toUpperCase();
            


            let lon1 = document.getElementById('lon');
            lon1.value = `${lon}`;

            let lat1 = document.getElementById('lat');
            lat1.value = `${lat}`;

            let weath = document.getElementById('weather');
            weath.value = `${description}`;

            let temp1 = document.getElementById('temp');
            temp1.value = `${temp}`;

            let humid = document.getElementById('humid');
            humid.value = `${humidity}`;

        }
        catch (error) {
            // console.log(error);
            document.querySelector('.insertTheData').textContent=`Enter The City Name Correctly`
        }

    }
