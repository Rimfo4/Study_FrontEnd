// JS에서 html의 항목을 읽기
document.title = 'yeah JS';

const text = document.getElementById('take-me');
console.log(text);

//Js는 html에 있는 요소를 가지고 와서 변형하는 것
// text.innerText = "널 가저가마";

//getElementByClassName



// QuerySelector는 css방식으로 선택자를 가지고 오는 것
let text1 = document.querySelector('#take-me h1');
console.log(text1);

text1 = document.querySelector('.get-me h1');
// 같은 클래스 이름의 요소가 여러가 있어도 첫번째만 가지고 옴
console.log(text1);

text1 = document.querySelectorAll('.get-me h1');
// All로 하면 배열 방식으로 다 갖고 옴
console.log(text1);



const colorChange = document.querySelector('#take-me h1');

console.log(colorChange);

// document.querySelector('#take-me h1').style.color = 'red';
colorChange.style.color = 'red';