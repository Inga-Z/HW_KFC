console.log('worked');


const firstBurger = {
    name: 'Хот-дог',
    imgUrl: 'https://s82079.cdn.ngenix.net/Wyvkk6X2vsQ7jGr8c84MzfK1.png?dw=230',
};

const burgerFerstEl = document.getElementById('photo-1'); 
burgerFerstEl.src = firstBurger.imgUrl;

const burgerFerstNameEl = document.getElementById('author-name1');
burgerFerstNameEl.textContent = firstBurger.name;

const secondBurger = {
    name: 'Чизбургер Де Люкс',
    imgUrl: 'https://s82079.cdn.ngenix.net/MXahUbKht6Q6D2wGRYrAz7nu.png?dw=230',
};

const burgerSecondtEl = document.getElementById('photo-2'); 
burgerSecondtEl.src = secondBurger.imgUrl;

const burgerSecondNameEl = document.getElementById('author-name2');
burgerSecondNameEl.textContent = secondBurger.name;
