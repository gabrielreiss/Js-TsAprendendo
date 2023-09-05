const alunos = ['Luiz', 'Maria', 'João'];

alunos[0] = 'Eduardo';
alunos[alunos.length] = 'Luiza';
alunos.push("Fábio"); //adiciona no final
alunos.unshift("Jatoba"); //adiciona no começo

const removido = alunos.pop(); //remove no final
const removido1 = alunos.shift(); // remove no começo

console.log(alunos);
console.log(alunos.length);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
console.log(removido);
console.log(removido1);

console.log(alunos.slice(0, -2));

console.log(typeof alunos);
console.log(alunos instanceof Array);