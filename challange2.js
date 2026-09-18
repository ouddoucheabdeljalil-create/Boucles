const prompt = require('prompt-sync')();
let num = Number(prompt("saisissez le numero :"));

let factorielle  = 1;
let i ;
for(i= 1 ; i <= num ; i++){
    factorielle  = factorielle  * i ;
}
console.log(`${num}! = ${factorielle}`);