document.addEventListener("DOMContentLoaded", () => {
   fetchWeather()
   randomJoke() 
});

const API_URL: string = "https://icanhazdadjoke.com";
const API_URL_Weather:string = "https://api.openweathermap.org/data/2.5/weather?id=3128760&units=metric&appid=d0c9eed8a6b4ce413240d5610426a898";
const API_URL_Chuck:string = "https://api.chucknorris.io/jokes/random";

const Paragraph = document.querySelector("#p-joke") as HTMLParagraphElement;
const btnNew = document.getElementById("btn-new-joke") as HTMLButtonElement;
const btnPoc = document.getElementById("btn-poc") as HTMLButtonElement;
const btnRegular = document.getElementById("btn-regular") as HTMLButtonElement;
const btnMolt = document.getElementById("btn-molt") as HTMLButtonElement;
const pWeather = document.querySelector("#p-weather") as HTMLParagraphElement;

const imgNew = document.getElementById("icon") as HTMLImageElement;
const hTemp = document.getElementById("h-Climatic") as HTMLHtmlElement;

interface ReportJokes {
   joke: string;
   score: number;
   date: string;
}
let newScore: number = 0;
// API Rest Jokes
const fetchDadJoke = async () => {
   try {
      const response = await fetch(API_URL, {
         headers: { Accept: "application/json" },
      });
      const myjoke = await response.json();
      // console.log(myjoke);
      Paragraph.textContent = `${myjoke.joke}`;
   } catch (error) {
      console.log(error)
   }
}

const jokesReports: ReportJokes[] = []
const listArray = () => {
   const reportJokes: ReportJokes = {
      joke: Paragraph.innerText,
      score: newScore,
      date: new Date().toISOString()
   };
   jokesReports.push(reportJokes);
   newScore = 0;
   console.log(jokesReports);
}

const randomJoke = () => {
   const numRandom:number = Math.floor(1+ Math.random() * 100);
   if (numRandom % 2 == 0){
      fetchDadJoke() 
   } else {
      fetchChuck()
   }
}

btnPoc.addEventListener("click", () => { newScore = parseInt(btnPoc.value) });
btnRegular.addEventListener("click", () => { newScore = parseInt(btnRegular.value) });
btnMolt.addEventListener("click", () => { newScore = parseInt(btnMolt.value) });
btnNew.addEventListener("click", () => {
   if (newScore !== 0){
      listArray();
   }
   randomJoke();
});

// API Rest del Temps
const fetchWeather = async () => {
   try {
      const response = await fetch (API_URL_Weather);
      const myClimatic = await response.json();
      // console.log(myClimatic);
      console.log(myClimatic.name,myClimatic.weather[0].icon, myClimatic.main.temp ); 
      nowWeather(myClimatic.weather[0].icon, myClimatic.main.temp ) 

   } catch (error) {
      console.log(error)
   }
}

// API Rest del Chuck Norris
const fetchChuck = async () => {
   try {
      const response = await fetch(API_URL_Chuck);
      const myChuck = await response.json();
      // console.log(myChuck.value);
      Paragraph.textContent = myChuck.value;
   } catch (error) {
      console.log(error)
   }
}

const nowWeather = (icon:string,temp:string) => {
   const icono:string = icon;
   const urlIcon = `http://openweathermap.org/img/wn/${icono}@2x.png`;
   imgNew.src = urlIcon;
   hTemp.textContent = temp;
}