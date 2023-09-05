function saudacao(nome) {
    return `Bom dia, ${nome}!`;
}

const variavel = saudacao("Luiz");
console.log(variavel);
//saudacao("Maria");
//saudacao("Felipe");

function soma(x=1, y=1){
    const resultado = x + y;
    return resultado;
}

let teste = soma(2, 3);
console.log(teste);

//funcao anonima e arrow function
const raiz = n => n ** 0.5;