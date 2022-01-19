"use strict";
// const jokeButton = document.querySelector(".bt-get-joke");
// const jokeHolder = document.querySelector('.p-joke');
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// async await para web https://icanhazdadjoke.com
const obtenerJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch("https://icanhazdadjoke.com", {
            headers: {
                Accept: "application/json",
            },
        });
        const joke = yield response.json();
        console.log(joke.joke);
    }
    catch (error) {
        console.log(error);
    }
});
obtenerJoke();
// async await para web https://api.chucknorris.io/jokes/random
const obtenerchuck = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch("https://api.chucknorris.io/jokes/random");
        const norris = yield response.json();
        console.log(norris.value);
    }
    catch (error) {
        console.log(error);
    }
});
obtenerchuck();
//# sourceMappingURL=app.js.map