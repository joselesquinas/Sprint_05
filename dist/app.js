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
function fetchJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://icanhazdadjoke.com");
        console.log(response);

    });
}
fetchJoke();
//# sourceMappingURL=app.js.map