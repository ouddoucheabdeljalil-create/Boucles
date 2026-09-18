const prompt = require('prompt-sync')();
let num = Number(prompt("enter le numero :"));
let x = 0 ;;
while ( num != 0){
    x = x *10 + (num % 10) ;
    num = Math.floor(num / 10);

}
console.log(x );
