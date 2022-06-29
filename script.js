let chuckJokeElement = document.querySelector('#chuckJoke');
let chuckJokeElement2 = document.querySelector('#chuckJoke2');



fetch('https://api.chucknorris.io/jokes/random')
.then(res => res.json())
.then(joke => {
    console.log(joke.value)
})

//jokeText.textContent = joke.value;


let jokeButton = document.createElement('button');
jokeButton.textContent = 'give me a joke';
let jokeText = document.createElement('p');


console.log(jokeButton)
//jokeButton.textContent = 'give me a joke';
jokeButton.addEventListener("click",() => {
    fetch("https://api.chucknorris.io/jokes/random")
    .then(res => {
        jokeText.textContent = 'Loading...';
          return res.json();
        })
        .then(joke => {
            //chuckJokeElement.textContent = joke.value;
            jokeText.textContent = joke.value;

        })
    ;
});


//===========================


let categoryButton = document.createElement('button');
categoryButton.textContent = 'Category joke....LAUNCH!';


let chuckForm = document.querySelector('#forma');
console.log(chuckForm)

let categoryJokeTextElement = document.createElement('p');

fetch("https://api.chucknorris.io/jokes/categories")
    .then(res => {
        categoryJokeTextElement.textContent = 'cia bus options';
          return res.json();
        })
        .then(categories => {
            console.log(categories)
            categories.map (category=> {
                let optionElement = document.createElement('option');
                optionElement.textContent = `${category}`;
                

            })
            //chuckJokeElement.textContent = joke.value;
            // categoryJokeTextElement.textContent = joke.value;

        })
    ;


// chuckForm.addEventListener("click",() => {
//     fetch("https://api.chucknorris.io/jokes/categories")
//     .then(res => {
//         categoryJokeTextElement.textContent = 'cia bus options';
//           return res.json();
//         })
//         .then(jokeCat => {
//             //chuckJokeElement.textContent = joke.value;
//             // categoryJokeTextElement.textContent = joke.value;
//             console.log(jokeCat)
//         })
//     ;
// });


chuckJokeElement.append(jokeButton, jokeText, categoryButton, chuckForm, categoryJokeTextElement);
//chuckJokeElement2.append(jokeText);


// let selectForm = document.querySelector('#chuck-select')

// console.log(selectForm)

// fetch('https://api.chucknorris.io/jokes/categories')
//     .then(res => {
//         return res.json()
//     })
//     .then(categories => {
//         console.log(categories)
//         categories.map(category => {
//             let option = document.createElement('option')
//             option.textContent = `${category}`
//             selectForm.append(option)
//         })
//     })

//     selectForm.addEventListener('click', (event) => {
//         let categoryInput = event.target.value
//         console.log(categoryInput)
//         fetch(`https://api.chucknorris.io/jokes/random?category=${categoryInput}`).then(res => {
//             return res.json()
//         })
//         .then(data => {
//             jokeFromCategoryBtn.addEventListener('click', () => {
//                 jokeByCategoryElement.textContent = data.value
//                 console.log(data.value)
//             })
//         })
//     })


// //=====Romano
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