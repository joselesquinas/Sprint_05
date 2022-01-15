const jokeHolder = document.querySelector(".p-joke");
const jokeButton = document.querySelector(".bt-get-joke");

const buttonText = [
   "Ugh.",
   "🤦🏻‍♂️",
   "omg dad.",
   "you are the worst",
   "seriously",
   "stop it.",
   "please stop",
   "that was the worst one",
];

async function fetchJoke() {

   const response = await fetch("https://icanhazdadjoke.com");
   console.log(response);

}

fetchJoke();


