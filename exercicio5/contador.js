let span = document.getElementById("span");
const subtrair = document.getElementById("subtrair");
const adicionar = document.getElementById("adicionar");
const zerar = document.getElementById("zerar");

span.textContent = 0;

adicionar.addEventListener("click", () => {
    span.textContent = Number(span.textContent) + 1;
});

subtrair.addEventListener("click", () => {
    span.textContent = Number(span.textContent) - 1;
});

zerar.addEventListener("click", () => {
    span.textContent = 0;
});