let tweet = {
    user: { 
        id: 42081171,
        name: 'Веб-стандарты',
        screenName: 'webstandards_ru',
        followersCount: 6443 
    }
};

function incrementFollowersCountPrimitive(count) {
    count++
}

function incrementFollowersCount(user) {
    user.followersCount++
}

//incrementFollowersCount(tweet.user);
incrementFollowersCountPrimitive(tweet.user.followersCount);

//* Метод reduce:
console.log(tweet)

var tweets = [
    {   hashtags: ['wstdays'], 
        likes: 16, 
        text: 'Я и ИоТ, пятый…' },
    { hashtags: ['wstdays', 'mails'], likes: 33, text: 'Вёрстка писем…' },
    { hashtags: ['wstdays'], likes: 7, text: 'PWA. Что это…' },
    { hashtags: ['wstdays', 'pokemongo'], likes: 12, text: 'Pokémon GO на…'},
    { hashtags: ['wstdays'], likes: 15, text: 'Ого сколько фронт…' },
    { hashtags: ['wstdays', 'html'], likes: 22, text: '<head> — всему…' },
    { hashtags: ['wstdays'], likes: 8, text: 'Доброе утро! WSD…' },
    { likes: 9, text: 'Наглядная таблица доступности…' },
    { hashtags: ['nodejs'], likes: 7, text: 'Node.js, TC-39 и модули,…' },
    { hashtags: ['html'], likes: 28, text: 'Всегда используйте <label>…' },
    { likes: 18, text: 'JSX: антипаттерн или нет?…' },
    { hashtags: ['svg'], likes: 19, text: 'Как прятать инлайновые…' }
];

console.log(tweets[1].likes)

let countLikes = tweets.reduce(getLikes, '')

console.log(countLikes)

function getLikes(acc, item) {
    return acc + item.text
}
//* Метод reduce ^^^^