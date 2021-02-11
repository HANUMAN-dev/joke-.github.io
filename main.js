const synth = window.speechSynthesis;
const button = document.querySelector(".New-joke");
const jokeText = document.querySelector(".joke-content");
const speakJokes = document.querySelector(".Speak");
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
function speakJoke() {
    speakJokes.addEventListener("click", function () {
        const utterThis = new SpeechSynthesisUtterance(jokeText.textContent);
        utterThis.pitch = 1;
        utterThis.rate = 1;
        utterThis.voice = synth.getVoices()[1];
        synth.speak(utterThis);
    });
}
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = speakJoke;
}
