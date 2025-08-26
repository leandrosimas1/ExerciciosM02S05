const menu = document.getElementById("menu");
const button = document.getElementById("dropdownButton");

button.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", () => {
    menu.style.display = "none";
});