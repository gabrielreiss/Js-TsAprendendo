let umaString = "Um texto";

console.log(umaString[4]);
console.log(umaString.charAt(4));
console.log(umaString.concat(' em', ' dia de estudo'));
console.log(`${umaString} em um dia de estudos`);
console.log(umaString.indexOf("texto"));
console.log(umaString.lastIndexOf("texto"));

//expressoes regulares
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/[a-z]/g));

console.log(umaString.replace(/Um/, 'Outra'));
console.log(umaString);

console.log(umaString.length);
console.log(umaString.slice(3, 8));
console.log(umaString.slice(-5));
console.log(umaString.split(' '));

console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());