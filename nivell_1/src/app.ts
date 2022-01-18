// const jokeButton = document.querySelector(".bt-get-joke");
// const jokeHolder = document.querySelector('.p-joke');


async function fetchJoke() {
   const response = await fetch("https://icanhazdadjoke.com", {
      headers: {
         Accept: "application/json",
      },});
   const joke = response.json();
   console.log(joke);
}




fetchJoke();
