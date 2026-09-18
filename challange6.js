const prompt = require('prompt-sync')();
let num = Number(prompt("enter le numero "));
let x = 0;
for(i = 1 ; i <= num ; i++){
    x +=2 ;
    console.log(x)
}