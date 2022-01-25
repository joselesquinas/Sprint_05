document.addEventListener("DOMContentLoaded", () => { fetchDadJoke() });

const API_URL: string = "https://icanhazdadjoke.com";

const Paragraph = document.querySelector("#p-joke") as HTMLParagraphElement;
const btnNew = document.getElementById("btn-new-joke") as HTMLButtonElement;
const btnPoc = document.getElementById("btn-poc") as HTMLButtonElement;
const btnRegular = document.getElementById("btn-regular") as HTMLButtonElement;
const btnMolt = document.getElementById("btn-molt") as HTMLButtonElement;

interface ReportJokes {
   joke: string;
   score: number;
   date: string;
}

// API Rest
const fetchDadJoke = async () => {
   try {
      const response = await fetch(API_URL, {
         headers: { Accept: "application/json" },
      });
      const myjoke = await response.json();
      // console.log(myjoke);
      Paragraph.textContent = `" ${myjoke.joke} "`;
   } catch (error) {
      console.log(error)
   }
}

// score
let newScore: number = 2;
btnPoc.addEventListener("click", () => { newScore = parseInt(btnPoc.value) });
btnRegular.addEventListener("click", () => { newScore = parseInt(btnRegular.value) });
btnMolt.addEventListener("click", () => { newScore = parseInt(btnMolt.value) });
btnNew.addEventListener("click", () => {
   listArray();
   fetchDadJoke();
});

//ejercicio 3 =================================================
const jokesReports: ReportJokes[] = []
const listArray = () => {
   const reportJokes: ReportJokes = {
      joke: Paragraph.innerText,
      score: newScore,
      date: new Date().toISOString()
   };
   jokesReports.push(reportJokes);
   newScore = 2;
   console.log(reportJokes);
   console.log(jokesReports);

}

