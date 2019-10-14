console.log('worked');


const burger = {
    author: 'burger',
    name: 'Чизбургер Де Люкс',
    avatarUrl: 'https://s82079.cdn.ngenix.net/MXahUbKht6Q6D2wGRYrAz7nu.png?dw=230',

};

const firstBurger = {
    author: burger,
    name: 'Хот-дог куриный',
    imgUrl: 'https://s82079.cdn.ngenix.net/Wyvkk6X2vsQ7jGr8c84MzfK1.png?dw=230',
};

const burgerFerstEl = document.getElementById('photo-1'); 
burgerFerstEl.src = firstBurger.author.avatarUrl;

const burgerFerstNameEl = document.getElementById('author-name1');
burgerFerstNameEl.textContent = firstBurger.author.name;

const secondBurger = {
    author: burger,
    name: 'Чизбургер Де Люкс',
    imgUrl: 'https://s82079.cdn.ngenix.net/MXahUbKht6Q6D2wGRYrAz7nu.png?dw=230',
};

const burgerSecondEl = document.getElementById('photo-2'); 
burgerSecondEl.src = secondBurger.author.avatarUrl;

const burgerSecondNameEl = document.getElementById('author-name2');
burgerSecondNameEl.textContent = secondBurger.author.name;




