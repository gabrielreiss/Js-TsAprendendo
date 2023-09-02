let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

let temp = varA;
varA = varB;
varB = varC;
varC = temp;

console.log(varA, varB, varC);


//outra forma de fazer
varA = 'A'; //B
varB = 'B'; //C
varC = 'C'; //A

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);