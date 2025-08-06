const button =  document.getElementById("button");
const input = document.getElementById("input");
const span = document.getElementById("span");

button.addEventListener("click", () => {
    span.innerHTML += `
    <p>${input.value}</p>)`;
});
