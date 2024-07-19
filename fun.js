const inputBox = document.getElementById('input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.getElementById('weather-img');
const temperature = document.querySelector('.temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const error_img = document.querySelector('.on-error-display');
const weather_body = document.querySelector('.weather-body');

async function checkWeather(city){
    const key = "8ae56aa0172045584ffe12a35e0443d9";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}` ;
    const weather_data = await fetch(`${url}`).then(response=>
        response.json());   
        console.log(weather_data);
         
        if(weather_data.cod ==='404'){
            console.log("error");
            error_img.style.display = 'flex';
            weather_body.style.display = 'none';
            // weather_img.style.display='none';
            // temperature.style.display='none';
            // description.style.display='none';
            // humidity.style.display='none';
            // wind_speed.style.display='none';

         }
         else{
            error_img.style.display = 'none';
            weather_body.style.display = 'flex';
         }
        temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}°C`;
        humidity.innerHTML = `${weather_data.main.humidity}%`;
        wind_speed.innerHTML = `${weather_data.wind.speed}km/h`;
        description.innerHTML = `${weather_data.weather[0].description}`;
        switch(weather_data.weather[0].main){
            case 'Clouds':
                weather_img.src="cloud.png";
                break;

            case 'Clear':
                weather_img.src="clear.png";
                break;
                    
            case 'Rain':
             weather_img.src="rain.png";
             break;

            case 'Mist':
            weather_img.src="mist.png";
            break;

            case 'Snow':
            weather_img.src="snow.png";
            break;
        }
    }
searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});





















