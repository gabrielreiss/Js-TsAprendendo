let numero = Number(prompt("Digite um número: "));

const numeroTitulo = window.document.getElementById("numero-titulo");

const texto = window.document.getElementById("texto");

numeroTitulo.innerHTML = numero;

texto.innerHTML = `<p>Raiz quadrada ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `<p>${numero} é inteiro ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NAN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;