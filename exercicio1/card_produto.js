const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
];

const section = document.getElementById("produtos");

produtos.forEach((element) => {
    section.innerHTML += `
        <div class="card">
            <h3>${element.nome}</h3>
            <p>${element.preco}</p>
        </div>
    `;
});