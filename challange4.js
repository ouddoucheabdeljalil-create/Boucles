const prompt = require('prompt-sync')();
let num = Number(prompt("enter le numero "));
let x = -1;
for(i = 1 ; i <= num ; i++){
    x = x +2 ;
    console.log(x)
}