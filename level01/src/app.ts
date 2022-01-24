document.addEventListener("DOMContentLoaded", fetchDadJoke, false);

const API_URL: string = "https://icanhazdadjoke.com";
const parrafo = document.querySelector("#p-joke") as HTMLParagraphElement;
let boton = document.getElementById("btn-new-joke") as HTMLButtonElement;

interface reportAcudits {
  joke: string;
  score: number;
  date: Date;
}
// reportJokes

async function fetchDadJoke() {
  const response = await fetch(API_URL, {
    headers: {
      Accept: "application/json",
    },
  });
  const myjoke = await response.json();
  parrafo.textContent = myjoke.joke;
  listArray();
}

function listArray(){
  let reportJokes = {} as reportAcudits;
  reportJokes = {
    joke: parrafo.innerText,
    score: 1,
    date: new Date(Date.now()),
  };
  let myArray = [];
  myArray.push(reportJokes);
  console.log(myArray);

}



boton.addEventListener("click", fetchDadJoke);
//====================
