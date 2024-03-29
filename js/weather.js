const API_KEY="74b5416afe859cb679b59f66b9b594e6";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response)=>response.json())
    .then(data=>{
      const weather= document.querySelector(".js-temp");
      const city= document.querySelector(".js-place")
      city.innerText = data.name;
      weather.innerText =`${data.weather[0].main} / ${data.main.temp}`;
  });
}

function onGeoError(){
  alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);