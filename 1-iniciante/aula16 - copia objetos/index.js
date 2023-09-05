const a = {
    nome: "Gabriel",
    sobrenome: "Reiss"
};

const b = {...a};

a.nome = "João";
console.log(a);
console.log(b);