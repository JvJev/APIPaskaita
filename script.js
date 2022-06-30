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
          return res.json();
        })
        .then(joke => {
            console.log(joke)
            categoryJokeTextElement.textContent = joke.value;
            }) 
        });

let formElementSearchTask = document.createElement('form');
formElementSearchTask.classList.add("#search-form");

let buttonElementSearchTask = document.createElement('button');
buttonElementSearchTask.textContent = 'search 4 it';

let inputElementSearchTask = document.createElement('input');
let jokeTextElementSearchTask = document.createElement('p');
console.dir(jokeTextElementSearchTask);

function searchFunction (){
    buttonElementSearchTask.addEventListener('click',() => {
        fetch(`https://api.chucknorris.io/jokes/search?query=${inputElementSearchTask.value}`)
        .then(res => {
            if(jokeTextElementSearchTask.textContent == '')
            {
                jokeTextElementSearchTask.textContent = 'please enter search word';
            }
              return res.json();
            })
        .then(joke => {
                const indexGenerator = Math.floor(Math.random() * joke.total);
                let finalSearchedJoke = joke.result[indexGenerator].value;
                jokeTextElementSearchTask.textContent = finalSearchedJoke;
        })
    });
};
searchFunction();

// 4. Sukurti galimybę ieškoti juokelių pagal užklausos frazę nurodytoje kategorijoje.

let catAndOptSearchElement = document.createElement('button');
catAndOptSearchElement.textContent = 'search + category';
let searchAndOptText = document.createElement('p');

function searchFunctionAndCategory (){
    catAndOptSearchElement.addEventListener('click',() => {
        fetch('https://api.chucknorris.io/jokes/random?category=')
        .then(res => {
              return res.json();
            })
            .then(categories => {
                categories.map ((category) => {
                    let selectElement2 = document.createElement('select');
                    let optionElement2 = document.createElement('option');
                    optionElement2.textContent = `${category}`;
                    console.log(optionElement2)
                        chuckJokeElement.append(selectElement2)
                        selectElement2.append(optionElement2)
                })
                }) 
            })};
            // catAndOptSearchElement.addEventListener('click',() => {
            //     fetch(`https://api.chucknorris.io/jokes/search?query=${inputElementSearchTask.value}`)
            //     .then(res => {
            //           return res.json();
            //         })
            //     .then(joke => {
            //             const indexGenerator = Math.floor(Math.random() * joke.total);
            //             let finalSearchedJoke = joke.result[indexGenerator].value;
            //             jokeTextElementSearchTask.textContent = finalSearchedJoke;
            //     })
            // });

searchFunctionAndCategory();


chuckJokeElement.append(jokeButton, jokeText, categoryButton, chuckForm, categoryJokeTextElement, selectElement);

chuckJokeElement.append(jokeButton, jokeText, categoryButton,selectElement, chuckForm, categoryJokeTextElement,formElementSearchTask, inputElementSearchTask, buttonElementSearchTask, jokeTextElementSearchTask, catAndOptSearchElement,searchAndOptText );


 //06.29
// 8 val 40min


// 3. Sukurti galimybę ieškoti juokelių pagal užklausos frazę.
// 4. Sukurti galimybę ieškoti juokelių pagal užklausos frazę nurodytoje kategorijoje.

//===============================Romano kodas

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
// function getCategoryJoke() {
//   // 2.2. <select> elementas savyje turės <option> elementus. Juose galima pasirinkti juokelių kategoriją. Šie elementai turi susigeneruoti automatiškai, priklausomai nuo to, kokias kategorijas turi API.
//   let categoryForm = document.querySelector('#category-form');
//   let categorySelectElement = categoryForm.querySelector('select');
//   fetch('https://api.chucknorris.io/jokes/categories')
//     .then(res => res.json())
//     .then(categories => {
//       categories.map(category => {
//         // let categoryOptionElement = `<option value="${category}">- ${category}</option>`;
//         // categorySelectElement.innerHTML += categoryOptionElement;
//         let categoryOptionElement = document.createElement('option');
//         categoryOptionElement.textContent = '- ' + category;
//         categoryOptionElement.value = category;
//         categorySelectElement.append(categoryOptionElement);
//         categoryForm.querySelector('input[type="submit"]').removeAttribute('disabled');
//       })
//     })
//   // 2.3. Sukurti mygtuką, kurį paspaudus, sugeneruotų atsitiktinį juokelį pagal pasirinktą kategoriją.
//   categoryForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     let selectedCategory = event.target.elements.category.value;
//     fetch('https://api.chucknorris.io/jokes/random?category=' + selectedCategory)
//       .then(res => res.json())
//       .then(joke => {
//         chuckJokeElement.textContent = joke.value;
//       })
//   })
// }
// getCategoryJoke();
// function searchJoke() {
//   let searchForm = document.querySelector('#search-form');
//   searchForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     let searchInput = event.target.elements['search-input'].value;
//     fetch('https://api.chucknorris.io/jokes/search?query=' + searchInput)
//       .then(res => res.json())
//       .then(jokes => {
//         console.log(jokes);
//         if (jokes.total > 0) {
//           let randomIndex = Math.floor(Math.random() * jokes.total);
//           chuckJokeElement.textContent = jokes.result[randomIndex].value;
//         } else {
//           chuckJokeElement.textContent = 'No jokes found :(';
//         }
//       })
//   })
// }
// searchJoke();
// function searchCategoryJoke() {
//   let categorySearchForm = document.querySelector('#category-search-form');
//   let selectElement = categorySearchForm.querySelector('select');
//   fetch('https://api.chucknorris.io/jokes/categories')
//     .then(res => res.json())
//     .then(categories => {
//       categories.map(category => {
//         let categoryOption = document.createElement('option');
//         categoryOption.textContent = category;
//         categoryOption.value = category;
//         selectElement.append(categoryOption);
//       })
//       categorySearchForm.querySelector('#category-search-submit').removeAttribute('disabled');
//     })
//   categorySearchForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     let searchCategory = event.target.elements['category-search'].value;
//     let searchPhrase = event.target.elements['category-search-input'].value;
//     fetch('https://api.chucknorris.io/jokes/search?query=' + searchPhrase)
//       .then(res => res.json())
//       .then(data => {
//         let jokes = data.result;
//         console.log(searchCategory);
//         console.log(jokes);
//         // let filteredJokes = jokes.filter(joke => {
//         //   return joke.categories.includes(searchCategory);
//         // });
//         let filteredJokes = jokes.filter(joke => joke.categories.includes(searchCategory));
//         console.log(filteredJokes);
//       })
//   })
// }
// searchCategoryJoke();

