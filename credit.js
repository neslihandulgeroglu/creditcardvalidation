var http= require('http')
var express=require('express')
var app=express();



function isValidCardNumber(cardNumber) {
    let sum = 0;
    let alternate = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let n = parseInt(cardNumber.substring(i, i + 1));
        if (alternate) {
            n *= 2;
            if (n > 9) {
                n = (n % 10) + 1;
            }
        }
        sum += n;
        alternate = !alternate;
    }
    return sum % 10 == 0;
}


const cardNumber = process.argv[2];
console.log(isValidCardNumber(cardNumber));
