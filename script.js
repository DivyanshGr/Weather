const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const options = "ffbff0b9d84caeb5bc9332194e5042be"
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");

	async function main(city) {
	const response = await fetch(url+city+'&appid=ffbff0b9d84caeb5bc9332194e5042be');
	var data = await response.json();
  document.querySelector(".city").innerHTML= data.name;
	document.querySelector(".temp").innerHTML= (parseInt(data.main.temp))+'°C';
	document.querySelector(".humidity").innerHTML= data.main.humidity+'%';
	document.querySelector(".wind").innerHTML= data.wind.speed+'Km/hr';
  if(data.weather[0].main=="Clouds"){
    weathericon.src="images/clouds.png";
  }
  else if(data.weather[0].main=="Clear"){
    weathericon.src="images/clear.png";
  }
  else if(data.weather[0].main=="Rain"){
    weathericon.src="images/rain.png";
  }
  else if(data.weather[0].main=="Drizzle"){
    weathericon.src="images/drizzle.png";
  }
  else if(data.weather[0].main=="Mist"){
    weathericon.src="images/mist.png";
  }
  document.querySelector(".weather").style.display="block";
	}
  searchbtn.addEventListener("click",()=>{
    main(searchbox.value);
  })
