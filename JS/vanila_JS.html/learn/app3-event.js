//이벤트(event)는 내가 h1을 클릭할때, 인터넷에 접속할 때 등 상황을 이벤트라고 한다.

const title = document.querySelector('.click-me h1');


// dir()함수는 괄호 안에 객체의 정보를 담고 있음
// object앞에 on이 붙으면 그건 이벤트임.
console.dir(title);


// addEventListener()는 괄호 안에 이벤트를 객체한테 추가하는 것
title.addEventListener('click', handleTitleClick);
title.addEventListener('mouseenter', handleMouseEnter);
title.addEventListener('mouseleave', handleMouseLeave);

// window는 웹사이트 창을 의미
window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);

function handleTitleClick(){
    console.log("너는 타이틀을 클릭했어!");
    title.style.color = 'red';
}
function handleMouseEnter(){
    title.innerHTML = "마우스가 여기있네";
}
function handleMouseLeave(){
    title.innerHTML = "마우스 떠났네..";
}

function handleWindowResize(){
    //body, title, head 같은 핵심 태그 빼고는 querySelector() 써야함.
    document.body.style.backgroundColor = 'tomato';
}
function handleWindowCopy(){
   alert("복사 ㄴㄴ"); 
}
function handleWindowOffline(){
   alert("아 오프라인이네"); 
}
function handleWindowOnline(){
   alert("이야 온라인"); 
}


