const button = document.querySelector(".New-joke");
const jokeText = document.querySelector(".joke-content");

button.addEventListener("click", getJoke);
document.addEventListener("readystatechange", function (event) {
    if (event.target.readyState === "interactive") getJoke();
});
async function getJoke() {
    const jokeData = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        },
    });
    const jokeObj = await jokeData.json();
    jokeText.innerHTML = jokeObj.joke;
}
