//API 이용해보기
const API_KEY = "b8a0f7f4dee86d7dee885e90777077b8";

function onGeoSuccess(position){
    const lon = position.coords.longitude;
    const lat = position.coords.latitude;
    console.log(`너는 경도: ${lon}, 위도: ${lat}에 있구나`);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector('#weather span:first-child');
            const city = document.querySelector('#weather span:last-child'); 
            
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            city.innerText = data.name;
        })
}

function onGeoError(){
    alert("죄송 님 위치를 부르기 어렵네요.");
}

//getCurrentPosition()는 위치, wifi 등을 알려주는 함수이다.
//사용하려면 문제 없을 때 함수와 문제 있을 때 실행하는 함수를 적어야한다.
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
