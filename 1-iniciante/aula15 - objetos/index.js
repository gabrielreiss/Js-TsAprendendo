function pessoa (nome, sobrenome, idade){
    return {
        nome:nome,
        sobrenome:sobrenome,
        idade:idade
    };
}

//outra forma de fazer
function pessoa (nome, sobrenome, idade){
    return {nome,sobrenome,idade};
}

const pessoa1 = pessoa("Moabe", "Hosana", 28);
const pessoa2 = pessoa("Maria", "Carmen", 28);
const pessoa3 = pessoa("Fabiana", "Monteiro", 28);
const pessoa4 = pessoa("Jatoba", "Silva", 28);
const pessoa5 = pessoa("Josué", "Souza", 28);
