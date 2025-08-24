let a = 0.1;
let b = 0.2;
let sum = (+a.toFixed(1)) + (+b.toFixed(1)); // 0.1 + 0.2 = 0.3 
alert(+sum.toFixed(1));

let str1 = "1";
let c = 2;
let result = Number(str1) + c; // 1 + 2 = 3
alert(+result); // 3

let flash = prompt("Enter the number of flash drives you want to buy:", ""); 
let filesize = 820;
let files = flash / filesize; // "Flash" + 820 = "Flash820"
alert(files); // "Flash820"



