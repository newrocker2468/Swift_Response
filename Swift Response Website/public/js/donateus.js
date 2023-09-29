const buttons = document.querySelectorAll(".b1,.b2,.b3");
let input = document.querySelector("input");

buttons.forEach(button => {
    button.addEventListener("click", buttonClick, false);
});

function buttonClick(event) {
    input.value = "";
    dollar_sign = event.target.innerText.slice(0, 1);
    input.value = event.target.innerText.slice(1);
}