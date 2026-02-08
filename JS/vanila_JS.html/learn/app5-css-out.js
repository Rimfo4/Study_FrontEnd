//js에서 css파일의 style을 참조하는 방법(추천) 

const h1 = document.querySelector('.click-me h1');

h1.addEventListener('click', handleTitleClick);

function handleTitleClick(){
    console.log(h1.className);   //getter

    // className은 클래스를 갖고오는 것, classList는 클래스 목록을 가져옴 
    const h1_class = 'active';

    // if(h1.classList.contains(h1_class)){
    //     h1.classList.remove(h1_class);
    // }
    // else h1.classList.add(h1_class)
         
    h1.classList.toggle(h1_class);
}

// 더욱 많은 이벤트는 MDN사이트에서 