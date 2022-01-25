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
document.addEventListener("DOMContentLoaded", () => { fetchDadJoke(); });
const API_URL = "https://icanhazdadjoke.com";
const Paragraph = document.querySelector("#p-joke");
const btnNew = document.getElementById("btn-new-joke");
const btnPoc = document.getElementById("btn-poc");
const btnRegular = document.getElementById("btn-regular");
const btnMolt = document.getElementById("btn-molt");
// API Rest
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
    fetchDadJoke();
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
//# sourceMappingURL=app.js.map