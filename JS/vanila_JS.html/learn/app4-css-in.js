// js에서 직접 css(style) 하는 방식(이건 좋지 않음)


const title = document.querySelector('.click-me h1');

title.addEventListener('click', handleTitleClick);

let cnt = 0; //매번 실행 될 때 0이 되는 지 테스트용
function handleTitleClick(){
    // console.log(title.style.color); ---이게 getter
    // title.style.color = 'red';      ---이게 setter
    
    const getColor = title.style.color;
    let setColor;
    if(getColor == 'blue'){
        setColor = 'red';
        cnt++;
    }
    else{
        setColor = 'blue';
        cnt++;
    }
    title.style.color = setColor;

    if(cnt >= 5){
        title.innerHTML = '5번 이상 눌렀네?';

    }
    console.log(cnt);
}