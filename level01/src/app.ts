document.addEventListener("DOMContentLoaded", fetchDadJoke, false);

const API_URL: string = "https://icanhazdadjoke.com";
const Paragraph = document.querySelector("#p-joke") as HTMLParagraphElement;
const Button = document.getElementById("btn-new-joke") as HTMLButtonElement;

interface ReportAcudits {
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
   Paragraph.textContent = myjoke.joke;
}

function listArray() {
   let reportJokes = {} as ReportAcudits;
   reportJokes = {
      joke: Paragraph.innerText,
      score: 1,
      date: new Date(Date.now()),
   };
   let myArray = [];
   myArray.push(reportJokes);
   console.log(myArray);
   fetchDadJoke();
}

Button.addEventListener("click", listArray);
//====================
