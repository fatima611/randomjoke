
const joke = document.querySelector('.joke');
const btn = document.querySelector('#btn');
const jokeparagraph = document.querySelector(' .joke p');

btn.addEventListener('click, getRandomizeJoke');
getRandomizeJoke();

async function getRandomizeJoke() {
    const JokeResponse= await fetch('http://icanhazdadjoke.com/', {  
headers:  {
    'accept': application/json
}
} )
const responseJson = await JokeResponse.json();

jokeparagraph.innerHTML = responseJson.joke;
}