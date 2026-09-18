const prompt = require('prompt-sync')();
let number= Number(prompt("entre un numéro : "));

let sum = 0;

for (let i = 0 ; i <= number ; i++){
    sum = sum + i ;

}
console.log(`la somme = ${sum}`);