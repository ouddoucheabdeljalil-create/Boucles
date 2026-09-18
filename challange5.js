const prompt = require('prompt-sync')();
let base = Number(prompt("enter le base :"));
let exposant = Number(prompt("enter le exposant :"));
let x = 0 ;
for (i = 1 ; i <= exposant ; i++){
    x += base ;
    
}
console.log(`${base} ^ ${exposant} = ${x}`) ;