const apiKey = "8ac5c4d57ba6a4b3dfcf622700447b1e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/hr";
    
    if(data.weather [0].main == "Clouds"){
        weatherIcon.src = "./weather/clouds.png";

    }else if(data.weather [0].main == "Rain"){
        weatherIcon.src = "./weather/rain.png";
    }else if(data.weather [0].main == "Drizzle"){
        weatherIcon.src = "./weather/drizzle.png"
    }else if(data.weather [0].main == "Clear"){
        weatherIcon.src = "./weather/clear.png"
    }else if(data.weather [0].main == "Mist"){
        weatherIcon.src = "./weather/mist.png"
    }

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

checkWeather();