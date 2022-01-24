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
document.addEventListener("DOMContentLoaded", fetchDadJoke, false);
const API_URL = "https://icanhazdadjoke.com";
const Paragraph = document.querySelector("#p-joke");
const Button = document.getElementById("btn-new-joke");
// reportJokes
function fetchDadJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(API_URL, {
            headers: {
                Accept: "application/json",
            },
        });
        const myjoke = yield response.json();
        Paragraph.textContent = myjoke.joke;
    });
}
function listArray() {
    let reportJokes = {};
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
//# sourceMappingURL=app.js.map