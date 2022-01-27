"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener("DOMContentLoaded", () => {
    fetchWeather();
    randomJoke();
});
const API_URL = "https://icanhazdadjoke.com";
const API_URL_Weather = "https://api.openweathermap.org/data/2.5/weather?id=3128760&units=metric&appid=d0c9eed8a6b4ce413240d5610426a898";
const API_URL_Chuck = "https://api.chucknorris.io/jokes/random";
const Paragraph = document.querySelector("#p-joke");
const btnNew = document.getElementById("btn-new-joke");
const btnPoc = document.getElementById("btn-poc");
const btnRegular = document.getElementById("btn-regular");
const btnMolt = document.getElementById("btn-molt");
const pWeather = document.querySelector("#p-weather");
let newScore = 0;
// API Rest Jokes
const fetchDadJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(API_URL, {
            headers: { Accept: "application/json" },
        });
        const myjoke = yield response.json();
        // console.log(myjoke);
        Paragraph.textContent = `${myjoke.joke}`;
    }
    catch (error) {
        console.log(error);
    }
});
const jokesReports = [];
const listArray = () => {
    const reportJokes = {
        joke: Paragraph.innerText,
        score: newScore,
        date: new Date().toISOString()
    };
    jokesReports.push(reportJokes);
    newScore = 0;
    console.log(reportJokes);
    console.log(jokesReports);
};
const randomJoke = () => {
    const numRandom = Math.floor(1 + Math.random() * 100);
    if (numRandom % 2 == 0) {
        fetchDadJoke();
    }
    else {
        fetchChuck();
    }
};
btnPoc.addEventListener("click", () => { newScore = parseInt(btnPoc.value); });
btnRegular.addEventListener("click", () => { newScore = parseInt(btnRegular.value); });
btnMolt.addEventListener("click", () => { newScore = parseInt(btnMolt.value); });
btnNew.addEventListener("click", () => {
    if (newScore !== 0) {
        listArray();
    }
    randomJoke();
});
// API Rest del Temps
const fetchWeather = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(API_URL_Weather);
        const myClimatic = yield response.json();
        // console.log(myClimatic);
        console.log(myClimatic.name, myClimatic.weather[0].icon, myClimatic.main.temp);
        nowWeather(myClimatic.weather[0].icon, myClimatic.main.temp);
    }
    catch (error) {
        console.log(error);
    }
});
// API Rest del Chuck Norris
const fetchChuck = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(API_URL_Chuck);
        const myChuck = yield response.json();
        // console.log(myChuck.value);
        Paragraph.textContent = myChuck.value;
    }
    catch (error) {
        console.log(error);
    }
});
const imgNew = document.getElementById("icon");
const hTemp = document.getElementById("h-Climatic");
const nowWeather = (icon, temp) => {
    const icono = icon;
    const urlIcon = `http://openweathermap.org/img/wn/${icono}@2x.png`;
    imgNew.src = urlIcon;
    hTemp.textContent = temp;
};
//# sourceMappingURL=app.js.map