const clock = document.querySelector('h2#clock');

function sayHello(){
    console.log("Hello");
}
function getClock(){
    const date = new Date();
    // let time = `${date.getHours()}:${date.getMinutes()}:`;

    // if(date.getSeconds() <= 9){
    //    time += `0${date.getSeconds()}`;
    // }
    // else{
    //     time += `${date.getSeconds()}`;
    // }
    // clock.innerText = time;

    // padStart()을 사용하는 방법
    const hour = String(date.getHours()).padStart(2, "0");    // String()은 데이터 타입으로 변환임
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hour}:${minute}:${second}`;
}
getClock();
setInterval(getClock, 1000);



//setInterval은 특정 시간마다 반복해서 할 때 사용
// 지금은 5초마다 sayHello 함수 실행
// setInterval(sayHello, 5000);

//setTimeout은 특정 지연시간을 기다리는 것이다.
// setTimeout(sayHello, 5000);