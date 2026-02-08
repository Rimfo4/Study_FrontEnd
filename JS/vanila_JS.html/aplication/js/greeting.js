const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');


const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'userName';

function onLoginSubmit(event){
    // 사실 JS의 모든 addEventListener는 함수를 실행 할 때 첫번째 인수를 가지고 온다.
    // 그 첫번째 인수에는 실행 한 이벤트에 관한 정보가 담겨있다.
    console.log(event);

    //preventDefault()는 브라우저에서 기본 동작을 막는 함수이다.
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    paintGreetings(userName);

    //localStorage는 웹사이트에 작은 DB버전이다.
    localStorage.setItem(USERNAME_KEY, userName);
}
function paintGreetings(username){
    greeting.innerHTML = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// DB에 유저이름이 없다면 로그인 창, 있다면 Hello
const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName == null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
}
else{
    paintGreetings(savedUserName);
}
