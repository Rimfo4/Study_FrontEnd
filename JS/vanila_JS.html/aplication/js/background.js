const imgs = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg'];

const ranNum = Math.floor(Math.random() * imgs.length);

const pickImg = imgs[ranNum];

//Js에서 HTMl 태그 만드는 것
// createElement가 태그를 생성하는 함수이다.
const bgImage = document.createElement('img'); 

bgImage.src = `imgs/${pickImg}`;


//HTML 바디에 만든 태그를 부착시키기
// body태그 끝에 붙이는 건 appendChild(), 처음은 prepend()
document.body.appendChild(bgImage);