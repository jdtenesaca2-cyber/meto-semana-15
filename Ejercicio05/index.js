'use strict'; 

//ejercicio 5

let nums = [3, 5, 6, 7, 3, 5, 6, 7];
let contador = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
        contador++;
    }
}

alert("Cantidad de números impares:", contador);
