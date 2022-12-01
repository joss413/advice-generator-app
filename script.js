
let id = document.querySelector('.id span')
let adviceText = document.querySelector('.text .advice')


let url = "https://api.adviceslip.com/advice";

const diceBtn = document.querySelector(".dice");

const diceId = document.getElementById("dice");

diceBtn.addEventListener("click", (e) => {
  fetch(url)
    .then((response) => response.json())
    .then((result) => (
        id.innerText = result.slip.id,
        adviceText.innerText = `" ${result.slip.advice} "`
    ));
});

const diceFunction = () => {};
