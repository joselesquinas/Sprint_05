// const jokeButton = document.querySelector(".bt-get-joke");
// const jokeHolder = document.querySelector('.p-joke');

// async await para web https://icanhazdadjoke.com

const obtenerJoke = async () => {
   try {
      const response = await fetch("https://icanhazdadjoke.com", {
         headers: {
            Accept: "application/json",
         },
      });
      const joke = await response.json()
      console.log(joke.joke);
   } catch (error) {
      console.log(error)
   }

}
obtenerJoke()


// async await para web https://api.chucknorris.io/jokes/random
const obtenerchuck = async () => {
   try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const norris = await response.json()
      console.log(norris.value);
   } catch (error) {
      console.log(error)
   }

}

obtenerchuck()