// 1, 2, 3      integer타입
// 1.5, 5.23    float타입
// "hello", "apple" string 타입

// 콘솔 로그창(출력 할 데이터)
console.log("어이");

console.log(1 + 2);
console.log(2 * 2);
console.log(2 / 2);



// 변수(const == 상수, let == 변수)
const a = 2;
const b = 22;
console.log(b/a);

let name1 = '정모';
console.log("내 이름은 "+name1);
name1 = '길동';
console.log("내 이름은 "+name1);



// boolean(true, false)
let IamJeongMo = true;
console.log(IamJeongMo);

//null(비어있음)과 undefined(정의하지 않음)
const test = null;
console.log(test);
// let test2;
// console.log(test2);



//array
const array = ["mon", 'tue', 'wen', 'thu', 'tri', 'sat'];
console.log(array);
console.log("금요일은? "+array[4]);

//array 값 넣고 빼기
array.push("sun");
console.log(array);
array.pop();
console.log(array);



//함수(function) - 기본
function sayHello(){
    console.log("hello my name is c");
}
sayHello();

//인수(argument)가 있는 함수
function sayHello(name, age){
    console.log("Hello my is "+name+", 나이는 "+age);
}
sayHello("난귝향", 14);
sayHello("리석탄", 17);



//객체(object) 
const player = {
    // 'key=value 느낌임' 
    name: '정모',
    age: 18,
    major: "컴공",
    mail: true,
};
console.log(player);
console.log(player["major"]);
player.mail = false;
console.log(player.mail);
//객체 안에 요소 추가
player.point = 200;
console.log(player, console);


//객체에 함수
const people = {
    name: 'Cho JM',
    // 객체 안에 함수
    sayGoodBye: function(name){
        console.log("Good Bye "+name);
    } 
}
people.sayGoodBye("kim");
people.sayGoodBye("lee");




//return
function KrAge(age){
 return age + 2;
}

console.log(KrAge(10));





// 조건문
const age = parseInt(prompt("나이를 적어주세요."));

console.log(typeof age);

if(isNaN(age)){
    console.log("숫자 좀 적어주소");
}
else if(age < 18){
    console.log("너의 나이는 18살 보다 적구나");
}
else{
    console.log("통과");
}