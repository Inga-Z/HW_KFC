console.log('worked');


const dan = {
    id: 'dan_abramov',
    name: 'Хот-дог куриный',
    avatarUrl: 'https://s82079.cdn.ngenix.net/Wyvkk6X2vsQ7jGr8c84MzfK1.png?dw=230',
};

const firstTweet = {
    id: 1166364879852359681,
    author: dan,
    content: '...',
    created: 1569659115,
    comments: 183,
    retweets: 988,
    likes: 6324,
};


const avatarEl = document.getElementById('avatar'); 
avatarEl.src = firstTweet.author.avatarUrl;

const authorNameEl = document.getElementById('author-name');
authorNameEl.textContent = firstTweet.author.name;
