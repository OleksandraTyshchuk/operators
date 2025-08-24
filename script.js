let a = 0.1;
let b = 0.2;
let sum = (+a.toFixed(1)) + (+b.toFixed(1)); // 0.1 + 0.2 = 0.3 
alert(+sum.toFixed(1));

let str1 = "1";
let c = 2;
let result = Number(str1) + c; // 1 + 2 = 3
alert(+result); // 3

let flash = prompt("Enter the size of the flash drive in GB", ""); 
let filesize = 820;
let files = flash / filesize; // "Flash" + 820 = "Flash820"
alert(files); // "Flash820"

let dollars = prompt("Enter the amount of money you have:", "");
let price = prompt("Enter the price of one chocolate bar:", "");    
let chocolates = Math.floor(dollars / price); // number of chocolates
alert(chocolates); // number of chocolatesk,kkn
let change = dollars % price; // remaining change
alert(change); // remaining change

let number = prompt("Enter a three-digit number:", "");
let hundreds = Math.floor(number / 100); // hundreds place  
let tens = Math.floor((number % 100) / 10); // tens place
let units = number % 10; // units place
let reversedNumber = (units * 100) + (tens * 10) + hundreds; // reversed number
alert(reversedNumber); // reversed number
alert(String(reversedNumber).padStart(3, '0')); // reversed number with leading zeros if necessary


