let chuckJokeElement = document.querySelector('#chuckJoke');
let chuckJokeElement2 = document.querySelector('#chuckJoke2');

fetch('https://api.chucknorris.io/jokes/random')
.then(res => res.json())
.then(joke => {
    console.log(joke.value)
})

let jokeButton = document.createElement('button');
jokeButton.textContent = 'give me a joke';
let jokeText = document.createElement('p');

console.log(jokeButton)
jokeButton.addEventListener("click",() => {
    fetch("https://api.chucknorris.io/jokes/random")
    .then(res => {
        jokeText.textContent = 'Loading...';
          return res.json();
        })
        .then(joke => {
            jokeText.textContent = joke.value;
        })
    ;
});


let categoryButton = document.createElement('button');
categoryButton.textContent = 'Category joke....LAUNCH!';

let chuckForm = document.querySelector('#forma');
console.log(chuckForm)

let selectElement = document.createElement('select');

let categoryJokeTextElement = document.createElement('p');

fetch('https://api.chucknorris.io/jokes/categories')
.then(res => res.json())
.then(categories => {
    console.log(categories)
    categories.map ((category) => {
        let optionElement = document.createElement('option');
                optionElement.textContent = `${category}`;
                selectElement.append(optionElement)
                console.log(optionElement.textContent)
    })
});

categoryButton.addEventListener('click',() => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${selectElement.value}`)
    .then(res => {
        categoryJokeTextElement.textContent = 'cia bus options';
          return res.json();
        })
        .then(joke => {
            console.log(joke)
            categoryJokeTextElement.textContent = joke.value;
            }) 
        });

chuckJokeElement.append(jokeButton, jokeText, categoryButton, chuckForm, categoryJokeTextElement, selectElement);


 
// 8 val 40min


// //=====Romano kodas=============


// let chuckJokeElement = document.querySelector('#chuck-joke');
// // 1. Sukurti mygtuką, kurį paspaudus ekrane atvaizduojamas atsitiktinis juokelis.
// let randomButton = document.querySelector('#random-joke');
// randomButton.addEventListener('click', () => {
//   fetch('https://api.chucknorris.io/jokes/random')
//     .then(res => {
//       chuckJokeElement.textContent = 'Loading...';
//       return res.json();
//     })
//     .then(joke => {
//       chuckJokeElement.textContent = joke.value;
//     })
// })
