const menu = ["Home", "Sobre", "Contato"]

const nav = document.createElement("nav");

menu.forEach(opcao => {
    const link = document.createElement("a");
    link.href = `#${opcao.toLocaleLowerCase()}`;
    link.textContent = opcao;
    nav.appendChild(link);
});

document.body.appendChild(nav);