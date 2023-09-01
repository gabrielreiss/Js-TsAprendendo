const nome = "Gabriel";
const sobrenome = "Reiss";
let idade = 30;
let peso = 84;
const altura = 1.8;
let imc;
let anoNascimento;

imc = peso / (altura**2);

const date = new Date();
const today = date.getDate();
const currentYear = date.getFullYear();

anoNascimento = currentYear - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${altura} e seu IMC é de ${Math.round(imc)} e nasceu em ${anoNascimento}.`)

