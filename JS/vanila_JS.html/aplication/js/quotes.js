const quotes = [
    {
        quote: '맨유 갈 바엔 자살한다.',
        author: 'Daniele De Rossi',
    },
    {
        quote: '그래도 맨유는 안가.',
        author: 'Martin Skrtel',
    },
    {
        quote: '맨유, 강팀 아니야.',
        author: 'Gareth Bale',
    },
    {
        quote: '맨유 갈 바엔 우루과이 복귀한다.',
        author: 'Diego Godin',
    },
    {
        quote: '연봉 세 배 줘도 맨유는 안가.',
        author: 'Cesc Fabregas',
    },
    {
        quote: '맨유 이적? 말도 안되는 소리 그만해',
        author: 'Arjen Robben',
    },
    {
        quote: '맨유 좋아한 적 없어.',
        author: 'Roy Keane',
    },
    {
        quote: '맨유 가느니 첼시로 이적할 것.',
        author: 'Toni Kroos',
    },
    {
        quote: '맨유 이적. 미친짓.',
        author: 'Thomars Muler',
    },
    {
        quote: '맨유, 옛정으로 날 잡지마. 난 잊은 지 오래.',
        author: 'Cristiano Ronaldo'
    }
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

let randomNum = Math.floor(Math.random()*quotes.length);
const todaysQuote = quotes[randomNum];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;