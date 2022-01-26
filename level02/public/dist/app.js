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
    randomJoke();
    fetchWeather();
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
// API Rest Jokes
const fetchDadJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(API_URL, {
            headers: { Accept: "application/json" },
        });
        const myjoke = yield response.json();
        // console.log(myjoke);
        Paragraph.textContent = `" ${myjoke.joke} "`;
    }
    catch (error) {
        console.log(error);
    }
});
// score
let newScore = 2;
btnPoc.addEventListener("click", () => { newScore = parseInt(btnPoc.value); });
btnRegular.addEventListener("click", () => { newScore = parseInt(btnRegular.value); });
btnMolt.addEventListener("click", () => { newScore = parseInt(btnMolt.value); });
btnNew.addEventListener("click", () => {
    listArray();
    randomJoke();
});
//ejercicio 3 =================================================
const jokesReports = [];
const listArray = () => {
    const reportJokes = {
        joke: Paragraph.innerText,
        score: newScore,
        date: new Date().toISOString()
    };
    jokesReports.push(reportJokes);
    newScore = 2;
    console.log(reportJokes);
    console.log(jokesReports);
};
// ejer. 4  API Weather ========================================
// API Rest del Temps
const fetchWeather = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(API_URL_Weather);
        const myClimatic = yield response.json();
        console.log(myClimatic.weather);
        // pWeather.textContent = ;
    }
    catch (error) {
        console.log(error);
    }
});
// ejer. 5 =====================================================
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
// Joke Random Math.floor(1+ Math.random() * 100);
const randomJoke = () => {
    const numRandom = Math.floor(1 + Math.random() * 100);
    if (numRandom % 2 == 0) {
        fetchDadJoke();
    }
    else {
        fetchChuck();
    }
};
//# sourceMappingURL=app.js.map