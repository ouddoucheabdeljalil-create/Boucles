const prompt = require('prompt-sync')();

let number = Number(prompt("saisissez le numero :"));
console.log("Table de Multiplication de number",number);
for(i = 1 ; i <= 10 ; i++){
    console.log(`${i} x ${number} = ${i * number}`);
}